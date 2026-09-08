<script setup lang="ts">
useSeoMeta({
  title:
    'Por qué elegir Bruné Abogacía y Mediación',

  description:
    'Experiencia, especialización, acompañamiento y compromiso en el asesoramiento jurídico a familias y menores.',

  ogTitle:
    'Por qué elegirnos | Bruné Abogacía y Mediación',

  ogDescription:
    'Experiencia, especialización, acompañamiento y compromiso en el asesoramiento jurídico a familias y menores.',

  ogType: 'website',

  ogUrl:
    'https://www.bruneabogaciaymediacion.es/por-que-elegirnos',

  twitterCard:
    'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href:
        'https://www.bruneabogaciaymediacion.es/por-que-elegirnos'
    }
  ]
})
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <WhyUsSection heading-level="h2" />
    </main>

    <AppFooter />
  </div>
</template>