<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  value: string
  note: string
}>()
</script>

<template>
  <UCard class="h-full">
    <template #body>
      <div class="flex items-start gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
          <UIcon
            :name="icon"
            class="size-5"
          />
        </div>

        <div class="min-w-0">
          <p class="text-sm text-slate-500">
            {{ label }}
          </p>
          <p class="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
            {{ value }}
          </p>
          <p class="mt-1 text-sm leading-6 text-slate-600">
            {{ note }}
          </p>
        </div>
      </div>
    </template>
  </UCard>
</template>
