<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  titleTemplate: title => title ? `${title} · СтройПротех` : 'СтройПротех',
  ogSiteName: 'СтройПротех',
  twitterCard: 'summary_large_image'
})
</script>
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

