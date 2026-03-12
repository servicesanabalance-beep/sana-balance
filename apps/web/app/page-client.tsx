'use client'

import { useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { ThomasSection } from '@/components/thomas-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export function PageClient() {
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Also try after a delay for mobile browsers
    const timer1 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 50)

    const timer2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <ThomasSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
