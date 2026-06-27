<script setup lang="ts">
import { QUICK_AMOUNTS } from '~/types/airtime'

const amount = defineModel<number>({
  required: true
})

function selectAmount(value: number) {
  amount.value = value
}
</script>

<template>
  <div class="space-y-4">
    <div class="grid grid-cols-3 gap-2 sm:grid-cols-6">
      <UButton
        v-for="value in QUICK_AMOUNTS"
        :key="value"
        :color="amount === value ? 'primary' : 'neutral'"
        :variant="amount === value ? 'solid' : 'soft'"
        block
        @click="selectAmount(value)"
      >
        {{ value }}
      </UButton>
    </div>

    <UFormField
      label="Custom Amount"
      name="amount"
      description="Minimum KES 5"
    >
      <UInput
        v-model.number="amount"
        type="number"
        min="5"
        step="1"
        size="xl"
        leading-icon="i-lucide-coin"
      />
    </UFormField>
  </div>
</template>
