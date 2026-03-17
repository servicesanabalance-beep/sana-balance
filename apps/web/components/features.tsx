'use client'

import { useTranslations } from '@/lib/i18n'
import { Sparkles, Heart, Leaf } from 'lucide-react'

const features = [
  {
    key: 'atmosphere',
    icon: Sparkles,
  },
  {
    key: 'professional',
    icon: Heart,
  },
  {
    key: 'holistic',
    icon: Leaf,
  },
]

export function Features() {
  const t = useTranslations('features')

  return (
    <section className="section-sana bg-sana-white">
      <div className="container-sana">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.key}
                className="text-center p-8 rounded-sana bg-sana-cream hover:shadow-sana transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sana-gold/20 mb-6">
                  <Icon className="w-8 h-8 text-sana-brown-dark" />
                </div>
                <h2 className="text-xl font-serif font-semibold text-sana-brown-dark mb-3">
                  {t(`${feature.key}.title`)}
                </h2>
                <p className="text-sana-brown">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
