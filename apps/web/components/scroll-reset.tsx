'use client'

import { useEffect } from 'react'

export function ScrollReset() {
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0)
    
    // Also set scroll restoration to manual
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Force scroll to top after a short delay (for mobile browsers)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return null
}
