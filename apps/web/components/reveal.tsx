'use client'

import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  /** Delay in ms before the animation starts once visible */
  delay?: number
  /** Slide direction the element comes from */
  from?: 'bottom' | 'left' | 'right' | 'none'
  className?: string
}

export function Reveal({ children, delay = 0, from = 'bottom', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal reveal-${from} ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
