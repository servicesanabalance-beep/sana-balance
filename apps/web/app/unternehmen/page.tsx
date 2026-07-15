import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  Handshake,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Massage im Unternehmen – Betriebliche Gesundheitsförderung',
  description:
    'Präventive Massagen, Ergonomie-Beratung und Gesundheitsimpulse direkt in Ihrem Betrieb. SanaBalance unterstützt Unternehmen in Grabs, Buchs und der Region St. Gallen bei der Gesundheit ihrer Mitarbeitenden.',
  alternates: {
    canonical: 'https://sanabalance.ch/unternehmen',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Betriebliche Gesundheitsförderung – Massage im Unternehmen',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://sanabalance.ch',
    name: 'SanaBalance Massagen',
  },
  serviceType: 'Firmenmassage, Ergonomie-Beratung, Gesundheitsimpulse',
  areaServed: [
    { '@type': 'City', name: 'Grabs' },
    { '@type': 'City', name: 'Buchs' },
    { '@type': 'City', name: 'Sargans' },
    { '@type': 'State', name: 'St. Gallen' },
  ],
  url: 'https://sanabalance.ch/unternehmen',
}

const angebote = [
  {
    title: 'Präventive Massagen',
    description:
      'Gezielte Massagen direkt am Arbeitsplatz – auf dem Massagestuhl, ohne grossen Aufwand für Ihr Unternehmen. Verspannungen werden gelöst, bevor daraus Beschwerden werden.',
  },
  {
    title: 'Ergonomie-Beratung',
    description:
      'Kleine Anpassungen am Arbeitsplatz mit grosser Wirkung: Ich zeige Ihren Mitarbeitenden, wie sie Haltung, Bewegung und Arbeitsumgebung gesünder gestalten.',
  },
  {
    title: 'Gesundheitsimpulse direkt im Betrieb',
    description:
      'Kurze, praxisnahe Impulse zu Bewegung, Entspannung und Prävention – integriert in den Arbeitsalltag, ohne den Betrieb zu unterbrechen.',
  },
]

const vorteile = [
  {
    icon: ShieldCheck,
    title: 'Prävention',
    subtitle: 'statt Ausfälle',
  },
  {
    icon: TrendingUp,
    title: 'Mehr Energie',
    subtitle: 'im Arbeitsalltag',
  },
  {
    icon: HeartPulse,
    title: 'Gesundheit',
    subtitle: 'langfristig fördern',
  },
  {
    icon: Handshake,
    title: 'Zufriedene',
    subtitle: 'Mitarbeitende',
  },
]

