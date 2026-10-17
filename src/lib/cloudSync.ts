import type { Session } from '@supabase/supabase-js'
import { getSupabase } from './supabase'

/**
 * Cloud sync of the user's saved state (trip + progress) to the `trips` table.
 * One row per user, protected by row-level security (see supabase/migrations).
 * Contains no passport numbers or identity documents.
 */

export async function getSession(): Promise<Session | null> {
  const sb = getSupabase()
  if (!sb) return null
  const { data } = await (await sb).auth.getSession()
  return data.session
}

export async function onAuthChange(cb: (s: Session | null) => void): Promise<() => void> {
  const sb = getSupabase()
  if (!sb) return () => {}
  const { data } = (await sb).auth.onAuthStateChange((_e, session) => cb(session))
  return () => data.subscription.unsubscribe()
}

export async function sendMagicLink(email: string): Promise<string | null> {
  const sb = getSupabase()
  if (!sb) return 'not-configured'
  const { error } = await (await sb).auth.signInWithOtp({ email, options: { emailRedirectTo: `${location.origin}/settings` } })
  return error?.message ?? null
}

export async function signOut(): Promise<void> {
  const sb = getSupabase()
  if (sb) await (await sb).auth.signOut()
}

export async function pushState(userId: string, data: unknown): Promise<string | null> {
  const sb = getSupabase()
  if (!sb) return 'not-configured'
  const { error } = await (await sb)
    .from('trips')
    .upsert({ user_id: userId, data, updated_at: new Date().toISOString() }, { onConflict: 'user_id' })
  return error?.message ?? null
}

export async function pullState<T>(userId: string): Promise<{ data: T | null; updatedAt: string | null; error: string | null }> {
  const sb = getSupabase()
  if (!sb) return { data: null, updatedAt: null, error: 'not-configured' }
  const { data, error } = await (await sb).from('trips').select('data, updated_at').eq('user_id', userId).maybeSingle()
  return { data: (data?.data as T) ?? null, updatedAt: data?.updated_at ?? null, error: error?.message ?? null }
}
