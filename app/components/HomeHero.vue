<script setup lang="ts">
const buttons = [{
  label: 'Get started',
  to: '/signup',
  variant: 'primary'
}, {
  label: 'See pricing',
  to: '/pricing',
  variant: 'secondary'
}]
</script>

<template>
  <section class="bg-slate-50 dark:bg-slate-950">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">Kenyan service platform</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">A practical platform for local teams</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">Manage bookings, payments, customers, and staff from one simple dashboard. No jargon, no flashy promises — just the tools your business needs to keep moving.</p>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            v-for="button in buttons"
            :key="button.label"
            :to="button.to"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            :class="button.variant === 'primary'
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'"
          >
            {{ button.label }}
          </NuxtLink>
        </div>

        <p class="mt-6 text-sm text-slate-600 dark:text-slate-400">Used by growing businesses across Nairobi, Mombasa and beyond.</p>
      </div>
    </div>
  </section>
</template>
