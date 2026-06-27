import { computed, toValue, type MaybeRefOrGetter } from 'vue'

import { PROVIDERS } from '~/types/airtime'
import { detectProvider } from '~/utils/phone'

export function useProvider(phone: MaybeRefOrGetter<string>) {
  const providerId = computed(() => detectProvider(toValue(phone)))

  const provider = computed(() => {
    return PROVIDERS[providerId.value]
  })

  const isKnownProvider = computed(() => providerId.value !== 'unknown')

  return {
    provider,
    providerId,
    isKnownProvider
  }
}
