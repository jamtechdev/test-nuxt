export const useApi = async (endpoint: string, options: any = {}) => {
    const defaults = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    // Merge defaults with user options
    const opts = { ...defaults, ...options }

    // Call Nuxt SSR-friendly fetch
    const { data, error, pending } = await useFetch(`/api/proxy/${endpoint}`, opts)

    if (error.value) {
        console.error(`🚨 API Error (${endpoint}):`, error.value)
    }

    return { data, error, pending }
}
