'use client'

import { useState, useEffect } from 'react'
import { ServiceCard } from '@sana-balance/ui'
import { createClient } from '@/lib/supabase/client'

const defaultImages = [
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
]

interface ServiceSelectionProps {
  onSelect: (service: any) => void
}

export function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  
  const supabase = createClient()

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('id')

      if (error) throw error

      const servicesWithImages = (data || []).map((service, index) => ({
        id: service.id.toString(),
        title: service.name_de,
        description: service.description_de,
        duration: service.duration_minutes,
        price: service.price_eur,
        image: defaultImages[index % defaultImages.length],
      }))

      setServices(servicesWithImages)
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = (service: any) => {
    setSelectedId(service.id)
    setTimeout(() => onSelect(service), 300)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sana-brown">Laden...</p>
        </div>
      </div>
    )
  }

  if (services.length === 0) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sana-brown">Keine Services verfügbar</p>
        </div>
      </div>
    )
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
        {services.map((service) => (
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
