<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const helpSteps = [
  {
    title: 'Open the web app',
    description: 'Sign in and choose the approved number you want to top up.'
  },
  {
    title: 'Use the Android app',
    description: 'Search Goldmen Solution on Google Play or open the installed app.'
  },
  {
    title: 'Use USSD',
    description: 'Dial *4166283# and follow the prompts to complete payment.'
  }
]
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Guide"
      title="How it works"
      description="Show the buying options clearly so the user can choose the fastest path."
    />

    <div class="grid gap-6 xl:grid-cols-3">
      <UCard
        v-for="(step, index) in helpSteps"
        :key="step.title"
      >
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              {{ index + 1 }}
            </div>
            <div>
              <h2 class="text-base font-semibold text-slate-950">
                {{ step.title }}
              </h2>
            </div>
          </div>
        </template>

        <template #default>
          <p class="text-sm leading-6 text-slate-600">
            {{ step.description }}
          </p>
        </template>
      </UCard>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard>
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              USSD purchase flow
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              This gives users a path even when they are offline.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-3 text-sm text-slate-600">
            <p>1. Dial <span class="font-semibold text-slate-950">*4166283#</span></p>
            <p>2. Enter the phone number and amount</p>
            <p>3. Confirm the M-Pesa prompt</p>
            <p>4. Wait for the airtime confirmation</p>
          </div>
        </template>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Support points
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Keep the help details visible at all times.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-4 text-sm text-slate-600">
            <div class="rounded-2xl bg-white p-4">
              <p class="font-semibold text-slate-950">
                Play Store app ID
              </p>
              <p class="mt-1">
                ke.co.goldmen
              </p>
            </div>
            <div class="rounded-2xl bg-white p-4">
              <p class="font-semibold text-slate-950">
                Paybill
              </p>
              <p class="mt-1">
                4166283
              </p>
            </div>
            <div class="rounded-2xl bg-white p-4">
              <p class="font-semibold text-slate-950">
                USSD
              </p>
              <p class="mt-1">
                *4166283#
              </p>
            </div>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
