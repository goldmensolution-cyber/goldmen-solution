<!-- app/pages/index.vue -->
<script setup lang="ts">
const heroLinks = [
  {
    label: 'Open app',
    to: '/login',
    color: 'primary',
    size: 'lg'
  },
  {
    label: 'How it works',
    to: '#how-it-works',
    color: 'neutral',
    variant: 'soft',
    size: 'lg'
  }
]

const trustCards = [
  {
    title: 'Secure payments',
    description: 'M-Pesa powered checkout with clear confirmation.'
  },
  {
    title: 'Controlled access',
    description: 'Approved sender and recipient numbers only.'
  },
  {
    title: 'Instant delivery',
    description: 'Airtime is sent as soon as payment clears.'
  },
  {
    title: 'Audit-ready',
    description: 'Every request gets a clean transaction reference.'
  }
]

const logos = ['Goldmen', 'M-Pesa', 'Mobile Money', 'Kenya', 'Airtime', 'Business']

const features = [
  {
    title: 'Transaction references',
    description: 'Each purchase gets a unique reference for easy tracking.',
    icon: 'i-lucide-receipt-text'
  },
  {
    title: 'Approved numbers',
    description: 'Top-ups are limited to trusted numbers only.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Fast top-ups',
    description: 'Airtime is delivered in seconds after payment.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Simple workflow',
    description: 'Sender, recipient and amount in one clean flow.',
    icon: 'i-lucide-scan-line'
  }
]

const steps = [
  {
    title: 'Login',
    description: 'Sign in to open your controlled purchase dashboard.'
  },
  {
    title: 'Enter details',
    description: 'Add sender number, recipient number and amount.'
  },
  {
    title: 'Pay with M-Pesa',
    description: 'Complete the transaction securely through M-Pesa.'
  },
  {
    title: 'Get airtime',
    description: 'Airtime is sent instantly to the approved recipient.'
  }
]

const security = [
  {
    title: 'Secure Transactions',
    description: 'Every request is logged with a reference and status trail.'
  },
  {
    title: 'Reliable Delivery',
    description: 'Built to keep the flow simple, fast and predictable.'
  },
  {
    title: '24/7 Support',
    description: 'A professional support path for daily operations.'
  },
  {
    title: 'Trusted Service',
    description: 'Made for users who want clarity and control.'
  }
]
</script>

