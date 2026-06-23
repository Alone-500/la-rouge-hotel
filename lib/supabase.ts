import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type RoomType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  base_price: number;
  max_guests: number;
  image_url: string;
  virtual_tour_url?: string;
  is_active: boolean;
};
