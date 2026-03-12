'use client'

import { useState, useEffect } from 'react'
import { Calendar, Button } from '@sana-balance/ui'
import { format, startOfDay, endOfDay } from 'date-fns'
import { de } from 'date-fns/locale'
import { Clock } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface TimeSlot {
  id: number
  start_time: string
  end_time: string
  is_booked: boolean
}

interface DateTimeSelectionProps {
  service: any
  onSelect: (date: Date, time: string, availabilityId: number) => void
  onBack: () => void
}

export function DateTimeSelection({ service, onSelect, onBack }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [selectedSlotId, setSelectedSlotId] = useState<number | undefined>()
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate)
    }
  }, [selectedDate])

  async function fetchAvailableSlots(date: Date) {
    setLoading(true)
    try {
      const dayStart = startOfDay(date).toISOString()
      const dayEnd = endOfDay(date).toISOString()

      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .gte('start_time', dayStart)
        .lte('start_time', dayEnd)
        .order('start_time')

      if (error) throw error
      setAvailableSlots(data || [])
    } catch (error) {
      console.error('Error fetching available slots:', error)
      setAvailableSlots([])
    } finally {
      setLoading(false)
    }
  }

  const handleContinue = () => {
    if (selectedDate && selectedTime && selectedSlotId) {
      onSelect(selectedDate, selectedTime, selectedSlotId)
    }
  }

  const handleTimeSelect = (slot: TimeSlot) => {
    if (!slot.is_booked) {
      const startTime = new Date(slot.start_time)
      setSelectedTime(format(startTime, 'HH:mm'))
      setSelectedSlotId(slot.id)
    }
  }

  const disabledDays = { before: new Date() }

  return (
    <div className="space-y-6">
      <div className="bg-sana-white rounded-sana p-6 shadow-sana">
        <h3 className="text-lg font-serif font-semibold text-sana-brown-dark mb-2">
          Gewählte Massage
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sana-brown-dark">{service.title}</p>
            <p className="text-sm text-sana-brown">{service.duration} Minuten</p>
          </div>
          <p className="text-xl font-serif font-semibold text-sana-brown-dark">
            {service.price} CHF
          </p>
        </div>
      </div>

      <div className="bg-sana-white rounded-sana p-6 shadow-sana">
        <h3 className="text-lg font-serif font-semibold text-sana-brown-dark mb-4">
          Wählen Sie ein Datum
        </h3>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={disabledDays}
            locale={de}
          />
        </div>
      </div>

      {selectedDate && (
        <div className="bg-sana-white rounded-sana p-6 shadow-sana">
          <h3 className="text-lg font-serif font-semibold text-sana-brown-dark mb-4">
            Verfügbare Zeiten für {format(selectedDate, 'dd. MMMM yyyy', { locale: de })}
          </h3>
          {loading ? (
            <div className="text-center py-8">
              <p className="text-sana-brown">Laden...</p>
            </div>
          ) : availableSlots.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sana-brown">Keine verfügbaren Zeiten für dieses Datum</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {availableSlots.map((slot) => {
                const startTime = new Date(slot.start_time)
                const endTime = new Date(slot.end_time)
                const timeStr = format(startTime, 'HH:mm')
                const isSelected = selectedSlotId === slot.id
                const isBooked = slot.is_booked

                return (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSelect(slot)}
                    disabled={isBooked}
                    className={`
                      flex items-center justify-center gap-2 rounded-lg border-2 p-3 transition-all
                      ${isBooked
                        ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                        : isSelected
                        ? 'border-sana-gold bg-sana-gold text-white'
                        : 'border-sana-beige bg-white text-sana-brown hover:border-sana-gold'
                      }
                    `}
                  >
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{timeStr}</span>
                    {isBooked && <span className="text-xs">Besetzt</span>}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Zurück
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
          className="flex-1"
        >
          Weiter
        </Button>
      </div>
    </div>
  )
}
