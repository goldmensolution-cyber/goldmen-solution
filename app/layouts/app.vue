<script setup lang="ts">
const route = useRoute()
const open = ref(true)

const navItems = [
  { label: 'Buy Airtime', icon: 'i-lucide-signal', to: '/app' },
  { label: 'Transactions', icon: 'i-lucide-receipt-text', to: '/app/transactions' },
  { label: 'Beneficiaries', icon: 'i-lucide-users', to: '/app/beneficiaries' },
  { label: 'Settings', icon: 'i-lucide-settings-2', to: '/app/settings' },
  { label: 'Help', icon: 'i-lucide-circle-help', to: '/app/help' },
  { label: 'Support', icon: 'i-lucide-headphones', to: '/app/support' }
]

const titleMap: Record<string, string> = {
  '/app': 'Buy Airtime',
  '/app/transactions': 'Transactions',
  '/app/beneficiaries': 'Beneficiaries',
  '/app/settings': 'Settings',
  '/app/help': 'Help',
  '/app/support': 'Support'
}

const pageTitle = computed(() => titleMap[route.path] ?? 'Goldmen App')
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <div class="flex min-h-screen">
      <USidebar
        v-model:open="open"
        variant="inset"
        collapsible
        side="left"
        class="min-h-screen border-r border-slate-800/60 bg-slate-950 text-white"
        :ui="{ container: 'min-h-screen flex flex-col justify-between' }"
      >
        <template #header>
          <NuxtLink
            to="/app"
            class="flex items-center gap-3 px-4 py-4"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950">
              G
            </div>
            <div class="leading-tight">
              <p class="text-sm font-semibold text-white">Goldmen Solution</p>
              <p class="text-xs text-slate-300">Airtime control room</p>
            </div>
          </NuxtLink>
        </template>

        <UNavigationMenu
          :items="navItems"
          orientation="vertical"
          class="px-2 py-4 text-white"
          :ui="{ link: 'px-3 py-2 rounded-xl transition-colors hover:bg-slate-800' }"
        />

        <template #footer>
          <div class="p-4">
            <UCard
              variant="subtle"
              class="border border-white/10 bg-white/5 text-white"
            >
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
                    <UIcon
                      name="i-lucide-headphones"
                      class="size-5"
                    />
                  </div>
                  <div>
                    <p class="text-sm font-semibold">
                      Need support?
                    </p>
                    <p class="text-xs text-slate-300">
                      Open the support page or log in to continue.
                    </p>
                  </div>
                </div>
              </template>

              <template #footer>
                <div class="flex gap-2">
                  <UButton
                    to="/app/support"
                    label="Support"
                    color="neutral"
                    variant="solid"
                    class="flex-1"
                  />
                  <UButton
                    to="/login"
                    label="Logout"
                    color="neutral"
                    variant="ghost"
                    class="flex-1"
                  />
                </div>
              </template>
            </UCard>
          </div>
        </template>
      </USidebar>

      <div class="flex flex-1 flex-col overflow-hidden bg-slate-50">
        <div class="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div class="flex items-center gap-3">
            <UButton
              icon="i-lucide-menu"
              color="neutral"
              variant="ghost"
              aria-label="Toggle sidebar"
              @click="open = !open"
            />
            <div>
              <p class="text-sm font-medium text-slate-600">
                {{ pageTitle }}
              </p>
              <h1 class="text-xl font-semibold text-slate-950">
                {{ pageTitle }}
              </h1>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <UButton
              to="/"
              label="Website"
              color="neutral"
              variant="ghost"
              class="hidden sm:inline-flex"
            />
            <UButton
              to="/login"
              label="Logout"
              color="neutral"
              variant="subtle"
            />
          </div>
        </div>

        <div class="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
