<script setup lang="ts">
import { useRoute } from '#app'

const route = useRoute()
const userEmail = route.params.id as string

// ✅ SSR-safe dynamic head
useHead({
  title: `${userEmail} | MyApp`,
  meta: [
    { name: 'description', content: `Profile page for ${userEmail}` },
    { property: 'og:title', content: `${userEmail} | MyApp` },
    { property: 'og:description', content: `View ${userEmail}'s profile details.` },
  ],
})

// ✅ logout clears cookies, no localStorage used
const logout = () => {
  const token = useCookie('auth_token')
  const user = useCookie('user_email')

  token.value = null
  user.value = null

  return navigateTo('/login')
}
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-green-50">
    <h1 class="text-3xl font-bold mb-4">Welcome, {{ userEmail }}</h1>
    <p>You are logged in ✅</p>
    <button class="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg" @click="logout">
      Logout
    </button>
  </main>
</template>
