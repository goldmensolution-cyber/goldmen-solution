<script setup lang="ts">
const items = [
  { label: 'Features', to: '#features' },
  { label: 'How it works', to: '#how-it-works' },
  { label: 'Security', to: '#security' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
    <UContainer class="flex items-center justify-between gap-4 py-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="Goldmen" class="h-10 w-auto" />
        <div class="hidden sm:block">
          <p class="font-semibold text-white">Goldmen</p>
          <p class="text-xs text-slate-400">Airtime, reworked</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="transition hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <UButton to="/login" label="Sign in" color="neutral" variant="ghost" />
        <UButton to="/app" label="Open app" color="primary" trailing-icon="i-lucide-arrow-right" />
      </div>
    </UContainer>
  </header>
</template>
