<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#app'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const router = useRouter()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Please enter email and password')
    return
  }

  // ✅ set cookie (not SSR-safe yet, but fine client-side for demo)
  const authCookie: any = useCookie('auth_token')
  const userEmail: any = useCookie('user_email')
  authCookie.value = btoa(email.value) // store base64-encoded email
  userEmail.value = email.value // store base64-encoded email
  authCookie.maxAge = rememberMe.value ? 60 * 60 * 24 * 7 : 3600 // 1 hour or 7 days

  await router.push(`/user/${email.value}`)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium">Email</label>
          <input id="email" type="email" v-model="email" required
            class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email" />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium">Password</label>
          <input id="password" type="password" v-model="password" required
            class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password" />
        </div>

        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <input type="checkbox" v-model="rememberMe" class="form-checkbox text-blue-500" />
            <span class="ml-2 text-gray-700">Remember me</span>
          </div>
        </div>

        <button type="submit"
          class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
