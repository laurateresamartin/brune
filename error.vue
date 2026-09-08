<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
  }
}>()

useSeoMeta({
  title:
    'Página no encontrada | Bruné Abogacía y Mediación',

  robots:
    'noindex, nofollow'
})
</script>

<template>
  <div>
    <AppHeader />

    <main class="error-page">
      <div class="error-page__inner">
        <p class="error-page__code">
          {{ props.error.statusCode || 404 }}
        </p>

        <h1>
          Página no encontrada
        </h1>

        <NuxtLink
          to="/"
          class="button"
        >
          Volver al inicio
        </NuxtLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>