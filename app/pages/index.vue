<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

useSeoMeta({
  title: 'Goldmen',
  description: 'Secure airtime top-ups for approved numbers with Goldmen.'
})

const heroImage = encodeURI('/ChatGPT Image Jun 3, 2026, 08_36_48 AM.png')

const heroLinks = ref<ButtonProps[]>([
  {
    label: 'Open app',
    to: '/login',
    icon: 'i-lucide-arrow-right',
    color: 'primary',
    size: 'lg'
  },
  {
    label: 'How it works',
    to: '#how-it-works',
    trailingIcon: 'i-lucide-arrow-down-right',
    color: 'neutral',
    variant: 'soft',
    size: 'lg'
  }
])

const trustCards = [
  {
    title: 'Secure Payments',
    description: 'Powered by M-Pesa.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Controlled Access',
    description: 'Only approved numbers can be topped up.',
    icon: 'i-lucide-lock'
  },
  {
    title: 'Trusted Service',
    description: 'Built for teams and families.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Audit Ready',
    description: 'Every request gets a clear reference.',
    icon: 'i-lucide-receipt-text'
  }
]

const aboutCards = [
  {
    title: 'Billing',
    description: 'Unique transaction references for every top-up.',
    icon: 'i-lucide-credit-card'
  },
  {
    title: 'Control',
    description: 'Approved numbers only, with a clear audit trail.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Delivery',
    description: 'Instant airtime after payment confirmation.',
    icon: 'i-lucide-zap'
  },
  {
    title: 'Support',
    description: 'A clean workflow for daily use by teams and operators.',
    icon: 'i-lucide-headphones'
  }
]

