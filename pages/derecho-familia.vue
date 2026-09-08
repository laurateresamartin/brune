
<template>
  <div>
    <AppHeader />

    <main>
      <FamilySection heading-level="h2" />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title:
    'Abogada de Familia y Menores en León | Bruné',

  description:
    'Bufete especializado en Derecho de Familia y Menores, con sede en León y actuación en todo el territorio nacional.',

  ogTitle:
    'Derecho de Familia y Menores | Bruné',

  ogDescription:
    'Bufete especializado en Derecho de Familia y Menores, con sede en León y actuación en todo el territorio nacional.',

  ogType: 'website',

  ogUrl:
    'https://www.bruneabogaciaymediacion.es/derecho-familia',

  twitterCard:
    'summary_large_image'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href:
        'https://www.bruneabogaciaymediacion.es/derecho-familia'
    }
  ]
})
</script>
