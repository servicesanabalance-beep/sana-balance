import Image from 'next/image'

export function Maderotherapy() {
  return (
    <section id="maderotherapy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Left */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8DDD3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A87C] to-[#8B7355]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 text-6xl font-serif">Maderotherapie</div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6B5744] mb-6">
              Maderotherapie
            </h2>
            
            <p className="text-[#8B7355] text-lg leading-relaxed mb-6">
              Erleben Sie die Vorteile einer vollkommen natürlichen Methode. Die Maderotherapie unterstützt den Abbau von Fettablagerungen und Cellulite, regt Lymphfluss und Durchblutung an und fördert die natürliche Entgiftung des Körpers.
            </p>
            
            <p className="text-[#8B7355] leading-relaxed mb-8">
              Diese traditionelle Technik verwendet speziell geformte Holzwerkzeuge, um Verspannungen zu lösen, die Haut zu straffen und das allgemeine Wohlbefinden zu steigern.
            </p>

            <a
              href="/booking"
              className="inline-block bg-[#8B7355] hover:bg-[#6B5744] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Termin buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
