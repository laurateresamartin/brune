export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  css: [
    '~/assets/main.css'
  ],

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