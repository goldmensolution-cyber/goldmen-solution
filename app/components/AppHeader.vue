<script setup lang="ts">
const menuOpen = ref(false)

const links = [
  { label: 'Features', to: '#features' },
  { label: 'How it works', to: '#how-it-works' },
  { label: 'Security', to: '#security' }
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
    <UContainer class="relative flex items-center justify-between gap-3 py-3 md:py-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="Goldmen" class="h-9 w-auto md:h-10" />
        <div class="hidden sm:block">
          <p class="font-semibold text-white">Goldmen</p>
          <p class="text-xs text-slate-400">Airtime, reworked</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <NuxtLink
          v-for="item in links"
          :key="item.label"
          :to="item.to"
          class="transition hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <UButton to="/login" label="Sign in" color="neutral" variant="ghost" />
        <UButton to="/app" label="Open app" color="primary" />
      </div>

      <UButton
        class="md:hidden"
        icon="i-lucide-menu"
        color="neutral"
        variant="ghost"
        aria-label="Open menu"
        @click="menuOpen = !menuOpen"
      />

      <div
        v-if="menuOpen"
        class="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl md:hidden"
      >
        <div class="space-y-3">
          <NuxtLink
            v-for="item in links"
            :key="item.label"
            :to="item.to"
            class="block rounded-2xl px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <UButton to="/login" label="Sign in" color="neutral" variant="soft" block @click="closeMenu" />
            <UButton to="/app" label="Open app" color="primary" block @click="closeMenu" />
          </div>
        </div>
      </div>
    </UContainer>
  </header>
</template>
