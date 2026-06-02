<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,.16),_transparent_28%)]" />

    <UContainer class="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div class="w-full max-w-md">
        <NuxtLink to="/" class="mb-6 inline-flex items-center gap-3">
          <img src="/logo.png" alt="Goldmen" class="h-10 w-auto" />
          <div>
            <p class="font-semibold text-white">Goldmen</p>
            <p class="text-xs text-slate-400">Airtime with intent</p>
          </div>
        </NuxtLink>

        <UCard class="border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
          <slot />
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
