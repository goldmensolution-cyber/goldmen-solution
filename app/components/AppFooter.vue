<template>
  <footer class="border-t border-white/10 bg-slate-950">
    <UContainer class="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm text-slate-300">Goldmen · {{ new Date().getFullYear() }}</p>
        <p class="text-sm text-slate-500">Blue and gold, built for controlled airtime purchases.</p>
      </div>

      <div class="flex items-center gap-4 text-sm text-slate-400">
        <NuxtLink to="/login" class="hover:text-white">Sign in</NuxtLink>
        <NuxtLink to="/app" class="hover:text-white">App</NuxtLink>
        <NuxtLink to="mailto:support@goldmen.co.ke" class="hover:text-white">Support</NuxtLink>
      </div>
    </UContainer>
  </footer>
</template>
