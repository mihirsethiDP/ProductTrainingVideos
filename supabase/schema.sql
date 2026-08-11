-- DigitalPaani Training — Supabase schema
-- Run this once in your project's SQL editor (Dashboard → SQL Editor → New query).
-- Safe to re-run: uses "if not exists" / "or replace" throughout.

-- ---------- tables ----------

create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text not null,
  full_name   text,
  role        text not null default 'user' check (role in ('admin', 'user')),
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

create table if not exists public.invites (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  role        text not null default 'user' check (role in ('admin', 'user')),
  used        boolean not null default false,
  created_by  uuid references auth.users (id),
  created_at  timestamptz not null default now()
);
create index if not exists invites_email_idx on public.invites (lower(email));

create table if not exists public.lesson_progress (
  user_id     uuid not null references auth.users (id) on delete cascade,
  lesson_id   text not null,
  last_step   integer not null default 0,
  total_steps integer not null default 0,
  completed   boolean not null default false,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

-- ---------- helper: am I an admin? (SECURITY DEFINER avoids RLS recursion) ----------

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin' and active = true
  );
$$;

-- ---------- new-user trigger: create a profile, applying any invite ----------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  inv public.invites%rowtype;
begin
  select * into inv
  from public.invites
  where lower(email) = lower(new.email) and used = false
  order by created_at desc
  limit 1;

  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(inv.role, 'user')
  );

  if inv.id is not null then
    update public.invites set used = true where id = inv.id;
  end if;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- row-level security ----------

alter table public.profiles        enable row level security;
alter table public.invites         enable row level security;
alter table public.lesson_progress enable row level security;

-- profiles: a user sees/edits their own row; admins see/manage all
drop policy if exists profiles_select_self on public.profiles;
create policy profiles_select_self on public.profiles
  for select using (id = auth.uid() or public.is_admin());

-- profiles UPDATE is ADMIN-ONLY (handled by profiles_admin_all below). A plain
-- user must NOT be able to UPDATE their own row: the old self-update policy had
-- no WITH CHECK, so any signed-in user could set their own role='admin',
-- active=true, or clear training_role and escape their locked path. There is no
-- self-service profile field today; if one is ever added, route it through a
-- SECURITY DEFINER RPC that whitelists exactly that column instead of reopening
-- a blanket self-update.
drop policy if exists profiles_update_self on public.profiles;

drop policy if exists profiles_admin_all on public.profiles;
create policy profiles_admin_all on public.profiles
  for all using (public.is_admin()) with check (public.is_admin());

-- invites: only admins
drop policy if exists invites_admin on public.invites;
create policy invites_admin on public.invites
  for all using (public.is_admin()) with check (public.is_admin());

-- am I an *active* account? (a deactivated user's session token stays valid
-- until sign-out completes; this stops it authorizing data reads/writes)
create or replace function public.is_active()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and active = true
  );
$$;

-- lesson_progress: an *active* user reads/writes their own; admins read everyone's
drop policy if exists lp_own on public.lesson_progress;
create policy lp_own on public.lesson_progress
  for all using (user_id = auth.uid() and public.is_active())
  with check (user_id = auth.uid() and public.is_active());

drop policy if exists lp_admin_read on public.lesson_progress;
create policy lp_admin_read on public.lesson_progress
  for select using (public.is_admin());

-- ---------- bootstrap your first admin account ----------
-- Signup is invite-only: an un-invited signup lands inactive (see
-- handle_new_user below), so the very first admin must be seeded by hand.
-- 1) Pre-authorize yourself, THEN sign up through the app with that email:
--      insert into public.invites (email, role) values ('you@digitalpaani.com', 'admin');
-- 2) (or, if a profile row already exists) promote + activate it directly:
--      update public.profiles set role = 'admin', active = true
--      where email = 'you@digitalpaani.com';
-- After that, invite everyone else from the in-app Admin page.

-- ============================================================
--  Content Studio — upload recordings/content; Claude turns them
--  into personalized demos and new lessons.
-- ============================================================

