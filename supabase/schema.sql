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