export default function Unternehmen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        {/* Flyer – full image first */}
        <section className="bg-sana-cream pt-6 md:pt-10 pb-0">
          <div className="container-sana">
            <div className="relative aspect-[3/2] w-full rounded-sana overflow-hidden shadow-sana-lg animate-fade-up">
              <Image
                src="/banner-sana.png"
                alt="Gesundheit ist der Schlüssel zu leistungsfähigen Teams – SanaBalance für Unternehmen"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Intro below the flyer */}
        <section className="bg-sana-cream py-14 md:py-20">
          <div className="container-sana text-center">
            <div className="flex items-center justify-center gap-3 animate-fade-up [animation-delay:120ms]">
              <div className="h-px w-8 bg-sana-brown" />
              <span className="text-sm font-semibold tracking-[0.2em] text-sana-brown uppercase">
                Für Unternehmen
              </span>
              <div className="h-px w-8 bg-sana-brown" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-sana-brown-dark leading-tight mt-6 animate-fade-up [animation-delay:240ms]">
              Gesundheit ist der Schlüssel zu{' '}
              <em className="italic">leistungsfähigen Teams</em>
            </h1>

            <p className="text-xl font-serif italic text-sana-brown-dark mt-5 animate-fade-up [animation-delay:360ms]">
              Gesunde Mitarbeitende sind kein Zufall – sondern eine Investition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center animate-fade-up [animation-delay:480ms]">
              <a
                href="tel:+41794895018"
                className="inline-flex items-center justify-center gap-3 bg-sana-brown-dark hover:bg-sana-brown text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                079 489 50 18
              </a>
              <a
                href="mailto:kontakt@sanabalance.ch?subject=Anfrage%20Gesundheit%20im%20Unternehmen"
                className="inline-flex items-center justify-center gap-3 border-2 border-sana-brown-dark text-sana-brown-dark hover:bg-sana-brown-dark hover:text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                Anfrage senden
              </a>
            </div>
          </div>
        </section>

        {/* Angebote */}
        <section className="section-sana bg-sana-white">
          <div className="container-sana">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="heading-section mb-4">
                  So unterstütze ich Ihr Unternehmen
                </h2>
                <div className="w-16 h-1 bg-sana-gold rounded-full mx-auto" />
                <p className="text-body max-w-3xl mx-auto mt-6">
                  Viele Beschwerden im Rücken-, Schulter- und Nackenbereich entstehen
                  nicht über Nacht. Sie entwickeln sich durch kleine Belastungen im
                  Arbeitsalltag. Mit SanaBalance unterstütze ich Unternehmen dabei,
                  die Gesundheit ihrer Mitarbeitenden aktiv zu fördern – direkt bei
                  Ihnen im Betrieb.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {angebote.map((angebot, index) => (
                <Reveal key={angebot.title} delay={index * 120}>
                <div
                  className="p-8 rounded-sana bg-sana-cream hover:shadow-sana hover-lift h-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sana-gold/20 mb-6">
                    <CheckCircle2 className="w-7 h-7 text-sana-brown-dark" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-sana-brown-dark mb-3">
                    {angebot.title}
                  </h3>
                  <p className="text-sana-brown leading-relaxed">
                    {angebot.description}
                  </p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="section-sana bg-sana-cream">
          <div className="container-sana">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="heading-section mb-4">
                  Ihr Nutzen auf einen Blick
                </h2>
                <div className="w-16 h-1 bg-sana-gold rounded-full mx-auto" />
                <p className="text-body max-w-2xl mx-auto mt-6">
                  Denn gesunde Mitarbeitende sind motivierter, leistungsfähiger und
                  fallen seltener aus. Gesundheit beginnt dort, wo Prävention ernst
                  genommen wird.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {vorteile.map((vorteil, index) => {
                const Icon = vorteil.icon
                return (
                  <Reveal key={vorteil.title} delay={index * 100}>
                  <div
                    className="text-center p-6 rounded-sana bg-sana-white shadow-sana hover-lift h-full"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sana-gold/20 mb-4">
                      <Icon className="w-7 h-7 text-sana-brown-dark" />
                    </div>
                    <div className="text-lg font-serif font-semibold text-sana-brown-dark">
                      {vorteil.title}
                    </div>
                    <div className="text-sm text-sana-brown mt-1">
                      {vorteil.subtitle}
                    </div>
                  </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sana bg-sana-brown-dark">
          <div className="container-sana text-center">
            <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Lassen Sie uns ins Gespräch kommen
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Ich freue mich darauf, mit Ihrem Unternehmen ins Gespräch zu kommen
              und gemeinsam Möglichkeiten zur Förderung der Gesundheit Ihrer
              Mitarbeitenden zu entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41794895018"
                className="inline-flex items-center justify-center gap-3 bg-sana-gold hover:bg-[#B8976B] text-sana-black px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: 079 489 50 18
              </a>
              <a
                href="mailto:kontakt@sanabalance.ch?subject=Anfrage%20Gesundheit%20im%20Unternehmen"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white hover:bg-white hover:text-sana-brown-dark px-8 py-4 rounded-full transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5" />
                kontakt@sanabalance.ch
              </a>
            </div>
            <p className="text-white/60 text-sm mt-10">
              Thomas Gröbler · Instruktor | Masseur | Gesundheitscoach ·{' '}
              <Link href="/" className="underline hover:text-white transition-colors">
                sanabalance.ch
              </Link>
            </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
