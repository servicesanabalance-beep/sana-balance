'use client'

import { useState } from 'react'
import { ServiceCard } from '@sana-balance/ui'

const mockServices = [
  {
    id: '1',
    title: 'Klassische Massage',
    description: 'Die klassische Massage ist eine bewährte Technik zur Linderung von Muskelverspannungen.',
    duration: 60,
    price: 120,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Wellnessmassage',
    description: 'Die Wellnessmassage schenkt tiefe Entspannung für Körper und Geist.',
    duration: 90,
    price: 150,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Dorn & Breuss Methode',
    description: 'Die Dorn & Breuss Massage lindert Rückenschmerzen und Nackenverspannungen.',
    duration: 75,
    price: 140,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Sportmassage',
    description: 'Wenn Sie sportlich aktiv sind, ist eine Sportmassage ideal für Sie.',
    duration: 60,
    price: 130,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  },
]

interface ServiceSelectionProps {
  onSelect: (service: any) => void
}

export function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSelect = (service: any) => {
    setSelectedId(service.id)
    setTimeout(() => onSelect(service), 300)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-serif font-semibold text-sana-brown-dark mb-2">
          Wählen Sie Ihre Massage
        </h2>
        <p className="text-sana-brown">
          Klicken Sie auf eine Massage, um fortzufahren
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            duration={service.duration}
            price={service.price}
            image={service.image}
            selected={selectedId === service.id}
            onClick={() => handleSelect(service)}
          />
        ))}
      </div>
    </div>
  )
}
