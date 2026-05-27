<script setup lang="ts">
const steps = [{
  title: 'Create your profile',
  text: 'Add your business, service details and operating hours in minutes.'
}, {
  title: 'Invite your team',
  text: 'Give staff access to the tools they need for bookings and customer service.'
}, {
  title: 'Serve customers',
  text: 'Take bookings, collect payments and respond to requests from one dashboard.'
}]
</script>

<template>
  <section class="bg-slate-50 dark:bg-slate-950">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">How it works</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Simple steps to get started</h2>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">{{ index + 1 }}</div>
          <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
