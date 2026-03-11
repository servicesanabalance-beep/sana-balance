import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import type { Service } from '@sana-balance/core'

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('name')

      if (error) throw error
      return data as Service[]
    },
  })
}

export function useService(id: string) {
  return useQuery({
    queryKey: ['services', id],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data as Service
    },
    enabled: !!id,
  })
}
