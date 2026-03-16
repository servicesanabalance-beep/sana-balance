'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import type { DayPickerSingleProps } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from './lib/utils'
import 'react-day-picker/dist/style.css'

export type CalendarProps = DayPickerSingleProps

export function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('sana-calendar', className)}
      components={{
        IconLeft: () => <ChevronLeft style={{ width: '1rem', height: '1rem' }} />,
        IconRight: () => <ChevronRight style={{ width: '1rem', height: '1rem' }} />,
      }}
      {...props}
    />
  )
}
