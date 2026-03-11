import Image from 'next/image'

export function Reconnective() {
  return (
    <section id="reconnective" className="py-20 bg-[#F5F1ED]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Left */}
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6B5744] mb-6">
              Reconnective Healing®
            </h2>
            
            <p className="text-[#8B7355] text-lg leading-relaxed mb-6">
              Stellen Sie mit Reconnective Healing® Ihre Balance und innere Harmonie wieder her. Erleben Sie eine Behandlung, die Sie mit Körper, Geist und Seele in Einklang bringt.
            </p>
            
            <p className="text-[#8B7355] leading-relaxed mb-8">
              Diese revolutionäre Heilmethode arbeitet mit universellen Frequenzen, die tiefgreifende Transformation ermöglichen. Reconnective Healing® geht über traditionelle Energiearbeit hinaus und öffnet neue Dimensionen der Heilung.
            </p>

            <a
              href="/booking"
              className="inline-block bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Termin buchen
            </a>
          </div>

          {/* Image Right */}
          <div className="order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8DDD3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#C9A87C] to-[#6B5744]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 text-6xl font-serif text-center px-4">Reconnective<br/>Healing®</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
