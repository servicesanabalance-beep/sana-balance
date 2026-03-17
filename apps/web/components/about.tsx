'use client'

import { Card, CardHeader, CardTitle, CardContent, Button } from '@sana-balance/ui'
import { Users, Heart } from 'lucide-react'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/uber.uns.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1ED]/60 via-[#F5F1ED]/50 to-white/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Animation */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-sana-gold rounded-full mx-auto" />
          </div>
          <h2 className="text-5xl font-serif font-bold text-sana-brown-dark mb-4">
            Wer sind wir?
          </h2>
          <p className="text-sana-brown text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere Philosophie und unser Team
          </p>
        </div>

        {/* Two Column Layout with Shadcn Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Left Card - Wer sind wir? */}
          <Card className="bg-white/90 backdrop-blur-md border-2 border-sana-beige shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-sana-gold/20 group-hover:bg-sana-gold/30 transition-colors">
                  <Users className="h-6 w-6 text-sana-brown-dark" />
                </div>
                <CardTitle className="text-sana-brown-dark">Wer sind wir?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sana-brown leading-relaxed text-lg">
                Willkommen bei SanaBalance – Ihrem Ort für Entspannung und Regeneration. Wir verbinden traditionelle Massagetechniken mit modernem Fachwissen, um Körper und Geist in Einklang zu bringen. Unser Angebot umfasst klassische Massagen, Wellness-Behandlungen, Dorn & Breuss sowie Sportmassagen.
              </p>
            </CardContent>
          </Card>

          {/* Right Card - Über uns */}
          <Card className="bg-white/90 backdrop-blur-md border-2 border-sana-beige shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-sana-gold/20 group-hover:bg-sana-gold/30 transition-colors">
                  <Heart className="h-6 w-6 text-sana-brown-dark" />
                </div>
                <CardTitle className="text-sana-brown-dark">Über uns</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sana-brown leading-relaxed text-lg">
                In unserer Praxis für ganzheitliches Wohlbefinden begegnen wir jedem Patienten mit Respekt und Kompetenz. Unser erfahrenes Team bietet einfühlsame Therapien, die gezielt auf die persönlichen Bedürfnisse abgestimmt sind. Vertrauen Sie auf unsere Kompetenz und Hingabe für Ihr ganzheitliches Wohlbefinden.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button with Shadcn Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-sana-brown hover:bg-sana-brown-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/booking">
              Termin buchen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
