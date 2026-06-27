<script setup lang="ts">
import type { MobileProvider } from '~/types/airtime'
import { PROVIDERS } from '~/types/airtime'

const props = withDefaults(
  defineProps<{
    provider: MobileProvider
    loading?: boolean
  }>(),
  {
    loading: false
  }
)

const providerInfo = computed(() => PROVIDERS[props.provider])
</script>

<template>
  <USkeleton
    v-if="loading"
    class="h-14 w-full rounded-lg"
  />

  <UCard
    v-else
    :ui="{
      body: 'p-3'
    }"
  >
    <div class="flex items-center gap-3">
      <UIcon
        :name="providerInfo.icon"
        class="size-8"
      />

      <div class="flex-1">
        <p class="font-medium">
          {{ providerInfo.name }}
        </p>

        <p class="text-xs text-muted">
          Mobile Network
        </p>
      </div>

      <UBadge
        :color="providerInfo.color"
        variant="soft"
      >
        {{ providerInfo.name }}
      </UBadge>
    </div>
  </UCard>
</template>
