<!-- app/components/AppHeader.vue -->
<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '#features' },
  { label: 'Security', to: '#security' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Support', to: '#contact' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <UHeader>
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
      </NuxtLink>
    </template>

    <UNavigationMenu :items="links" />

    <template #right>
      <UButton
        to="/login"
        label="Login"
        color="neutral"
        variant="outline"
      />
      <UButton
        to="/login"
        label="Open App"
        trailing-icon="i-lucide-arrow-right"
      />
    </template>
    <template #body>
      <UNavigationMenu
        :items="links"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
