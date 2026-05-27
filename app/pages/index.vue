<script setup lang="ts">
useSeoMeta({
  title: 'Goldmen',
  description: 'Buy airtime with a cleaner flow, clearer transaction references, and a more professional Goldmen interface.'
})

const features = [
  {
    title: 'Clear purchase flow',
    description: 'Sender number, recipient number, and amount are captured in a tidy form with a website-generated reference.'
  },
  {
    title: 'Controlled access',
    description: 'The purchase area stays behind sign-in, while the marketing site stays public.'
  },
  {
    title: 'Blue and gold branding',
    description: 'A more premium design system that matches the new logo and moves away from the old red palette.'
  }
]

const steps = [
  'Sign in with Google or another enabled provider.',
  'Enter sender number, recipient number, and amount.',
  'Goldmen creates a `GOL-` reference and sends the payment request to your backend edge function.'
]

const safeguards = [
  'Phone number edits go through an interim request-change flow.',
  'The verified sender number stays protected until you approve a change.',
  'Transaction origin is tagged with a website reference for clean auditing.'
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,.20),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,.22),_transparent_38%)]" />

      <UContainer class="relative py-20 md:py-28">
        <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <UBadge
              color="neutral"
              variant="subtle"
              class="border border-white/10 bg-white/5 text-slate-200"
            >
              Goldmen airtime platform
            </UBadge>

            <h1 class="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A cleaner way to buy airtime with a premium Goldmen finish.
            </h1>

            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Public landing page on the outside, authenticated buying experience on the inside, and a request-change flow that keeps sender numbers controlled until your backend approval process is ready.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <UButton
                to="/login"
                size="xl"
                label="Continue with Google"
                icon="i-simple-icons-google"
              />
              <UButton
                to="/app"
                size="xl"
                label="Open app"
                color="neutral"
                variant="soft"
              />
            </div>

            <p class="mt-4 text-sm text-slate-400">
              Sender number, recipient number, amount, and a generated transaction reference.
            </p>
          </div>

          <UCard class="border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div class="space-y-6 p-2">
              <div class="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p class="text-sm uppercase tracking-[0.25em] text-amber-300">
                  Reference
                </p>
                <p class="mt-3 text-3xl font-semibold text-white">
                  GOL-8K4P9Q2D
                </p>
                <p class="mt-2 text-sm text-slate-400">
                  Website-generated origin tag for STK auditing.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Brand
                  </p>
                  <p class="mt-2 text-lg font-medium text-white">
                    Blue + gold
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Access
                  </p>
                  <p class="mt-2 text-lg font-medium text-white">
                    Google auth
                  </p>
                </div>
              </div>

              <div class="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
                Sender-number changes are routed through the interim request-change flow, so the verified number stays protected.
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section
      id="features"
      class="border-t border-white/10 bg-slate-950/70"
    >
      <UContainer class="py-20">
        <div class="mb-10 max-w-2xl">
          <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
            What changed
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-white">
            Designed for the new Goldmen direction.
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="border border-white/10 bg-white/5"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section
      id="how-it-works"
      class="border-t border-white/10 bg-slate-950"
    >
      <UContainer class="py-20">
        <div class="grid gap-10 lg:grid-cols-2">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
              How it works
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-white">
              A straight path from login to STK push.
            </h2>
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
              <p class="text-sm leading-7 text-slate-300">
                {{ step }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section
      id="security"
      class="border-t border-white/10 bg-slate-950/70"
    >
      <UContainer class="py-20">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
            Safeguards
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-white">
            Built around the current phone-number control flow.
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <UCard
            v-for="item in safeguards"
            :key="item"
            class="border border-white/10 bg-white/5"
          >
            <p class="text-sm leading-7 text-slate-300">
              {{ item }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="border-t border-white/10 bg-slate-950">
      <UContainer class="py-20">
        <UCard class="border border-amber-400/20 bg-amber-400/5">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-amber-300">
                Ready
              </p>
              <h2 class="mt-3 text-3xl font-semibold text-white">
                Open the new Goldmen app.
              </h2>
              <p class="mt-3 text-slate-300">
                The public site stays polished and the authenticated app handles the purchase journey.
              </p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <UButton
                to="/login"
                size="xl"
                label="Continue with Google"
                icon="i-simple-icons-google"
              />
              <UButton
                to="/app"
                size="xl"
                label="Open dashboard"
                color="neutral"
                variant="soft"
              />
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>
