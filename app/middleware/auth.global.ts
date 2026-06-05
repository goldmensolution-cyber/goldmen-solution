// app/middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/app')) {
    return
  }

  if (import.meta.server) {
    return
  }

  const { bootstrap, user, ready } = useAuth()

  if (!ready.value) {
    await bootstrap()
  }

  if (!user.value) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
