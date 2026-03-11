'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button } from '@sana-balance/ui'
import { Search, Filter, Calendar } from 'lucide-react'
import { BackButton } from '@/components/back-button'

export default function AppointmentsPage() {
  const [filter, setFilter] = useState('all')

  // Mock data - replace with Supabase queries
  const appointments = [
    {
      id: 1,
      date: '2024-03-15',
      time: '10:00',
      client: 'Maria Schmidt',
      email: 'maria@example.com',
      service: 'Klassische Massage',
      duration: 60,
      price: 120,
      status: 'confirmed',
    },
    {
      id: 2,
      date: '2024-03-15',
      time: '14:00',
      client: 'Hans Müller',
      email: 'hans@example.com',
      service: 'Wellnessmassage',
      duration: 90,
      price: 150,
      status: 'pending',
    },
    {
      id: 3,
      date: '2024-03-16',
      time: '09:00',
      client: 'Anna Weber',
      email: 'anna@example.com',
      service: 'Sportmassage',
      duration: 60,
      price: 130,
      status: 'confirmed',
    },
  ]

  const filteredAppointments = appointments.filter((apt) => {
    if (filter === 'all') return true
    return apt.status === filter
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
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 px-4 text-gray-800 dark:text-gray-100">{apt.date}</td>
                      <td className="py-3 px-4 text-gray-800 dark:text-gray-100">{apt.time}</td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-100">{apt.client}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{apt.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-gray-800 dark:text-gray-100">{apt.service}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{apt.duration} Min</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-100">
                        {apt.price} CHF
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            apt.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {apt.status === 'confirmed' ? 'Bestätigt' : 'Ausstehend'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-2">
                          <button className="text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 text-sm min-w-[90px] truncate">
                            Bearbeiten
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm min-w-[70px] truncate">
                            Löschen
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
