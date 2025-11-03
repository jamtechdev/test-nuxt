<script setup>
import { useHead } from '#imports'

// ✅ Define SSR meta tags
useHead({
    title: 'Indian Political Leaders, National & State Leaders News Bank - web',
    meta: [
        {
            name: 'description',
            content:
                'Get all the news of your favourite political leaders and raised social issues by the people in their constituency. Rate and vote to your favourite neta.'
        },
        {
            name: 'keywords',
            content:
                'Indian Political Leaders, National and Local Leaders News, State Leaders News Bank'
        }
    ]
})

// ✅ Payload for API
const payload = {
    tab_serial: 1,
    page: 0,
    name: '',
    district: null,
    leader_id: null,
    mla: null,
    mp: null,
    state: null,
    party: null,
    post: null
}

// ✅ SSR-safe fetch (runs on server during SSR)
// const { data, error } = await useFetch('/api/search-candidate', {
//     method: 'POST',
//     body: payload,
//     key: 'leaders-list'
// })
// ✅ Call API via helper (SSR + CSR safe)
const { data, error, pending } = await useApi('/search/candidate', {
    method: 'POST',
    body: payload,
})
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6 text-center">
            Indian Political Leaders
        </h1>

        <div v-if="error" class="text-red-600 text-center">
            ❌ {{ error.message }}
        </div>

        <div v-else-if="!data?.data?.candidates" class="text-gray-500 text-center">
            Loading leaders...
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="leader in data.data.candidates" :key="leader.id"
                class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center">
                <NuxtLink :to="`/leader/${leader?.id}`">
                    <img :src="leader.profile_image" :alt="leader.name"
                        class="w-24 h-24 rounded-full mb-3 object-cover border" />
                    <h2 class="font-semibold text-lg">{{ leader.name }}</h2>
                </NuxtLink>
                <p class="text-sm text-gray-600">{{ leader.position }}</p>

                <div class="flex items-center justify-center mt-3 space-x-2">
                    <img :src="leader.party_logo" :alt="leader.party_code" class="w-8 h-8 object-contain" />
                    <span class="text-sm font-medium text-gray-700">
                        {{ leader.party_code }}
                    </span>
                </div>

                <p class="text-xs text-gray-500 mt-2">{{ leader.location }}</p>
            </div>
        </div>
    </div>
</template>
