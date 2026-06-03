<template>
  <footer id="contact" class="border-t border-slate-200 bg-white">
    <UContainer class="py-10">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr] lg:items-start">
        <div>
          <NuxtLink to="/" class="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Goldmen" class="h-10 w-auto">
            <div>
              <p class="font-semibold text-slate-950">Goldmen</p>
              <p class="text-xs text-slate-500">Secure airtime for approved numbers</p>
            </div>
          </NuxtLink>

          <p class="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Fast, reliable airtime with a controlled purchase flow, clear references, and M-Pesa at the center.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold text-slate-950">Quick Links</p>
          <div class="mt-4 space-y-3 text-sm text-slate-600">
            <NuxtLink to="/" class="block transition hover:text-slate-950">Home</NuxtLink>
            <NuxtLink to="#about" class="block transition hover:text-slate-950">About Us</NuxtLink>
            <NuxtLink to="#security" class="block transition hover:text-slate-950">Security</NuxtLink>
            <NuxtLink to="#how-it-works" class="block transition hover:text-slate-950">How it Works</NuxtLink>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-slate-950">Support</p>
          <div class="mt-4 space-y-3 text-sm text-slate-600">
            <NuxtLink to="#support" class="block transition hover:text-slate-950">Support</NuxtLink>
            <NuxtLink to="/login" class="block transition hover:text-slate-950">Login</NuxtLink>
            <a href="mailto:support@goldmen.co.ke" class="block transition hover:text-slate-950">support@goldmen.co.ke</a>
          </div>
        </div>

        <UCard class="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Buy via USSD</p>
          <p class="mt-3 text-2xl font-semibold">*4166283#</p>
          <p class="mt-3 text-sm leading-6 text-slate-300">
            No internet? No problem. Buy airtime instantly from any phone.
          </p>
          <p class="mt-5 text-sm text-slate-400">
            Nairobi, Kenya
          </p>
        </UCard>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Goldmen Solution. All rights reserved.</p>
        <p>Powered by M-Pesa.</p>
      </div>
    </UContainer>
  </footer>
</template>
