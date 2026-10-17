-- Umrah Companion - optional cloud sync + remote cost assumptions.
-- Run in Supabase SQL editor (or `supabase db push`).

-- One saved plan per signed-in user (trip inputs, itinerary notes, guide progress).
create table if not exists public.trips (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.trips enable row level security;

create policy "Users read their own trip" on public.trips
  for select using (auth.uid() = user_id);
create policy "Users insert their own trip" on public.trips
  for insert with check (auth.uid() = user_id);
create policy "Users update their own trip" on public.trips
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users delete their own trip" on public.trips
  for delete using (auth.uid() = user_id);

-- Public, read-only configuration (e.g. key 'cost_config' with a partial CostConfig JSON).
-- Edit rows from the Supabase dashboard; there is deliberately no write policy for clients.
create table if not exists public.app_config (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_config enable row level security;

create policy "Anyone can read app config" on public.app_config
  for select using (true);

-- Example override (uncomment and edit):
-- insert into public.app_config (key, value) values
--   ('cost_config', '{"sarToBdt": 32.9, "reviewed": "2026-10-17"}')
-- on conflict (key) do update set value = excluded.value, updated_at = now();
