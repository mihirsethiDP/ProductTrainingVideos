// Supabase Edge Function: invite-user
// Sends a real invite email to a new user, using the service-role key
// server-side (never exposed to the browser). Only callable by an admin.
//
// Deploy from the Supabase dashboard → Edge Functions → Create function →
// name it "invite-user" → paste this code → Deploy. SUPABASE_URL,
// SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY are injected automatically.
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
  const { data: prof } = await admin.from('profiles').select('role, active').eq('id', callerId).single();
  if (!prof || prof.role !== 'admin' || prof.active !== true) {
    return json(403, { error: 'Admins only' });
  }

  // 3) read input
  let payload: { email?: string; role?: string; redirectTo?: string };
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid body' });
  }
  const email = (payload.email ?? '').trim().toLowerCase();
  const role = payload.role === 'admin' ? 'admin' : 'user';
  if (!email) return json(400, { error: 'Email required' });

  // 4) pre-authorize the role so the signup trigger applies it, then email
  await admin.from('invites').insert({ email, role, created_by: callerId });
  const { error } = await admin.auth.admin.inviteUserByEmail(email, { redirectTo: payload.redirectTo });
  if (error) return json(400, { error: error.message });

  return json(200, { ok: true });
});
