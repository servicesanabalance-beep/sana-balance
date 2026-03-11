export type { Database } from './database.types'

export type Service = {
  id: string
  name_de: string
  name_en: string | null
  name_it: string | null
  name_fr: string | null
  description_de: string
  description_en: string | null
  description_it: string | null
  description_fr: string | null
  duration_minutes: number
  price_chf: number
  image_url: string | null
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export type AvailabilitySlot = {
  id: string
  start_time: string
  end_time: string
  is_booked: boolean
  service_id: string | null
  created_at: string
  updated_at: string
}

export type Appointment = {
  id: string
  user_id: string
  service_id: string
  slot_id: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  notes: string | null
  created_at: string
  updated_at: string
}

export type Profile = {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  is_admin: boolean
  created_at: string
  updated_at: string
}

export type AppointmentWithDetails = Appointment & {
  service: Service
  slot: AvailabilitySlot
  user: Profile
}
