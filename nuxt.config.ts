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
    htmlAttrs: {
      lang: 'es'
    },

    title:
      'Bruné Abogacía y Mediación',

    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1'
      },

      {
        name: 'theme-color',
        content: '#dedbd7'
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/logo-small-transparent.png'
      }
    ]
  }
  },
  modules: [
   '@nuxt/fonts',
   '@nuxtjs/sitemap',
   '@nuxtjs/robots'
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
  },
  site: {
  url:
    'https://www.bruneabogaciaymediacion.es',

  name:
    'Bruné Abogacía y Mediación'
  },

  sitemap: {
    urls: [
      '/',
      '/por-que-elegirnos',
      '/derecho-familia',
      '/mediacion-familiar',
      '/violencia-genero',
      '/otras-areas',
      '/aviso-legal',
      '/politica-privacidad',
      '/politica-cookies'
    ]
  },
  robots: {
    sitemap:
      'https://www.bruneabogaciaymediacion.es/sitemap.xml'
  },
})