<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,.18),_transparent_35%)]" />

    <UContainer class="relative flex min-h-screen items-center justify-center py-10">
      <UCard class="w-full max-w-lg border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
        <template #header>
          <div class="mb-4 flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-3">
              <img src="/logo.png" alt="Goldmen" class="h-10 w-auto" />
              <div>
                <p class="font-semibold text-white">Goldmen</p>
                <p class="text-xs text-slate-400">Airtime with intent</p>
              </div>
            </NuxtLink>

            <UButton to="/" icon="i-lucide-arrow-left" variant="ghost" color="neutral" />
          </div>
        </template>

        <slot />
      </UCard>
    </UContainer>
  </div>
</template>
