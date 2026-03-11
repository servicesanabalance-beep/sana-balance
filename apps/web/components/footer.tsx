import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#6B5744] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-serif font-bold">
                <span className="text-[#C9A87C]">SB</span>
              </div>
              <div>
                <div className="text-xl font-serif">Sana Balance</div>
                <div className="text-sm text-white/70">Praxis für ganzheitliches Wohlbefinden</div>
              </div>
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
            <h3 className="text-lg font-serif font-semibold mb-4">Rechtliches</h3>
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
                  href="https://facebook.com/sanabalance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/sanabalance"
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Sana Balance. Alle Rechte vorbehalten.
            </p>
            <p>
              Entwickelt von <span className="text-white/80 font-medium">Andrzej Mich</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
