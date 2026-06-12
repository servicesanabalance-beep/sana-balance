-- Allow guest (unauthenticated) bookings.
-- Run this in Supabase SQL Editor.

-- 1. Make client_id nullable, add guest fields
ALTER TABLE public.appointments
  ALTER COLUMN client_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS guest_first_name text,
  ADD COLUMN IF NOT EXISTS guest_last_name  text,
  ADD COLUMN IF NOT EXISTS guest_email      text,
  ADD COLUMN IF NOT EXISTS guest_phone      text;

-- Make sure either client_id or guest_email is provided
ALTER TABLE public.appointments
  DROP CONSTRAINT IF EXISTS appointments_client_or_guest_chk;
ALTER TABLE public.appointments
  ADD CONSTRAINT appointments_client_or_guest_chk
  CHECK (client_id IS NOT NULL OR guest_email IS NOT NULL);

-- 2. RLS: allow anonymous users to insert guest appointments
DROP POLICY IF EXISTS "Anon can create guest appointments" ON public.appointments;
CREATE POLICY "Anon can create guest appointments"
  ON public.appointments
  FOR INSERT
  TO anon
  WITH CHECK (client_id IS NULL AND guest_email IS NOT NULL);

-- 3. RLS: allow anonymous users to mark a free slot as booked
DROP POLICY IF EXISTS "Anon can book free availability" ON public.availability;
CREATE POLICY "Anon can book free availability"
  ON public.availability
  FOR UPDATE
  TO anon
  USING (is_booked = false)
  WITH CHECK (is_booked = true);

-- 4. RLS: allow anonymous users to read free slots (needed by date/time picker)
DROP POLICY IF EXISTS "Anyone can view availability" ON public.availability;
CREATE POLICY "Anyone can view availability"
  ON public.availability
  FOR SELECT
  TO anon, authenticated
  USING (true);
