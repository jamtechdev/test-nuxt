// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
 runtimeConfig: {
    // private variables (server only)
    apiSecret: '',
    // public variables (client + server)
    public: {
      apiBase: process.env.API_BASE_URL || 'https://www.molitics.in/v2',
    },
  },
  app: {
    head: {
      title: 'My E-Commerce App',
      meta: [
        { name: 'description', content: 'Buy awesome products online' }
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})