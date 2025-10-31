<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const router = useRouter();

const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email.value)
    console.log('Password:', password.value)
    console.log('Remember Me:', rememberMe.value)
    localStorage.setItem("user", JSON.stringify({ email: email.value, password: password.value }));
    router.push(`/user/${email.value}`)
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

            <!-- Login Form -->
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-medium">Email</label>
                    <input id="email" type="email" v-model="email" required
                        class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email" />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-gray-700 font-medium">Password</label>
                    <input id="password" type="password" v-model="password" required
                        class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password" />
                </div>

                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <input type="checkbox" v-model="rememberMe" class="form-checkbox text-blue-500" />
                        <span class="ml-2 text-gray-700">Remember me</span>
                    </div>
                    <a href="#" class="text-blue-500 text-sm">Forgot Password?</a>
                </div>

                <button type="submit"
                    class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none">
                    Login
                </button>
            </form>

            <div class="mt-4 text-center">
                <span class="text-gray-700">Don't have an account?</span>
                <NuxtLink to="/" class="text-blue-500 font-semibold">Sign up</NuxtLink>
            </div>
        </div>
    </div>
</template>