'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Award, X } from 'lucide-react'

const diplomas = [
  {
    title: 'Klassischer Masseur',
    subtitle: 'Diplom · Source Massage-Fachschule',
    image: '/diplom-sanabalance-massage.jpeg',
  },
  {
    title: 'Wellness Masseur',
    subtitle: 'Diplom · Source Massage-Fachschule',
    image: '/sanabalance-diplome.jpeg',
  },
]

export function Qualifications() {
  const [active, setActive] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!active) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        {diplomas.map((d) => (
          <button
            key={d.title}
            type="button"
            onClick={() => setActive(d.image)}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 text-left transition-colors flex-1"
          >
            <div className="w-11 h-11 rounded-full bg-[#C9A87C]/25 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-[#F5F1ED]" />
            </div>
            <div>
              <div className="font-serif font-semibold text-white leading-tight">
                {d.title}
              </div>
              <div className="text-xs text-white/70 mt-0.5">{d.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      {mounted && active
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setActive(null)}
                aria-label="Schliessen"
              >
                <X className="w-5 h-5" />
              </button>
              <div
                className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={active}
                  alt="Diplom"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 480px"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
