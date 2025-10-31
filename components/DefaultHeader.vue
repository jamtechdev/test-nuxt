<template>
    <header class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
            <div class="text-2xl font-bold text-gray-800">My Logo</div>
            <nav class="space-x-4">
                <NuxtLink to="/" class="text-gray-700 hover:text-blue-500">Home</NuxtLink>
                <NuxtLink to="/about" class="text-gray-700 hover:text-blue-500">About</NuxtLink>
                <NuxtLink to="/services" class="text-gray-700 hover:text-blue-500">Services</NuxtLink>
                <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-500">Contact</NuxtLink>
            </nav>
        </div>
    </header>
</template>