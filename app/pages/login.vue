<script setup lang="ts">
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
const user = useSupabaseUser()
const route = useRoute()
const config = useRuntimeConfig()

const googleButtonEl = ref<HTMLDivElement | null>(null)
const errorMessage = ref('')
const loading = ref(false)
const initialized = ref(false)

const redirectTo = computed(() => {
  const value = route.query.redirect
  return typeof value === 'string' && value.startsWith('/') ? value : '/app'
})

function getGoogleApi(): any {
  if (typeof window === 'undefined') {
    return null
  }

  return (window as Window & { google?: any }).google || null
}

async function handleGoogleCredentialResponse(
  response: GoogleCredentialResponse
) {
  try {
    loading.value = true
    errorMessage.value = ''

    if (!response.credential) {
      throw new Error('Google did not return an ID token.')
    }

    const { error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential
    })

    if (error) {
      throw error
    }

    await navigateTo(redirectTo.value, { replace: true })
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Google sign-in failed.'
  } finally {
    loading.value = false
  }
}

function initGoogleButton() {
  if (initialized.value || !googleButtonEl.value) {
    return
  }

  const google = getGoogleApi()

  if (!google?.accounts?.id) {
    return
  }

  const clientId = String(config.public.googleClientId || '').trim()

  if (!clientId) {
    errorMessage.value = 'Missing NUXT_PUBLIC_GOOGLE_CLIENT_ID.'
    return
  }

  initialized.value = true

  google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredentialResponse,
    ux_mode: 'popup',
    auto_select: false
  })

  google.accounts.id.renderButton(googleButtonEl.value, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    text: 'signin_with',
    shape: 'pill',
    logo_alignment: 'left',
    width: 360
  })
}

onMounted(async () => {
  if (user.value) {
    await navigateTo(redirectTo.value, { replace: true })
    return
  }

  const timeoutMs = 5_000
  const start = Date.now()

  while (!getGoogleApi()?.accounts?.id) {
    if (Date.now() - start > timeoutMs) {
      errorMessage.value =
        'Google sign-in script did not load. Check network access.'
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 50))
  }

  initGoogleButton()
})

watchEffect(async () => {
  if (user.value && route.path === '/login') {
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
          <UBadge color="amber" variant="soft" class="px-3 py-1.5">
            Goldmen Solution
          </UBadge>

          <h1 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Sign in with Google
            <span class="text-amber-600">and continue securely.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            This uses the Google popup flow, returns an ID token to the page,
            then exchanges that token with Supabase before redirecting you to
            your app.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-shield-check" class="h-5 w-5 text-amber-600" />
                <div>
                  <p class="text-sm font-semibold">Direct Google flow</p>
                  <p class="text-sm text-slate-500">No Supabase redirect screen</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-key-round" class="h-5 w-5 text-amber-600" />
                <div>
                  <p class="text-sm font-semibold">Token exchange</p>
                  <p class="text-sm text-slate-500">Google token to Supabase</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-globe" class="h-5 w-5 text-amber-600" />
                <div>
                  <p class="text-sm font-semibold">Multi-domain ready</p>
                  <p class="text-sm text-slate-500">Use the same backend safely</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <UCard class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,.10)]">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
              <UIcon name="i-simple-icons-google" class="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-950">Continue with Google</p>
              <p class="text-sm text-slate-500">
                The button below uses the official Google button renderer.
              </p>
            </div>
          </div>

          <div class="mt-8 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6">
            <div ref="googleButtonEl" class="flex justify-center" />

            <p class="mt-4 text-center text-sm leading-6 text-slate-500">
              By continuing, Google returns an ID token to this page, then Supabase
              creates or resumes the session.
            </p>
          </div>

          <UAlert
            v-if="errorMessage"
            color="red"
            variant="soft"
            icon="i-lucide-circle-alert"
            class="mt-5"
            :title="errorMessage"
          />

          <div class="mt-6 flex items-center justify-between gap-3">
            <UButton
              to="/"
              color="neutral"
              variant="ghost"
              icon="i-lucide-arrow-left"
              label="Back home"
            />
            <UButton
              :loading="loading"
              :disabled="loading"
              color="primary"
              icon="i-lucide-log-in"
              label="Retry sign-in"
              @click="initGoogleButton"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
