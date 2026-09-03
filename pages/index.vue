<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <SpecializationsSection />
      <OtherAreasSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
const siteUrl =
  'https://www.bruneabogaciaymediacion.es'

const title =
  'Abogada de Familia en León | Bruné Abogacía y Mediación'

const description =
  'Bufete especializado en Derecho de Familia y Menores, Mediación Familiar y Violencia de Género en León, con actuación en todo el territorio nacional.'

const requestUrl = useRequestURL()

const isProductionDomain =
  requestUrl.hostname === 'www.bruneabogaciaymediacion.es' ||
  requestUrl.hostname === 'bruneabogaciaymediacion.es'

useSeoMeta({
  title,

  description,

  robots:
    isProductionDomain
      ? 'index, follow'
      : 'noindex, nofollow',

  ogTitle: title,

  ogDescription: description,

  ogType: 'website',

  ogUrl: siteUrl,

  ogImage:
    `${siteUrl}/images/og-brune.jpg`,

  ogImageAlt:
    'Bruné Abogacía y Mediación',

  twitterCard:
    'summary_large_image',

  twitterTitle:
    title,

  twitterDescription:
    description,

  twitterImage:
    `${siteUrl}/images/og-brune.jpg`
})

useHead({
  htmlAttrs: {
    lang: 'es'
  },

  link: [
    {
      rel: 'canonical',
      href: siteUrl
    }
  ],

  script: [
    {
      type: 'application/ld+json',

      innerHTML:
        JSON.stringify({
          '@context':
            'https://schema.org',

          '@type':
            'LegalService',

          name:
            'Bruné Abogacía y Mediación',

          url:
            siteUrl,

          telephone:
            '+34638812473',

          email:
            'consultabrune@gmail.com',

          address: {
            '@type':
              'PostalAddress',

            streetAddress:
              'Avda. Gran Vía de San Marcos, N.º 42, 1ºB',

            postalCode:
              '24002',

            addressLocality:
              'León',

            addressRegion:
              'León',

            addressCountry:
              'ES'
          },

          areaServed: {
            '@type':
              'Country',

            name:
              'España'
          },

          serviceType: [
            'Derecho de Familia y Menores',
            'Mediación Familiar',
            'Violencia de Género',
            'Derecho Civil',
            'Extranjería y Nacionalidad',
            'Derecho Penal'
          ]
        })
    }
  ]
})
</script>
