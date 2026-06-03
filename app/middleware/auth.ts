export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabase().auth.getUser().catch(() => null)

  if (!user) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
