// Supabase Edge Function: invite-user
//
// Creates an account on an admin's behalf, using the service-role key
// server-side (never exposed to the browser). Two delivery modes:
//
//   deliver: 'email'    — Supabase emails an invite link (default; subject to
//                         the project's hourly mail cap)
//   deliver: 'password' — the account is created immediately with a generated
//                         temporary password, returned ONCE to the caller for
//                         the admin to pass on. Nothing is emailed, so this
//                         sidesteps the cap entirely — which is what makes
//                         onboarding a plant's worth of operators practical.
//
// Either way the invite row is written first, so handle_new_user applies the
// role, training path, organisation and plant membership at signup.
//
// Deploy from the Supabase dashboard → Edge Functions → invite-user → paste →
// Deploy. SUPABASE_URL, SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY are
// injected automatically.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  });
}

// no 0/O/1/l/I — these get read aloud and retyped
const ALPHA = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function tempPassword(): string {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  const chars = [...bytes].map((b) => ALPHA[b % ALPHA.length]);
  return `${chars.slice(0, 4).join('')}-${chars.slice(4, 8).join('')}-${chars.slice(8, 12).join('')}`;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });

  const url = Deno.env.get('SUPABASE_URL')!;
  const anon = Deno.env.get('SUPABASE_ANON_KEY')!;
  const serviceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const authHeader = req.headers.get('Authorization') ?? '';

  // 1) identify the caller from their session token
  const caller = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
  const { data: who } = await caller.auth.getUser();
  const callerId = who?.user?.id;
  if (!callerId) return json(401, { error: 'Not signed in' });

  // 2) confirm the caller is an active admin (service role bypasses RLS)
  const admin = createClient(url, serviceRole);
  const { data: prof } = await admin
    .from('profiles')
    .select('role, active, is_superadmin')
    .eq('id', callerId)
    .single();
  if (!prof || prof.role !== 'admin' || prof.active !== true) {
    return json(403, { error: 'Admins only' });
  }
  // This function writes with the service key, which bypasses the
  // protect_admin_invites trigger — so the "only the owner mints admins" rule
  // has to be re-checked HERE. Without it, any admin could invite a new admin
  // through this endpoint and walk around the database guard entirely.
  const callerIsOwner = prof.is_superadmin === true;

  // 3) read input
  let payload: {
    email?: string;
    full_name?: string;
    role?: string;
    training_role?: string;
    org_id?: string | null;
    plant_id?: string | null;
    plant_role?: string | null;
    deliver?: string;
    redirectTo?: string;
  };
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid body' });
  }
  const email = (payload.email ?? '').trim().toLowerCase();
  if (!email) return json(400, { error: 'Email required' });
  // keep the whole role set (admin/csm/user) — the old code silently downgraded
  // every csm invite to a plain user.
  const role = ['admin', 'csm', 'user'].includes(payload.role ?? '') ? payload.role! : 'user';
  if (role === 'admin' && !callerIsOwner) {
    return json(403, { error: 'Only the superadmin can invite an admin.' });
  }
  // the training path only locks plain users; staff (admin/csm) roam all modules
  const training_role =
    role === 'user' && ['operator', 'supervisor', 'internal'].includes(payload.training_role ?? '')
      ? payload.training_role!
      : null;
  const plant_role = ['head', 'supervisor', 'operator'].includes(payload.plant_role ?? '')
    ? payload.plant_role!
    : null;
  const org_id = payload.org_id ?? null;
  const plant_id = payload.plant_id ?? null;

  // an account already on the platform is added to the plant, not recreated
  const { data: existing } = await admin.from('profiles').select('id').eq('email', email).maybeSingle();
  if (existing) {
    if (plant_id) {
      await admin
        .from('plant_members')
        .upsert({ user_id: existing.id, plant_id, plant_role: plant_role ?? 'operator' },
                { onConflict: 'user_id,plant_id' });
      return json(200, { ok: true, existing: true });
    }
    return json(409, { error: 'That email already has an account.' });
  }

  // 4) pre-authorise role, path, tenant and plant so the signup trigger applies them
  const { error: invErr } = await admin.from('invites').insert({
    email, role, training_role, org_id, plant_id, plant_role, created_by: callerId,
  });
  if (invErr) return json(400, { error: invErr.message });

  // 5a) immediate account with a temporary password — nothing emailed
  if (payload.deliver === 'password') {
    const password = tempPassword();
    const { error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: payload.full_name ?? null, must_set_password: true },
    });
    if (error) return json(400, { error: error.message });
    // returned ONCE — it is never stored anywhere readable
    return json(200, { ok: true, password });
  }

  // 5b) or the emailed invite link
  const { error } = await admin.auth.admin.inviteUserByEmail(email, { redirectTo: payload.redirectTo });
  if (error) return json(400, { error: error.message });
  return json(200, { ok: true });
});
