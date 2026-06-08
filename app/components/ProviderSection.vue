<script setup lang="ts">
type Provider = {
  label: string
  icon: string
}

const providers: Provider[] = [
  { label: 'Safaricom', icon: 'i-custom-safaricom' },
  { label: 'M-Pesa', icon: 'i-custom-mpesa' },
  { label: 'Airtel', icon: 'i-custom-airtel' },
  { label: 'Telkom', icon: 'i-custom-telkom' },
  { label: 'USSD', icon: 'i-lucide-phone' }
]
</script>

<template>
  <section
    id="providers"
    class="scroll-mt-24 px-4 py-14 sm:py-16"
  >
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          Supported providers
        </p>
        <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Works across the networks your users already trust.
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Use the marquee to keep the provider list alive without crowding the page.
        </p>
      </div>

      <div class="mt-8 rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-sm">
        <UMarquee
          pause-on-hover
          :overlay="false"
          :repeat="5"
          class="py-2"
        >
          <div
            v-for="provider in providers"
            :key="provider.label"
            class="mx-3 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm"
          >
            <UIcon
              :name="provider.icon"
              class="size-6 shrink-0 text-slate-950"
            />
            <span class="text-sm font-semibold text-slate-700">
              {{ provider.label }}
            </span>
          </div>
        </UMarquee>
      </div>
    </UContainer>
  </section>
</template>
