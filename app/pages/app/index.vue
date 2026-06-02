<script setup lang="ts">
definePageMeta({
  layout: 'app',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Dashboard',
  description: 'Goldmen airtime purchase dashboard'
})

type ProfileRow = {
  verified_sender_number: string | null
  full_name: string | null
}

const { supabase, user, bootstrap } = useAuth()

const senderNumber = ref('')
const recipientNumber = ref('')
const amount = ref<number | null>(null)
const reference = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const verifiedSenderNumber = ref<string | null>(null)
const fullName = ref<string | null>(null)

function generateReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const token = Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `GOL-${token}`
}

function refreshReference() {
  reference.value = generateReference()
}

async function loadProfile() {
  await bootstrap()

  if (!user.value) {
    await navigateTo('/login')
    return
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('verified_sender_number, full_name')
    .eq('id', user.value.id)
    .maybeSingle<ProfileRow>()

  if (!error && data) {
    verifiedSenderNumber.value = data.verified_sender_number
    fullName.value = data.full_name
    senderNumber.value = data.verified_sender_number ?? ''
  }

  reference.value = generateReference()
}

onMounted(loadProfile)

async function submitPurchase() {
  if (!user.value) return

  errorMessage.value = ''
  successMessage.value = ''

  if (!senderNumber.value || !recipientNumber.value || !amount.value) {
    errorMessage.value = 'Fill sender number, recipient number, and amount.'
    return
  }

  if (verifiedSenderNumber.value && senderNumber.value !== verifiedSenderNumber.value) {
    errorMessage.value = 'That sender number is not the verified one. Use Request change first.'
    return
  }

  loading.value = true

  try {
    const { data, error } = await supabase.functions.invoke('stk-push', {
      body: {
        user_id: user.value.id,
        sender_number: senderNumber.value,
        recipient_number: recipientNumber.value,
        amount: amount.value,
        reference: reference.value,
        source: 'web'
      }
    })

    if (error) throw error

    successMessage.value = data?.message || `STK request queued for ${reference.value}.`
    refreshReference()
  } catch (err: any) {
    errorMessage.value = err?.message || 'Purchase request failed.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UContainer class="py-6 md:py-8">
    <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr] lg:gap-6">
      <UCard class="border border-slate-200 bg-white">
        <template #header>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.25em] text-amber-600">Purchase airtime</p>
            <h1 class="text-2xl font-semibold text-slate-900">Welcome{{ fullName ? `, ${fullName}` : '' }}.</h1>
            <p class="text-sm text-slate-500">Keep the form tight on mobile and fast on desktop.</p>
          </div>
        </template>

        <div class="grid gap-4">
          <UFormField label="Sender number">
            <UInput
              v-model="senderNumber"
              placeholder="2547..."
              inputmode="numeric"
              autocomplete="tel"
              size="lg"
            />
          </UFormField>

          <UFormField label="Recipient number">
            <UInput
              v-model="recipientNumber"
              placeholder="2547..."
              inputmode="numeric"
              autocomplete="tel"
              size="lg"
            />
          </UFormField>

          <div class="grid gap-4 sm:grid-cols-2">
            <UFormField label="Amount">
              <UInput
                v-model="amount"
                type="number"
                placeholder="100"
                inputmode="numeric"
                size="lg"
              />
            </UFormField>

            <UFormField label="Transaction reference">
              <div class="flex gap-2">
                <UInput :model-value="reference" readonly size="lg" class="flex-1" />
                <UButton label="New" color="neutral" variant="soft" @click="refreshReference" />
              </div>
            </UFormField>
          </div>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <UButton
            :loading="loading"
            label="Initiate STK push"
            color="primary"
            size="lg"
            @click="submitPurchase"
          />
          <UButton
            to="/app/settings"
            label="Request number change"
            color="neutral"
            variant="soft"
            size="lg"
          />
        </div>

        <UAlert
          v-if="verifiedSenderNumber"
          class="mt-5"
          color="primary"
          variant="soft"
          :title="`Verified sender number: ${verifiedSenderNumber}`"
        />

        <UAlert
          v-if="successMessage"
          class="mt-4"
          color="primary"
          variant="soft"
          :title="successMessage"
        />

        <UAlert
          v-if="errorMessage"
          class="mt-4"
          color="error"
          variant="soft"
          :title="errorMessage"
        />
      </UCard>

      <div class="space-y-4">
        <UCard class="border border-slate-200 bg-white">
          <p class="text-xs uppercase tracking-[0.25em] text-amber-600">Transaction origin</p>
          <p class="mt-3 break-all text-2xl font-semibold text-slate-900">{{ reference }}</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            This website creates the reference so the backend and callback record can show the source cleanly.
          </p>
        </UCard>

        <UCard class="border border-slate-200 bg-white">
          <p class="text-xs uppercase tracking-[0.25em] text-amber-600">Rule</p>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            If the sender number changes, Goldmen sends the user through the request-change flow instead of overwriting the verified number directly.
          </p>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
