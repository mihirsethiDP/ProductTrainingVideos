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

/**
 * How long an emailed invite / password-reset link stays valid.
 *
 * MUST match Supabase → Authentication → Email → OTP expiry. It is not readable
 * from the client, so it is mirrored here — the single place to change if that
 * setting changes. Used both to word the "links last N hours" copy and to decide
 * whether a pending invite is shown as expired in the Admin roster, so a
 * mismatch would make the roster lie.
 */
export const INVITE_LINK_HOURS = 24;

/**
 * The one domain allowed to sign in with Google.
 *
 * Used here only to pre-filter Google's account chooser (`hd`). It is NOT the
 * security boundary — a Google account can carry any address and the hint is
 * trivially dropped, so the rule is enforced in handle_new_user, which aborts
 * the signup outright. Change both together.
 */
export const STAFF_DOMAIN = 'digitalpaani.com';

/** Per-account sign-in state, from the admin_account_status RPC (reads auth.users). */
export interface AccountStatusRow {
  id: string;
  invited_at: string | null;
  confirmed_at: string | null;
  last_sign_in_at: string | null;
  /** true = has a password (admin-provisioned; never expires).
   *  false = holds an emailed invite link, which does expire. */
  has_password: boolean;
  /** 'google' = signed up through staff SSO; 'email' = invite or password. */
  provider?: string;
  created_at?: string;
}

export type InviteState = 'active' | 'awaiting-first-signin' | 'invite-pending' | 'invite-expired' | 'unknown';

/** Which of the four states an account is in, given its auth row. */
export function inviteState(s: AccountStatusRow | undefined): InviteState {
  if (!s) return 'unknown';
  if (s.last_sign_in_at) return 'active';
  // provisioned with a temporary password — nothing to expire
  if (s.has_password) return 'awaiting-first-signin';
  if (!s.invited_at) return 'unknown';
  const ageHours = (Date.now() - new Date(s.invited_at).getTime()) / 3_600_000;
  return ageHours > INVITE_LINK_HOURS ? 'invite-expired' : 'invite-pending';
}

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: AppRole;
  /** admin-assigned training path; the user only sees this role's modules. NULL = unrestricted. */
  training_role: TrainingRole | null;
  active: boolean;
  /** The owner account. Stays role='admin' so all admin powers apply; the flag
   *  only stops OTHER admins changing its role or deactivating it (enforced by
   *  the protect_superadmin trigger, not just by hiding the controls). */
  is_superadmin?: boolean;
}

export interface RemoteProgress {
  lesson_id: string;
  last_step: number;
  total_steps: number;
  completed: boolean;
  updated_at?: string;
}
