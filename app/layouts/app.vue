<script setup lang="ts">
const sidebarOpen = ref(true)
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950 lg:flex">
    <AppSidebar v-model:open="sidebarOpen" />

    <div class="flex min-h-screen flex-1 flex-col">
      <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div class="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <div class="flex items-center gap-3">
            <UButton
              class="lg:hidden"
              icon="i-lucide-menu"
              color="neutral"
              variant="ghost"
              @click="sidebarOpen = true"
            />

            <div>
              <p class="text-sm font-semibold tracking-tight">
                Goldmen Solution
              </p>
              <p class="text-xs text-slate-500">
                Airtime operations dashboard
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <UBadge
              color="success"
              variant="soft"
            >
              Live
            </UBadge>

            <UButton
              to="/"
              color="neutral"
              variant="ghost"
              icon="i-lucide-arrow-left"
              label="Public site"
            />
          </div>
        </div>
      </header>

      <main class="flex-1 px-4 py-5 sm:px-6 lg:px-8">
        <slot />
      </main>
    </div>
  </div>
</template>
