<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Sign in',
  description: 'Sign in to Goldmen'
})

const { supabase } = useAuth()
const email = ref('')
const loading = ref<'google' | 'github' | 'email' | null>(null)
const notice = ref('')
const errorMessage = ref('')

const redirectToApp = () => `${window.location.origin}/app`

async function signInWithProvider(provider: 'google' | 'github') {
  loading.value = provider
  notice.value = ''
  errorMessage.value = ''

  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectToApp()
    }
  })

  if (error) {
    errorMessage.value = error.message
  }

  loading.value = null
}

async function sendMagicLink() {
  if (!email.value.trim()) {
    errorMessage.value = 'Enter your email first.'
    return
  }

  loading.value = 'email'
  notice.value = ''
  errorMessage.value = ''

  const { error } = await supabase.auth.signInWithOtp({
    email: email.value.trim(),
    options: {
      emailRedirectTo: redirectToApp()
    }
  })

  if (error) {
    errorMessage.value = error.message
  } else {
    notice.value = 'Check your inbox for the login link.'
  }

  loading.value = null
}
</script>

<template>
  <div>
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-semibold text-white">
        Sign in to Goldmen
      </h1>
      <p class="mt-3 text-sm text-slate-400">
        Google is the default path. GitHub and email magic link are included as extra options.
      </p>
    </div>

    <div class="space-y-3">
      <UButton
        block
        size="lg"
        icon="i-simple-icons-google"
        :loading="loading === 'google'"
        label="Continue with Google"
        @click="signInWithProvider('google')"
      />

      <UButton
        block
        size="lg"
        color="neutral"
        variant="soft"
        icon="i-simple-icons-github"
        :loading="loading === 'github'"
        label="Continue with GitHub"
        @click="signInWithProvider('github')"
      />

      <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        <UFormField
          label="Email address"
          hint="Magic link login"
        >
          <UInput
            v-model="email"
            type="email"
            placeholder="name@example.com"
            class="mt-2"
          />
        </UFormField>

        <UButton
          block
          class="mt-3"
          color="primary"
          :loading="loading === 'email'"
          label="Send magic link"
          @click="sendMagicLink"
        />
      </div>

      <UAlert
        v-if="notice"
        color="primary"
        variant="soft"
        :title="notice"
      />

      <UAlert
        v-if="errorMessage"
        color="error"
        variant="soft"
        :title="errorMessage"
      />
    </div>
  </div>
</template>
