'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@sana-balance/ui'

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href, label = 'Zurück' }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className="mb-4"
    >
      <ChevronLeft className="h-4 w-4 mr-1" />
      {label}
    </Button>
  )
}
