'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Sparkles, Phone, CalendarCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Start', icon: Home, sectionId: null },
  { href: '/#services', label: 'Massagen', icon: Sparkles, sectionId: 'services' },
  { href: '/#contact', label: 'Kontakt', icon: Phone, sectionId: 'contact' },
  { href: '/booking', label: 'Termin', icon: CalendarCheck, sectionId: null },
]

export function BottomNav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4
      const sections = ['contact', 'services']
      let found = false
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) {
          setActiveSection(id)
          found = true
          break
        }
      }
      if (!found) setActiveSection(null)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const getIsActive = (href: string, sectionId: string | null) => {
    if (href === '/booking') return pathname === '/booking'
    if (pathname !== '/') return false
    if (sectionId) return activeSection === sectionId
    if (href === '/') return activeSection === null
    return false
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-sana-beige shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {navItems.map(({ href, label, icon: Icon, sectionId }) => {
          const isActive = getIsActive(href, sectionId)

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center justify-center gap-1.5 transition-all duration-200 ${
                isActive
                  ? 'text-sana-brown-dark scale-125'
                  : 'text-sana-brown/50 hover:text-sana-brown scale-100'
              }`}
            >
              <Icon className={`transition-all ${isActive ? 'w-6 h-6 stroke-[3]' : 'w-5 h-5 stroke-[1.5]'}`} />
              <span className={`font-semibold leading-none transition-all ${isActive ? 'text-[11px]' : 'text-[9px]'}`}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
