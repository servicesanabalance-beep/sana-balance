import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Qualifications } from '@/components/qualifications'

export function ThomasSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#6B5744] to-[#8B7355] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9A87C] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#F5F1ED] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <Reveal from="left">
            <div className="mb-6">
              <div className="w-16 h-1 bg-[#C9A87C] rounded-full mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Thomas
              </h2>
              <p className="text-xl md:text-2xl font-serif italic text-[#F5F1ED] mb-6">
                Erfahrener Therapeut mit Leidenschaft
              </p>
            </div>

            <p className="text-white/90 leading-relaxed text-lg mb-8">
              Erfahrener Therapeut mit einem starken Fokus auf verschiedene Massagetechniken. Von klassischen Massagen zur Entspannung verspannter Muskeln bis hin zur Dorn- & Breuss-Massage, die besonders auf die Linderung von Rücken- und Nackenschmerzen abzielt – Thomas unterstützt Sie dabei, Ihre Körperhaltung zu verbessern und Ihr körperliches Wohlbefinden zu steigern.
            </p>

            <Link
              href="/booking"
              className="inline-block bg-white text-[#6B5744] hover:bg-[#F5F1ED] font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Termin buchen
            </Link>
          </Reveal>

          {/* Right Column - Image */}
          <Reveal from="right" delay={120} className="relative flex justify-center">
            <Image
              src="/sana-balance.png"
              alt="Thomas Gröbler - Massage Therapeut"
              width={600}
              height={600}
              className="w-full max-w-sm h-auto drop-shadow-2xl"
              priority={false}
            />
          </Reveal>
        </div>

        {/* Qualifications */}
        <Reveal delay={200} className="max-w-6xl mx-auto mt-14 pt-10 border-t border-white/15">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9A87C]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#F5F1ED]/80 uppercase">
              Qualifikationen
            </span>
          </div>
          <Qualifications />
        </Reveal>
      </div>
    </section>
  )
}
