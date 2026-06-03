<script setup lang="ts">
const route = useRoute()
const { signOut, user, bootstrap } = useAuth()

onMounted(bootstrap)

const items = [
  { label: 'Home', to: '/app', icon: 'i-lucide-house' },
  { label: 'Change', to: '/app/settings', icon: 'i-lucide-pencil-line' }
]

const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
    <div class="mx-auto flex max-w-md items-center justify-between gap-2">
      <NuxtLink
        v-for="item in items"
        :key="item.label"
        :to="item.to"
        class="flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition"
        :class="isActive(item.to) ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'"
      >
        <UIcon
          :name="item.icon"
          class="h-5 w-5"
        />
        <span>{{ item.label }}</span>
      </NuxtLink>

      <button
        class="flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100"
        @click="signOut"
      >
        <UIcon
          name="i-lucide-log-out"
          class="h-5 w-5"
        />
        <span>Sign out</span>
      </button>
    </div>
  </div>
</template>
