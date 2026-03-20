'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Sparkles, Phone, CalendarCheck } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Start', icon: Home },
  { href: '/#services', label: 'Massagen', icon: Sparkles },
  { href: '/#contact', label: 'Kontakt', icon: Phone },
  { href: '/booking', label: 'Termin', icon: CalendarCheck },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-sana-beige shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === '/' ? pathname === '/' : pathname === href.split('#')[0] && href !== '/'

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all ${
                isActive
                  ? 'text-sana-brown-dark scale-110'
                  : 'text-sana-brown/60 hover:text-sana-brown scale-100'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'}`} />
              <span className={`font-medium leading-none ${isActive ? 'text-[11px]' : 'text-[10px]'}`}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