-- queued uploads awaiting generation. Everything here is admin-only — demos and
-- lessons are authored for admins to present; nothing is assigned to clients.
create table if not exists public.generation_jobs (
  id               uuid primary key default gen_random_uuid(),
  kind             text not null check (kind in ('demo', 'content')),
  title            text not null,
  storage_path     text not null,        -- object path inside the 'uploads' bucket
  status           text not null default 'queued' check (status in ('queued', 'processing', 'done', 'failed')),
  result_lesson_id text,                  -- the generated lesson id, once done
  notes            text,                  -- implementer instructions, or a failure reason
  created_by       uuid references auth.users (id),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- files over the storage per-object limit are split into N byte-chunks on the
-- client (object.part0..partN-1) and reassembled by the generator. 1 = single file.
alter table public.generation_jobs add column if not exists parts integer not null default 1;

-- a job can carry MULTIPLE context files (recording + pdf + docx + notes …).
-- storage_path then holds the folder prefix; files lists [{name, parts}] within
-- it. Empty array = legacy single-file job (storage_path + parts).
alter table public.generation_jobs add column if not exists files jsonb not null default '[]'::jsonb;

-- demo jobs: how deep the generated demo should go
alter table public.generation_jobs add column if not exists demo_style text not null default 'overview';
alter table public.generation_jobs drop constraint if exists generation_jobs_demo_style_check;
alter table public.generation_jobs add constraint generation_jobs_demo_style_check
  check (demo_style in ('overview', 'detailed'));

-- content jobs: enhance an existing module, or start a new one
alter table public.generation_jobs add column if not exists content_mode text
  check (content_mode in ('enhance', 'new'));
alter table public.generation_jobs add column if not exists target_module text; -- module id when content_mode='enhance'

-- approval workflow: personalized demos publish straight away; lesson/module
-- content uploaded by a CSM waits for an admin's approval first.
alter table public.generation_jobs add column if not exists approval_status text not null default 'not_required';
alter table public.generation_jobs add column if not exists approved_by uuid references auth.users (id);
alter table public.generation_jobs add column if not exists reviewed_at timestamptz;
-- the admin's reason when a lesson upload is rejected (kept separate from the
-- uploader's own `notes`, which are the AI instruction layer)
alter table public.generation_jobs add column if not exists reviewer_note text;
alter table public.generation_jobs drop constraint if exists generation_jobs_approval_status_check;
alter table public.generation_jobs add constraint generation_jobs_approval_status_check
  check (approval_status in ('not_required', 'pending', 'approved', 'rejected'));

alter table public.generation_jobs enable row level security;

-- ---------- CSM role (formerly 'implementer') ----------
-- Third role: 'csm' — can upload demos & lesson content, but has no admin
-- powers. Their lesson/module uploads need admin approval.
alter table public.profiles drop constraint if exists profiles_role_check;
update public.profiles set role = 'csm' where role = 'implementer'; -- one-time rename migration
alter table public.profiles add constraint profiles_role_check check (role in ('admin', 'csm', 'user'));

-- invites must accept the csm role too (the original check only allowed admin/user)
alter table public.invites drop constraint if exists invites_role_check;
update public.invites set role = 'csm' where role = 'implementer';
alter table public.invites add constraint invites_role_check check (role in ('admin', 'csm', 'user'));

-- can this user create content (CSM or admin)?
create or replace function public.can_create()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'csm') and active = true
  );
$$;

-- on insert: stamp the owner, and set the approval gate. Demos never need
-- approval; content is auto-approved only when an admin uploads it.
create or replace function public.set_job_approval()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.created_by := auth.uid();
  if new.kind = 'demo' then
    new.approval_status := 'not_required';
  else
    new.approval_status := case when public.is_admin() then 'approved' else 'pending' end;
  end if;
  return new;
end;
$$;

drop trigger if exists gen_jobs_approval on public.generation_jobs;
create trigger gen_jobs_approval
  before insert on public.generation_jobs
  for each row execute function public.set_job_approval();

-- generation_jobs RLS: creators read/insert their own; admins manage everything
drop policy if exists genjobs_admin on public.generation_jobs;
drop policy if exists genjobs_select on public.generation_jobs;
create policy genjobs_select on public.generation_jobs
  for select using (created_by = auth.uid() or public.is_admin());
drop policy if exists genjobs_insert on public.generation_jobs;
create policy genjobs_insert on public.generation_jobs
  for insert with check (public.can_create());
drop policy if exists genjobs_update on public.generation_jobs;
create policy genjobs_update on public.generation_jobs
  for update using (public.is_admin()) with check (public.is_admin());
drop policy if exists genjobs_delete on public.generation_jobs;
create policy genjobs_delete on public.generation_jobs
  for delete using (public.is_admin());

