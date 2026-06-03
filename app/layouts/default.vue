<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen bg-white text-slate-950">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
