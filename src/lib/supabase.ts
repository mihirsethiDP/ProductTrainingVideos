import { createClient } from '@supabase/supabase-js';

// Public project config. The anon key is designed to be embedded in a frontend;
// all access control lives in Supabase Row-Level Security policies (see
// supabase/schema.sql). URL is derived from the project ref.
const SUPABASE_URL = 'https://zilwylqyhbejgmbizywh.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbHd5bHF5aGJlamdtYml6eXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMjM1NDUsImV4cCI6MjA5Nzc5OTU0NX0.T7VEfahwWOlPXc_bW8l3uqYHHQQLodz2vq15xSZtEzQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});

export type AppRole = 'admin' | 'user';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: AppRole;
  active: boolean;
}

export interface RemoteProgress {
  lesson_id: string;
  last_step: number;
  total_steps: number;
  completed: boolean;
  updated_at?: string;
}
