import { Mail, Phone, MapPin, Navigation } from 'lucide-react'
import Link from 'next/link'

const MAPS_QUERY = 'Rossweidstrasse+4,+9472+Grabs,+Schweiz'
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed`

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#F5F1ED]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-[#6B5744] mb-4">
            Kontakt
          </h2>
          <p className="text-[#8B7355] text-lg">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">Adresse</h4>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B7355] hover:text-[#6B5744] transition-colors leading-relaxed block"
                >
                  SanaBalance Massagen<br />
                  Rossweidstrasse 4<br />
                  9472 Grabs<br />
                  Schweiz
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Route planen
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">Telefon</h4>
                <p className="text-[#8B7355] mb-3">079 489 50 18</p>
                <a
                  href="tel:+41794895018"
                  className="inline-flex items-center gap-2 bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">E-Mail</h4>
                <p className="text-[#8B7355] mb-3">kontakt@sanabalance.ch</p>
                <a
                  href="mailto:kontakt@sanabalance.ch"
                  className="inline-flex items-center gap-2 bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail senden
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-3 text-[#8B7355]">
              <p>Termine nach Vereinbarung/Buchung</p>
              <Link
                href="/booking"
                className="inline-block bg-[#C9A87C] hover:bg-[#8B7355] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Termin buchen
              </Link>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#E8DDD3] h-[420px] group">
            <iframe
              src={MAPS_EMBED}
              className="w-full h-full pointer-events-none"
              loading="lazy"
              title="SanaBalance Massagen Standort"
            />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-end justify-center pb-6"
              aria-label="Auf Google Maps öffnen"
            >
              <span className="bg-white/90 hover:bg-white text-[#6B5744] font-semibold px-5 py-2.5 rounded-full shadow-lg text-sm transition-all duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100">
                <Navigation className="w-4 h-4" />
                Auf Google Maps öffnen
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
