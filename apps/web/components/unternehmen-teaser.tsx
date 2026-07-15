import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const punkte = ['Präventive Massagen', 'Ergonomie-Beratung', 'Gesundheitsimpulse']

export function UnternehmenTeaser() {
  return (
    <section className="py-12 md:py-16 bg-sana-white">
      <div className="container-sana">
        <Reveal>
        <Link
          href="/unternehmen"
          className="group block rounded-sana overflow-hidden bg-sana-cream shadow-sana hover:shadow-sana-lg transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image */}
            <div className="relative md:col-span-2 aspect-[96/65] md:aspect-auto md:min-h-[340px] overflow-hidden">
              <Image
                src="/banner-sana.png"
                alt="Gesundheit ist der Schlüssel zu leistungsfähigen Teams – SanaBalance für Unternehmen"
                fill
                className="object-contain md:object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-sana-brown" />
                <span className="text-sm font-semibold tracking-[0.2em] text-sana-brown uppercase">
                  Für Unternehmen
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-sana-brown-dark leading-tight">
                Gesundheit ist der Schlüssel zu{' '}
                <em className="italic">leistungsfähigen Teams</em>
              </h2>

              <p className="text-sana-brown text-lg leading-relaxed">
                Gesunde Mitarbeitende sind kein Zufall – sondern eine Investition.
                Ich unterstütze Ihr Unternehmen direkt im Betrieb:
              </p>

              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                {punkte.map((punkt) => (
                  <li key={punkt} className="flex items-center gap-2 text-sana-brown-dark font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sana-gold flex-shrink-0" />
                    {punkt}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center justify-center sm:justify-start gap-3 bg-sana-brown-dark group-hover:bg-sana-brown text-white px-8 py-4 rounded-full transition-colors duration-300 font-semibold w-full sm:w-fit mt-1">
                Angebot für Unternehmen entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
        </Reveal>
      </div>
    </section>
  )
}
