<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const beneficiaryName = ref('')
const beneficiaryPhone = ref('')
const beneficiaryNetwork = ref('Safaricom')
const beneficiaryType = ref('Approved number')

const networkItems = ['Safaricom', 'Airtel', 'Telkom', 'Equitel']
const typeItems = ['Approved number', 'Family', 'Team', 'Business']

const beneficiaries = ref([
  {
    name: 'Main Office Line',
    phone: '0712 345 678',
    network: 'Safaricom',
    note: 'Last used 2 days ago'
  },
  {
    name: 'Support Desk',
    phone: '0721 987 654',
    network: 'Airtel',
    note: 'Last used 5 days ago'
  },
  {
    name: 'Field Team',
    phone: '0700 111 222',
    network: 'Telkom',
    note: 'Last used today'
  }
])
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Access control"
      title="Beneficiaries"
      description="Approved numbers keep the purchase flow tighter and easier to support."
    >
      <template #action>
        <UButton
          to="/app/support"
          label="Need help adding a number?"
          color="neutral"
          variant="outline"
        />
      </template>
    </AppPageHeader>

    <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <UCard>
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Add beneficiary
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Add only the numbers that should be allowed to receive airtime.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-5">
            <div class="grid gap-4 sm:grid-cols-2">
              <UInput
                v-model="beneficiaryName"
                label="Beneficiary name"
                placeholder="Office line"
              />
              <UInput
                v-model="beneficiaryPhone"
                label="Phone number"
                placeholder="07XX XXX XXX"
              />
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <USelect
                v-model="beneficiaryNetwork"
                :items="networkItems"
                label="Network"
              />
              <USelect
                v-model="beneficiaryType"
                :items="typeItems"
                label="Type"
              />
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <UButton
                label="Save beneficiary"
                class="sm:flex-1"
              />
              <UButton
                to="/app/transactions"
                label="View activity"
                color="neutral"
                variant="outline"
                class="sm:flex-1"
              />
            </div>
          </div>
        </template>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Approved list
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Keep the list short and easy to check.
            </p>
          </div>
        </template>

        <template #default>
          <div class="space-y-4">
            <div
              v-for="item in beneficiaries"
              :key="item.phone"
              class="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-sm font-semibold text-slate-950">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-sm text-slate-600">
                    {{ item.phone }}
                  </p>
                </div>
                <UBadge
                  color="neutral"
                  variant="subtle"
                  :label="item.network"
                />
              </div>
              <p class="mt-3 text-xs text-slate-500">
                {{ item.note }}
              </p>
            </div>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
