import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import type { AvailabilitySlot } from '@sana-balance/core'
import { format } from 'date-fns'

export function useAvailableSlots(date: Date | undefined, serviceId?: string) {
  return useQuery({
    queryKey: ['availability', date ? format(date, 'yyyy-MM-dd') : null, serviceId],
    queryFn: async () => {
      if (!date) return []

      const supabase = createClient()
      const dateStr = format(date, 'yyyy-MM-dd')

      let query = supabase
        .from('availability_slots')
        .select('*')
        .eq('date', dateStr)
        .eq('is_booked', false)
        .order('start_time')

      if (serviceId) {
        query = query.eq('service_id', serviceId)
      }

      const { data, error } = await query

      if (error) throw error
      return data as AvailabilitySlot[]
    },
    enabled: !!date,
  })
}
