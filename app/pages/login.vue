<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

definePageMeta({
  layout: false,
  colorMode: 'light'
})

useSeoMeta({
  title: 'Sign in | Goldmen Solution',
  description: 'Sign in to Goldmen Solution with Google.'
})

useHead({
  script: [
    {
      src: 'https://accounts.google.com/gsi/client',
      async: true,
      defer: true
    }
  ]
})

type GoogleCredentialResponse = {
  credential?: string
}

const supabase = useSupabaseClient()
const { bootstrap, user, setSession } = useAuth()
const route = useRoute()
const config = useRuntimeConfig()

const errorMessage = ref('')
const loading = ref(false)
const initialized = ref(false)
const redirecting = ref(false)

const redirectTo = computed(() => {
  const value = route.query.redirect

  return typeof value === 'string' && value.startsWith('/') ? value : '/app'
})

const googleClientId = computed(() => {
  return String(config.public.googleClientId || '').trim()
})

const providers = computed<ButtonProps[]>(() => [
  {
    label: loading.value ? 'Signing in…' : 'Continue with Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'outline',
    block: true,
    loading: loading.value,
    disabled: loading.value,
    onClick: startGoogleLogin
  }
])

function getGoogleApi(): any {
  if (typeof window === 'undefined') {
    return null
  }

  return (window as Window & { google?: any }).google || null
}

async function loadGoogleScript() {
  const existing = document.querySelector(
    'script[src="https://accounts.google.com/gsi/client"]'
  )

  if (existing) {
    return
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Google script.'))
    document.head.appendChild(script)
  })
}

async function handleGoogleCredentialResponse(
  response: GoogleCredentialResponse
) {
  try {
    if (!response.credential) {
      throw new Error('Google did not return an ID token.')
    }

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      id_token: response.credential
    })

    if (error) {
      throw error
    }

    setSession(data.session ?? null)
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value
      = error instanceof Error ? error.message : 'Google sign-in failed.'
  } finally {
    loading.value = false
  }
}

async function initGoogleAuth() {
  if (initialized.value) {
    return
  }

  if (!googleClientId.value) {
    throw new Error('Missing NUXT_PUBLIC_GOOGLE_CLIENT_ID.')
  }

  const google = getGoogleApi()

  if (!google?.accounts?.id) {
    throw new Error('Google Identity Services could not be loaded.')
  }

  google.accounts.id.initialize({
    client_id: googleClientId.value,
    callback: handleGoogleCredentialResponse,
    auto_select: false,
    cancel_on_tap_outside: true
  })

  initialized.value = true
}

async function startGoogleLogin() {
  if (loading.value) {
    return
  }

  try {
    loading.value = true
    errorMessage.value = ''

    await loadGoogleScript()
    await initGoogleAuth()

    const google = getGoogleApi()

    google.accounts.id.prompt((notification: any) => {
      if (
        notification.isNotDisplayed?.() ||
        notification.isSkippedMoment?.() ||
        notification.isDismissedMoment?.()
      ) {
        loading.value = false
        errorMessage.value = 'Google sign-in was not completed.'
      }
    })
  } catch (error) {
    loading.value = false
    errorMessage.value
      = error instanceof Error ? error.message : 'Google sign-in failed.'
  }
}

watch(
  user,
  async (value) => {
    if (!value || redirecting.value) {
      return
    }

    redirecting.value = true
    await navigateTo(redirectTo.value, { replace: true })
  },
  { immediate: true }
)

onMounted(async () => {
  await bootstrap()

  if (user.value && !redirecting.value) {
    redirecting.value = true
    await navigateTo(redirectTo.value, { replace: true })
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,.18),_transparent_52%),linear-gradient(to_bottom,#ffffff_0%,#f8fafc_52%,#f8fafc_100%)]"
    />

    <UContainer class="flex min-h-screen items-center py-10">
      <div class="grid w-full gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div class="max-w-2xl">
          <UBadge
            color="primary"
            variant="soft"
            class="px-3 py-1.5"
          >
            Goldmen Solution
          </UBadge>

          <h1 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Sign in with Google
            <span class="text-amber-600">and continue securely.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            This uses the Google Identity Services native flow, exchanges the
            returned ID token with Supabase, and then sends you straight into
            the app.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-lucide-shield-check"
                  class="h-5 w-5 text-amber-600"
                />
                <div>
                  <p class="text-sm font-semibold">
                    Direct Google flow
                  </p>
                  <p class="text-sm text-slate-500">
                    Native provider sign-in
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-lucide-key-round"
                  class="h-5 w-5 text-amber-600"
                />
                <div>
                  <p class="text-sm font-semibold">
                    Token exchange
                  </p>
                  <p class="text-sm text-slate-500">
                    Google token to Supabase
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon
                  name="i-lucide-badge-check"
                  class="h-5 w-5 text-amber-600"
                />
                <div>
                  <p class="text-sm font-semibold">
                    Multi-domain ready
                  </p>
                  <p class="text-sm text-slate-500">
                    Same backend, separate domains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <UCard class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,.10)]">
          <UAuthForm
            title="Welcome back"
            description="Sign in with Google to continue securely."
            icon="i-lucide-shield-check"
            :providers="providers"
            :fields="[]"
            separator="or"
            :submit="{
              label: 'Continue',
              class: 'hidden'
            }"
            class="w-full"
          >
            <template #header>
              <div class="space-y-2">
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                  Goldmen Solution
                </p>
                <p class="text-sm leading-6 text-slate-500">
                  Use the Google native flow, then let Supabase resume your
                  session without lingering on this page.
                </p>
              </div>
            </template>

            <template #footer>
              <div class="space-y-3">
                <UAlert
                  v-if="errorMessage"
                  color="red"
                  variant="soft"
                  icon="i-lucide-circle-alert"
                  :title="errorMessage"
                />

                <div class="flex items-center justify-between gap-3">
                  <UButton
                    to="/"
                    color="neutral"
                    variant="ghost"
                    icon="i-lucide-arrow-left"
                    label="Back home"
                  />
                  <UButton
                    to="/app"
                    color="primary"
                    variant="soft"
                    label="Open app"
                  />
                </div>
              </div>
            </template>
          </UAuthForm>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
