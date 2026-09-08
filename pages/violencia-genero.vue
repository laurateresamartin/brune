<script setup lang="ts">
useSeoMeta({
  title:
    'Abogada de Violencia de Género en León | Bruné',

  description:
    'Asesoramiento jurídico inmediato, confidencial y especializado en violencia de género, con acompañamiento durante todo el proceso.',

  ogTitle:
    'Violencia de Género | Bruné',

  ogDescription:
    'Asesoramiento jurídico inmediato, confidencial y especializado en violencia de género, con acompañamiento durante todo el proceso.',

  ogType: 'website',

  ogUrl:
    'https://www.bruneabogaciaymediacion.es/violencia-genero',

  twitterCard:
    'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href:
        'https://www.bruneabogaciaymediacion.es/violencia-genero'
    }
  ]
})
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <ViolenceSection heading-level="h2" />
    </main>

    <AppFooter />
  </div>
</template>