import type { SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && key)

let client: Promise<SupabaseClient> | null = null

/** Lazily loads the Supabase SDK only when it is configured and actually needed. */
export function getSupabase(): Promise<SupabaseClient> | null {
  if (!isSupabaseConfigured) return null
  client ??= import('@supabase/supabase-js').then(({ createClient }) =>
    createClient(url!, key!, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit' },
    }),
  )
  return client
}
