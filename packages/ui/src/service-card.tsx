'use client'

import * as React from 'react'
import { cn } from './lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card'

export interface ServiceCardProps {
  title: string
  description: string
  duration?: number
  price?: number
  currency?: string
  image?: string
  className?: string
  onClick?: () => void
  selected?: boolean
}

export function ServiceCard({
  title,
  description,
  duration,
  price,
  currency = 'CHF',
  image,
  className,
  onClick,
  selected = false,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'cursor-pointer transition-all hover:shadow-xl bg-white border-2 border-[#E8DDD3]',
        selected && 'ring-2 ring-[#C9A87C] shadow-xl border-[#C9A87C]',
        className
      )}
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B5744]/40 to-transparent" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="flex-1 text-[#6B5744]">{title}</CardTitle>
          {selected && (
            <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A87C]">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base leading-relaxed text-[#8B7355]">
          {description}
        </CardDescription>
        {(duration || price !== undefined) && (
          <div className="flex items-center justify-between border-t border-[#E8DDD3] pt-4">
            {duration && (
              <div className="text-sm text-[#8B7355]">
                <span className="font-semibold">{duration}</span> Minuten
              </div>
            )}
            {price !== undefined && (
              <div className="text-lg font-serif font-semibold text-[#6B5744]">
                {price} {currency}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
