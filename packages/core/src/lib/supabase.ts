import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'

export const createSupabaseClient = (supabaseUrl: string, supabaseKey: string) => {
  return createClient<Database>(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

export type SupabaseClient = ReturnType<typeof createSupabaseClient>
