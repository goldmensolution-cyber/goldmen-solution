<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

type AirtimeFormState = {
  phone: string
  amount: string
}

type ProviderMatch = {
  label: string
  icon: string
  color: 'primary' | 'success' | 'warning' | 'neutral'
  description: string
}

const emit = defineEmits<{
  submitted: []
}>()

const toast = useToast()
const supabase = useSupabaseClient()

const presetAmounts = [20, 50, 100, 500, 1000]

const state = reactive<AirtimeFormState>({
  phone: '',
  amount: '100'
})

const submitting = ref(false)

function digitsOnly(value: string) {
  return value.replace(/\D/g, '')
}

function normalizeKenyanPhone(value: string) {
  const digits = digitsOnly(value)

  if (/^254(?:7\d{8}|1\d{8})$/.test(digits)) {
    return digits
  }

  if (/^0(?:7\d{8}|1\d{8})$/.test(digits)) {
    return `254${digits.slice(1)}`
  }

  if (/^(?:7\d{8}|1\d{8})$/.test(digits)) {
    return `254${digits}`
  }

  return ''
}

function detectProvider(value: string): ProviderMatch {
  const normalized = normalizeKenyanPhone(value)

  if (!normalized) {
    return {
      label: 'Unknown',
      icon: 'i-lucide-circle-help',
      color: 'neutral',
      description: 'Enter a valid Kenyan mobile number.'
    }
  }

  const local = normalized.slice(3)

  if (/^(?:70|71|72|74|75|76|79|10|11)/.test(local)) {
    return {
      label: 'Safaricom',
      icon: 'i-custom-safaricom',
      color: 'success',
      description: 'Looks like a Safaricom number.'
    }
  }

  if (/^(?:73|78)/.test(local)) {
    return {
      label: 'Airtel',
      icon: 'i-custom-airtel',
      color: 'primary',
      description: 'Looks like an Airtel number.'
    }
  }

  if (/^(?:77)/.test(local)) {
    return {
      label: 'Telkom',
      icon: 'i-custom-telkom',
      color: 'warning',
      description: 'Looks like a Telkom number.'
    }
  }

  return {
    label: 'Valid number',
    icon: 'i-lucide-signal',
    color: 'neutral',
    description: 'Number is valid, but the provider is not obvious.'
  }
}

const provider = computed(() => detectProvider(state.phone))

function validate(data: Partial<AirtimeFormState>): FormError[] {
  const errors: FormError[] = []

  const phone = String(data.phone || '').trim()
  const amount = Number(String(data.amount || '').replace(/[^\d]/g, ''))

  if (!phone) {
    errors.push({ name: 'phone', message: 'Enter the recipient number.' })
  } else if (!normalizeKenyanPhone(phone)) {
    errors.push({
      name: 'phone',
      message: 'Use a valid Kenyan mobile number, for example 07xxxxxxxx or 01xxxxxxxx.'
    })
  }

  if (!amount || amount < 1) {
    errors.push({ name: 'amount', message: 'Enter a valid amount.' })
  }

  return errors
}

function prefillAmount(amount: number) {
  state.amount = String(amount)
}

function resetForm() {
  state.phone = ''
  state.amount = '100'
}

async function onSubmit(event: FormSubmitEvent<AirtimeFormState>) {
  const msisdn = normalizeKenyanPhone(event.data.phone)
  const amount = Number(String(event.data.amount).replace(/[^\d]/g, ''))

  if (!msisdn || !amount || amount < 1) {
    return
  }

  submitting.value = true

  try {
    const { error } = await supabase.functions.invoke('stkpush', {
      body: {
        msisdn,
        amount,
        provider: provider.value.label
      }
    })

    if (error) {
      throw error
    }

    toast.add({
      title: 'STK push sent',
      description: `A payment prompt was sent to ${msisdn}.`,
      color: 'success'
    })

    emit('submitted')
    resetForm()
  } catch (error) {
    toast.add({
      title: 'Request failed',
      description: error instanceof Error ? error.message : 'Unable to send STK push.',
      color: 'error'
    })
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <UCard
    id="request"
    class="scroll-mt-24 rounded-[2rem] border border-slate-200 shadow-sm"
  >
    <template #header>
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            New airtime request
          </p>
          <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950">
            Send an STK push
          </h2>
        </div>

        <UBadge
          :color="provider.color"
          variant="soft"
          :icon="provider.icon"
        >
          {{ provider.label }}
        </UBadge>
      </div>
    </template>

    <UForm
      :state="state"
      :validate="validate"
      class="space-y-5"
      @submit="onSubmit"
    >
      <UFormField
        label="Recipient number"
        name="phone"
        help="Enter the number that should receive airtime."
      >
        <UInput
          v-model="state.phone"
          type="tel"
          inputmode="tel"
          placeholder="07xx xxx xxx"
          icon="i-lucide-phone"
          size="lg"
          color="neutral"
          variant="outline"
        />
      </UFormField>

      <div class="flex flex-wrap items-center gap-2">
        <UBadge
          :color="provider.color"
          variant="soft"
        >
          {{ provider.description }}
        </UBadge>
      </div>

      <UFormField
        label="Amount"
        name="amount"
        help="Pick a quick amount or type your own."
      >
        <UInput
          v-model="state.amount"
          type="number"
          inputmode="numeric"
          min="1"
          placeholder="100"
          icon="i-lucide-coins"
          size="lg"
          color="neutral"
          variant="outline"
        />
      </UFormField>

      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="amount in presetAmounts"
          :key="amount"
          type="button"
          color="neutral"
          variant="soft"
          class="rounded-full"
          @click="prefillAmount(amount)"
        >
          {{ amount }}
        </UButton>
      </div>

      <div class="flex flex-wrap gap-3 pt-2">
        <UButton
          type="submit"
          :loading="submitting"
          icon="i-lucide-send"
          size="lg"
        >
          Send STK push
        </UButton>

        <UButton
          type="button"
          color="neutral"
          variant="ghost"
          icon="i-lucide-rotate-ccw"
          size="lg"
          @click="resetForm"
        >
          Reset
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>
