<!-- app/components/AppFooter.vue -->
<script setup lang="ts">
const quickLinks = [
  { label: 'About Us', to: '#features' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Security', to: '#security' },
  { label: 'Support', to: '#contact' },
  { label: 'Contact', to: '#contact' }
]

const supportLinks = [
  { label: 'Help Center', to: '/app/help' },
  { label: 'FAQs', to: '/app/help' },
  { label: 'Terms of Service', to: '#' },
  { label: 'Privacy Policy', to: '#' }
]
</script>

<template>
  <footer
    id="contact"
    class="bg-slate-950 text-white"
  >
    <UContainer class="py-12">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
        <div>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Goldmen Solution"
              class="h-10 w-auto"
            >
          </NuxtLink>

          <p class="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Secure, reliable and instant airtime for approved numbers.
          </p>

          <div class="mt-5 flex items-center gap-3">
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Facebook"
            >
              <UIcon
                name="i-simple-icons-facebook"
                class="size-4"
              />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="X"
            >
              <UIcon
                name="i-simple-icons-x"
                class="size-4"
              />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="WhatsApp"
            >
              <UIcon
                name="i-simple-icons-whatsapp"
                class="size-4"
              />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Instagram"
            >
              <UIcon
                name="i-simple-icons-instagram"
                class="size-4"
              />
            </a>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-white">
            Quick Links
          </p>
          <div class="mt-4 space-y-3 text-sm text-slate-300">
            <NuxtLink
              v-for="item in quickLinks"
              :key="item.label"
              :to="item.to"
              class="block transition hover:text-white"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-white">
            Support
          </p>
          <div class="mt-4 space-y-3 text-sm text-slate-300">
            <NuxtLink
              v-for="item in supportLinks"
              :key="item.label"
              :to="item.to"
              class="block transition hover:text-white"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              href="mailto:support@goldmen.co.ke"
              class="block transition hover:text-white"
            >
              support@goldmen.co.ke
            </a>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-white">
            Buy via USSD
          </p>
          <div class="mt-4 rounded-[1.4rem] border border-white/10 bg-white p-5 text-slate-950 shadow-sm">
            <p class="text-3xl font-black tracking-tight text-slate-950">
              *4166283#
            </p>
            <p class="mt-2 text-sm font-semibold text-slate-700">
              Paybill: 4166283
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Available 24/7 on any phone.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Goldmen Solution. All rights reserved.</p>
        <p>Powered by M-Pesa</p>
      </div>
    </UContainer>
  </footer>
</template>
