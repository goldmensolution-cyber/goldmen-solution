<script setup lang="ts">
import { computed } from 'vue'

import { PROVIDERS } from '~/types/airtime'
import {
  detectProvider,
  displayPhone,
  isValidKenyaPhone
} from '~/utils/phone'

const model = defineModel<string>({
  required: true
})

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    recentRecipients?: string[]
  }>(),
  {
    disabled: false,
    recentRecipients: () => []
  }
)

const provider = computed(() => {
  return PROVIDERS[detectProvider(model.value)]
})

const valid = computed(() => {
  return isValidKenyaPhone(model.value)
})

function selectRecent(phone: string) {
  model.value = displayPhone(phone)
}

function onBlur() {
  if (valid.value) {
    model.value = displayPhone(model.value)
  }
}
</script>

<template>
  <div class="space-y-4">
    <UFormField
      label="Recipient"
      name="recipient"
      description="Kenyan mobile number"
    >
      <UInput
        v-model="model"
        size="xl"
        placeholder="0712345678"
        autocomplete="tel"
        :disabled="disabled"
        @blur="onBlur"
      >
        <template #leading>
          <UIcon
            :name="provider.icon"
            class="size-5"
          />
        </template>

        <template #trailing>
          <UBadge
            :color="provider.color"
            variant="soft"
          >
            {{ provider.name }}
          </UBadge>
        </template>
      </UInput>
    </UFormField>

    <UAlert
      v-if="model.length > 0 && !valid"
      color="warning"
      variant="soft"
      title="Invalid phone number"
      description="Enter a valid Kenyan mobile number."
    />

    <div
      v-if="recentRecipients.length"
      class="space-y-2"
    >
      <p class="text-xs font-medium text-muted">
        Recent Recipients
      </p>

      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="phone in recentRecipients"
          :key="phone"
          class="cursor-pointer"
          color="neutral"
          variant="soft"
          @click="selectRecent(phone)"
        >
          {{ displayPhone(phone) }}
        </UBadge>
      </div>
    </div>
  </div>
</template>
