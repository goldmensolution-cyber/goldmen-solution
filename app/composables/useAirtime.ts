import { computed, ref } from 'vue'
import { createError } from 'h3'

import type {
  AirtimePurchaseRequest,
  StkPushResponse
} from '~/types/airtime'

export function useAirtime() {
  const supabase = useSupabaseClient()

  const loading = ref(false)

  const response = ref<StkPushResponse | null>(null)

  const error = ref<string | null>(null)

  const successful = computed(() => {
    return response.value?.response_code === '0'
  })

  async function purchase(
    payload: AirtimePurchaseRequest
  ): Promise<StkPushResponse> {
    loading.value = true
    error.value = null

    try {
      const { data, error: fnError } = await supabase.functions.invoke<StkPushResponse>(
        'stkpush',
        {
          body: payload
        }
      )

      if (fnError) {
        throw fnError
      }

      if (!data) {
        throw createError({
          statusCode: 500,
          statusMessage: 'No response returned from Edge Function'
        })
      }

      response.value = data

      return data
    } catch (err) {
      const message
        = err instanceof Error
          ? err.message
          : 'Unable to initiate STK Push.'

      error.value = message

      throw err
    } finally {
      loading.value = false
    }
  }

  function reset() {
    loading.value = false
    response.value = null
    error.value = null
  }

  return {
    error,
    loading,
    purchase,
    reset,
    response,
    successful
  }
}
