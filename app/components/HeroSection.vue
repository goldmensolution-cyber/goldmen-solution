<script setup lang="ts">
const highlights = [
  {
    label: 'Approved numbers',
    value: 'Only trusted beneficiaries'
  },
  {
    label: 'Checkout',
    value: 'M-Pesa first'
  },
  {
    label: 'Fallback',
    value: 'USSD available'
  }
]

const quickPoints = [
  'Built for quick airtime top-ups',
  'Looks clean on mobile and desktop',
  'Matches your current light design direction'
]
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden px-4 pt-8 sm:pt-12 lg:pt-14"
  >
    <UContainer>
      <div class="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <div class="max-w-2xl">
          <UBadge
            color="primary"
            variant="soft"
            class="rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
          >
            Airtime, but cleaner
          </UBadge>

          <h1 class="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Buy airtime securely,
            <span class="text-amber-500">the faster way.</span>
          </h1>

          <p class="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Goldmen Solution keeps the flow short and polished: choose a network,
            confirm the amount, pay with M-Pesa, and get airtime delivered.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              to="/login"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-full px-6"
            >
              Open app
            </UButton>

            <UButton
              href="#how-it-works"
              size="lg"
              color="neutral"
              variant="soft"
              class="rounded-full px-6"
            >
              See how it works
            </UButton>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="rounded-[1.4rem] border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {{ item.label }}
              </p>
              <p class="mt-2 text-sm font-semibold leading-6 text-slate-950">
                {{ item.value }}
              </p>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <div
              v-for="point in quickPoints"
              :key="point"
              class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"
            >
              {{ point }}
            </div>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[36rem]">
          <div class="absolute inset-0 translate-x-6 translate-y-10 rounded-[3rem] bg-amber-200/40 blur-3xl" />

          <div class="relative overflow-hidden rounded-[2.6rem] border border-slate-200 bg-[linear-gradient(180deg,#fffef7_0%,#ffffff_52%,#f8fafc_100%)] p-5 shadow-[0_30px_120px_rgba(15,23,42,.12)] sm:p-6">
            <div class="grid gap-4 sm:grid-cols-[1.1fr_.9fr]">
              <div class="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">
                      Mobile checkout
                    </p>
                    <p class="mt-2 text-lg font-black text-slate-950">
                      A clean flow on every phone
                    </p>
                  </div>

                  <div class="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    Live
                  </div>
                </div>

                <div class="mt-5 rounded-[2rem] bg-slate-950 p-4">
                  <img
                    src="/goldmen-home-hero.png"
                    alt="Goldmen Solution homepage preview"
                    class="w-full rounded-[1.5rem] shadow-lg"
                  >
                </div>
              </div>

              <div class="grid gap-4">
                <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-sm">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                    Approved number flow
                  </p>
                  <p class="mt-3 text-2xl font-black tracking-tight">
                    Fast, trusted, controlled.
                  </p>
                  <p class="mt-3 text-sm leading-7 text-slate-300">
                    Keep the interface short enough for quick top-ups and clear enough
                    for repeat use.
                  </p>
                </div>

                <div class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <img
                    src="/pngegg(7).png"
                    alt="Phone mockup"
                    class="mx-auto w-[88%] rotate-[-10deg] drop-shadow-[0_18px_40px_rgba(15,23,42,.22)]"
                  >
                </div>
              </div>
            </div>

            <div class="mt-4 grid gap-3 sm:grid-cols-3">
              <div class="rounded-[1.4rem] border border-slate-200 bg-white p-4 text-center">
                <p class="text-2xl font-black text-slate-950">
                  24/7
                </p>
                <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  USSD fallback
                </p>
              </div>

              <div class="rounded-[1.4rem] border border-slate-200 bg-white p-4 text-center">
                <p class="text-2xl font-black text-slate-950">
                  4+
                </p>
                <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Supported networks
                </p>
              </div>

              <div class="rounded-[1.4rem] border border-slate-200 bg-white p-4 text-center">
                <p class="text-2xl font-black text-slate-950">
                  M-Pesa
                </p>
                <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Payment rail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
