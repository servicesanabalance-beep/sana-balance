'use client'

import { useTranslations } from '@/lib/i18n'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@sana-balance/ui'
import { useEffect, useRef, useState } from 'react'

const services = [
  { 
    key: 'classic',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    key: 'wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    key: 'dorn',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    key: 'sport',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
  },
]

export function Services() {
  const t = useTranslations('services')
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-[#6B5744] mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-1 bg-[#C9A87C] rounded-full mx-auto" />
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.key} 
              ref={(el) => { itemRefs.current[index] = el }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                <div 
                  className={`relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8DDD3] shadow-xl transition-all duration-1000 ease-out ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : index % 2 === 0
                      ? 'opacity-0 -translate-x-20'
                      : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.name`)}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#6B5744] mb-6">
                  {t(`${service.key}.name`)}
                </h3>
                <p className="text-[#8B7355] text-lg leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
