<!-- app/pages/index.vue -->
<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

useSeoMeta({
  title: 'Goldmen Solution | Buy airtime securely',
  description:
    'Goldmen Solution helps businesses buy airtime securely with approved numbers, M-Pesa checkout, and audit-ready delivery.'
})

const heroFacts = [
  {
    label: 'Secure Payments',
    description: 'Powered by M-Pesa',
    icon: 'i-lucide-shield-check'
  },
  {
    label: 'Controlled Access',
    description: 'Approved numbers only',
    icon: 'i-lucide-lock'
  },
  {
    label: 'Trusted Service',
    description: 'By thousands of users',
    icon: 'i-lucide-badge-check'
  }
]

const heroCards = [
  {
    title: 'Controlled Access',
    description: 'Only approved numbers can be topped up.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Secure Transactions',
    description: 'Every transaction is logged with a unique reference.',
    icon: 'i-lucide-lock'
  },
  {
    title: 'Instant Airtime',
    description: 'Airtime delivered instantly to the approved number.',
    icon: 'i-lucide-bolt'
  }
]

const trustCards = [
  {
    title: 'Secure & Reliable',
    description: 'Bank-level security for every transaction.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Instant Delivery',
    description: 'Airtime is delivered in seconds.',
    icon: 'i-lucide-bolt'
  },
  {
    title: 'For Teams & Families',
    description: 'Perfect for businesses, teams and households.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Support You Can Trust',
    description: 'We are here when you need us.',
    icon: 'i-lucide-headphones'
  }
]

const steps = [
  {
    step: 1,
    title: 'Login',
    description: 'Sign in to your account to get started.',
    icon: 'i-lucide-user'
  },
  {
    step: 2,
    title: 'Enter Details',
    description: 'Select network, enter the approved number and amount.',
    icon: 'i-lucide-smartphone'
  },
  {
    step: 3,
    title: 'Pay with M-Pesa',
    description: 'Complete payment securely using M-Pesa.',
    icon: 'i-lucide-credit-card'
  },
  {
    step: 4,
    title: 'Airtime Delivered',
    description: 'Airtime is sent instantly and you get a confirmation.',
    icon: 'i-lucide-circle-check-big'
  }
]

const buyOptions = [
  {
    title: 'Buy on our Website / App',
    description: 'Best experience with full history, reports and account control.',
    icon: 'i-lucide-smartphone',
    ctaLabel: 'Open Web App',
    ctaTo: '/login',
    tone: 'dark'
  },
  {
    title: 'Buy via USSD (Any Phone)',
    description: 'No internet? No problem. Buy airtime instantly.',
    icon: 'i-lucide-phone-call',
    ctaLabel: '*4166283#',
    ctaTo: '/login',
    tone: 'green'
  }
]

