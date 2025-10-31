<script setup>
// Define the meta so middleware is applied for this page
definePageMeta({
  middleware: 'auth',
});

const userEmail = useRoute().params.id;
</script>
<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>