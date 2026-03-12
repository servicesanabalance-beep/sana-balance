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
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-[#6B5744] mb-4">
            Wer sind wir?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Wer sind wir? */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-serif font-semibold text-[#6B5744] mb-6">
              Wer sind wir?
            </h4>
            <p className="text-[#8B7355] leading-relaxed text-lg">
              Willkommen bei SanaBalance – Ihrem Ort für Entspannung und Regeneration. Wir verbinden traditionelle Massagetechniken mit modernem Fachwissen, um Körper und Geist in Einklang zu bringen. Unser Angebot umfasst klassische Massagen, Wellness-Behandlungen, Dorn & Breuss sowie Sportmassagen.
            </p>
          </div>

          {/* Right Column - Über uns */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-serif font-semibold text-[#6B5744] mb-6">
              Über uns
            </h4>
            <p className="text-[#8B7355] leading-relaxed text-lg">
              In unserer Praxis für ganzheitliches Wohlbefinden begegnen wir jedem Patienten mit Respekt und Kompetenz. Unser erfahrenes Team bietet einfühlsame Therapien, die gezielt auf die persönlichen Bedürfnisse abgestimmt sind. Vertrauen Sie auf unsere Kompetenz und Hingabe für Ihr ganzheitliches Wohlbefinden.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/booking"
            className="inline-block bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Termin buchen
          </a>
        </div>
      </div>
    </section>
  )
}
