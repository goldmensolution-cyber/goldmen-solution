import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

export const useSupabase = () => {
  const config = useRuntimeConfig()

  if (!client) {
    if (!config.public.supabaseUrl || !config.public.supabaseAnonKey) {
      throw new Error('Missing Supabase runtime config.')
    }

    client = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  }

  return client
}
