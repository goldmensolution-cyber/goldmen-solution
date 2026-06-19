<script setup lang="ts">
type SidebarLink = {
  label: string
  to: string
  icon: string
  hash?: string
}

const open = defineModel<boolean>('open', {
  default: true
})

const route = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const links: SidebarLink[] = [
  { label: 'Overview', to: '/app', icon: 'i-lucide-layout-dashboard' },
  { label: 'New request', to: '/app#request', icon: 'i-lucide-rocket', hash: '#request' },
  { label: 'History', to: '/app#history', icon: 'i-lucide-clipboard-list', hash: '#history' },
  { label: 'Approved numbers', to: '/app#approved', icon: 'i-lucide-shield-check', hash: '#approved' },
  { label: 'Settings', to: '/app#settings', icon: 'i-lucide-settings', hash: '#settings' }
]

function isActive(link: SidebarLink) {
  if (!link.hash) {
    return route.path === '/app' && !route.hash
  }

  return route.path === '/app' && route.hash === link.hash
}

async function signOut() {
  await supabase.auth.signOut()
  await navigateTo('/login')
}
</script>

<template>
  <USidebar
    v-model:open="open"
    collapsible="icon"
    rail
    :ui="{
      container: 'h-full',
      inner: 'bg-white border-r border-slate-200',
      body: 'py-0',
      footer: 'border-t border-slate-200'
    }"
  >
    <template #header>
      <div class="flex items-center gap-3 px-1">
        <div class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
          G
        </div>

        <div class="min-w-0" v-if="open">
          <p class="truncate text-sm font-semibold tracking-tight">
            Goldmen Solution
          </p>
          <p class="truncate text-xs text-slate-500">
            Airtime request workspace
          </p>
        </div>
      </div>
    </template>

    <template #default="{ state }">
      <div class="space-y-1 px-2 py-2">
        <UButton
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          :icon="link.icon"
          :color="isActive(link) ? 'primary' : 'neutral'"
          :variant="isActive(link) ? 'soft' : 'ghost'"
          class="w-full justify-start"
        >
          <span v-if="state === 'expanded'">
            {{ link.label }}
          </span>
        </UButton>
      </div>

      <div class="px-4 py-4" v-if="state === 'expanded'">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Supported providers
          </p>

          <div class="mt-3 flex flex-wrap gap-2">
            <UBadge color="neutral" variant="soft">
              Safaricom
            </UBadge>
            <UBadge color="neutral" variant="soft">
              M-Pesa
            </UBadge>
            <UBadge color="neutral" variant="soft">
              Airtel
            </UBadge>
            <UBadge color="neutral" variant="soft">
              Telkom
            </UBadge>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="space-y-3 p-3">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p class="text-xs font-medium text-slate-500">
            Signed in as
          </p>
          <p class="truncate text-sm font-semibold text-slate-900">
            {{ user?.email || 'operations@goldmen.co.ke' }}
          </p>
        </div>

        <UButton
          block
          color="neutral"
          variant="outline"
          icon="i-lucide-log-out"
          @click="signOut"
        >
          <span v-if="open">
            Sign out
          </span>
        </UButton>
      </div>
    </template>
  </USidebar>
</template>
