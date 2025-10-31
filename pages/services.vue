<script setup lang="ts">
definePageMeta({
    layout: 'custom',
})
</script>
<template>
    <div>
        <!-- This page correctly has only one single root element -->
        Page content for services
        <nuxt-link to="/" class="block text-blue-600">go home</nuxt-link>
    </div>
</template>