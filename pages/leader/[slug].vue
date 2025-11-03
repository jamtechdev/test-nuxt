<script setup lang="ts">
import { useHead, useRoute } from '#imports'
const route = useRoute()
const slug = route.params.slug
// ✅ Fetch leader profile (SSR-safe)
const { data, error }: any = await useFetch(`/api/proxy/candidate/profile/${slug}`, {
    method: 'GET',
    query: { without_feed: true },
});
useHead(() => ({
    title: data.value
        ? `${data.value?.data?.candidate_profile?.name} - Indian Political Leader Profile`
        : 'Leader Profile - web',
    meta: [
        {
            name: 'description',
            content:
                data.value?.data?.candidate_profile?.description?.slice(0, 160) ||
                'Explore the political profile of Indian leaders on web.',
        },
        {
            name: 'keywords',
            content:
                data.value?.party_code
                    ? `${data.value?.data?.candidate_profile?.name}, ${data.value?.data?.candidate_profile?.party_code}, Indian Political Leader`
                    : 'Indian Political Leader, web Profile',
        },
    ],
}))

</script>


<template>
    <div class="max-w-5xl mx-auto px-4 py-8">
        <div v-if="error" class="text-red-500 text-center py-10">
            ❌ Failed to load leader profile. Please refresh.
        </div>

        <div v-else-if="!data" class="text-gray-500 text-center py-10">
            Loading profile...
        </div>

        <div v-else class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img :src="data?.data.candidate_profile?.profile_image" :alt="data?.data.candidate_profile?.name"
                    class="w-32 h-32 rounded-full object-cover border-4 border-gray-200" />
                <div>
                    <h1 class="text-2xl font-bold mb-2">{{ data?.data.candidate_profile?.name }}</h1>
                    <p class="text-gray-600">{{ data?.data.candidate_profile?.position }}</p>
                    <div class="flex items-center gap-3 mt-3">
                        <img :src="data?.data.candidate_profile?.party_logo" :alt="data?.data.candidate_profile?.party_code" class="w-10 h-10 object-contain" />
                        <span class="font-medium text-gray-700">
                            {{ data?.data.candidate_profile?.party }} ({{ data?.data.candidate_profile?.party_code }})
                        </span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">{{ data?.data.candidate_profile?.location }}</p>
                </div>
            </div>

            <div class="mt-6">
                <h2 class="text-lg font-semibold mb-2">About</h2>
                <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                    {{ data?.data.candidate_profile?.description }}
                </p>
            </div>

            <div v-if="data?.data.candidate_profile?.education?.length" class="mt-6">
                <h2 class="text-lg font-semibold mb-2">Education</h2>
                <ul class="list-disc pl-5 text-gray-700">
                    <li v-for="edu in data?.data.candidate_profile?.education" :key="edu">{{ edu }}</li>
                </ul>
            </div>

            <div v-if="data?.data.candidate_profile?.posts_held?.length" class="mt-6">
                <h2 class="text-lg font-semibold mb-2">Posts Held</h2>
                <ul class="list-disc pl-5 text-gray-700">
                    <li v-for="post in data?.data.candidate_profile?.posts_held" :key="post">{{ post }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>