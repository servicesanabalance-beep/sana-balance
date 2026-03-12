'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Button, Calendar } from '@sana-balance/ui'
import { Plus, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { BackButton } from '@/components/back-button'

export default function AvailabilityPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data - replace with Supabase queries
  const slots = [
    { id: 1, time: '09:00', duration: 60, isBooked: false },
    { id: 2, time: '10:00', duration: 60, isBooked: true },
    { id: 3, time: '11:00', duration: 60, isBooked: false },
    { id: 4, time: '14:00', duration: 90, isBooked: false },
    { id: 5, time: '16:00', duration: 60, isBooked: true },
  ]

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
                <div className="space-y-3">
                  {slots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                        slot.isBooked
                          ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-100">{slot.time}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{slot.duration} Minuten</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            slot.isBooked
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {slot.isBooked ? 'Gebucht' : 'Verfügbar'}
                        </span>
                        {!slot.isBooked && (
                          <Button variant="outline" size="sm" className="min-w-[100px]">
                            <span className="truncate">Bearbeiten</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}

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
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Datum
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      defaultValue={format(selectedDate, 'yyyy-MM-dd')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Startzeit
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Endzeit
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Service (optional)
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                      <option value="">Alle Services</option>
                      <option value="1">Klassische Massage</option>
                      <option value="2">Wellnessmassage</option>
                      <option value="3">Dorn & Breuss</option>
                      <option value="4">Sportmassage</option>
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
