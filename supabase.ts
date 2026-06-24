import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vlerxqwbmzlgcdchjnfz.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZXJ4cXdibXpsZ2NkY2hqbmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMzE2MzksImV4cCI6MjA5NzgwNzYzOX0.rougi-Bodt3dCd51FCSU8V0EzLBps28WaJkfeRR-M0Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type RoomType = {
  id: string
  name: string
  slug: string
  description: string | null
  base_price: number
  max_guests: number
  image_url: string | null
  virtual_tour_url: string | null
  is_active: boolean
  created_at: string
}

export type Booking = {
  id: string
  booking_reference: string
  guest_name: string
  guest_email: string
  guest_phone: string | null
  check_in_date: string
  check_out_date: string
  room_type_id: string | null
  num_guests: number
  special_requests: string | null
  status: string
  created_at: string
}
