<script setup lang="ts">
import { z } from 'zod'

import { isValidKenyaPhone } from '~/utils/phone'

const emit = defineEmits<{
  submit: [
    {
      recipient: string
      amount: number
    }
  ]
}>()

const loading = defineModel<boolean>('loading', {
  default: false
})

const form = reactive({
  recipient: '',
  amount: 100
})

const schema = z.object({
  recipient: z
    .string()
    .refine(isValidKenyaPhone, 'Enter a valid Kenyan phone number.'),
  amount: z
    .number()
    .min(5)
})

const recentRecipients = [
  '254712345678',
  '254722111222'
]

async function submit() {
  emit('submit', {
    recipient: form.recipient,
    amount: form.amount
  })
}
</script>

<template>
  <UCard>
    <UForm
      :schema="schema"
      :state="form"
      class="space-y-6"
      @submit="submit"
    >
      <RecipientInput
        v-model="form.recipient"
        :recent-recipients="recentRecipients"
      />

      <AmountSelector
        v-model="form.amount"
      />

      <USeparator />

      <div class="flex justify-end">
        <UButton
          type="submit"
          icon="i-lucide-smartphone"
          :loading="loading"
        >
          Buy Airtime
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>
