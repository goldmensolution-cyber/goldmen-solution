<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Support"
      title="Contact us"
      description="Put the support options in one place so users know exactly how to reach you."
    />

    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <UCard>
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Send a message
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              This can be wired to email, WhatsApp, or your backend later.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-4">
            <div class="grid gap-4 sm:grid-cols-2">
              <UInput
                v-model="name"
                label="Your name"
                placeholder="Full name"
              />
              <UInput
                v-model="phone"
                label="Phone number"
                placeholder="07XX XXX XXX"
              />
            </div>

            <UInput
              v-model="email"
              label="Email address"
              placeholder="name@example.com"
            />

            <UTextarea
              v-model="message"
              label="Message"
              placeholder="Tell us what you need help with..."
              autoresize
              :rows="5"
            />

            <div class="flex justify-end">
              <UButton label="Send message" />
            </div>
          </div>
        </template>
      </UCard>

      <div class="space-y-6">
        <UCard variant="subtle">
          <template #header>
            <div>
              <h2 class="text-lg font-semibold text-slate-950">
                Contact details
              </h2>
              <p class="mt-1 text-sm text-slate-500">
                Make these details easy to find.
              </p>
            </div>
          </template>

          <template #default>
            <div class="space-y-3 text-sm text-slate-600">
              <div class="rounded-2xl bg-white p-4">
                <p class="font-semibold text-slate-950">
                  WhatsApp
                </p>
                <p class="mt-1">
                  +254 710 000 000
                </p>
              </div>
              <div class="rounded-2xl bg-white p-4">
                <p class="font-semibold text-slate-950">
                  Email
                </p>
                <p class="mt-1">
                  support@goldmen.co.ke
                </p>
              </div>
              <div class="rounded-2xl bg-white p-4">
                <p class="font-semibold text-slate-950">
                  Location
                </p>
                <p class="mt-1">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </template>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            <div>
              <h2 class="text-lg font-semibold text-slate-950">
                Best support flow
              </h2>
            </div>
          </template>

          <template #default>
            <div class="space-y-3 text-sm leading-6 text-slate-600">
              <p>1. Open the support page</p>
              <p>2. Share the transaction reference</p>
              <p>3. Include the phone number and network</p>
              <p>4. Confirm whether the issue came from web, app, or USSD</p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
