<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

useSeoMeta({
  title: 'Request number change',
  description: 'Submit an interim request to change the verified sender number'
})

type ProfileRow = {
  verified_sender_number: string | null
}

const { supabase, user, bootstrap } = useAuth()

const currentNumber = ref('')
const requestedNumber = ref('')
const reason = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function loadProfile() {
  await bootstrap()

  if (!user.value) {
    await navigateTo('/login')
    return
  }

  const { data } = await supabase
    .from('profiles')
    .select('verified_sender_number')
    .eq('id', user.value.id)
    .maybeSingle<ProfileRow>()

  currentNumber.value = data?.verified_sender_number ?? ''
}

onMounted(loadProfile)

async function submitRequest() {
  if (!user.value) return

  successMessage.value = ''
  errorMessage.value = ''

  if (!requestedNumber.value || !reason.value) {
    errorMessage.value = 'Enter the new number and a short reason.'
    return
  }

  loading.value = true

  try {
    const { error } = await supabase.from('number_change_requests').insert({
      user_id: user.value.id,
      current_number: currentNumber.value,
      requested_number: requestedNumber.value,
      reason: reason.value,
      status: 'pending'
    })

    if (error) {
      throw error
    }

    successMessage.value = 'Your number-change request has been submitted for review.'
    requestedNumber.value = ''
    reason.value = ''
  } catch (err: any) {
    errorMessage.value = err?.message || 'Could not submit the request.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UContainer>
    <UCard class="border border-slate-200 bg-white">
      <template #header>
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-amber-600">Interim protection</p>
          <h1 class="mt-2 text-2xl font-semibold text-slate-900">Request sender-number change</h1>
          <p class="mt-2 text-sm text-slate-600">
            Until SMS OTP is in place, this keeps the verified sender number controlled through review.
          </p>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-2">
        <UFormField label="Current verified number">
          <UInput v-model="currentNumber" readonly />
        </UFormField>

        <UFormField label="Requested new number">
          <UInput v-model="requestedNumber" placeholder="2547..." />
        </UFormField>
      </div>

      <UFormField class="mt-4" label="Reason">
        <UTextarea v-model="reason" :rows="4" placeholder="Explain why the number is changing." />
      </UFormField>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <UButton
          :loading="loading"
          label="Submit request"
          color="primary"
          size="lg"
          @click="submitRequest"
        />
        <UButton
          to="/app"
          label="Back to purchase"
          color="neutral"
          variant="soft"
          size="lg"
        />
      </div>

      <UAlert
        v-if="successMessage"
        class="mt-6"
        color="primary"
        variant="soft"
        :title="successMessage"
      />

      <UAlert
        v-if="errorMessage"
        class="mt-6"
        color="error"
        variant="soft"
        :title="errorMessage"
      />
    </UCard>
  </UContainer>
</template>
