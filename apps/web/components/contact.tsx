'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement reCAPTCHA and form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Vielen Dank! Wir werden uns bald bei Ihnen melden.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-[#6B5744] mb-6">
                Kontaktinformationen
              </h3>
              
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
                    <a href="mailto:kontakt@sanabalance.ch" className="text-[#8B7355] hover:text-[#6B5744] transition-colors">
                      kontakt@sanabalance.ch
                    </a>
                    <p className="text-sm text-[#8B7355]/80 mt-1">
                      oder: besserleben70@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 text-[#8B7355]">
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

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-[#6B5744] mb-6">
              Nachricht senden
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#6B5744] font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8DDD3] focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 outline-none transition-colors"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#6B5744] font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8DDD3] focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 outline-none transition-colors"
                  placeholder="ihre.email@beispiel.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#6B5744] font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8DDD3] focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 outline-none transition-colors"
                  placeholder="+41 12 345 67 89"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#6B5744] font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8DDD3] focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 outline-none transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              {/* reCAPTCHA placeholder - to be implemented */}
              <div className="bg-[#F5F1ED] p-4 rounded-lg text-center text-sm text-[#8B7355]">
                reCAPTCHA wird hier integriert
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
