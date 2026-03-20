import Image from 'next/image'
import { Phone } from 'lucide-react'

export function MobileMassage() {
  return (
    <section className="py-20 bg-[#F5F1ED]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/sana_massage.png"
              alt="Mobile Massage - Massagetisch zu Hause"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-7">

            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#8B5E3C]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8B5E3C] uppercase">
                Premium Service
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-serif text-[#2C1A0E] leading-tight">
              Komfort bei Ihnen zu Hause –{' '}
              <em className="italic">Mobile Massage</em>
            </h2>

            {/* Description */}
            <p className="text-[#6B5744] text-lg leading-relaxed">
              Sparen Sie Zeit und entspannen Sie sich, ohne das Haus verlassen zu müssen.
              Ich komme zu Ihnen nach Hause und biete volle Professionalität sowie die Ruhe,
              die Sie brauchen. Die ideale Lösung für vielbeschäftigte Menschen oder solche,
              die die Privatsphäre des eigenen Zuhauses schätzen.
            </p>

            {/* CTA Button */}
            <a
              href="tel:+41794895018"
              className="inline-flex items-center gap-4 bg-[#8B5E3C] hover:bg-[#6B4A2C] text-white px-6 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
                  Termin vereinbaren
                </div>
                <div className="text-base font-semibold">
                  Jetzt anrufen: +41 079 489 50 18
                </div>
              </div>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-2 border-t border-[#D4C4B0]">
              <div className="pt-5">
                <div className="text-2xl font-serif italic text-[#2C1A0E]">Volle</div>
                <div className="text-[10px] font-semibold tracking-[0.15em] text-[#8B7355] uppercase mt-1">
                  Ausstattung
                </div>
              </div>
              <div className="pt-5">
                <div className="text-2xl font-serif italic text-[#2C1A0E]">Null</div>
                <div className="text-[10px] font-semibold tracking-[0.15em] text-[#8B7355] uppercase mt-1">
                  Stress mit Anfahrt
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
