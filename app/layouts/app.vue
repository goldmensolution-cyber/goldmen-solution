<script setup lang="ts">
const route = useRoute()

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
  <UDashboardGroup class="min-h-svh bg-slate-50">
    <UDashboardSidebar
      collapsible
      class="border-e border-slate-800/60 bg-slate-950 text-white"
    >
      <template #header>
        <NuxtLink
          to="/app"
          class="flex items-center gap-3 px-2 py-1.5"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-sm font-black text-slate-950"
          >
            G
          </div>

          <div class="leading-tight">
            <p class="text-sm font-semibold text-white">Goldmen Solution</p>
            <p class="text-xs text-slate-300">Airtime control room</p>
          </div>
        </NuxtLink>
      </template>

      <template #default>
        <div class="px-2 py-4">
          <UNavigationMenu
            :items="navItems"
            orientation="vertical"
            class="text-white"
          />
        </div>
      </template>

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
    </UDashboardSidebar>

    <UDashboardPanel
      id="goldmen-app-panel"
      class="min-w-0 bg-slate-50"
    >
      <template #header>
        <UDashboardNavbar
          :title="pageTitle"
          icon="i-lucide-layout-dashboard"
          toggle-side="left"
        >
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>

          <template #right>
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
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <div class="flex min-h-0 flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
          <slot />
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
