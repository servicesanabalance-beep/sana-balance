'use client'

import { useState } from 'react'
import { Calendar, Button } from '@sana-balance/ui'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { Clock } from 'lucide-react'

const mockTimeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00'
]

interface DateTimeSelectionProps {
  service: any
  onSelect: (date: Date, time: string) => void
  onBack: () => void
}

export function DateTimeSelection({ service, onSelect, onBack }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime)
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
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {mockTimeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  flex items-center justify-center gap-2 rounded-lg border-2 p-3 transition-all
                  ${selectedTime === time
                    ? 'border-sana-gold bg-sana-gold text-white'
                    : 'border-sana-beige bg-white text-sana-brown hover:border-sana-gold'
                  }
                `}
              >
                <Clock className="h-4 w-4" />
                <span className="font-medium">{time}</span>
              </button>
            ))}
          </div>
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
