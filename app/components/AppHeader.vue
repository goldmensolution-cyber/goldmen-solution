<script setup lang="ts">
const route = useRoute()

const navItems = [
  { label: 'Home', id: 'top', to: '/' },
  { label: 'About Us', id: 'features', to: '/#features' },
  { label: 'Security', id: 'security', to: '/#security' },
  { label: 'How It Works', id: 'how-it-works', to: '/#how-it-works' },
  { label: 'Support', id: 'support', to: '/#support' },
  { label: 'Contact', id: 'contact', to: '/#contact' }
]

const activeSection = ref('top')
let observer: IntersectionObserver | null = null

const isHome = computed(() => route.path === '/')

const isActive = (id: string) => isHome.value && activeSection.value === id

const syncFromHash = () => {
  if (!isHome.value) {
    return
  }

  activeSection.value = route.hash ? route.hash.slice(1) : 'top'
}

onMounted(() => {
  if (!isHome.value) {
    return
  }

  syncFromHash()

  const targets = Array.from(
    new Set(navItems.map(item => item.id))
  )
    .map(id => document.getElementById(id))
    .filter((element): element is HTMLElement => element !== null)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target instanceof HTMLElement) {
        activeSection.value = visible.target.id
      }
    },
    {
      threshold: [0.15, 0.3, 0.45, 0.6],
      rootMargin: '-18% 0px -58% 0px'
    }
  )

  targets.forEach((element) => {
    observer?.observe(element)
  })
})

watch(() => route.hash, () => {
  syncFromHash()
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <UHeader class="border-b border-slate-200/80 bg-white/90 backdrop-blur">
    <template #title>
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
      >
        <img
          src="/logo.png"
          alt="Goldmen Solution"
          class="h-10 w-auto"
        >
        <div class="hidden sm:block">
          <p class="text-sm font-semibold text-slate-950">
            Goldmen Solution
          </p>
          <p class="text-xs text-slate-500">
            Airtime with intent
          </p>
        </div>
      </NuxtLink>
    </template>

    <template #right>
      <div class="hidden items-center gap-1 lg:flex">
        <UButton
          v-for="item in navItems"
          :key="item.label + item.to"
          :to="item.to"
          :label="item.label"
          color="neutral"
          variant="ghost"
          :active="isActive(item.id)"
          active-color="primary"
          active-variant="soft"
          class="rounded-full px-4 py-2 text-sm font-medium"
        />
      </div>

      <div class="ml-2 hidden items-center gap-3 sm:flex">
        <UButton
          to="/login"
          label="Login"
          color="neutral"
          variant="outline"
          class="rounded-full"
        />
        <UButton
          to="/login"
          label="Open App"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-full"
        />
      </div>
    </template>

    <template #body>
      <div class="space-y-4 pb-4">
        <div class="grid gap-2">
          <UButton
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            :label="item.label"
            color="neutral"
            variant="ghost"
            :active="isActive(item.id)"
            active-color="primary"
            active-variant="soft"
            class="justify-start rounded-2xl px-4 py-3 text-left"
          />
        </div>

        <div class="flex gap-3">
          <UButton
            to="/login"
            label="Login"
            color="neutral"
            variant="outline"
            class="flex-1 justify-center rounded-full"
          />
          <UButton
            to="/login"
            label="Open App"
            trailing-icon="i-lucide-arrow-right"
            class="flex-1 justify-center rounded-full"
          />
        </div>
      </div>
    </template>
  </UHeader>
</template>
