<script setup lang="ts">
import type { AuthFormField, ButtonProps, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: false,
  colorMode: 'light'
})

useSeoMeta({
  title: 'Sign in | Goldmen Solution',
  description: 'Sign in to Goldmen Solution using Google, email/password, or email OTP.'
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

type LoginMode = 'password' | 'otp'

type LoginFormData = {
  email?: string
  password?: string
  otp?: string
  remember?: boolean
}

type GoogleCredentialResponse = {
  credential?: string
}

const supabase = useSupabaseClient()
const { bootstrap, user, setSession } = useAuth()
const route = useRoute()
const config = useRuntimeConfig()

const mode = ref<LoginMode>('password')
const loading = ref(false)
const initialized = ref(false)
const redirecting = ref(false)
const otpStep = ref(false)
const otpEmail = ref('')
const errorMessage = ref('')
const successMessage = ref('')

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

const fields = computed<AuthFormField[]>(() => {
  const emailField: AuthFormField = {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    required: true
  }

  if (mode.value === 'password') {
    return [
      emailField,
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true
      },
      {
        name: 'remember',
        type: 'checkbox',
        label: 'Remember me',
        description: 'Keep me signed in on this device.'
      }
    ]
  }

  if (!otpStep.value) {
    return [emailField]
  }

  return [
    emailField,
    {
      name: 'otp',
      type: 'otp',
      label: 'One-time code',
      length: 6,
      placeholder: '○',
      required: true
    }
  ]
})

const submitLabel = computed(() => {
  if (mode.value === 'password') {
    return 'Sign in'
  }

  return otpStep.value ? 'Verify code' : 'Send code'
})

function getGoogleApi(): any {
  if (typeof window === 'undefined') {
    return null
  }

  return (window as Window & { google?: any }).google || null
}

function getClientOrigin() {
  return typeof window !== 'undefined' ? window.location.origin : ''
}

function resetMessages() {
  errorMessage.value = ''
  successMessage.value = ''
}

function switchMode(nextMode: LoginMode) {
  mode.value = nextMode
  otpStep.value = false
  otpEmail.value = ''
  resetMessages()
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
    script.onerror = () => reject(new Error('Failed to load Google sign-in.'))
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
      token: response.credential
    })

    if (error) {
      throw error
    }

    setSession(data.session ?? null)
    resetMessages()
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
    mode.value = 'password'
    resetMessages()

    await loadGoogleScript()
    await initGoogleAuth()

    const google = getGoogleApi()

    google.accounts.id.prompt((notification: any) => {
      if (
        notification.isNotDisplayed?.()
        || notification.isSkippedMoment?.()
        || notification.isDismissedMoment?.()
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

async function handleSubmit(
  event: FormSubmitEvent<LoginFormData>
) {
  if (loading.value) {
    return
  }

  loading.value = true
  resetMessages()

  try {
    const data = event.data
    const email = String(data.email ?? '').trim().toLowerCase()

    if (!email) {
      throw new Error('Please enter your email address.')
    }

    if (mode.value === 'password') {
      const password = String(data.password ?? '')

      if (!password) {
        throw new Error('Please enter your password.')
      }

      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        throw error
      }

      setSession(authData.session ?? null)
      return
    }

    if (!otpStep.value) {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: `${getClientOrigin()}/confirm`
        }
      })

      if (error) {
        throw error
      }

      otpEmail.value = email
      otpStep.value = true
      successMessage.value = `We sent a one-time code to ${email}.`
      return
    }

    const token = String(data.otp ?? '').replace(/\s+/g, '')

    if (!token) {
      throw new Error('Please enter the one-time code.')
    }

    const { data: authData, error } = await supabase.auth.verifyOtp({
      email: otpEmail.value || email,
      token,
      type: 'email'
    })

    if (error) {
      throw error
    }

    setSession(authData.session ?? null)
  } catch (error) {
    errorMessage.value
      = error instanceof Error ? error.message : 'Sign-in failed.'
  } finally {
    loading.value = false
  }
}

function startOtpFlow() {
  switchMode('otp')
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
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,.18),_transparent_52%),linear-gradient(to_bottom,#ffffff_0%,#f8fafc_52%,#f8fafc_100%)]" />

    <UContainer class="flex min-h-screen items-center justify-center py-10">
      <UCard class="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,.10)]">
        <div class="mb-5 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
          <UButton
            label="Password"
            :variant="mode === 'password' ? 'soft' : 'ghost'"
            color="primary"
            class="flex-1 justify-center rounded-full"
            @click="switchMode('password')"
          />
          <UButton
            label="OTP"
            :variant="mode === 'otp' ? 'soft' : 'ghost'"
            color="primary"
            class="flex-1 justify-center rounded-full"
            @click="startOtpFlow"
          />
        </div>

        <UAuthForm
          :title="mode === 'password' ? 'Welcome back' : 'Verify your email'"
          :description="mode === 'password'
            ? 'Use Google, email/password, or switch to OTP.'
            : otpStep
              ? 'Enter the code sent to your email address.'
              : 'We will send a one-time code to your email.'"
          icon="i-lucide-shield-check"
          :providers="providers"
          :fields="fields"
          :submit="{ label: submitLabel, block: true }"
          :loading="loading"
          separator="or"
          class="w-full"
          @submit="handleSubmit"
        >
          <template #footer>
            <div class="space-y-3">
              <UAlert
                v-if="errorMessage"
                color="red"
                variant="soft"
                icon="i-lucide-circle-alert"
                :title="errorMessage"
              />

              <UAlert
                v-if="successMessage"
                color="green"
                variant="soft"
                icon="i-lucide-badge-check"
                :title="successMessage"
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
                  v-if="mode === 'otp' && otpStep"
                  color="neutral"
                  variant="outline"
                  label="Change email"
                  @click="otpStep = false"
                />
              </div>
            </div>
          </template>
        </UAuthForm>
      </UCard>
    </UContainer>
  </div>
</template>
