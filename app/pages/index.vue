<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

useSeoMeta({
  title: 'Goldmen Solution | Airtime automation for businesses',
  description:
    'Goldmen Solution helps businesses automate airtime purchases with secure M-Pesa checkout, controlled approvals, and audit-ready delivery.'
})

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Security', href: '#security' }
]

const heroProof = [
  {
    label: 'Secure checkout',
    description: 'M-Pesa powered flow',
    icon: 'i-lucide-badge-check'
  },
  {
    label: 'Controlled access',
    description: 'Approved sender numbers',
    icon: 'i-lucide-shield-check'
  },
  {
    label: 'Audit trail',
    description: 'Reference-backed records',
    icon: 'i-lucide-receipt-text'
  }
]

const features = [
  {
    title: 'Fast airtime delivery',
    description:
      'Capture sender, recipient, and amount in one clean flow, then complete the purchase through a secure payment step.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Approved recipients only',
    description:
      'Keep airtime requests limited to trusted numbers so your team stays in control.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Reference-based tracking',
    description:
      'Every request can be tied to a clear transaction reference for easy follow-up.',
    icon: 'i-lucide-receipt-text'
  },
  {
    title: 'Simple admin workflow',
    description:
      'A dashboard that feels premium, calm, and easy to use on mobile and desktop.',
    icon: 'i-lucide-layout-dashboard'
  }
]

const steps = [
  {
    title: 'Sign in',
    description: 'Open the app and continue with Google from the login screen.',
    icon: 'i-lucide-log-in'
  },
  {
    title: 'Enter details',
    description: 'Add the sender number, recipient number, and airtime amount.',
    icon: 'i-lucide-clipboard-list'
  },
  {
    title: 'Pay securely',
    description: 'Confirm the request through M-Pesa and wait for clearance.',
    icon: 'i-lucide-credit-card'
  },
  {
    title: 'Deliver airtime',
    description: 'The approved recipient gets airtime once the payment is complete.',
    icon: 'i-lucide-send'
  }
]

