'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@sana-balance/ui'
import { Search, Filter, Calendar } from 'lucide-react'
import { BackButton } from '@/components/back-button'
import { createClient } from '@/lib/supabase/client'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

interface Appointment {
  id: string
  created_at: string
  status: string
  notes: string | null
  client_id: string
  service_id: number
  availability_id: number
  profiles: {
    first_name: string
    last_name: string
    phone: string | null
  }
  services: {
    name_de: string
    duration_minutes: number
    price_eur: number
  }
  availability: {
    start_time: string
    end_time: string
  }
}

export default function AppointmentsPage() {
  const [filter, setFilter] = useState('all')
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [services, setServices] = useState<any[]>([])
  const [availableSlots, setAvailableSlots] = useState<any[]>([])
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    serviceId: '',
    availabilityId: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    notes: '',
  })

  const supabase = createClient()

  useEffect(() => {
    fetchAppointments()
    fetchServices()
  }, [])

  useEffect(() => {
    if (formData.date) {
      fetchAvailableSlots(formData.date)
    }
  }, [formData.date])

  async function fetchAppointments() {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          profiles:client_id (
            first_name,
            last_name,
            phone
          ),
          services:service_id (
            name_de,
            duration_minutes,
            price_eur
          ),
          availability:availability_id (
            start_time,
            end_time
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setAppointments(data || [])
    } catch (error) {
      console.error('Error fetching appointments:', error)
    } finally {
      setLoading(false)
    }
  }

  async function fetchServices() {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('name_de')

      if (error) throw error
      setServices(data || [])
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  async function fetchAvailableSlots(date: string) {
    try {
      const startOfDay = new Date(date)
      startOfDay.setHours(0, 0, 0, 0)
      const endOfDay = new Date(date)
      endOfDay.setHours(23, 59, 59, 999)

      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .gte('start_time', startOfDay.toISOString())
        .lte('start_time', endOfDay.toISOString())
        .eq('is_booked', false)
        .order('start_time')

      if (error) throw error
      setAvailableSlots(data || [])
    } catch (error) {
      console.error('Error fetching available slots:', error)
    }
  }

  async function handleCreateAppointment(e: React.FormEvent) {
    e.preventDefault()

    try {
      // For now, create a simple appointment without client authentication
      // In production, you'd want to create/find the client profile first
      const { error } = await supabase
        .from('appointments')
        .insert({
          service_id: parseInt(formData.serviceId),
          availability_id: parseInt(formData.availabilityId),
          status: 'confirmed',
          notes: formData.notes || null,
          // Note: client_id would need to be set properly with actual user management
        })

      if (error) throw error

      // Mark slot as booked
      await supabase
        .from('availability')
        .update({ is_booked: true })
        .eq('id', parseInt(formData.availabilityId))

      await fetchAppointments()
      setIsModalOpen(false)
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        serviceId: '',
        availabilityId: '',
        date: format(new Date(), 'yyyy-MM-dd'),
        notes: '',
      })
    } catch (error: any) {
      console.error('Error creating appointment:', error)
      alert(`Fehler beim Erstellen des Termins: ${error?.message || 'Unbekannter Fehler'}`)
    }
  }

  async function handleStatusChange(appointmentId: string, newStatus: string) {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', appointmentId)

      if (error) throw error
      
      // Refresh appointments
      await fetchAppointments()
    } catch (error) {
      console.error('Error updating appointment:', error)
      alert('Fehler beim Aktualisieren des Termins')
    }
  }

  async function handleDelete(appointmentId: string) {
    if (!confirm('Möchten Sie diesen Termin wirklich löschen?')) return

    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', appointmentId)

      if (error) throw error
      
      // Refresh appointments
      await fetchAppointments()
    } catch (error) {
      console.error('Error deleting appointment:', error)
      alert('Fehler beim Löschen des Termins')
    }
  }

  const filteredAppointments = appointments.filter((apt) => {
    const matchesFilter = filter === 'all' || apt.status === filter
    const matchesSearch = searchQuery === '' || 
      `${apt.profiles.first_name} ${apt.profiles.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.services.name_de.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/dashboard" />
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-amber-900 dark:text-amber-50 mb-2">
              Termine
            </h1>
            <p className="text-gray-700 dark:text-amber-100">Verwaltung aller Buchungen</p>
          </div>
          <Button>
            <Calendar className="h-4 w-4 mr-2" />
            Neuer Termin
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    placeholder="Suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'all'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Alle
                </button>
                <button
                  onClick={() => setFilter('confirmed')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'confirmed'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Bestätigt
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'pending'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  Ausstehend
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Terminliste ({filteredAppointments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Datum
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Zeit
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Klient
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Service
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Preis
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-gray-800 dark:text-gray-100 font-semibold">
                      Aktionen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-gray-500">
                        Laden...
                      </td>
                    </tr>
                  ) : filteredAppointments.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-gray-500">
                        Keine Termine gefunden
                      </td>
                    </tr>
                  ) : (
                    filteredAppointments.map((apt) => {
                      const startTime = new Date(apt.availability.start_time)
                      return (
                        <tr key={apt.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-100">
                            {format(startTime, 'dd.MM.yyyy', { locale: de })}
                          </td>
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-100">
                            {format(startTime, 'HH:mm', { locale: de })} Uhr
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-gray-800 dark:text-gray-100">
                                {apt.profiles.first_name} {apt.profiles.last_name}
                              </p>
                              {apt.profiles.phone && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">{apt.profiles.phone}</p>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="text-gray-800 dark:text-gray-100">{apt.services.name_de}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{apt.services.duration_minutes} Min</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-100">
                            {apt.services.price_eur} CHF
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                apt.status === 'confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : apt.status === 'cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {apt.status === 'confirmed' ? 'Bestätigt' : apt.status === 'cancelled' ? 'Storniert' : 'Ausstehend'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-2">
                              <button 
                                onClick={() => handleStatusChange(apt.id, apt.status === 'confirmed' ? 'cancelled' : 'confirmed')}
                                className="text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 text-sm min-w-[90px] truncate"
                              >
                                {apt.status === 'confirmed' ? 'Stornieren' : 'Bestätigen'}
                              </button>
                              <button 
                                onClick={() => handleDelete(apt.id)}
                                className="text-red-600 hover:text-red-800 text-sm min-w-[70px] truncate"
                              >
                                Löschen
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
