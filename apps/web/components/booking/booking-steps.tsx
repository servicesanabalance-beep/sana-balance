'use client'

import { Check } from 'lucide-react'
import { cn } from '@sana-balance/ui'

type Step = 'service' | 'datetime' | 'auth' | 'confirm'

interface BookingStepsProps {
  currentStep: Step
}

const steps = [
  { id: 'service', label: 'Service auswählen' },
  { id: 'datetime', label: 'Datum & Uhrzeit' },
  { id: 'auth', label: 'Anmelden' },
  { id: 'confirm', label: 'Bestätigen' },
]

export function BookingSteps({ currentStep }: BookingStepsProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep)

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex
        const isCurrent = step.id === currentStep

        return (
          <div key={step.id} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors',
                  isCompleted && 'border-sana-gold bg-sana-gold text-white',
                  isCurrent && 'border-sana-gold bg-white text-sana-gold',
                  !isCompleted && !isCurrent && 'border-sana-beige bg-white text-sana-brown'
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  'mt-2 text-sm font-medium',
                  isCurrent ? 'text-sana-brown-dark' : 'text-sana-brown'
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'mx-4 h-0.5 flex-1',
                  index < currentIndex ? 'bg-sana-gold' : 'bg-sana-beige'
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
