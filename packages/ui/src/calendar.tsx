'use client'

import * as React from 'react'
import { DayPicker, DayPickerProps } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from './lib/utils'
import 'react-day-picker/style.css'

export type CalendarProps = DayPickerProps

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-lg font-serif font-semibold text-sana-brown-dark',
        nav: 'space-x-1 flex items-center',
        button_previous: cn(
          'absolute left-1 h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100',
          'inline-flex items-center justify-center rounded-md text-sana-brown',
          'hover:bg-sana-beige transition-colors'
        ),
        button_next: cn(
          'absolute right-1 h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100',
          'inline-flex items-center justify-center rounded-md text-sana-brown',
          'hover:bg-sana-beige transition-colors'
        ),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-sana-brown rounded-md w-10 font-normal text-sm',
        week: 'flex w-full mt-2',
        day: cn(
          'h-10 w-10 text-center text-sm p-0 relative',
          'hover:bg-sana-beige rounded-md transition-colors',
          'focus-within:relative focus-within:z-20'
        ),
        day_button: cn(
          'h-10 w-10 p-0 font-normal',
          'hover:bg-sana-beige hover:text-sana-brown-dark rounded-md'
        ),
        range_end: 'day-range-end',
        selected: cn(
          'bg-sana-gold text-sana-white hover:bg-sana-gold hover:text-sana-white',
          'focus:bg-sana-gold focus:text-sana-white'
        ),
        today: 'bg-sana-cream text-sana-brown-dark font-semibold',
        outside: 'text-sana-brown opacity-30',
        disabled: 'text-sana-brown opacity-20 cursor-not-allowed',
        range_middle: 'aria-selected:bg-sana-beige aria-selected:text-sana-brown-dark',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === 'left' ? ChevronLeft : ChevronRight
          return <Icon className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}
