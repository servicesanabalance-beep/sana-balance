'use client'

import Link from 'next/link'
import { Building2, Home, ArrowRight } from 'lucide-react'

export function AudienceCards() {
  const scrollToMobileMassage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('mobile-massage')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-sana-white py-12 md:py-16">
      <div className="container-sana">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/unternehmen"
            className="group flex items-center gap-6 p-8 rounded-sana bg-sana-cream hover:shadow-sana-lg transition-all duration-300 border border-transparent hover:border-sana-gold/40"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sana-gold/20 flex-shrink-0 group-hover:bg-sana-gold/30 transition-colors">
              <Building2 className="w-8 h-8 text-sana-brown-dark" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold tracking-[0.2em] text-sana-brown uppercase mb-1">
                Für Unternehmen
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-sana-brown-dark leading-snug">
                Gesundheit für Ihre Mitarbeitenden
              </h2>
              <p className="text-sana-brown text-sm mt-1">
                Massagen, Ergonomie & Prävention direkt im Betrieb
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-sana-brown-dark flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/#mobile-massage"
            onClick={scrollToMobileMassage}
            className="group flex items-center gap-6 p-8 rounded-sana bg-sana-cream hover:shadow-sana-lg transition-all duration-300 border border-transparent hover:border-sana-gold/40"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sana-gold/20 flex-shrink-0 group-hover:bg-sana-gold/30 transition-colors">
              <Home className="w-8 h-8 text-sana-brown-dark" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold tracking-[0.2em] text-sana-brown uppercase mb-1">
                Homeservice
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-sana-brown-dark leading-snug">
                Massage bei Ihnen zu Hause
              </h2>
              <p className="text-sana-brown text-sm mt-1">
                Volle Professionalität – ganz ohne Anfahrt
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-sana-brown-dark flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
