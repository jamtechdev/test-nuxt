<template>
    <footer class="bg-gray-900 text-gray-300 py-6 mt-10">
        <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            <!-- Left side: Logo or Text -->
            <div class="text-lg font-semibold">
                © 2025 MyWebsite
            </div>

            <!-- Right side: Links -->
            <div class="flex space-x-6 mt-3 sm:mt-0">
                <NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink>
                <NuxtLink to="/about" class="hover:text-white transition">About</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-white transition">Contact</NuxtLink>
                <NuxtLink to="/leader" class="hover:text-white transition">Leader</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup>
// No script needed for this simple footer
</script>

<style scoped>
/* Optional: Customize footer look if needed */
</style>
