import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#6B5744] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Brand */}
          <div>
            <div className="mb-6">
              <Image 
                src="/sana_logo.svg" 
                alt="SanaBalance Logo" 
                width={200} 
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Ihre Balance und Harmonie sind unsere Priorität. Erleben Sie ganzheitliche Behandlungen in entspannter Atmosphäre.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Massagen
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/80 hover:text-white transition-colors">
                  Termin buchen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Social */}
          <div>
            <ul className="space-y-3 mb-6 text-white/80">
              <li>Termine nach Vereinbarung/Buchung</li>
            </ul>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/impressum" className="text-white/80 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-white/80 hover:text-white transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-white/80 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>

            <div>
              <h4 className="text-sm font-semibold mb-3">Folgen Sie uns</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/thomas.grobler.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/oldscoultom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-white/60">
            <p>
              © {currentYear} SanaBalance. Alle Rechte vorbehalten.
            </p>
            <p>
              Entwickelt von{' '}
              <a 
                href="https://andrzejmich.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C9A87C] hover:text-[#8B7355] font-medium transition-colors"
              >
                Andrzej Mich
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
