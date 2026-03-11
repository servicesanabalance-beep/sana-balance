'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { BookingSteps } from '@/components/booking/booking-steps'
import { ServiceSelection } from '@/components/booking/service-selection'
import { DateTimeSelection } from '@/components/booking/datetime-selection'
import { AuthForm } from '@/components/booking/auth-form'
import { BookingConfirmation } from '@/components/booking/booking-confirmation'

type BookingStep = 'service' | 'datetime' | 'auth' | 'confirm'

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleServiceSelect = (service: any) => {
    setSelectedService(service)
    setCurrentStep('datetime')
  }

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
    
    if (isAuthenticated) {
      setCurrentStep('confirm')
    } else {
      setCurrentStep('auth')
    }
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setCurrentStep('confirm')
  }

  const handleBack = () => {
    if (currentStep === 'datetime') {
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
      <main className="min-h-screen bg-sana-cream py-12">
        <div className="container-sana">
          <div className="mb-8">
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

            {currentStep === 'confirm' && selectedService && selectedDate && selectedTime && (
              <BookingConfirmation
                service={selectedService}
                date={selectedDate}
                time={selectedTime}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