<template>
  <div class="overflow-hidden bg-white text-slate-950">
    <section class="relative isolate pt-6 sm:pt-10">
      <div
        class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,.18),transparent_35%),radial-gradient(circle_at_left_top,rgba(168,85,247,.10),transparent_28%),linear-gradient(to_bottom,rgba(248,250,252,1),rgba(255,255,255,1))]"
      />

      <UContainer class="relative">
        <div class="mx-auto flex max-w-6xl flex-col items-center">
          <div class="goldmen-reveal inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
            <span class="inline-flex h-2 w-2 rounded-full bg-violet-600" />
            Airtime automation
          </div>

          <div class="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div class="goldmen-reveal max-w-2xl">
              <h1 class="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Automate airtime payments.
                <br>
                Control approvals.
                <br>
                <span class="text-violet-600">Deliver with confidence.</span>
              </h1>

              <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Goldmen makes business airtime purchases simple with secure M-Pesa checkout, approved recipients, and audit-ready transaction control.
              </p>

              <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <UButton
                  v-bind="heroLinks[0]"
                  class="shadow-lg shadow-violet-500/15"
                />
                <UButton
                  v-bind="heroLinks[1]"
                />
              </div>

              <div class="mt-10 flex items-center gap-4">
                <div class="flex -space-x-2">
                  <UAvatar
                    size="sm"
                    src="https://i.pravatar.cc/100?img=32"
                    alt="User 1"
                  />
                  <UAvatar
                    size="sm"
                    src="https://i.pravatar.cc/100?img=12"
                    alt="User 2"
                  />
                  <UAvatar
                    size="sm"
                    src="https://i.pravatar.cc/100?img=22"
                    alt="User 3"
                  />
                  <UAvatar
                    size="sm"
                    src="https://i.pravatar.cc/100?img=44"
                    alt="User 4"
                  />
                </div>
                <p class="text-sm text-slate-500">
                  Trusted by 500+ businesses worldwide
                </p>
              </div>
            </div>

            <div class="goldmen-reveal goldmen-delay-1 relative mx-auto w-full max-w-[38rem]">
              <div class="goldmen-orb absolute -left-8 top-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />
              <div class="goldmen-orb absolute -right-10 bottom-6 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />

              <UCard class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,.12)] ring-1 ring-slate-900/5">
                <div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                  <img
                    src="/goldmen-home-hero.png"
                    alt="Goldmen airtime purchase dashboard preview"
                    class="w-full object-cover"
                  >
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="border-y border-slate-200 bg-white py-10">
      <UContainer>
        <p class="text-center text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
          Trusted by innovative companies
        </p>

        <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="logo in logos"
            :key="logo"
            class="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500"
          >
            {{ logo }}
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-slate-50 py-20">
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
            Features
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to grow
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            Powerful tools to streamline airtime approvals, payments, and delivery from one dashboard.
          </p>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div class="grid gap-4">
            <UCard
              v-for="(item, index) in features"
              :key="item.title"
              class="goldmen-reveal rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              :style="{ animationDelay: `${index * 90}ms` }"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <UIcon
                    :name="item.icon"
                    class="h-5 w-5"
                  />
                </div>
                <div>
                  <p class="text-base font-semibold text-slate-950">
                    {{ item.title }}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-slate-600">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>

          <div class="goldmen-reveal goldmen-delay-1 relative">
            <UCard class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div class="grid gap-6 sm:grid-cols-2">
                <div
                  v-for="item in trustCards"
                  :key="item.title"
                  class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-950">
                    {{ item.title }}
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <div class="mt-8 rounded-[1.75rem] border border-violet-200 bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6">
                <p class="text-sm font-semibold uppercase tracking-[0.26em] text-violet-700">
                  Dashboard feel
                </p>
                <p class="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-slate-950">
                  Clean, premium and focused on the core action.
                </p>
                <p class="mt-3 text-sm leading-7 text-slate-600">
                  The public homepage should feel like the product itself: simple, confident and modern.
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <section
      id="how-it-works"
      class="bg-white py-20"
    >
      <UContainer>
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
            How it works
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A simple four-step airtime flow
          </h2>
        </div>

        <div class="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <UCard
            v-for="(step, index) in steps"
            :key="step.title"
            class="goldmen-reveal rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
            :style="{ animationDelay: `${index * 90}ms` }"
          >
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-base font-semibold text-white">
                {{ index + 1 }}
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Step {{ index + 1 }}
                </p>
                <h3 class="mt-2 text-lg font-semibold text-slate-950">
                  {{ step.title }}
                </h3>
              </div>
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ step.description }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section
      id="security"
      class="bg-slate-50 py-20"
    >
      <UContainer>
        <div class="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div class="goldmen-reveal">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
              Security
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Trusted, controlled and ready for real use.
            </h2>
            <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Goldmen keeps the experience clean, with clear purchase references and a product feel that matches the quality of the service behind it.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <UCard
              v-for="(item, index) in security"
              :key="item.title"
              class="goldmen-reveal rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              :style="{ animationDelay: `${index * 80}ms` }"
            >
              <p class="text-sm font-semibold text-slate-950">
                {{ item.title }}
              </p>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                {{ item.description }}
              </p>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="bg-white py-20">
      <UContainer>
        <UCard class="overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-r from-violet-600 to-fuchsia-600 p-8 text-white shadow-[0_25px_80px_rgba(124,58,237,.22)]">
          <div class="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div class="goldmen-reveal">
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-violet-100">
                Ready to transform your business?
              </p>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Launch with a homepage that feels premium from the first scroll.
              </h2>
              <p class="mt-4 max-w-2xl text-base leading-8 text-violet-100/90">
                Launch the homepage now, then continue wiring the authenticated Goldmen app and Supabase integration.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <UButton
                to="/login"
                label="Open app"
                size="lg"
                variant="solid"
              />
              <UButton
                to="#how-it-works"
                label="See how it works"
                size="lg"
                variant="soft"
              />
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>
