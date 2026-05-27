<script setup lang="ts">
const services = [{
  title: 'Booking & appointments',
  description: 'Set up appointments, manage availability and send confirmations to customers in one place.'
}, {
  title: 'Payments & invoices',
  description: 'Collect payments, issue receipts, and track transactions without extra systems.'
}, {
  title: 'Customer requests',
  description: 'Capture inquiries, assign tasks and follow up quickly from a single inbox.'
}, {
  title: 'Team management',
  description: 'Share schedules, assign work and keep your staff aligned with clear task lists.'
}]
</script>

<template>
  <section class="bg-white dark:bg-slate-950">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">What we do</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Everything your team needs</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">A straightforward service platform built for businesses that run operations, support customers, and collect payments every day.</p>
        </div>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