const appTrust = [
  { label: 'Secure Transactions', icon: 'i-lucide-shield-check' },
  { label: 'Instant Delivery', icon: 'i-lucide-bolt' },
  { label: '24/7 Support', icon: 'i-lucide-headphones' },
  { label: '100% Reliable', icon: 'i-lucide-circle-check-big' }
]

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Support', href: '#contact' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <div class="overflow-hidden bg-white text-slate-950">
    <div
      id="top"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,.14),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,23,42,.08),_transparent_28%),linear-gradient(to_bottom,#ffffff_0%,#fffdf6_48%,#ffffff_100%)]"
    />

    <main>
      <section class="pt-8 sm:pt-10">
        <UContainer>
          <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <div class="max-w-2xl">
              <UBadge
                color="primary"
                variant="soft"
                class="px-3 py-1.5"
              >
                Approved numbers only
              </UBadge>

              <h1
                class="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-[4.65rem] lg:leading-[0.95]"
              >
                Buy airtime
                <br>
                securely.
              </h1>

              <p class="mt-5 text-2xl font-semibold text-amber-600 sm:text-[2rem]">
                For approved numbers only.
              </p>

              <p class="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                Fast, secure and reliable airtime for families, teams and
                organizations. Powered by M-Pesa.
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <UButton
                  to="/login"
                  size="lg"
                  label="Open App"
                  trailing-icon="i-lucide-arrow-right"
                  class="shadow-[0_12px_30px_rgba(245,158,11,.18)]"
                />
                <UButton
                  to="#how-it-works"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  label="How it works"
                  trailing-icon="i-lucide-arrow-right"
                />
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="item in heroFacts"
                  :key="item.label"
                  class="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4 shadow-sm"
                >
                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950"
                    >
                      <UIcon
                        :name="item.icon"
                        class="size-5"
                      />
                    </div>
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
                class="absolute -left-4 top-10 h-44 w-44 rounded-full bg-amber-300/30 blur-3xl"
              />
              <div
                class="absolute right-0 top-0 h-full w-full rounded-[2.4rem] bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,.18),_transparent_18%),linear-gradient(135deg,#0d1d4a_0%,#0b1a42_56%,#081433_100%)] shadow-[0_30px_90px_rgba(15,23,42,.2)]"
              />
              <div
                class="absolute inset-y-0 right-4 hidden w-px bg-white/10 lg:block"
              />
              <div
                class="relative z-10 rounded-[2.4rem] p-5 text-white sm:p-6"
              >
                <div class="space-y-4">
                  <UCard
                    v-for="card in heroCards"
                    :key="card.title"
                    class="rounded-[1.4rem] border border-white/10 bg-white/92 p-4 shadow-[0_12px_40px_rgba(0,0,0,.06)] backdrop-blur"
                  >
                    <div class="flex items-start gap-4">
                      <div
                        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-slate-950 ring-1 ring-amber-300/30"
                      >
                        <UIcon
                          :name="card.icon"
                          class="size-6"
                        />
                      </div>
                      <div>
                        <p class="text-lg font-bold text-slate-950">
                          {{ card.title }}
                        </p>
                        <p class="mt-1 max-w-sm text-sm leading-6 text-slate-600">
                          {{ card.description }}
                        </p>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>

              <div
                class="pointer-events-none absolute -bottom-4 right-8 h-24 w-24 rounded-full border-[10px] border-amber-300/90"
              />
            </div>
          </div>
        </UContainer>
      </section>

      <section
        id="features"
        class="mt-10 px-4 sm:mt-14"
      >
        <UContainer>
          <UCard class="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,.06)] sm:p-5">
            <div class="grid gap-4 lg:grid-cols-4">
              <div
                v-for="item in trustCards"
                :key="item.title"
                class="flex gap-3 rounded-[1.2rem] px-2 py-2"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-slate-950 ring-1 ring-amber-200"
                >
                  <UIcon
                    :name="item.icon"
                    class="size-5"
                  />
                </div>
                <div>
                  <p class="text-sm font-bold text-slate-950">
                    {{ item.title }}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-slate-600">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </UContainer>
      </section>

      <section
        id="how-it-works"
        class="py-18 mt-6 bg-slate-50/80 px-4 sm:py-20"
      >
        <UContainer>
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              How it works
            </p>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Four simple steps to deliver airtime.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-600">
              The flow stays short, clear and controlled from login through
              payment to delivery.
            </p>
          </div>

          <div class="mt-10 grid gap-4 lg:grid-cols-4">
            <UCard
              v-for="item in steps"
              :key="item.title"
              class="rounded-[1.6rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div class="flex justify-center">
                <UChip
                  :text="item.step"
                  color="amber"
                  size="lg"
                  inset
                >
                  <button
                    type="button"
                    class="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-950 shadow-inner"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <UIcon
                      :name="item.icon"
                      class="size-7"
                    />
                  </button>
                </UChip>
              </div>

              <h3 class="mt-5 text-lg font-bold text-slate-950">
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                {{ item.description }}
              </p>
            </UCard>
          </div>
        </UContainer>
      </section>

      <section
        id="security"
        class="px-4 py-16 sm:py-20"
      >
        <UContainer>
          <div class="text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Ways to buy airtime
            </p>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose the quickest path for your team.
            </h2>
          </div>

          <div class="mt-10 grid gap-4 lg:grid-cols-2">
            <UCard class="rounded-[1.6rem] border border-slate-200 bg-[#fffdf6] p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-950 text-amber-300"
                >
                  <UIcon
                    :name="buyOptions[0].icon"
                    class="size-7"
                  />
                </div>

                <div class="min-w-0">
                  <h3 class="text-xl font-black text-slate-950">
                    {{ buyOptions[0].title }}
                  </h3>
                  <p class="mt-2 max-w-md text-sm leading-7 text-slate-600">
                    {{ buyOptions[0].description }}
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap items-center gap-3">
                <UButton
                  :to="buyOptions[0].ctaTo"
                  label="Open Web App"
                  trailing-icon="i-lucide-arrow-right"
                />
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
                >
                  <span class="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-black text-white">
                    <UIcon
                      name="i-simple-icons-googleplay"
                      class="size-3.5"
                    />
                  </span>
                  Get it on Google Play
                </a>
              </div>

              <p class="mt-5 text-sm leading-7 text-slate-600">
                Search “Goldmen Solution” on Play Store or use App ID:
                <span class="font-semibold text-slate-950">ke.co.goldmen</span>
              </p>
            </UCard>

            <UCard class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
                >
                  <UIcon
                    :name="buyOptions[1].icon"
                    class="size-7"
                  />
                </div>

                <div class="min-w-0">
                  <h3 class="text-xl font-black text-slate-950">
                    {{ buyOptions[1].title }}
                  </h3>
                  <p class="mt-2 max-w-md text-sm leading-7 text-slate-600">
                    {{ buyOptions[1].description }}
                  </p>
                </div>
              </div>

              <div class="mt-6 rounded-[1.4rem] border border-emerald-200 bg-emerald-50 p-5 text-center">
                <p class="text-3xl font-black tracking-tight text-emerald-700 sm:text-4xl">
                  *4166283#
                </p>
              </div>

              <p class="mt-4 text-center text-sm font-semibold text-slate-900">
                Paybill: 4166283
              </p>
              <p class="mt-1 text-center text-sm leading-6 text-slate-600">
                Follow the prompts to complete your purchase.
              </p>
            </UCard>
          </div>
        </UContainer>
      </section>

      <section class="px-4 pb-16 sm:pb-20">
        <UContainer>
          <UCard class="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div class="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <h2 class="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Get the Goldmen App
                </h2>
                <p class="mt-3 max-w-md text-base leading-7 text-slate-600">
                  Fast, secure and built for you. Download now on Google Play.
                </p>

                <div class="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
                  >
                    <span class="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-black text-white">
                      <UIcon
                        name="i-simple-icons-googleplay"
                        class="size-3.5"
                      />
                    </span>
                    Google Play
                  </a>

                  <div class="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950">
                    App ID: <span class="text-slate-600">ke.co.goldmen</span>
                  </div>
                </div>
              </div>

              <div class="grid gap-5 md:grid-cols-[.95fr_1.05fr]">
                <div class="rounded-[1.4rem] bg-white p-5 shadow-sm">
                  <p class="text-sm font-bold text-slate-950">
                    Why thousands trust Goldmen
                  </p>

                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div
                      v-for="item in appTrust"
                      :key="item.label"
                      class="text-center"
                    >
                      <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-950">
                        <UIcon
                          :name="item.icon"
                          class="size-5"
                        />
                      </div>
                      <p class="mt-2 text-sm font-semibold text-slate-950">
                        {{ item.label }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="relative overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,.18),_transparent_30%),linear-gradient(135deg,#0b1a42_0%,#132b66_100%)] p-5 text-white shadow-sm"
                >
                  <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
                  <p class="text-sm font-semibold text-amber-200">
                    Secure airtime. Trusted service.
                  </p>
                  <p class="mt-2 max-w-sm text-sm leading-6 text-slate-200">
                    Join thousands of users who enjoy fast and reliable airtime
                    top-ups.
                  </p>

                  <div class="mt-8 flex justify-end">
                    <UButton
                      to="/login"
                      size="lg"
                      color="primary"
                      label="Open App Now"
                      trailing-icon="i-lucide-arrow-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </UContainer>
      </section>

      <section class="px-4 pb-8">
        <UContainer>
          <UCard class="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,.22)]">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Ready to launch
                </p>
                <h2 class="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                  Secure airtime. Trusted service.
                </h2>
                <p class="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                  Clean layout, stronger hierarchy and a homepage that feels
                  much closer to the screenshots.
                </p>
              </div>

              <UButton
                to="/login"
                size="lg"
                label="Open App Now"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </UCard>
        </UContainer>
      </section>
    </main>
  </div>
</template>
