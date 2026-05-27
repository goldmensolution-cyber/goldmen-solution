<script setup lang="ts">
const buttons = [{
  label: 'Start your free trial',
  to: '/signup',
  style: 'primary'
}, {
  label: 'Talk to sales',
  to: '/pricing',
  style: 'secondary'
}]
</script>

<template>
  <section class="bg-primary-600 text-white">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div>
          <p class="text-base font-semibold uppercase tracking-[0.24em] text-white/80">Ready to go live</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Launch your service platform with confidence.</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-white/85">Get started quickly with a simple setup that keeps customers, teams and payments working together.</p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <NuxtLink
            v-for="button in buttons"
            :key="button.label"
            :to="button.to"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
            :class="button.style === 'primary'
              ? 'bg-white text-slate-900 hover:bg-slate-100'
              : 'border border-white/70 bg-white/10 text-white hover:bg-white/20'"
          >
            {{ button.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
