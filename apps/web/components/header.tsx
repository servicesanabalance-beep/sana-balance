'use client'

import { useTranslations } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@sana-balance/ui'
import { useState, useEffect, useRef } from 'react'

export function Header() {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sana-white/95 backdrop-blur-sm border-b border-sana-beige">
      <div className="container-sana" ref={menuRef}>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/sana_logo.svg" 
              alt="SanaBalance Logo" 
              width={180} 
              height={54}
              className="h-8 md:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              {t('aboutUs')}
            </Link>
            <Link href="/#services" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              {t('services')}
            </Link>
            <Link href="/#contact" className="text-sana-brown hover:text-sana-brown-dark transition-colors">
              Kontakt
            </Link>
            <Button asChild>
              <Link href="/booking">{t('booking')}</Link>
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-sana-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sana-beige">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/#about" 
                className="text-sana-brown hover:text-sana-brown-dark transition-colors"
                onClick={closeMenu}
              >
                {t('aboutUs')}
              </Link>
              <Link 
                href="/#services" 
                className="text-sana-brown hover:text-sana-brown-dark transition-colors"
                onClick={closeMenu}
              >
                {t('services')}
              </Link>
              <Link 
                href="/#contact" 
                className="text-sana-brown hover:text-sana-brown-dark transition-colors"
                onClick={closeMenu}
              >
                Kontakt
              </Link>
              <Button asChild className="w-full" onClick={closeMenu}>
                <Link href="/booking">{t('booking')}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
