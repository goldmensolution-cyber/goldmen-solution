<script setup lang="ts">
definePageMeta({
  layout: false,
  colorMode: 'light'
})

useSeoMeta({
  title: 'Confirmation | Goldmen Solution',
  description: 'Your action is confirmed. Continue to the Goldmen dashboard.'
})

const { bootstrap, user } = useAuth()
const isReady = ref(false)

onMounted(async () => {
  await bootstrap()
  isReady.value = true
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-144 bg-linear-to-b from-amber-100/40 to-transparent" />

    <UContainer class="flex min-h-screen items-center py-10">
      <div class="mx-auto w-full max-w-2xl rounded-4xl border border-slate-200 bg-white p-10 shadow-2xl">
        <div class="space-y-6 text-center">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
            <UIcon name="i-lucide-check-circle" class="size-7" />
          </div>

          <div>
            <h1 class="text-4xl font-semibold tracking-tight text-slate-950">
              Confirmation complete
            </h1>
            <p class="mt-3 text-base leading-7 text-slate-600">
              Your action is confirmed. If you are already signed in, continue to your dashboard. Otherwise, sign in to get started.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <UButton
              :to="user?.value ? '/app' : '/login'"
              label="Continue"
              size="lg"
              class="justify-center"
              :disabled="!isReady"
            />
            <UButton
              v-if="!user?.value"
              to="/login"
              label="Sign in"
              color="neutral"
              variant="outline"
              size="lg"
              class="justify-center"
              :disabled="!isReady"
            />
          </div>

          <p class="text-sm text-slate-500">
            This page is publicly accessible and is not protected by the app-only auth redirect.
          </p>
        </div>
      </div>
    </UContainer>
  </div>
</template>
