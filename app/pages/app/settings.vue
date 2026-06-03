<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const businessName = ref('Goldmen Solution')
const supportEmail = ref('support@goldmen.co.ke')
const supportPhone = ref('0710 000 000')
const defaultAmount = ref(100)
const defaultNetwork = ref('Safaricom')
const approvalMode = ref('Manual approval')

const networkItems = ['Safaricom', 'Airtel', 'Telkom', 'Equitel']
const approvalItems = ['Manual approval', 'Auto approval', 'Always confirm']
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Account"
      title="Settings"
      description="Keep the app details, defaults, and security rules clean and easy to edit."
    />

    <div class="grid gap-6 xl:grid-cols-2">
      <UCard>
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Profile details
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Update the visible business information.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-4">
            <UInput
              v-model="businessName"
              label="Business name"
            />
            <UInput
              v-model="supportEmail"
              label="Support email"
            />
            <UInput
              v-model="supportPhone"
              label="Support phone"
            />
            <div class="grid gap-4 sm:grid-cols-2">
              <USelect
                v-model="defaultNetwork"
                :items="networkItems"
                label="Default network"
              />
              <UInputNumber
                v-model="defaultAmount"
                :min="10"
                :step="10"
                label="Default amount"
              />
            </div>
            <div class="flex justify-end">
              <UButton label="Save changes" />
            </div>
          </div>
        </template>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Security rules
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Keep the purchase flow controlled and predictable.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-4">
            <USelect
              v-model="approvalMode"
              :items="approvalItems"
              label="Approval mode"
            />

            <div class="rounded-2xl bg-white p-4">
              <p class="text-sm font-semibold text-slate-950">
                Recommended checks
              </p>
              <ul class="mt-3 space-y-2 text-sm text-slate-600">
                <li>Only approved beneficiaries can be topped up</li>
                <li>Show a final review step before sending airtime</li>
                <li>Keep transaction references visible for support</li>
              </ul>
            </div>

            <div class="flex justify-end">
              <UButton
                label="Update security"
                color="neutral"
                variant="solid"
              />
            </div>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
