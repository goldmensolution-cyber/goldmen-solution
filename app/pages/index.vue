<script setup lang="ts">
useSeoMeta({
  title: 'Goldmen',
  description: 'A cleaner way to buy airtime with a premium Goldmen finish.'
})

const features = [
  {
    title: 'Clear purchase flow',
    description: 'Sender number, recipient number, and amount are captured in a focused form with a generated transaction reference.'
  },
  {
    title: 'Controlled access',
    description: 'The buying experience stays behind sign-in while the public site remains polished and lightweight.'
  },
  {
    title: 'Blue and gold branding',
    description: 'A premium palette that matches the new logo and replaces the old red styling.'
  }
]

const steps = [
  'Sign in with Google or another enabled provider.',
  'Enter sender number, recipient number, and amount.',
  'Goldmen creates a `GOL-` reference and sends the request to your backend edge function.'
]

const safeguards = [
  'Phone number edits use the interim request-change flow.',
  'The verified sender number stays protected until you approve a change.',
  'The website-generated reference tags the transaction origin for clean auditing.'
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,.20),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,.22),_transparent_38%)]" />

      <UContainer class="relative py-16 md:py-24 lg:py-28">
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div class="text-center lg:text-left">
            <UBadge color="neutral" variant="subtle" class="border border-white/10 bg-white/5 text-slate-200">
              Goldmen airtime platform
            </UBadge>

            <h1 class="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A cleaner way to buy airtime with a premium Goldmen finish.
            </h1>

            <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8 lg:mx-0">
              Public landing page on the outside, authenticated buying experience on the inside, and a request-change flow that keeps sender numbers controlled until your backend review path is ready.
            </p>

            <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-row">
              <UButton to="/login" size="xl" label="Continue with Google" icon="i-simple-icons-google" block />
              <UButton to="/app" size="xl" label="Open app" color="neutral" variant="soft" block />
            </div>

            <p class="mt-4 text-sm text-slate-400">
              Sender number, recipient number, amount, and a generated transaction reference.
            </p>
          </div>

          <UCard class="border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div class="space-y-5 p-2 sm:p-4">
              <div class="rounded-3xl border border-white/10 bg-slate-950/80 p-5 sm:p-6">
                <p class="text-xs uppercase tracking-[0.25em] text-amber-300">Reference</p>
                <p class="mt-3 break-all text-2xl font-semibold text-white sm:text-3xl">GOL-8K4P9Q2D</p>
                <p class="mt-2 text-sm leading-6 text-slate-400">Website-generated origin tag for STK auditing.</p>
              </div>

              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Brand</p>
                  <p class="mt-2 text-base font-medium text-white">Blue + gold</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Access</p>
                  <p class="mt-2 text-base font-medium text-white">Google auth + extras</p>
                </div>
              </div>

              <div class="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-6 text-amber-100">
                Sender-number changes are routed through the interim request-change flow so the verified number stays protected.
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section id="features" class="border-t border-white/10 bg-slate-950/70">
      <UContainer class="py-16 md:py-20">
        <div class="mb-8 max-w-2xl">
          <p class="text-sm uppercase tracking-[0.3em] text-amber-300">What changed</p>
          <h2 class="mt-3 text-3xl font-semibold text-white">Designed for the new Goldmen direction.</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="border border-white/10 bg-white/5"
          >
            <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-300">{{ feature.description }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section id="how-it-works" class="border-t border-white/10 bg-slate-950">
      <UContainer class="py-16 md:py-20">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-amber-300">How it works</p>
            <h2 class="mt-3 text-3xl font-semibold text-white">A straight path from login to STK push.</h2>
          </div>

          <div class="space-y-4">
            <div
              v-for="(step, index) in steps"
              :key="step"
              class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-sm font-semibold text-amber-300">
                {{ index + 1 }}
              </div>
              <p class="text-sm leading-7 text-slate-300">{{ step }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section id="security" class="border-t border-white/10 bg-slate-950/70">
      <UContainer class="py-16 md:py-20">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.3em] text-amber-300">Safeguards</p>
          <h2 class="mt-3 text-3xl font-semibold text-white">Built around the current phone-number control flow.</h2>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <UCard
            v-for="item in safeguards"
            :key="item"
            class="border border-white/10 bg-white/5"
          >
            <p class="text-sm leading-7 text-slate-300">{{ item }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="border-t border-white/10 bg-slate-950">
      <UContainer class="py-16 md:py-20">
        <UCard class="border border-amber-400/20 bg-amber-400/5">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="text-center lg:text-left">
              <p class="text-sm uppercase tracking-[0.3em] text-amber-300">Ready</p>
              <h2 class="mt-3 text-3xl font-semibold text-white">Open the new Goldmen app.</h2>
              <p class="mt-3 text-slate-300">The public site stays polished and the authenticated app handles the purchase journey.</p>
            </div>
            <div class="grid gap-3 sm:grid-cols-2 lg:flex">
              <UButton to="/login" size="xl" label="Continue with Google" icon="i-simple-icons-google" block />
              <UButton to="/app" size="xl" label="Open dashboard" color="neutral" variant="soft" block />
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>
