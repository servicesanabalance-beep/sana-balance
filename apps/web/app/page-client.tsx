'use client'

import { useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { ThomasSection } from '@/components/thomas-section'
import { MobileMassage } from '@/components/mobile-massage'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { BottomNav } from '@/components/bottom-nav'

export function PageClient() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (window.location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const timer1 = setTimeout(() => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 50)

    const timer2 = setTimeout(() => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <About />
        <Services />
        <ThomasSection />
        <MobileMassage />
        <Contact />
      </main>
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>
      <BottomNav />
      <ScrollToTop />
    </>
  )
}
