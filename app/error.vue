<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We could not find that page.'
})
</script>

<template>
  <div class="min-h-screen bg-[#f7f9fc] text-slate-900">
    <AppHeader />

    <main class="mx-auto flex max-w-3xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <UCard class="w-full rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
          404
        </p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Page not found
        </h1>
        <p class="mt-4 text-sm leading-7 text-slate-600">
          The page you are looking for does not exist or has moved.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <UButton
            to="/"
            label="Back home"
            color="primary"
          />
          <UButton
            to="/login"
            label="Open app"
            color="neutral"
            variant="soft"
          />
        </div>
      </UCard>
    </main>

    <AppFooter />
  </div>
</template>
