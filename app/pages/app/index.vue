<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const quickAmounts = [50, 100, 200, 500, 1000]
const networkItems = ['Safaricom', 'Airtel', 'Telkom', 'Equitel']
const paymentItems = ['M-Pesa Wallet', 'Paybill 4166283', 'USSD']

const network = ref('Safaricom')
const phone = ref('')
const amount = ref(100)
const paymentMethod = ref('M-Pesa Wallet')
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Dashboard"
      title="Buy airtime"
      description="Keep the flow short, trusted, and approved-number only."
    >
      <template #action>
        <div class="flex flex-wrap gap-2">
          <UButton
            to="/app/transactions"
            label="Transactions"
            color="neutral"
            variant="outline"
          />
          <UButton
            to="/app/support"
            label="Get help"
            color="neutral"
            variant="subtle"
          />
        </div>
      </template>
    </AppPageHeader>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <AppStatCard
        icon="i-lucide-shield-check"
        label="Security"
        value="Approved only"
        note="Top-ups are limited to approved beneficiaries."
      />
      <AppStatCard
        icon="i-lucide-bolt"
        label="Speed"
        value="Instant"
        note="Keep the checkout process short and clear."
      />
      <AppStatCard
        icon="i-lucide-receipt-text"
        label="Audit trail"
        value="Tracked"
        note="Every purchase should have a visible reference."
      />
      <AppStatCard
        icon="i-lucide-smartphone"
        label="Channels"
        value="Web + USSD"
        note="Users can buy from the app or by USSD."
      />
    </div>

    <div class="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between gap-3">
            <div>
              <h2 class="text-lg font-semibold text-slate-950">
                Purchase form
              </h2>
              <p class="mt-1 text-sm text-slate-500">
                The form should feel fast, controlled, and easy to finish.
              </p>
            </div>

            <UBadge
              color="primary"
              variant="subtle"
              label="Secure"
            />
          </div>
        </template>

        <template #default>
          <div class="space-y-5">
            <div class="grid gap-4 sm:grid-cols-2">
              <USelect
                v-model="network"
                :items="networkItems"
                label="Network"
                placeholder="Select network"
              />
              <UInput
                v-model="phone"
                label="Phone number"
                placeholder="07XX XXX XXX"
              />
            </div>

            <div>
              <div class="mb-3 flex items-center justify-between">
                <label class="text-sm font-medium text-slate-700">Amount</label>
                <span class="text-xs text-slate-500">KES</span>
              </div>

              <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
                <UButton
                  v-for="value in quickAmounts"
                  :key="value"
                  :variant="amount === value ? 'solid' : 'outline'"
                  color="neutral"
                  class="justify-center"
                  @click="amount = value"
                >
                  KES {{ value }}
                </UButton>
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <UInputNumber
                v-model="amount"
                label="Custom amount"
                :min="10"
                :step="10"
              />
              <USelect
                v-model="paymentMethod"
                :items="paymentItems"
                label="Payment method"
              />
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <UButton
                label="Review purchase"
                trailing-icon="i-lucide-arrow-right"
                size="lg"
                class="justify-center"
              />
              <UButton
                to="/app/help"
                label="How it works"
                color="neutral"
                variant="outline"
                size="lg"
                class="justify-center"
              />
            </div>

            <p class="text-sm text-slate-500">
              Only approved numbers can be topped up. Every transaction should keep a clear reference.
            </p>
          </div>
        </template>
      </UCard>

      <div class="space-y-6">
        <UCard variant="subtle">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <UIcon
                  name="i-lucide-phone-call"
                  class="size-5"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold text-slate-950">
                  Buy via USSD
                </h3>
                <p class="text-sm text-slate-500">
                  No internet needed. Works on any phone.
                </p>
              </div>
            </div>
          </template>

          <template #default>
            <div class="space-y-3">
              <div class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-lg font-semibold tracking-wide text-emerald-700">
                *4166283#
              </div>
              <p class="text-sm text-slate-600">
                Paybill: <span class="font-semibold text-slate-950">4166283</span>
              </p>
              <p class="text-sm leading-6 text-slate-600">
                Follow the prompts to complete your purchase through the USSD flow.
              </p>
            </div>
          </template>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-amber-400">
                <UIcon
                  name="i-lucide-store"
                  class="size-5"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold text-slate-950">
                  Get the app
                </h3>
                <p class="text-sm text-slate-500">
                  Play Store app ID: ke.co.goldmen
                </p>
              </div>
            </div>
          </template>

          <template #default>
            <div class="space-y-3">
              <p class="text-sm leading-6 text-slate-600">
                Search <span class="font-semibold text-slate-950">Goldmen Solution</span> on Google Play,
                or open the installed app on Android.
              </p>
              <div class="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                App ID: <span class="font-semibold text-slate-950">ke.co.goldmen</span>
              </div>
            </div>
          </template>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-amber-400">
                <UIcon
                  name="i-lucide-shield-check"
                  class="size-5"
                />
              </div>
              <div>
                <h3 class="text-base font-semibold text-slate-950">
                  Security note
                </h3>
                <p class="text-sm text-slate-500">
                  Use clear logs, approved numbers, and support trails.
                </p>
              </div>
            </div>
          </template>

          <template #default>
            <p class="text-sm leading-6 text-slate-600">
              Keep the purchase interface focused on trust, speed, and visible transaction records.
            </p>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
