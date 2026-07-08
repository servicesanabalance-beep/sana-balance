import { Check, Gift, Stamp, HandHeart, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: HandHeart,
    number: '1',
    title: 'Karte in der Praxis erhalten',
    description: 'Ihre persönliche Treuekarte bekommen Sie kostenlos bei Ihrem nächsten Besuch.',
  },
  {
    icon: Stamp,
    number: '2',
    title: 'Bei jeder Massage Stempel sammeln',
    description: 'Für jede bezahlte Massage erhalten Sie einen Stempel auf Ihrer Karte.',
  },
  {
    icon: Gift,
    number: '3',
    title: '10. Massage gratis geniessen',
    description: 'Nach 9 Stempeln ist die zehnte Massage unser Geschenk an Sie.',
  },
]

export function Treuebonus() {
  return (
    <section id="treuebonus" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#8B5E3C]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#8B5E3C] uppercase">
              Treuebonus
            </span>
            <div className="h-px w-8 bg-[#8B5E3C]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#6B5744] mb-4">
            10 Massagen geniessen –{' '}
            <em className="italic">nur 9 bezahlen</em>
          </h2>
          <div className="w-16 h-1 bg-[#C9A87C] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Loyalty Card Visual */}
          <div className="relative mx-auto w-full max-w-md">
            {/* decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A87C]/30 to-[#8B5E3C]/20 rounded-[2rem] blur-2xl" aria-hidden="true" />

            <div className="relative bg-gradient-to-br from-[#F5F1ED] to-[#EDE5DB] border border-[#D4C4B0] rounded-3xl shadow-2xl p-8 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-serif font-bold text-2xl text-[#6B5744]">SanaBalance</div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-[#8B7355] uppercase mt-0.5">
                    Treuekarte
                  </div>
                </div>
                <Sparkles className="w-7 h-7 text-[#C9A87C]" aria-hidden="true" />
              </div>

              {/* Stamps grid */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full bg-[#8B5E3C] flex items-center justify-center shadow-inner"
                  >
                    <Check className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                ))}
                {/* 10th stamp – the gift */}
                <div className="aspect-square rounded-full border-2 border-dashed border-[#8B5E3C] bg-[#C9A87C]/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-[#8B5E3C]" aria-hidden="true" />
                </div>
              </div>

              {/* Card footer */}
              <div className="text-center text-sm font-semibold text-[#6B5744] bg-white/60 rounded-full py-2.5 px-4">
                Die 10. Massage geht auf uns 🎁
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F1ED] border border-[#D4C4B0] flex items-center justify-center relative">
                    <step.icon className="w-6 h-6 text-[#8B5E3C]" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#8B5E3C] text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#6B5744] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#8B7355] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Note */}
            <p className="text-sm text-[#8B7355] italic border-l-2 border-[#C9A87C] pl-4">
              Ihre physische Treuekarte erhalten Sie direkt in der Praxis.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
