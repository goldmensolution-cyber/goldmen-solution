<script setup lang="ts">
useSeoMeta({
  title: 'Goldmen',
  description: 'Secure airtime top-ups for approved numbers with Goldmen.'
})

const steps = [
  {
    title: 'Login',
    description: 'Sign in to Goldmen and open your controlled purchase dashboard.'
  },
  {
    title: 'Enter details',
    description: 'Add sender number, recipient number and airtime amount.'
  },
  {
    title: 'Pay with M-Pesa',
    description: 'Complete the transaction securely through M-Pesa.'
  },
  {
    title: 'Get airtime',
    description: 'Airtime is sent instantly to the approved recipient number.'
  }
]
</script>

<template>
  <div class="bg-slate-950 text-slate-100">
    <section class="bg-white text-slate-950">
      <div class="relative overflow-hidden">
        <div
          class="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-amber-200/30 to-transparent"
        />

        <UContainer class="relative py-20 lg:py-24">
          <div class="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div class="max-w-2xl">
              <div
                class="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700"
              >
                <span
                  class="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500"
                />
                Airtime purchases for approved numbers only
              </div>

              <h1 class="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Buy airtime securely with Goldmen.
              </h1>

              <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A polished public homepage with a sign-in protected app, M-Pesa checkout, and an audit-ready transaction reference for every top-up.
              </p>

              <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <UButton
                  to="/app"
                  size="xl"
                  label="Open app"
                  color="primary"
                />
                <UButton
                  to="/login"
                  size="xl"
                  label="Login"
                  color="neutral"
                  variant="soft"
                />
              </div>

              <div class="mt-10 grid gap-4 sm:grid-cols-3">
                <div class="rounded-3xl border border-slate-200/70 bg-slate-50 p-5">
                  <p class="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Secure
                  </p>
                  <p class="mt-3 text-lg font-semibold text-slate-950">
                    M-Pesa powered
                  </p>
                </div>
                <div class="rounded-3xl border border-slate-200/70 bg-slate-50 p-5">
                  <p class="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Access
                  </p>
                  <p class="mt-3 text-lg font-semibold text-slate-950">
                    Login only
                  </p>
                </div>
                <div class="rounded-3xl border border-slate-200/70 bg-slate-50 p-5">
                  <p class="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Reference
                  </p>
                  <p class="mt-3 text-lg font-semibold text-slate-950">
                    Audit-ready
                  </p>
                </div>
              </div>
            </div>

            <div class="relative mx-auto w-full max-w-130">
              <div
                class="absolute -left-10 top-6 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl"
              />
              <div
                class="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-slate-900/10 blur-3xl"
              />

              <div class="overflow-hidden rounded-4xl border border-slate-200/20 bg-slate-950 shadow-2xl">
                <img
                  src="/hero-phone-placeholder.svg"
                  alt="Goldmen app preview"
                  class="h-155 w-full object-cover"
                >
              </div>

              <UCard class="mt-6 rounded-3xl border border-slate-200/20 bg-slate-950/95 p-5 shadow-xl">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-xs uppercase tracking-[0.24em] text-amber-300">
                      Dashboard preview
                    </p>
                    <p class="mt-2 text-lg font-semibold text-white">
                      Airtime purchase, history and controls all in one place.
                    </p>
                  </div>
                  <span
                    class="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300"
                  >
                    New
                  </span>
                </div>
              </UCard>
            </div>
          </div>
        </UContainer>
      </div>
    </section>

    <section
      id="features"
      class="border-t border-slate-200/10 bg-slate-950 py-20 text-white"
    >
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div class="max-w-2xl">
            <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
              What you get
            </p>
            <h2 class="mt-3 text-4xl font-semibold text-white">
              The experience teams expect from a premium airtime service.
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-300">
              Fast top-ups, protected sender numbers and a clean purchase path that keeps your business in control.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <UCard class="rounded-4xl border border-white/10 bg-slate-900/80 p-6">
              <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
                Billing
              </p>
              <p class="mt-4 text-xl font-semibold text-white">
                Transaction references
              </p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                Each airtime request gets a unique GOL- reference for reliable audit and reconciliation.
              </p>
            </UCard>
            <UCard class="rounded-4xl border border-white/10 bg-slate-900/80 p-6">
              <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
                Control
              </p>
              <p class="mt-4 text-xl font-semibold text-white">
                Approved numbers only
              </p>
              <p class="mt-3 text-sm leading-7 text-slate-300">
                The app only allows top-ups to numbers approved by your team.
              </p>
            </UCard>
          </div>
        </div>

        <div class="mt-16 grid gap-4 md:grid-cols-3">
          <UCard class="rounded-4xl border border-slate-200/10 bg-slate-900/80 p-6">
            <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
              Secure payments
            </p>
            <p class="mt-4 text-xl font-semibold text-white">
              M-Pesa integration
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              Pay safely through Kenya’s most trusted mobile money network.
            </p>
          </UCard>
          <UCard class="rounded-4xl border border-slate-200/10 bg-slate-900/80 p-6">
            <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
              Fast delivery
            </p>
            <p class="mt-4 text-xl font-semibold text-white">
              Instant top-ups
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              Airtime is delivered immediately to the recipient after payment.
            </p>
          </UCard>
          <UCard class="rounded-4xl border border-slate-200/10 bg-slate-900/80 p-6">
            <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
              Trusted service
            </p>
            <p class="mt-4 text-xl font-semibold text-white">
              Team-ready workflow
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              A clean interface built for business users and operators.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="bg-slate-950 py-20 text-white">
      <UContainer>
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
            How it works
          </p>
          <h2 class="mt-3 text-4xl font-semibold text-white">
            A simple four-step airtime flow.
          </h2>
        </div>

        <div class="mt-12 grid gap-4 lg:grid-cols-2">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="rounded-4xl border border-white/10 bg-slate-900/80 p-6"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300"
              >
                {{ index + 1 }}
              </div>
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                  Step {{ index + 1 }}
                </p>
                <h3 class="mt-2 text-xl font-semibold text-white">
                  {{ step.title }}
                </h3>
              </div>
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-300">
              {{ step.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-t border-slate-200/10 bg-slate-950 py-20 text-white">
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
              Ready to get started?
            </p>
            <h2 class="mt-3 text-4xl font-semibold text-white">
              Open the Goldmen app and start topping up approved numbers.
            </h2>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <UButton
              to="/app"
              size="xl"
              label="Open app"
              color="primary"
              block
            />
            <UButton
              to="/login"
              size="xl"
              label="Login"
              color="neutral"
              variant="soft"
              block
            />
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-t border-slate-200/10 bg-slate-950 py-20 text-white">
      <UContainer>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-4xl border border-slate-200/10 bg-slate-900/80 p-8">
            <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
              Buy on our Website / App
            </p>
            <p class="mt-4 text-2xl font-semibold text-white">
              Open Web App
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              Best experience with full history, reports and account control.
            </p>
          </div>

          <div class="rounded-4xl border border-slate-200/10 bg-slate-900/80 p-8">
            <p class="text-sm uppercase tracking-[0.24em] text-amber-300">
              Buy via USSD
            </p>
            <p class="mt-4 text-2xl font-semibold text-white">
              *4166283#
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              No internet? No problem. Buy airtime instantly from any phone.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
