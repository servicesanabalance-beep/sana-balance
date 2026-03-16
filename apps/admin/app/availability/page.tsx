'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button, Calendar, Input } from '@sana-balance/ui'
import { Plus, Clock } from 'lucide-react'
import { format, startOfDay, endOfDay } from 'date-fns'
import { de } from 'date-fns/locale'
import { BackButton } from '@/components/back-button'
import { createClient } from '@/lib/supabase/client'

export default function AvailabilityPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [slots, setSlots] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedSlotId, setExpandedSlotId] = useState<number | null>(null)
  const [slotNotes, setSlotNotes] = useState<Record<number, string>>({})
  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '09:00',
    endTime: '10:00',
    serviceId: '',
  })

  const supabase = createClient()

  useEffect(() => {
    fetchServices()
    fetchSlots()
  }, [selectedDate])

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

  async function fetchSlots() {
    try {
      const dayStart = startOfDay(selectedDate).toISOString()
      const dayEnd = endOfDay(selectedDate).toISOString()

      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .gte('start_time', dayStart)
        .lte('start_time', dayEnd)
        .order('start_time')

      if (error) throw error
      setSlots(data || [])

      // Fetch notes for booked slots
      if (data && data.length > 0) {
        const bookedSlotIds = data.filter(slot => slot.is_booked).map(slot => slot.id)
        if (bookedSlotIds.length > 0) {
          const { data: appointments, error: apptError } = await supabase
            .from('appointments')
            .select('availability_id, notes')
            .in('availability_id', bookedSlotIds)

          if (!apptError && appointments) {
            const notesMap: Record<number, string> = {}
            appointments.forEach(appt => {
              if (appt.notes) {
                notesMap[appt.availability_id] = appt.notes
              }
            })
            setSlotNotes(notesMap)
          }
        }
      }
    } catch (error) {
      console.error('Error fetching slots:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const startDateTime = new Date(`${formData.date}T${formData.startTime}:00`)
      const endDateTime = new Date(`${formData.date}T${formData.endTime}:00`)

      const { error } = await supabase
        .from('availability')
        .insert({
          start_time: startDateTime.toISOString(),
          end_time: endDateTime.toISOString(),
          is_booked: false,
        })

      if (error) throw error

      await fetchSlots()
      setIsModalOpen(false)
      setFormData({
        date: format(selectedDate, 'yyyy-MM-dd'),
        startTime: '09:00',
        endTime: '10:00',
        serviceId: '',
      })
    } catch (error) {
      console.error('Error creating slot:', error)
      alert('Fehler beim Erstellen des Zeitslots')
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Möchten Sie diesen Zeitslot wirklich löschen?')) return

    try {
      const { error } = await supabase
        .from('availability')
        .delete()
        .eq('id', id)

      if (error) throw error
      await fetchSlots()
    } catch (error) {
      console.error('Error deleting slot:', error)
      alert('Fehler beim Löschen des Zeitslots')
    }
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton href="/dashboard" />
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-50 mb-2">
              Verfügbarkeit
            </h1>
            <p className="text-gray-700 dark:text-amber-100">Verwaltung Ihrer Zeitslots</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Zeitslot hinzufügen
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Calendar */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <Card>
              <CardHeader>
                <CardTitle>Datum auswählen</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center overflow-x-auto">
                <div className="min-w-[280px] max-w-sm w-full">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    locale={de}
                    className="rounded-md border border-gray-300 dark:border-gray-600 w-full"
                    classNames={{
                      day_selected: "bg-[#C9A87C] text-white hover:bg-[#C9A87C] hover:text-white focus:bg-[#C9A87C] focus:text-white rounded-full",
                      day_today: "bg-[#6B5744] text-white font-bold rounded-full",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Time Slots */}
          <div className="w-full lg:w-2/3 flex-1">
            <Card>
              <CardHeader>
                <CardTitle>
                  Zeitslots für {format(selectedDate, 'dd. MMMM yyyy', { locale: de })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">Laden...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {slots.map((slot) => {
                      const startTime = new Date(slot.start_time)
                      const endTime = new Date(slot.end_time)
                      const duration = Math.round((endTime.getTime() - startTime.getTime()) / 60000)
                      const hasNotes = slotNotes[slot.id]
                      const isExpanded = expandedSlotId === slot.id
                      
                      return (
                        <div key={slot.id} className="space-y-2">
                          <div
                            className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                              slot.is_booked
                                ? 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 opacity-60 cursor-pointer hover:opacity-80'
                                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                            } transition-all`}
                            onClick={() => hasNotes && setExpandedSlotId(isExpanded ? null : slot.id)}
                          >
                            <div className="flex items-center gap-4">
                              <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-100">
                                  {format(startTime, 'HH:mm')} - {format(endTime, 'HH:mm')}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {duration} Minuten
                                  {hasNotes && <span className="ml-2 text-amber-600">📝</span>}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  slot.is_booked
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                                    : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                }`}
                              >
                                {slot.is_booked ? 'Gebucht' : 'Verfügbar'}
                              </span>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDelete(slot.id)
                              }}
                              className="min-w-[100px] text-red-600 hover:text-red-800"
                            >
                              Löschen
                            </Button>
                          </div>
                        </div>
                        
                        {/* Expandable Notes Section */}
                        {isExpanded && hasNotes && (
                          <div className="ml-9 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
                            <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
                              Notizen:
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                              {slotNotes[slot.id]}
                            </p>
                          </div>
                        )}
                      </div>
                      )
                    })}

                    {slots.length === 0 && (
                      <div className="text-center py-12">
                        <Clock className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto mb-4 opacity-50" />
                        <p className="text-gray-600 dark:text-gray-400">
                          Keine Zeitslots für dieses Datum vorhanden
                        </p>
                        <Button className="mt-4" onClick={() => setIsModalOpen(true)}>
                          Ersten Slot erstellen
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Bulk Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Schnellaktionen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline">
                    Woche kopieren
                  </Button>
                  <Button variant="outline">
                    Standardzeiten anwenden
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add Slot Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#6B5744] to-[#8B7355] text-white">
                <CardTitle className="text-white">Neuer Zeitslot</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Datum
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Startzeit
                      </label>
                      <input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Endzeit
                      </label>
                      <input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Service (optional)
                    </label>
                    <select 
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value="">Alle Services</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name_de}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="px-6 py-2 bg-[#C9A87C] hover:bg-[#B8976B] text-white flex items-center justify-center gap-2">
                      Erstellen
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="px-6 py-2 flex items-center justify-center gap-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
