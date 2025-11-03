// server/api/proxy/[...path].ts

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    // Handle both string and array params
    const pathParam = event.context.params?.path
    const path = Array.isArray(pathParam) ? pathParam.join('/') : pathParam

    // Use event.method instead of deprecated getMethod()
    const method = event.method || 'GET'
    const query = getQuery(event)
    const body = method !== 'GET' ? await readBody(event) : undefined

    try {
        // Construct full target URL
        const targetUrl = `${config.public.apiBase}/${path}`

        // Perform proxy request
        const response = await $fetch(targetUrl, {
            method,
            query,
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response
    } catch (error: any) {
        console.error('[Proxy Error]', error)

        throw createError({
            statusCode: error?.response?.status || 500,
            statusMessage: error?.response?.statusText || 'Proxy Request Failed',
            message: error?.message || 'An unknown error occurred while proxying the request.',
        })
    }
})
