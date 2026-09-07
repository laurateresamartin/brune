export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  css: [
    '~/assets/main.css'
  ],
  runtimeConfig: {
    resendApiKey:
      process.env.RESEND_API_KEY
  },
  app: {
    head: {
      title: 'Bruné Abogacía y Mediación',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo-small-transparent.png'
        }
      ]
  }},
  modules: [
    '@nuxt/fonts'
  ],
  fonts: {
    families: [
      {
        name: 'Cormorant Garamond',
        provider: 'google',
        weights: [
          400,
          500,
          600
        ],
        styles: [
          'normal',
          'italic'
        ]
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [
          400,
          500,
          600
        ]
      }
    ]
  }
})