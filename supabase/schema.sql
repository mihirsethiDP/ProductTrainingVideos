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

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self on public.profiles
  for update using (id = auth.uid() or public.is_admin());

drop policy if exists profiles_admin_all on public.profiles;
create policy profiles_admin_all on public.profiles
  for all using (public.is_admin()) with check (public.is_admin());

-- invites: only admins
drop policy if exists invites_admin on public.invites;
create policy invites_admin on public.invites
  for all using (public.is_admin()) with check (public.is_admin());

-- lesson_progress: a user reads/writes their own; admins read everyone's
drop policy if exists lp_own on public.lesson_progress;
create policy lp_own on public.lesson_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists lp_admin_read on public.lesson_progress;
create policy lp_admin_read on public.lesson_progress
  for select using (public.is_admin());

-- ---------- bootstrap your admin account ----------
-- 1) Sign up once through the app with your email.
-- 2) Then run this (replace the email) to make yourself an admin:
--    update public.profiles set role = 'admin' where email = 'you@digitalpaani.com';

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

-- approval workflow: personalized demos publish straight away; lesson/module
-- content uploaded by a CSM waits for an admin's approval first.
alter table public.generation_jobs add column if not exists approval_status text not null default 'not_required';
alter table public.generation_jobs add column if not exists approved_by uuid references auth.users (id);
alter table public.generation_jobs add column if not exists reviewed_at timestamptz;
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

  insert into public.profiles (id, email, full_name, role, training_role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(inv.role, 'user'),
    inv.training_role
  );

  if inv.id is not null then
    update public.invites set used = true where id = inv.id;
  end if;

  return new;
end;
$$;
