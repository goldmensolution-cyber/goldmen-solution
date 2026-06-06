<script setup lang="ts">
import airtelLogo from '~/assets/icons/Airtel_logo.svg'
import mpesaLogo from '~/assets/icons/mpesa.svg'
import safaricomLogo from '~/assets/icons/safaricom-logo-vector.svg'
import telkomLogo from '~/assets/icons/Telkom_Mobile-Logo.wine.svg'

definePageMeta({
  colorMode: 'light'
})

useSeoMeta({
  title: 'Goldmen Solution | Buy airtime securely',
  description:
    'Goldmen Solution helps businesses buy airtime securely with approved numbers, M-Pesa checkout, and audit-ready delivery.'
})

type ProviderMark = {
  label: string
  src: string
}

type CardItem = {
  title: string
  description: string
  icon: string
}

type StepItem = {
  number: string
  title: string
  description: string
}

const providerMarks: ProviderMark[] = [
  { label: 'Safaricom', src: safaricomLogo },
  { label: 'Airtel', src: airtelLogo },
  { label: 'Telkom', src: telkomLogo },
  { label: 'M-Pesa', src: mpesaLogo }
]

const marqueeProviders = [...providerMarks, ...providerMarks]

const heroFacts: CardItem[] = [
  {
    title: 'Secure Payments',
    description: 'Powered by M-Pesa for trusted checkout.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Controlled Access',
    description: 'Only approved numbers can be topped up.',
    icon: 'i-lucide-lock'
  },
  {
    title: 'Trusted Service',
    description: 'Built for teams, families, and businesses.',
    icon: 'i-lucide-badge-check'
  }
]

const featureCards: CardItem[] = [
  {
    title: 'Approved numbers only',
    description:
      'Keep airtime purchases limited to numbers you already trust and manage.',
    icon: 'i-lucide-shield-check'
  },
  {
    title: 'Instant delivery',
    description:
      'Airtime is delivered immediately once payment clears through M-Pesa.',
    icon: 'i-lucide-bolt'
  },
  {
    title: 'Transparent history',
    description:
      'Every purchase should leave a visible reference and an audit trail.',
    icon: 'i-lucide-receipt-text'
  },
  {
    title: 'Support for everyone',
    description:
      'Use the web app or USSD flow depending on the device and context.',
    icon: 'i-lucide-headphones'
  }
]

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Login',
    description: 'Sign in to your account to get started.'
  },
  {
    number: '02',
    title: 'Enter details',
    description: 'Choose the network, phone number, and amount.'
  },
  {
    number: '03',
    title: 'Pay with M-Pesa',
    description: 'Complete checkout with a fast and secure payment.'
  },
  {
    number: '04',
    title: 'Airtime delivered',
    description: 'The top-up is sent and you get confirmation.'
  }
]

