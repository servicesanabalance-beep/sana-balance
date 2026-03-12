import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { ThomasSection } from '@/components/thomas-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
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
