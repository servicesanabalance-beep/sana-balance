'use client'

import { useTranslations } from '@/lib/i18n'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@sana-balance/ui'

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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8DDD3] shadow-xl">
                  <Image
                    src={service.image}
                    alt={t(`${service.key}.name`)}
                    fill
                    className="object-cover"
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
