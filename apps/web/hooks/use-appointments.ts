import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import type { Appointment, AppointmentWithDetails } from '@sana-balance/core'

export function useAppointments() {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) return []

      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          service:services(*),
          slot:availability_slots(*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as AppointmentWithDetails[]
    },
  })
}

export function useCreateAppointment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (appointment: Omit<Appointment, 'id' | 'created_at' | 'updated_at'>) => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) throw new Error('Not authenticated')

      const { data, error } = await supabase
        .from('appointments')
        .insert({
          ...appointment,
          user_id: user.id,
        })
        .select()
        .single()

      if (error) throw error

      // Mark slot as booked
      await supabase
        .from('availability_slots')
        .update({ is_booked: true })
        .eq('id', appointment.slot_id)

      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] })
      queryClient.invalidateQueries({ queryKey: ['availability'] })
    },
  })
}