-- ---------- storage ----------
-- Create a PRIVATE bucket named 'uploads' in the dashboard (Storage → New bucket
-- → name 'uploads', Public = off). Then these policies let creators upload & read:
drop policy if exists uploads_admin_all on storage.objects;
drop policy if exists uploads_create_all on storage.objects;
create policy uploads_create_all on storage.objects
  for all using (bucket_id = 'uploads' and public.can_create())
  with check (bucket_id = 'uploads' and public.can_create());

-- ---------- migrate existing admins to CSM (keep only Mihir as admin) ----------
-- Run this once. Everyone currently an admin EXCEPT mihir.sethi@digitalpaani.com
-- becomes a CSM and loses admin functionality.
update public.profiles
  set role = 'csm'
  where role = 'admin' and lower(email) <> 'mihir.sethi@digitalpaani.com';

-- ============================================================
--  Training role — assigned by the admin at invite time.
--  A user with a training_role only sees that role's modules
--  (operator / supervisor / internal). NULL = unrestricted
--  (legacy accounts, admins, CSMs).
-- ============================================================

alter table public.profiles add column if not exists training_role text
  check (training_role in ('operator', 'supervisor', 'internal'));
alter table public.invites add column if not exists training_role text
  check (training_role in ('operator', 'supervisor', 'internal'));

-- re-create the signup trigger so an invite's training_role is applied too
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  inv public.invites%rowtype;
begin
  select * into inv
  from public.invites
  where lower(email) = lower(new.email) and used = false
  order by created_at desc
  limit 1;

  -- INVITE-ONLY: a signup with no matching unused invite lands INACTIVE, so it
  -- can never reach gated content (AuthContext signs inactive accounts straight
  -- back out). Invited accounts (created via inviteUserByEmail after the invite
  -- row is written) come in active with the admin-chosen role + training path.
  insert into public.profiles (id, email, full_name, role, training_role, active)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(inv.role, 'user'),
    inv.training_role,
    inv.id is not null
  );

  if inv.id is not null then
    update public.invites set used = true where id = inv.id;
  end if;

  return new;
end;
$$;

-- ============================================================
--  Equipment library — plant-scoped photos & videos of physical
--  equipment (a trainer explaining a pump, a blower, a valve).
--  Google Drive holds the BYTES; this only holds the index, so
--  the repo/bundle stays small and content updates need no deploy.
--  DP staff (admin/csm) curate; each item gets an unguessable
--  share_token so a single item can be forwarded to plant staff
--  with no sign-in (see shared_equipment_media below).
-- ============================================================

create table if not exists public.plants (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  workspace   text,                       -- client workspace, for grouping/search
  asset_ref   text,                       -- main-platform asset id, so this can be reconciled later
  created_at  timestamptz not null default now()
);
create unique index if not exists plants_name_key on public.plants (lower(name));
-- Optional per-plant Drive destination folder. Null = use the app default
-- (src/config/drive.ts). Lets each plant file its equipment media separately.
alter table public.plants add column if not exists drive_folder_id text;

create table if not exists public.plant_media (
  id            uuid primary key default gen_random_uuid(),
  plant_id      uuid not null references public.plants (id) on delete cascade,
  media_kind    text not null default 'video' check (media_kind in ('video', 'photo')),
  title         text not null,
  equipment     text,                     -- free label: "Softener-1 feed pump", "Blower room"
  description   text,
  drive_file_id text not null,            -- Google Drive file id (bytes live there)
  share_token   uuid not null default gen_random_uuid(),
  created_by    uuid references auth.users (id),
  created_at    timestamptz not null default now()
);
create unique index if not exists plant_media_share_token_key on public.plant_media (share_token);
create index if not exists plant_media_plant_idx on public.plant_media (plant_id, created_at desc);

alter table public.plants enable row level security;
alter table public.plant_media enable row level security;

-- plants: any signed-in user may read (dropdowns); staff manage
drop policy if exists plants_read on public.plants;
create policy plants_read on public.plants for select using (auth.uid() is not null);
drop policy if exists plants_write on public.plants;
create policy plants_write on public.plants
  for all using (public.can_create()) with check (public.can_create());

