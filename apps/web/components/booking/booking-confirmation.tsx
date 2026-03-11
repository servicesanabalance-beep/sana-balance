'use client'

import { useState } from 'react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '@sana-balance/ui'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

interface BookingConfirmationProps {
  service: any
  date: Date
  time: string
  onBack: () => void
}

export function BookingConfirmation({ service, date, time, onBack }: BookingConfirmationProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    // TODO: Implement Supabase booking creation
    setTimeout(() => {
      setIsLoading(false)
      setIsConfirmed(true)
    }, 1000)
  }

  if (isConfirmed) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-[#C9A87C]/20 p-6">
            <CheckCircle className="h-16 w-16 text-[#8B7355]" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-serif font-semibold text-[#6B5744] mb-2">
            Termin bestätigt!
          </h2>
          <p className="text-lg text-[#8B7355]">
            Ihr Termin wurde erfolgreich gebucht.
          </p>
        </div>
        <Card className="max-w-md mx-auto bg-white border-2 border-[#E8DDD3] shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#6B5744]">Termindetails</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-[#8B7355] mb-1">Massage</p>
              <p className="font-semibold text-[#6B5744]">{service.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#8B7355]" />
              <p className="text-[#6B5744]">
                {format(date, 'EEEE, dd. MMMM yyyy', { locale: de })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#8B7355]" />
              <p className="text-[#6B5744]">{time} Uhr</p>
            </div>
            <div className="pt-4 border-t border-[#E8DDD3]">
              <div className="flex justify-between">
                <span className="text-[#8B7355]">Dauer</span>
                <span className="font-semibold text-[#6B5744]">{service.duration} Min</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[#8B7355]">Preis</span>
                <span className="font-semibold text-[#6B5744]">{service.price} CHF</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button asChild>
          <a href="/">Zurück zur Startseite</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-semibold text-[#6B5744] mb-2">
          Termin bestätigen
        </h2>
        <p className="text-[#8B7355]">
          Bitte überprüfen Sie Ihre Buchungsdetails
        </p>
      </div>

      <Card className="max-w-md mx-auto bg-white border-2 border-[#E8DDD3] shadow-xl">
        <CardHeader>
          <CardTitle className="text-[#6B5744]">Ihre Buchung</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-[#8B7355] mb-1">Massage</p>
            <p className="font-semibold text-[#6B5744]">{service.title}</p>
            <p className="text-sm text-[#8B7355] mt-1">{service.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#8B7355]" />
            <p className="text-[#6B5744]">
              {format(date, 'EEEE, dd. MMMM yyyy', { locale: de })}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#8B7355]" />
            <p className="text-[#6B5744]">{time} Uhr</p>
          </div>

          <div className="pt-4 border-t border-[#E8DDD3]">
            <div className="flex justify-between">
              <span className="text-[#8B7355]">Dauer</span>
              <span className="font-semibold text-[#6B5744]">{service.duration} Minuten</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[#8B7355]">Preis</span>
              <span className="text-xl font-serif font-semibold text-[#6B5744]">
                {service.price} CHF
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 max-w-md mx-auto">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Zurück
        </Button>
        <Button onClick={handleConfirm} disabled={isLoading} className="flex-1">
          {isLoading ? 'Wird gebucht...' : 'Jetzt buchen'}
        </Button>
      </div>
    </div>
  )
}
