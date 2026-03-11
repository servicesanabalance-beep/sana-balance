'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('sana-balance-cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('sana-balance-cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('sana-balance-cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white border-2 border-[#E8DDD3] rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-serif font-bold text-[#6B5744] mb-3">
                Cookie-Einstellungen
              </h3>
              <p className="text-[#8B7355] leading-relaxed mb-4">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
                Cookies helfen uns, die Website-Leistung zu analysieren und Ihr Erlebnis zu verbessern. 
                Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
                <Link href="/datenschutz" className="text-[#8B7355] underline hover:text-[#6B5744]">
                  Datenschutzerklärung
                </Link>
                {' '}zu.
              </p>
              <p className="text-sm text-[#8B7355]/80">
                Diese Website entspricht den Schweizer Datenschutzbestimmungen (DSG) und der DSGVO.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-full border-2 border-[#E8DDD3] text-[#8B7355] hover:bg-[#F5F1ED] transition-colors font-medium whitespace-nowrap"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-full bg-[#8B7355] hover:bg-[#6B5744] text-white transition-colors font-medium shadow-lg whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-[#8B7355] hover:text-[#6B5744] transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
