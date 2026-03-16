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
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-lg font-serif font-semibold text-gray-800 dark:text-gray-100',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100',
          'inline-flex items-center justify-center rounded-md',
          'hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-gray-600 dark:text-gray-400 rounded-md w-10 font-normal text-sm',
        row: 'flex w-full mt-2',
        cell: cn(
          'h-10 w-10 text-center text-sm p-0 relative',
          'hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors',
          'focus-within:relative focus-within:z-20'
        ),
        day: cn(
          'h-10 w-10 p-0 font-normal',
          'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 rounded-md'
        ),
        day_range_end: 'day-range-end',
        day_selected: cn(
          'bg-amber-600 text-white hover:bg-amber-700 hover:text-white',
          'focus:bg-amber-600 focus:text-white'
        ),
        day_today: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold',
        day_outside: 'text-gray-400 dark:text-gray-600 opacity-50',
        day_disabled: 'text-gray-400 dark:text-gray-600 opacity-30 cursor-not-allowed',
        day_range_middle: 'aria-selected:bg-gray-100 dark:aria-selected:bg-gray-700',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
