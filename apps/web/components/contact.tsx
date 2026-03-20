import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

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

        <div className="max-w-xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">Adresse</h4>
                <p className="text-[#8B7355]">
                  SanaBalance Massagen<br />
                  Rossweidstrasse 4<br />
                  9472 Grabs<br />
                  Schweiz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">Telefon</h4>
                <a href="tel:+41794895018" className="text-[#8B7355] hover:text-[#6B5744] transition-colors">
                  079 489 50 18
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#8B7355]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#6B5744] mb-1">E-Mail</h4>
                <p className="text-[#8B7355] mb-3">kontakt@sanabalance.ch</p>
                <a
                  href="mailto:kontakt@sanabalance.ch"
                  className="inline-flex items-center gap-2 bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail senden
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4 text-[#8B7355]">
            <p>Termine nach Vereinbarung/Buchung</p>
            <Link
              href="/booking"
              className="inline-block bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Termin buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
