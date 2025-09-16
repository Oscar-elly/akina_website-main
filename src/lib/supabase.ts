import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'general' | 'volunteer' | 'donation' | 'partnership';
  created_at: string;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  currency: string;
  message?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  name?: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface ProgramParticipant {
  id: string;
  name: string;
  age: number;
  program_type: string;
  location: string;
  status: 'active' | 'completed' | 'pending';
  enrolled_at: string;
}