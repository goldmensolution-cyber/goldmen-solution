import type { Session, User } from '@supabase/supabase-js'

let initialized = false
let bootPromise: Promise<void> | null = null

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const session = useState<Session | null>('goldmen-session', () => null)
  const user = useState<User | null>('goldmen-user', () => null)
  const ready = useState<boolean>('goldmen-auth-ready', () => false)

  const sync = (nextSession: Session | null) => {
    session.value = nextSession
    user.value = nextSession?.user ?? null
    ready.value = true
  }

  const setSession = (nextSession: Session | null) => {
    sync(nextSession)
  }

  const bootstrap = async () => {
    if (bootPromise) {
      return bootPromise
    }

    bootPromise = (async () => {
      const { data } = await supabase.auth.getSession()
      sync(data.session)

      if (import.meta.client && !initialized) {
        initialized = true
        supabase.auth.onAuthStateChange((_event, nextSession) => {
          sync(nextSession)
        })
      }
    })()

    return bootPromise
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    sync(null)
  }

  return {
    supabase,
    session,
    user,
    ready,
    bootstrap,
    setSession,
    signOut
  }
}
