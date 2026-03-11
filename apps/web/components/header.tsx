'use client'

import { useTranslations } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@sana-balance/ui'
import { useState } from 'react'

export function Header() {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-sana-white/95 backdrop-blur-sm border-b border-sana-beige">
      <div className="container-sana">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.bige.png" 
              alt="Sana Balance Logo" 
              width={120} 
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              {t('aboutUs')}
            </Link>
            <Link href="#services" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              {t('services')}
            </Link>
            <Link href="#contact" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              Kontakt
            </Link>
            <Button asChild>
              <Link href="/booking">{t('booking')}</Link>
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-sana-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sana-beige">
            <nav className="flex flex-col gap-4">
              <Link href="#about" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
                {t('aboutUs')}
              </Link>
              <Link href="#services" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
                {t('services')}
              </Link>
              <Link href="#contact" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
                Kontakt
              </Link>
              <Button asChild className="w-full">
                <Link href="/booking">{t('booking')}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
