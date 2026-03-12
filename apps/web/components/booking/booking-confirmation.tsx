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
  availabilityId: number
  userId: string
  onBack: () => void
}

export function BookingConfirmation({ service, date, time, availabilityId, userId, onBack }: BookingConfirmationProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirm = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Create appointment in Supabase
      const { createClient } = await import('@/lib/supabase/client')
      const supabase = createClient()

      // Get user email
      const { data: { user } } = await supabase.auth.getUser()
      const clientEmail = user?.email || ''
      const clientName = user?.user_metadata?.name || user?.email || 'Kunde'

      // Create appointment with the selected availability slot
      const { error: appointmentError } = await supabase
        .from('appointments')
        .insert({
          client_id: userId,
          service_id: parseInt(service.id),
          availability_id: availabilityId,
          status: 'confirmed',
        })

      if (appointmentError) throw appointmentError

      // Mark the availability slot as booked
      const { error: updateError } = await supabase
        .from('availability')
        .update({ is_booked: true })
        .eq('id', availabilityId)

      if (updateError) throw updateError

      // Send booking emails
      try {
        console.log('📧 Calling email API...')
        const emailResponse = await fetch('/api/send-booking-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientEmail,
            clientName,
            serviceName: service.title,
            date: format(date, 'dd.MM.yyyy'),
            time,
            adminEmail: 'service.sanabalance@gmail.com',
          }),
        })
        
        const emailResult = await emailResponse.json()
        console.log('📧 Email API response:', emailResult)
        
        if (!emailResponse.ok) {
          console.error('❌ Email API failed:', emailResult)
        } else {
          console.log('✅ Emails sent successfully!')
        }
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError)
        // Don't fail the booking if email fails
      }

      setIsConfirmed(true)
    } catch (err: any) {
      setError(err.message || 'Fehler beim Erstellen des Termins')
    } finally {
      setIsLoading(false)
    }
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

      {error && (
        <div className="max-w-md mx-auto p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

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
