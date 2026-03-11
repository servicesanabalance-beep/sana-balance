import { z } from 'zod'

export const serviceSchema = z.object({
  id: z.string().uuid().optional(),
  name_de: z.string().min(1, 'Name (DE) ist erforderlich'),
  name_en: z.string().nullable().optional(),
  name_it: z.string().nullable().optional(),
  name_fr: z.string().nullable().optional(),
  description_de: z.string().min(10, 'Beschreibung muss mindestens 10 Zeichen lang sein'),
  description_en: z.string().nullable().optional(),
  description_it: z.string().nullable().optional(),
  description_fr: z.string().nullable().optional(),
  duration_minutes: z.number().min(15, 'Dauer muss mindestens 15 Minuten betragen'),
  price_chf: z.number().min(0, 'Preis muss positiv sein'),
  image_url: z.string().url().nullable().optional(),
  is_active: z.boolean().default(true),
  display_order: z.number().default(0),
})

export const availabilitySlotSchema = z.object({
  id: z.string().uuid().optional(),
  start_time: z.string().datetime(),
  end_time: z.string().datetime(),
  is_booked: z.boolean().default(false),
  service_id: z.string().uuid().nullable().optional(),
})

export const appointmentSchema = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  service_id: z.string().uuid(),
  slot_id: z.string().uuid(),
  status: z.enum(['pending', 'confirmed', 'cancelled', 'completed']).default('pending'),
  notes: z.string().nullable().optional(),
})

export const profileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  first_name: z.string().min(1, 'Vorname ist erforderlich'),
  last_name: z.string().min(1, 'Nachname ist erforderlich'),
  phone: z.string().regex(/^\+?[0-9\s\-()]+$/, 'Ungültige Telefonnummer').nullable().optional(),
  is_admin: z.boolean().default(false),
})

export const bookingFormSchema = z.object({
  service_id: z.string().uuid('Bitte wählen Sie einen Service'),
  slot_id: z.string().uuid('Bitte wählen Sie einen Termin'),
  notes: z.string().max(500, 'Notizen dürfen maximal 500 Zeichen lang sein').nullable().optional(),
})

export const authFormSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(8, 'Passwort muss mindestens 8 Zeichen lang sein'),
  first_name: z.string().min(1, 'Vorname ist erforderlich').optional(),
  last_name: z.string().min(1, 'Nachname ist erforderlich').optional(),
})

export type ServiceInput = z.infer<typeof serviceSchema>
export type AvailabilitySlotInput = z.infer<typeof availabilitySlotSchema>
export type AppointmentInput = z.infer<typeof appointmentSchema>
export type ProfileInput = z.infer<typeof profileSchema>
export type BookingFormInput = z.infer<typeof bookingFormSchema>
export type AuthFormInput = z.infer<typeof authFormSchema>
