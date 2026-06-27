<script setup lang="ts">
useSeoMeta({
  title: 'Goldmen App',
  description: 'Airtime request dashboard for sending STK pushes and tracking transactions.'
})

const historyTable = ref<{ refresh: () => Promise<void> } | null>(null)

function handleSubmitted() {
  historyTable.value?.refresh()
}
</script>

<template>
  <div class="space-y-6">
    <section class="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1.38fr)]">
      <AirtimePurchaseForm @submitted="handleSubmitted" />

      <div class="space-y-6">
        <UCard
          id="approved"
          class="scroll-mt-24 rounded-[2rem] border border-slate-200 shadow-sm"
        >
          <template #header>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick status
            </p>
            <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950">
              Dashboard summary
            </h2>
          </template>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-medium text-slate-500">
                Channel
              </p>
              <p class="mt-1 text-sm font-semibold">
                M-Pesa STK Push
              </p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-medium text-slate-500">
                Presets
              </p>
              <p class="mt-1 text-sm font-semibold">
                20, 50, 100, 500, 1000
              </p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="text-xs font-medium text-slate-500">
                History
              </p>
              <p class="mt-1 text-sm font-semibold">
                Saved in Supabase
              </p>
            </div>
          </div>
        </UCard>

        <TransactionHistoryTable ref="historyTable" />
      </div>
    </section>
  </div>
</template>
