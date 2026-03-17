'use client'

import { useTranslations } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@sana-balance/ui'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
          alt="Massage therapy background"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sana-cream/80 via-sana-cream/70 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-sana-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-sana-brown rounded-full blur-3xl" />
      </div>

      <div className="container-sana relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <div className="w-16 h-1 bg-sana-gold rounded-full" />
          </div>
          
          <h1 className="heading-hero mb-6">
            {t('title')}
          </h1>
          
          <p className="text-2xl md:text-2xl text-sana-black md:text-sana-brown mb-4 font-serif italic font-semibold md:font-normal">
            {t('subtitle')}
          </p>
          
          <p className="text-lg md:text-lg text-sana-brown-dark md:text-sana-brown mb-8 max-w-2xl leading-relaxed">
            {t('description')}
          </p>

          <Button asChild size="lg">
            <Link href="/booking">{t('cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
