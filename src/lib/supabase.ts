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

/** Public (zero-auth) URL of a demo's MP4 rendering in the `demo-media` bucket.
 *  The recorder script uploads to this exact path; existence is probed with a
 *  HEAD request before any download button is shown. */
export const demoVideoUrl = (lessonId: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/demo-media/${lessonId}.mp4`;

/** Same object, but with Supabase's `?download` param so the response carries
 *  Content-Disposition: attachment — the plain `download` HTML attribute is
 *  ignored cross-origin, so without this the browser just plays the MP4 inline
 *  (navigating the SPA away) instead of saving it. */
export const demoVideoDownloadUrl = (lessonId: string) =>
  `${demoVideoUrl(lessonId)}?download=${lessonId}.mp4`;

/**
 * Email links from Supabase (password reset, invites, confirmations) land on
 * the site root with the token + a `type=` marker in the URL fragment. The
 * hash router immediately rewrites that fragment, so we capture the marker
 * HERE, at module load, before React ever renders. The app uses it to route
 * the user to the set-password screen instead of dumping them on the homepage.
 */
export type AuthLinkType = 'recovery' | 'invite' | 'signup' | null;
const bootHash = typeof window !== 'undefined' ? window.location.hash : '';
export const AUTH_LINK_TYPE: AuthLinkType = /[#&]type=recovery/.test(bootHash)
  ? 'recovery'
  : /[#&]type=invite/.test(bootHash)
    ? 'invite'
    : /[#&]type=(signup|email)/.test(bootHash)
      ? 'signup'
      : null;
/** e.g. an expired/used link: #error=access_denied&error_code=otp_expired */
export const AUTH_LINK_ERROR: string | null = (() => {
  const m = bootHash.match(/error_description=([^&]+)/);
  return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
})();

export type AppRole = 'admin' | 'csm' | 'user';
export type TrainingRole = 'operator' | 'supervisor' | 'internal';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: AppRole;
  /** admin-assigned training path; the user only sees this role's modules. NULL = unrestricted. */
  training_role: TrainingRole | null;
  active: boolean;
}

export interface RemoteProgress {
  lesson_id: string;
  last_step: number;
  total_steps: number;
  completed: boolean;
  updated_at?: string;
}
