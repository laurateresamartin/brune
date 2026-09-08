<template>
  <div>
    <AppHeader />

    <main>
      <OtherAreasSection  heading-level="h2"/>
    </main>

    <AppFooter />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title:
    'Otras Áreas de Actuación | Bruné Abogacía y Mediación',

  description:
    'Asesoramiento jurídico en Derecho Civil, Extranjería y Nacionalidad y Derecho Penal.',

  ogTitle:
    'Otras Áreas de Actuación | Bruné',

  ogDescription:
    'Asesoramiento jurídico en Derecho Civil, Extranjería y Nacionalidad y Derecho Penal.',

  ogType:
    'website',

  ogUrl:
    'https://www.bruneabogaciaymediacion.es/otras-areas',

  ogLocale:
    'es_ES',

  twitterCard:
    'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href:
        'https://www.bruneabogaciaymediacion.es/otras-areas'
    }
  ]
})
</script>