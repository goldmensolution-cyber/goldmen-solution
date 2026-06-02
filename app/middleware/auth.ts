export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/app')) {
    return
  }

  const { user, bootstrap } = useAuth()
  await bootstrap()

  if (!user.value) {
    return navigateTo('/login')
  }
})
