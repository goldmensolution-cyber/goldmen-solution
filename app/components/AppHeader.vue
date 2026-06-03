<!-- app/components/AppHeader.vue -->
<script setup lang="ts">
const menuOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '#features' },
  { label: 'How it works', to: '#how-it-works' },
  { label: 'Security', to: '#security' },
  { label: 'Contact', to: '#contact' }
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
    <UContainer class="relative flex items-center justify-between gap-3 py-3 md:py-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="Goldmen" class="h-9 w-auto md:h-10">
        <div class="hidden sm:block">
          <p class="font-semibold text-slate-950">Goldmen</p>
          <p class="text-xs text-slate-500">Airtime, reworked</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
        <NuxtLink
          v-for="item in links"
          :key="item.label"
          :to="item.to"
          class="transition hover:text-slate-950"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <UButton to="/login" label="Sign in" color="neutral" variant="soft" />
        <UButton to="/login" label="Open app" color="primary" />
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
        class="absolute left-4 right-4 top-full mt-3 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-2xl md:hidden"
      >
        <div class="space-y-2">
          <NuxtLink
            v-for="item in links"
            :key="item.label"
            :to="item.to"
            class="block rounded-2xl px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <UButton to="/login" label="Sign in" color="neutral" variant="soft" block @click="closeMenu" />
            <UButton to="/login" label="Open app" color="primary" block @click="closeMenu" />
          </div>
        </div>
      </div>
    </UContainer>
  </header>
</template>