const steps = [
  {
    title: 'Login',
    description: 'Sign in and open your controlled purchase dashboard.'
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

const buyOptions = [
  {
    title: 'Buy on our Website / App',
    description: 'Best experience with full history, reports and account control.',
    icon: 'i-lucide-smartphone',
    action: 'Open Web App'
  },
  {
    title: 'Buy via USSD (Any Phone)',
    description: 'No internet? No problem. Buy airtime instantly from any phone.',
    icon: 'i-lucide-phone',
    action: '*4166283#'
  }
]

const trustReasons = [
  {
    title: 'Secure Transactions',
    description: 'Every request is logged with a unique reference.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Instant Delivery',
    description: 'Airtime is delivered in seconds after payment.',
    icon: 'i-lucide-zap'
  },
  {
    title: '24/7 Support',
    description: 'We stay available when your team needs help.',
    icon: 'i-lucide-headphones'
  },
  {
    title: '100% Reliable',
    description: 'Clear approvals and a predictable flow every time.',
    icon: 'i-lucide-badge-check'
  }
]

const ctaLinks = ref<ButtonProps[]>([
  {
    label: 'Open app',
    to: '/login',
    color: 'primary',
    size: 'lg'
  },
  {
    label: 'Support',
    to: '#contact',
    color: 'neutral',
    variant: 'soft',
    size: 'lg',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <div class="overflow-hidden bg-[#f7f9fc] text-slate-900">
    <section class="relative isolate pt-6 sm:pt-10">
      <div
        class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.22),transparent_35%),radial-gradient(circle_at_left_top,rgba(15,23,42,.09),transparent_32%)]"
      />

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <UPageHero
          headline="Airtime purchases for approved numbers only"
          title="Buy airtime securely."
          description="Fast, secure and reliable airtime for families, teams and organizations. Powered by M-Pesa."
          orientation="horizontal"
          :links="heroLinks"
          class="goldmen-fade-up"
        >
          <div class="relative mx-auto w-full max-w-[28rem]">
            <div class="goldmen-glow absolute -inset-6 rounded-full bg-amber-300/20 blur-3xl" />
            <div class="goldmen-float relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,.16)] ring-1 ring-slate-900/5">
              <img
                :src="heroImage"
                alt="Goldmen app preview"
                class="w-full object-cover"
              >
            </div>
          </div>
        </UPageHero>
      </div>
    </section>

    <section class="-mt-4 pb-10">
      <div class="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <UCard
          v-for="(item, index) in trustCards"
          :key="item.title"
          class="goldmen-fade-up rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur"
          :style="{ animationDelay: `${index * 90}ms` }"
        >
          <div class="flex items-start gap-4">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <UIcon
                :name="item.icon"
                class="h-5 w-5"
              />
            </div>

            <div>
              <p class="text-sm font-semibold text-slate-900">
                {{ item.title }}
              </p>
              <p class="mt-1 text-sm leading-6 text-slate-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <UPageSection class="bg-white">
      <div
        id="about"
        class="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-start"
      >
        <div class="goldmen-fade-up">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            About us
          </p>
          <h2 class="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything your team needs in one controlled airtime flow.
          </h2>
          <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Goldmen keeps top-ups simple: approved sender numbers, instant delivery, and a clean reference for every transaction. It is built to feel premium on desktop and fast on mobile.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <UCard
              v-for="card in aboutCards"
              :key="card.title"
              class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm ring-1 ring-slate-200">
                  <UIcon
                    :name="card.icon"
                    class="h-5 w-5"
                  />
                </div>

                <div>
                  <p class="text-sm font-semibold text-slate-950">
                    {{ card.title }}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-slate-600">
                    {{ card.description }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <div class="goldmen-fade-up goldmen-delay-1 grid gap-4 sm:grid-cols-2">
          <UCard class="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl sm:col-span-2">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Reference
            </p>
            <p class="mt-3 text-2xl font-semibold">
              Audit-ready
            </p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              Every airtime request generates a clear transaction reference so the journey stays traceable from request to delivery.
            </p>
          </UCard>

          <UCard class="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Access
            </p>
            <p class="mt-3 text-xl font-semibold text-slate-950">
              Login only
            </p>
          </UCard>

          <UCard class="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Delivery
            </p>
            <p class="mt-3 text-xl font-semibold text-slate-950">
              Instant top-ups
            </p>
          </UCard>

          <UCard class="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Control
            </p>
            <p class="mt-3 text-xl font-semibold text-slate-950">
              Approved numbers
            </p>
          </UCard>

          <UCard class="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Payments
            </p>
            <p class="mt-3 text-xl font-semibold text-slate-950">
              M-Pesa powered
            </p>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <UPageSection class="bg-slate-50">
      <div
        id="how-it-works"
        class="grid gap-10"
      >
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            How it works
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A simple four-step airtime flow.
          </h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <UCard
            v-for="(step, index) in steps"
            :key="step.title"
            class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-base font-semibold text-amber-700">
                {{ index + 1 }}
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
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
      </div>
    </UPageSection>

    <UPageSection class="bg-white">
      <div
        id="support"
        class="grid gap-6 lg:grid-cols-2"
      >
        <UCard class="rounded-[2rem] border border-slate-200 bg-[#fffaf0] p-7 shadow-sm">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
              <UIcon
                name="i-lucide-smartphone"
                class="h-5 w-5"
              />
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                Buy on our website / app
              </p>
              <h3 class="mt-3 text-2xl font-semibold text-slate-950">
                Open Web App
              </h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                Best experience with full history, reports and account control.
              </p>
            </div>
          </div>

          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <UButton
              to="/login"
              label="Open Web App"
              color="primary"
              size="lg"
            />
            <span class="text-sm text-slate-500">
              Search “Goldmen Solution” on Play Store or use App ID: ke.co.goldmen
            </span>
          </div>
        </UCard>

        <UCard class="rounded-[2rem] border border-emerald-200 bg-[#f5fff5] p-7 shadow-sm">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <UIcon
                name="i-lucide-phone"
                class="h-5 w-5"
              />
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
                Buy via USSD (Any Phone)
              </p>
              <h3 class="mt-3 text-2xl font-semibold text-slate-950">
                *4166283#
              </h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">
                No internet? No problem. Buy airtime instantly from any phone.
              </p>
            </div>
          </div>

          <div class="mt-6 rounded-[1.5rem] border border-emerald-200 bg-white p-5 text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Paybill
            </p>
            <p class="mt-2 text-3xl font-semibold text-emerald-700">
              4166283
            </p>
            <p class="mt-2 text-sm text-slate-500">
              Follow the prompts to complete your purchase.
            </p>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection class="bg-slate-50">
      <div
        id="security"
        class="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center"
      >
        <UCard class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
            Get the Goldmen App
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Fast, secure, and built for you.
          </h2>
          <p class="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Download on Google Play, or keep using the web app for full history, reports, and account control.
          </p>

          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <UButton
              to="/login"
              label="Open Web App"
              color="primary"
              size="lg"
            />
            <span class="text-sm text-slate-500">
              App ID: ke.co.goldmen
            </span>
          </div>
        </UCard>

        <div class="grid gap-4 sm:grid-cols-2">
          <UCard
            v-for="reason in trustReasons"
            :key="reason.title"
            class="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div class="flex items-start gap-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <UIcon
                  :name="reason.icon"
                  class="h-5 w-5"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-950">
                  {{ reason.title }}
                </p>
                <p class="mt-1 text-sm leading-6 text-slate-600">
                  {{ reason.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <section class="bg-slate-950 py-10 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 rounded-4xl border border-white/10 bg-slate-950 px-6 py-8 shadow-2xl lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-10">
          <div class="goldmen-fade-up">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Ready to go live
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Launch your service platform with confidence.
            </h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Open the Goldmen app and start topping up approved numbers with a flow that feels premium, simple, and trustworthy.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <UButton
              v-for="link in ctaLinks"
              :key="link.label"
              v-bind="link"
              class="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