-- plant_media: STAFF ONLY for the browsable library. Deliberately NOT readable by
-- plain trainees: users carry no plant assignment yet, so a blanket read would let
-- one client's operator list another client's equipment. Plant staff reach a single
-- item through its share link (the RPC below), never the whole library.
drop policy if exists plant_media_read on public.plant_media;
create policy plant_media_read on public.plant_media for select using (public.can_create());
drop policy if exists plant_media_write on public.plant_media;
create policy plant_media_write on public.plant_media
  for all using (public.can_create()) with check (public.can_create());

-- Zero-auth watch: returns EXACTLY the one item matching an unguessable token.
-- SECURITY DEFINER so it bypasses the staff-only read policy, but it can never
-- list the library — no token, no row.
create or replace function public.shared_equipment_media(token uuid)
returns table (
  id uuid, media_kind text, title text, equipment text, description text,
  drive_file_id text, plant_name text, created_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select m.id, m.media_kind, m.title, m.equipment, m.description,
         m.drive_file_id, p.name as plant_name, m.created_at
  from public.plant_media m
  join public.plants p on p.id = m.plant_id
  where m.share_token = token
  limit 1;
$$;

revoke all on function public.shared_equipment_media(uuid) from public;
grant execute on function public.shared_equipment_media(uuid) to anon, authenticated;

-- ============================================================
--  Admin activity log — sign-ins, sign-outs, invites, account
--  changes. GoTrue records these in auth.audit_log_entries, which
--  PostgREST does NOT expose to the client. This SECURITY DEFINER
--  function reads that table (plus the invites table) on the admin's
--  behalf and is gated to admins only. Exposed to the app as
--  supabase.rpc('admin_activity').
-- ============================================================
create or replace function public.admin_activity(limit_n int default 250)
returns table (at timestamptz, action text, email text, ip text)
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  return query
  with ev as (
    -- real auth events: login, logout, user_invited, user_signedup,
    -- user_recovery_requested, user_modified, … (token refreshes filtered out)
    select
      a.created_at as at,
      coalesce(a.payload ->> 'action', '?') as action,
      coalesce(
        nullif(a.payload #>> '{traits,user_email}', ''),  -- the affected user (admin actions)
        nullif(a.payload ->> 'actor_username', ''),        -- the actor (self actions: login/logout)
        u.email
      ) as email,
      nullif(a.ip_address::text, '') as ip  -- ip_address is varchar in this project, not inet
    from auth.audit_log_entries a
    left join auth.users u on u.id = nullif(a.payload ->> 'actor_id', '')::uuid
    where coalesce(a.payload ->> 'action', '') <> 'token_refreshed'
    union all
    -- invites recorded in-app (before/without an email send)
    select i.created_at, 'invite_created', i.email, null
    from public.invites i
    union all
    -- reliable sign-in recency + account age straight from auth.users.
    -- auth.audit_log_entries can be sparse on hosted Supabase (login/logout
    -- events may be missing), but last_sign_in_at is always maintained.
    select uu.last_sign_in_at, 'signed_in', uu.email, null
    from auth.users uu
    where uu.last_sign_in_at is not null
    union all
    select uu.created_at, 'account_created', uu.email, null
    from auth.users uu
  )
  select ev.at, ev.action, ev.email, ev.ip
  from ev
  order by ev.at desc
  limit greatest(1, least(limit_n, 1000));
end;
$$;

-- only signed-in admins may call it (the body also re-checks is_admin())
revoke all on function public.admin_activity(int) from public, anon;
grant execute on function public.admin_activity(int) to authenticated;

-- ============================================================================
--  Superadmin — one protected owner account
--
--  Admins keep every power they had: invite users, assign a role at invite
--  time, change anyone's role, activate/deactivate. What they cannot do is
--  touch the OWNER's account — otherwise "admin" is really "can demote the
--  owner", and any admin could lock the owner out of their own platform.
--
--  Implemented as a FLAG, deliberately not a fourth `role` value: is_admin()
--  and can_create() both test `role`, so introducing role='superadmin' would
--  demote the owner everywhere those checks were missed. As a flag the owner
--  stays role='admin' — every existing permission keeps working untouched and
--  this block only *subtracts* what others may do.
--
--  Enforced by a TRIGGER, not only RLS: RLS grants or denies a whole row, and
--  admins legitimately need UPDATE on profiles. A trigger can allow the row
--  but reject the three columns that matter, and it fires on every path in —
--  the app, a raw REST call with an admin's token, or psql.
-- ============================================================================

alter table public.profiles add column if not exists is_superadmin boolean not null default false;

create or replace function public.is_superadmin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_superadmin = true and active = true
  );
$$;

-- ----------------------------------------------------------------------------
--  The handover model (chosen 2026-07-29, when the tool passed from its author
--  to the customer-facing teams).
--
--  An ADMIN may:      invite users and CSMs, change a user/CSM role, and
--                     activate or deactivate a user/CSM.
--  An ADMIN may NOT:  grant the admin role, or change ANY admin account —
--                     not the owner's, and not a peer's. Admins cannot demote,
--                     deactivate or delete each other.
--  Only the OWNER:    creates admins, and changes or removes an admin account.
--
--  Rationale: the admin pool must stay deliberate. Without the "no minting"
--  rule the first admin handed over can promote anyone, and the pool grows
--  without the owner. Without peer protection, two admins in a disagreement
--  can deactivate each other, and whoever clicks first wins.
-- ----------------------------------------------------------------------------
create or replace function public.protect_admin_accounts()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  -- NOTE: false for the service key, psql and the SQL editor (auth.uid() is
  -- NULL there). That is deliberate — those callers are blocked too. See the
  -- recovery note at the bottom of this block.
  actor_is_owner boolean := public.is_superadmin();
begin
  if tg_op = 'DELETE' then
    if old.is_superadmin then
      raise exception 'The superadmin account cannot be deleted.';
    end if;
    if old.role = 'admin' and not actor_is_owner then
      raise exception 'Only the superadmin can remove an admin account.';
    end if;
    return old;
  end if;

  if not actor_is_owner then
    -- an admin account — owner's or a peer's — is untouchable by anyone else.
    -- full_name is left alone on purpose; only the fields that carry power are
    -- guarded, so a display-name correction still works.
    if (old.is_superadmin or old.role = 'admin')
       and (new.role <> old.role
            or new.active <> old.active
            or new.is_superadmin <> old.is_superadmin
            or new.training_role is distinct from old.training_role) then
      raise exception 'Only the superadmin can change an admin account.';
    end if;

    -- no minting: nobody but the owner creates a new admin
    if new.role = 'admin' and old.role <> 'admin' then
      raise exception 'Only the superadmin can grant the admin role.';
    end if;

    -- and no self-promotion to owner
    if new.is_superadmin and not old.is_superadmin then
      raise exception 'Only a superadmin can grant superadmin.';
    end if;
  end if;

  return new;
end;
$$;

-- The other minting path: an invite pre-authorises a role, which the signup
-- trigger applies when the account is created. Guard it too, or "invite a new
-- admin" walks straight around the profiles rules above.
--
-- auth.uid() IS NULL is allowed here because the invite-user Edge Function
-- inserts with the service key AFTER doing its own owner check — blocking NULL
-- would break every emailed invite. The browser fallback path in Admin.tsx
-- inserts with the caller's own token, so it is covered.
create or replace function public.protect_admin_invites()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role = 'admin' and auth.uid() is not null and not public.is_superadmin() then
    raise exception 'Only the superadmin can invite an admin.';
  end if;
  return new;
end;
$$;

-- Disarm → crown the owner → arm. The rules above would otherwise block this
-- very statement (auth.uid() is NULL in the SQL editor), and this order makes
-- the whole block safe to re-run at any time.
drop trigger if exists trg_protect_superadmin on public.profiles;   -- earlier name
drop trigger if exists trg_protect_admin_accounts on public.profiles;

update public.profiles
   set is_superadmin = true, role = 'admin', active = true
 where lower(email) = 'mihir.sethi@digitalpaani.com';

create trigger trg_protect_admin_accounts
  before update or delete on public.profiles
  for each row execute function public.protect_admin_accounts();

drop trigger if exists trg_protect_admin_invites on public.invites;
create trigger trg_protect_admin_invites
  before insert or update on public.invites
  for each row execute function public.protect_admin_invites();

-- Recovery, if the owner account is ever genuinely lost: as the project owner in
-- the SQL editor, `alter table public.profiles disable trigger
-- trg_protect_admin_accounts;` make the change, then re-enable it. Database
-- access is the root of trust — these guards stop admins inside the app, not
-- whoever holds the DB keys.

-- ============================================================================
--  Invite state, for the Admin roster
--
--  A name in the roster looks identical whether the person never opened their
--  email, the link died, or they are using the tool daily. That ambiguity is
--  what makes the mailer's low hourly cap read as a broken tool, so surface it.
--
--  Everything needed lives in auth.users, which the app cannot read directly —
--  hence SECURITY DEFINER, guarded by is_admin() in the body (same shape as
--  admin_activity above).
--
--  has_password separates the two ways an account is created:
--    invited        — no password yet, holds a link that EXPIRES
--    provisioned    — admin set a temporary password, which never expires
--  Without it, the five password-provisioned admins would show as "expired"
--  invites forever, which is exactly backwards.
-- ============================================================================
create or replace function public.admin_account_status()
returns table (
  id                uuid,
  invited_at        timestamptz,
  confirmed_at      timestamptz,
  last_sign_in_at   timestamptz,
  has_password      boolean
)
language sql
security definer
set search_path = public
as $$
  select
    u.id,
    u.invited_at,
    u.confirmed_at,
    u.last_sign_in_at,
    (u.encrypted_password is not null and u.encrypted_password <> '') as has_password
  from auth.users u
  where public.is_admin();
$$;

revoke all on function public.admin_account_status() from public, anon;
grant execute on function public.admin_account_status() to authenticated;

-- ============================================================================
--  Google SSO for DigitalPaani staff
--
--  Customers stay invite-only. Staff get one sanctioned exception: sign in with
--  their @digitalpaani.com Google account — no invite, no password, and no email
--  anywhere in the loop, which is why this sidesteps the mailer's hourly cap
--  entirely for the internal team.
--
--  THE DOMAIN RULE LIVES HERE, not in the client. The `hd` parameter the login
--  page sends only pre-filters Google's account chooser; a Google account can
--  carry any address and that hint is trivially removed. Raising inside this
--  BEFORE-trigger aborts the whole signup, so a rejected address leaves no
--  orphan auth row and no orphan profile.
--
--  Staff who sign in this way land as role='user' on the INTERNAL training path.
--  Anyone who needs csm or admin is promoted afterwards from the Admin page —
--  and per the handover model, only the owner can grant admin.
--
--  NOTE for existing accounts: this fires on INSERT only. When someone who
--  already has a password account signs in with Google on the SAME address,
--  GoTrue links the identity to the existing user, so no row is inserted, this
--  never runs, and their role is preserved. Test that path with one account
--  before telling the whole team to switch.
-- ============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  inv         public.invites%rowtype;
  is_google   boolean := coalesce(new.raw_app_meta_data ->> 'provider', '') = 'google';
  is_staff    boolean := lower(new.email) like '%@digitalpaani.com';
begin
  if is_google and not is_staff then
    raise exception 'Google sign-in is limited to @digitalpaani.com accounts. Ask an admin for an invite instead.';
  end if;

  select * into inv
  from public.invites
  where lower(email) = lower(new.email) and used = false
  order by created_at desc
  limit 1;

  -- INVITE-ONLY still holds for email signups: no matching unused invite means
  -- the account lands INACTIVE and can never reach gated content (AuthContext
  -- signs inactive accounts straight back out). Staff-domain Google is the one
  -- exception, and it comes in as a plain user on the internal path.
  insert into public.profiles (id, email, full_name, role, training_role, active)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    coalesce(inv.role, 'user'),
    coalesce(inv.training_role, case when is_google and is_staff then 'internal' end),
    inv.id is not null or (is_google and is_staff)
  );

  if inv.id is not null then
    update public.invites set used = true where id = inv.id;
  end if;

  return new;
end;
$$;

-- Surface the sign-in provider in the roster, so the owner can see at a glance
-- who arrived via Google rather than by invite. Replaces the earlier version.
create or replace function public.admin_account_status()
returns table (
  id                uuid,
  invited_at        timestamptz,
  confirmed_at      timestamptz,
  last_sign_in_at   timestamptz,
  has_password      boolean,
  provider          text,
  created_at        timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    u.id,
    u.invited_at,
    u.confirmed_at,
    u.last_sign_in_at,
    (u.encrypted_password is not null and u.encrypted_password <> '') as has_password,
    coalesce(u.raw_app_meta_data ->> 'provider', 'email') as provider,
    u.created_at
  from auth.users u
  where public.is_admin();
$$;

revoke all on function public.admin_account_status() from public, anon;
grant execute on function public.admin_account_status() to authenticated;
