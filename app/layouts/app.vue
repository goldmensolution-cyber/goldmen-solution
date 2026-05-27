<script setup lang="ts">
const { signOut } = useAuth()
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200 bg-white/90 backdrop-blur">
      <UContainer class="flex items-center justify-between gap-4 py-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Goldmen" class="h-10 w-auto" />
          <div>
            <p class="font-semibold text-slate-900">Goldmen</p>
            <p class="text-xs text-slate-500">Authenticated dashboard</p>
          </div>
        </NuxtLink>

        <div class="flex items-center gap-2">
          <UButton to="/app" label="Buy airtime" color="primary" />
          <UButton to="/app/settings" label="Request number change" color="neutral" variant="soft" />
          <UButton label="Sign out" color="neutral" variant="ghost" @click="signOut" />
        </div>
      </UContainer>
    </header>

    <main class="py-8">
      <slot />
    </main>
  </div>
</template>
