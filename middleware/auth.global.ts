import { getCookie } from 'h3';

export default defineNuxtRouteMiddleware((to, from) => {
  // ✅ Server-side (SSR) check
  if (import.meta.server) {
    const event = useRequestEvent()
    if (!event) return
    const token = getCookie(event, 'auth_token')
    const user = getCookie(event, 'user_email')
    console.log(user, "From server user")
    // 🔒 If not logged in → block user routes
    if (!token && to.path.startsWith('/user')) {
      return navigateTo('/login')
    }

    // 🚫 If already logged in → block /login
    if (token && to.path === '/login') {
      return navigateTo(user ? `/user/${user}` : '/user')
    }

    return
  }

  // ✅ Client-side check (after hydration)
  if (import.meta.client) {
    const token = useCookie('auth_token').value
    const user = useCookie('user_email').value
    if (!token && to.path.startsWith('/user')) {
      return navigateTo('/login')
    }

    if (token && to.path === '/login') {
      return navigateTo(user ? `/user/${user}` : '/user')
    }
  }
})
