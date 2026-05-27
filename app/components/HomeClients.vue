<script setup lang="ts">
const clients = ['Soko Traders', 'Mama Bistro', 'Greenway Laundry', 'Jambo Salon', 'Nyali Logistics']
</script>

<template>
  <section class="bg-white dark:bg-slate-950">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">Trusted locally</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Built for everyday Kenyan businesses</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">Growing businesses use our platform to keep customers, staff and cash flow in sync across cities and towns.</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="client in clients"
            :key="client"
            class="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          >
            {{ client }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