const buyOptions: CardItem[] = [
  {
    title: 'Buy on the website or app',
    description:
      'Best for teams that need history, control, and a cleaner workflow.',
    icon: 'i-lucide-smartphone'
  },
  {
    title: 'Buy via USSD',
    description: 'Use *4166283# on any phone, even without internet.',
    icon: 'i-lucide-phone-call'
  }
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
          <div class="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
            <div class="max-w-2xl">
              <UBadge
                color="primary"
                variant="soft"
                class="px-3 py-1.5"
              >
                Approved numbers only
              </UBadge>

              <h1
                class="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-[4.8rem] lg:leading-[0.95]"
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

              <div class="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Supported providers
                </p>

                <div class="mt-4 overflow-hidden">
                  <div class="goldmen-marquee-track flex w-max items-center gap-3 pr-3">
                    <div
                      v-for="(provider, index) in marqueeProviders"
                      :key="`${provider.label}-${index}`"
                      class="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                    >
                      <img
                        :src="provider.src"
                        :alt="provider.label"
                        class="h-6 w-auto object-contain"
                      >
                      <span class="text-sm font-semibold text-slate-700">
                        {{ provider.label }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="item in heroFacts"
                  :key="item.title"
                  class="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm"
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
                      <p class="text-sm font-bold text-slate-950">
                        {{ item.title }}
                      </p>
                      <p class="mt-1 text-sm leading-6 text-slate-600">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="goldmen-orb pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-amber-200/60 blur-3xl"
              />
              <div
                class="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-slate-900/10 blur-3xl"
              />

              <UCard class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.10)]">
                <img
                  src="/goldmen-home-hero.png"
                  alt="Goldmen Solution home preview"
                  class="w-full rounded-[1.5rem] border border-slate-200"
                >
              </UCard>
            </div>
          </div>
        </UContainer>
      </section>

      <section
        id="features"
        class="scroll-mt-24 px-4 py-16 sm:py-20"
      >
        <UContainer>
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Why people trust it
            </p>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A cleaner way to buy airtime.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-600">
              Keep the experience short, polished, and easy to scan on any screen.
            </p>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <UCard
              v-for="item in featureCards"
              :key="item.title"
              class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-slate-950">
                <UIcon
                  :name="item.icon"
                  class="size-6"
                />
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
        id="how-it-works"
        class="scroll-mt-24 bg-slate-50/80 px-4 py-16 sm:py-20"
      >
        <UContainer>
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              How it works
            </p>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Four simple steps.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-600">
              The flow stays short and controlled from login through payment and delivery.
            </p>
          </div>

          <div class="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4">
            <template
              v-for="(step, index) in steps"
              :key="step.number"
            >
              <button
                type="button"
                class="flex flex-1 items-center gap-4 rounded-[2rem] border border-slate-200 bg-white px-5 py-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-black tracking-widest text-slate-950 ring-1 ring-amber-200">
                  {{ step.number }}
                </span>

                <span class="min-w-0">
                  <span class="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Step {{ step.number }}
                  </span>
                  <span class="mt-1 block text-lg font-bold text-slate-950">
                    {{ step.title }}
                  </span>
                  <span class="mt-1 block text-sm leading-6 text-slate-600">
                    {{ step.description }}
                  </span>
                </span>
              </button>

              <div
                v-if="index < steps.length - 1"
                class="hidden items-center justify-center px-1 lg:flex"
              >
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-5"
                  />
                </div>
              </div>
            </template>
          </div>
        </UContainer>
      </section>

      <section
        id="security"
        class="scroll-mt-24 px-4 py-16 sm:py-20"
      >
        <UContainer>
          <div class="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                Ways to buy airtime
              </p>
              <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Choose the quickest path for your team.
              </h2>
              <p class="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Keep the checkout experience consistent whether people use the
                web app or a basic phone.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <UCard
                v-for="item in buyOptions"
                :key="item.title"
                class="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div class="flex items-start gap-4">
                  <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 text-amber-300">
                    <UIcon
                      :name="item.icon"
                      class="size-6"
                    />
                  </div>

                  <div class="min-w-0">
                    <h3 class="text-lg font-black text-slate-950">
                      {{ item.title }}
                    </h3>
                    <p class="mt-2 text-sm leading-7 text-slate-600">
                      {{ item.description }}
                    </p>
                  </div>
                </div>

                <template v-if="item.title === 'Buy on the website or app'">
                  <div class="mt-6 flex flex-wrap gap-3">
                    <UButton
                      to="/login"
                      label="Open Web App"
                      trailing-icon="i-lucide-arrow-right"
                    />
                    <UButton
                      to="/login"
                      label="Login"
                      color="neutral"
                      variant="outline"
                    />
                  </div>
                </template>

                <template v-else>
                  <div class="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-lg font-semibold tracking-widest text-emerald-700">
                    *4166283#
                  </div>
                  <p class="mt-3 text-sm text-slate-600">
                    Paybill: <span class="font-semibold text-slate-950">4166283</span>
                  </p>
                </template>
              </UCard>
            </div>
          </div>
        </UContainer>
      </section>

      <section
        id="support"
        class="scroll-mt-24 px-4 pb-16 sm:pb-20"
      >
        <UContainer>
          <UCard class="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_25px_80px_rgba(15,23,42,.10)] sm:p-8">
            <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Support
                </p>
                <h2 class="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                  Need help getting started?
                </h2>
                <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Reach the team by email or open the help center when you need
                  a quick answer.
                </p>
              </div>

              <div class="flex flex-wrap gap-3">
                <UButton
                  href="mailto:support@goldmen.co.ke"
                  label="Email support"
                  trailing-icon="i-lucide-mail"
                  class="rounded-full"
                />
                <UButton
                  to="/app/help"
                  label="Help center"
                  color="neutral"
                  variant="outline"
                  class="rounded-full"
                />
              </div>
            </div>
          </UCard>
        </UContainer>
      </section>
    </main>
  </div>
</template>
