<script setup lang="ts">
const { signOut, user, bootstrap } = useAuth()

onMounted(bootstrap)
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <UContainer class="flex items-center justify-between gap-3 py-3 md:py-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Goldmen" class="h-9 w-auto md:h-10" />
          <div class="min-w-0">
            <p class="truncate font-semibold text-slate-900">Goldmen</p>
            <p class="hidden text-xs text-slate-500 md:block">Authenticated dashboard</p>
          </div>
        </NuxtLink>

        <div class="hidden items-center gap-2 md:flex">
          <UButton to="/app" label="Buy airtime" color="primary" />
          <UButton to="/app/settings" label="Request change" color="neutral" variant="soft" />
          <UButton label="Sign out" color="neutral" variant="ghost" @click="signOut" />
        </div>

        <div class="md:hidden">
          <MobileBottomNav />
        </div>
      </UContainer>
    </header>

    <main class="pb-24 md:pb-8">
      <slot />
    </main>

    <MobileBottomNav class="md:hidden" />
  </div>
</template>
