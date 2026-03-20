'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'
import { BookingSteps } from '@/components/booking/booking-steps'
import { ServiceSelection } from '@/components/booking/service-selection'
import { DateTimeSelection } from '@/components/booking/datetime-selection'
import { AuthForm } from '@/components/booking/auth-form'
import { BookingConfirmation } from '@/components/booking/booking-confirmation'

type BookingStep = 'service' | 'datetime' | 'auth' | 'confirm'

export default function BookingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<BookingStep>('service')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [selectedAvailabilityId, setSelectedAvailabilityId] = useState<number | undefined>()
  const [userId, setUserId] = useState<string | null>(null)

  const handleServiceSelect = (service: any) => {
    setSelectedService(service)
    setCurrentStep('datetime')
  }

  const handleDateTimeSelect = (date: Date, time: string, availabilityId: number) => {
    setSelectedDate(date)
    setSelectedTime(time)
    setSelectedAvailabilityId(availabilityId)
    
    if (userId) {
      setCurrentStep('confirm')
    } else {
      setCurrentStep('auth')
    }
  }

  const handleAuthSuccess = (authenticatedUserId: string) => {
    setUserId(authenticatedUserId)
    setCurrentStep('confirm')
  }

  const handleBack = () => {
    if (currentStep === 'service') {
      router.push('/')
    } else if (currentStep === 'datetime') {
      setCurrentStep('service')
    } else if (currentStep === 'auth') {
      setCurrentStep('datetime')
    } else if (currentStep === 'confirm') {
      setCurrentStep('datetime')
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-sana-cream pt-24 pb-12">
        <div className="container-sana">
          <div className="mb-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sana-brown hover:text-sana-brown-dark transition-colors mb-4 lg:mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Zurück</span>
            </button>
            <h1 className="heading-section mb-4">Termin buchen</h1>
            <BookingSteps currentStep={currentStep} />
          </div>

          <div className="mx-auto max-w-4xl">
            {currentStep === 'service' && (
              <ServiceSelection onSelect={handleServiceSelect} />
            )}

            {currentStep === 'datetime' && selectedService && (
              <DateTimeSelection
                service={selectedService}
                onSelect={handleDateTimeSelect}
                onBack={handleBack}
              />
            )}

            {currentStep === 'auth' && (
              <AuthForm
                onSuccess={handleAuthSuccess}
                onBack={handleBack}
              />
            )}

            {currentStep === 'confirm' && selectedService && selectedDate && selectedTime && selectedAvailabilityId && userId && (
              <BookingConfirmation
                service={selectedService}
                date={selectedDate}
                time={selectedTime}
                availabilityId={selectedAvailabilityId}
                userId={userId}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
