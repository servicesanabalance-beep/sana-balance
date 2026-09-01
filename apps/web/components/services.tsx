'use client'

import { useTranslations } from '@/lib/i18n'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@sana-balance/ui'
import { useServices } from '@/hooks/use-services'

const services = [
  {
    key: 'classic',
    namePrefix: 'klassische massage',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'wellness',
    namePrefix: 'wellnessmassage',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'dorn',
    namePrefix: 'dorn',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'sport',
    namePrefix: 'sportmassage',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
  },
]

function priceLinesFor(dbServices: { name_de: string; duration_minutes: number; price_eur: number }[], namePrefix: string) {
  const matches = dbServices
    .filter((s) => s.name_de.trim().toLowerCase().startsWith(namePrefix))
    .sort((a, b) => a.duration_minutes - b.duration_minutes)

  if (matches.length === 0) return null

  return matches.map((s) => `${s.duration_minutes} Min. – ${s.price_eur} CHF`)
}

export function Services() {
  const t = useTranslations('services')
  const { data: dbServices } = useServices()

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-[#6B5744] mb-4">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-[#C9A87C] rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="space-y-20 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const priceLines = priceLinesFor(dbServices ?? [], service.namePrefix)

            return (
              <div
                key={service.key}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <Reveal from={index % 2 === 0 ? 'left' : 'right'} className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8DDD3] shadow-xl group">
                    <Image
                      src={service.image}
                      alt={t(`${service.key}.name`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {priceLines && (
                      <div className="absolute bottom-4 right-4 rounded-3xl bg-white/95 backdrop-blur-sm shadow-xl px-5 py-3 text-right">
                        {priceLines.map((line) => (
                          <p key={line} className="text-[#6B5744] text-sm md:text-base font-semibold leading-snug whitespace-nowrap">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal from={index % 2 === 0 ? 'right' : 'left'} delay={120} className={`${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#6B5744] mb-6">
                    {t(`${service.key}.name`)}
                  </h3>
                  <p className="text-[#8B7355] text-lg leading-relaxed">
                    {t(`${service.key}.description`)}
                  </p>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
