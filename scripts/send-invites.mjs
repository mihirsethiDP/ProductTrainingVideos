/**
 * Email out pending invites. The in-app Admin invite only RECORDS the invite
 * (no backend to send mail from a static site); this script — run by the
 * scheduled agent — actually sends the Supabase invite email.
 *
 * An invite is "pending" when its row is unused AND no auth user exists for
 * the email yet (inviteUserByEmail creates the user, which fires the signup
 * trigger that consumes the invite row and applies role + training path).
 *
 * Supabase's built-in mailer is rate-limited (a few emails/hour on free
 * plans), so rate-limited sends are simply left for the next run.
 *
 * Usage: node scripts/send-invites.mjs
 * Needs the service-role key ($SUPABASE_SERVICE_ROLE or scripts/service.local).
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';

const SUPABASE_URL = 'https://zilwylqyhbejgmbizywh.supabase.co';
const APP_URL = 'https://mihirsethidp.github.io/ProductTrainingVideos/';
const KEY_FILE = path.resolve('scripts/service.local');
const SERVICE_ROLE =
  process.env.SUPABASE_SERVICE_ROLE ||
  (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, 'utf8').trim() : '');
if (!SERVICE_ROLE) {
  console.error('Missing service-role key.');
  process.exit(1);
}

const db = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

const { data: invites, error } = await db
  .from('invites')
  .select('email, role, training_role, created_at')
  .eq('used', false)
  .order('created_at', { ascending: true });
if (error) throw error;

// unique emails, newest invite wins (double-submits are common)
const pending = [...new Map((invites ?? []).map((i) => [i.email.toLowerCase(), i])).keys()];
if (pending.length === 0) {
  console.log('No pending invites.');
  process.exit(0);
}

// skip anyone who already has an auth account (their invite is just stale)
const { data: users } = await db.auth.admin.listUsers({ perPage: 1000 });
const existing = new Set((users?.users ?? []).map((u) => u.email?.toLowerCase()));

let sent = 0,
  skipped = 0,
  limited = 0;
for (const email of pending) {
  if (existing.has(email)) {
    skipped++;
    continue;
  }
  const { error: err } = await db.auth.admin.inviteUserByEmail(email, { redirectTo: APP_URL });
  if (!err) {
    console.log('  sent →', email);
    sent++;
  } else if (/rate limit/i.test(err.message)) {
    console.log('  rate-limited (next run will retry) →', email);
    limited++;
  } else {
    console.log('  FAILED →', email, ':', err.message);
  }
}
console.log(`Done. sent=${sent} already-registered=${skipped} rate-limited=${limited}`);