const security = [
  {
    title: 'Clear control',
    description:
      'Approved numbers, explicit actions, and a flow that reduces mistakes.'
  },
  {
    title: 'Trustworthy branding',
    description:
      'A homepage that looks polished and consistent with the product experience.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,.18),_transparent_52%),linear-gradient(to_bottom,#ffffff_0%,#f8fafc_50%,#f8fafc_100%)]"
    />

    <UContainer class="py-6">
      <header
        class="flex flex-col gap-4 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur sm:px-5 lg:flex-row lg:items-center lg:justify-between"
      >
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Goldmen Solution logo"
            class="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
          >
          <div class="leading-tight">
            <p class="text-sm font-semibold text-slate-950">
              Goldmen Solution
            </p>
            <p class="text-xs text-slate-500">
              Airtime automation
            </p>
          </div>
        </NuxtLink>

        <nav class="flex flex-wrap items-center gap-5 text-sm text-slate-600">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="transition hover:text-amber-600"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <UButton
            to="/login"
            variant="ghost"
            color="neutral"
            label="Sign in"
            class="hidden sm:inline-flex"
          />
          <UButton
            to="/login"
            color="primary"
            label="Continue with Google"
            icon="i-simple-icons-google"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>
      </header>
    </UContainer>

    <main>
      <section class="pb-8 pt-8 sm:pt-12 lg:pb-14 lg:pt-16">
        <UContainer>
          <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div>
              <UBadge color="amber" variant="soft" class="px-3 py-1.5">
                Airtime automation for teams
              </UBadge>

              <h1
                class="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl"
              >
                A cleaner way to
                <span class="text-amber-600">buy airtime</span>
                with control built in.
              </h1>

              <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Goldmen Solution keeps business airtime purchases simple with
                secure M-Pesa checkout, approved recipients, and a polished
                dashboard that feels premium from the first scroll.
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <UButton
                  to="/login"
                  size="lg"
                  label="Open app"
                  trailing-icon="i-lucide-arrow-right"
                  class="shadow-lg shadow-amber-500/10"
                />
                <UButton
                  to="#features"
                  size="lg"
                  color="neutral"
                  variant="soft"
                  label="See features"
                />
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="item in heroProof"
                  :key="item.label"
                  class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <div class="flex items-start gap-3">
                    <span
                      :class="item.icon"
                      class="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                    />
                    <div>
                      <p class="text-sm font-semibold text-slate-950">
                        {{ item.label }}
                      </p>
                      <p class="mt-1 text-sm leading-6 text-slate-500">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute -left-8 top-10 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl"
              />
              <div
                class="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl"
              />

              <UCard
                class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.12)] ring-1 ring-slate-900/5"
              >
                <div class="flex items-center justify-between gap-3 px-2 pt-2">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      Live preview
                    </p>
                    <h2 class="mt-2 text-xl font-semibold text-slate-950">
                      Goldmen dashboard
                    </h2>
                  </div>

                  <UBadge color="emerald" variant="soft">
                    Secure
                  </UBadge>
                </div>

                <div class="mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                  <img
                    src="/goldmen-home-hero.png"
                    alt="Goldmen Solution dashboard screenshot"
                    class="w-full object-cover"
                  >
                </div>

                <div class="mt-4 grid gap-3 sm:grid-cols-3">
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Flow
                    </p>
                    <p class="mt-2 text-sm font-semibold text-slate-950">
                      Simple steps
                    </p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Access
                    </p>
                    <p class="mt-2 text-sm font-semibold text-slate-950">
                      Approved numbers
                    </p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Audit
                    </p>
                    <p class="mt-2 text-sm font-semibold text-slate-950">
                      Transaction refs
                    </p>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </UContainer>
      </section>

      <section class="border-y border-slate-200 bg-white py-10">
        <UContainer>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="item in features"
              :key="item.title"
              class="h-full rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <span :class="item.icon" class="h-5 w-5" />
              </div>

              <h3 class="mt-5 text-lg font-semibold text-slate-950">
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </UContainer>
      </section>

      <section id="how-it-works" class="bg-slate-50 py-20">
        <UContainer>
          <div class="max-w-2xl">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-600">
              How it works
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Designed to feel simple on the first use.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-600">
              The homepage now mirrors the premium, AI-generated look while
              keeping the product story clear and practical.
            </p>
          </div>

          <div class="mt-10 grid gap-4 lg:grid-cols-4">
            <UCard
              v-for="(step, index) in steps"
              :key="step.title"
              class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div class="flex items-center justify-between">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Step {{ index + 1 }}
                </p>
                <span :class="step.icon" class="h-5 w-5 text-amber-600" />
              </div>

              <h3 class="mt-5 text-lg font-semibold text-slate-950">
                {{ step.title }}
              </h3>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                {{ step.description }}
              </p>
            </UCard>
          </div>
        </UContainer>
      </section>

      <section id="security" class="bg-white py-20">
        <UContainer>
          <div class="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-600">
                Security and trust
              </p>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Keep the polished look without losing control.
              </h2>
              <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                This layout keeps the business message focused on airtime
                automation, M-Pesa checkout, and approved recipients.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <UCard
                v-for="item in security"
                :key="item.title"
                class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm"
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

      <section class="bg-slate-950 py-16 text-white">
        <UContainer>
          <UCard class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,.2)] backdrop-blur">
            <div class="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                  Ready to launch
                </p>
                <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Give the homepage the same polish as the product.
                </h2>
                <p class="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  The updated layout uses Nuxt UI cards and buttons, keeps the
                  existing screenshot asset, and gives your app a cleaner first
                  impression.
                </p>
              </div>

              <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <UButton
                  to="/login"
                  size="lg"
                  color="primary"
                  label="Continue with Google"
                  icon="i-simple-icons-google"
                />
                <UButton
                  to="#features"
                  size="lg"
                  color="neutral"
                  variant="soft"
                  label="Explore features"
                />
              </div>
            </div>
          </UCard>
        </UContainer>
      </section>
    </main>
  </div>
</template>
