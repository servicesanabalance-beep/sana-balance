export const formatDate = (date: string | Date, locale: string = 'de-DE'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

export const formatTime = (date: string | Date, locale: string = 'de-DE'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

export const formatDateTime = (date: string | Date, locale: string = 'de-DE'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

export const formatPrice = (price: number, locale: string = 'de-CH'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CHF',
  }).format(price)
}

export const isSlotAvailable = (startTime: string, endTime: string): boolean => {
  const now = new Date()
  const start = new Date(startTime)
  const end = new Date(endTime)
  
  return start > now && end > start
}

export const getDaysBetween = (start: Date, end: Date): Date[] => {
  const days: Date[] = []
  const current = new Date(start)
  
  while (current <= end) {
    days.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }
  
  return days
}
