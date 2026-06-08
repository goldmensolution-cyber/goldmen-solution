<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Open App',
    to: '/login',
    icon: 'i-lucide-arrow-right'
  },
  {
    label: 'How it works',
    to: '#how-it-works',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Buy airtime securely."
    description="For approved numbers only."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="/phone.jpg"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
</template>
