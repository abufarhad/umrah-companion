import type { CostConfig } from '../content/costConfig'
import { getSupabase } from './supabase'

/**
 * Optional: an admin can override cost assumptions (exchange rate, hotel
 * rates…) in the Supabase `app_config` table under key `cost_config`, without
 * redeploying. Returns null when Supabase isn't configured or nothing is set.
 */
export async function fetchRemoteCostConfig(): Promise<Partial<CostConfig> | null> {
  const sb = getSupabase()
  if (!sb) return null
  try {
    const { data, error } = await (await sb).from('app_config').select('value').eq('key', 'cost_config').maybeSingle()
    if (error || !data) return null
    return data.value as Partial<CostConfig>
  } catch {
    return null
  }
}
