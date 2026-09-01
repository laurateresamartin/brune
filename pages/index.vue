<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <SpecializationsSection />
      <FamilySection />
      <MediationSection />
      <ViolenceSection />
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
  'Bruné Abogacía y Mediación | Derecho de Familia en León'

const description =
  'Bufete especializado en Derecho de Familia y Menores, Mediación Familiar y Violencia de Género en León, con actuación en todo el territorio nacional.'

useSeoMeta({
  title,

  description,

  robots:
    'index, follow',

  ogType:
    'website',

  ogTitle:
    title,

  ogDescription:
    description,

  ogUrl:
    siteUrl,

  ogSiteName:
    'Bruné Abogacía y Mediación',

  ogLocale:
    'es_ES',

  twitterCard:
    'summary_large_image',

  twitterTitle:
    title,

  twitterDescription:
    description,
 
    ogImage: `${siteUrl}/images/og-brune.jpg`, 
    twitterImage: `${siteUrl}/images/og-brune.jpg`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: siteUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context':
          'https://schema.org',

        '@type':
          'LegalService',

        name:
          'Bruné Abogacía y Mediación',

        url:
          'https://www.bruneabogaciaymediacion.es',

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
        }
      })
    }
  ]
})
</script>
<style scoped>
.test-section {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 120px 24px;

  font-family: var(--font-serif);
  font-size: clamp(2rem, 6vw, 5rem);

  border-bottom: 1px solid var(--color-border);
}
</style>