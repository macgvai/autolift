<script setup lang="ts">
import { siteConfig } from '~/data/site'

const route = useRoute()
const canonicalUrl = computed(() => new URL(route.path || '/', siteConfig.siteUrl).toString())
const socialImageUrl = computed(() => new URL(siteConfig.ogImagePath, siteConfig.siteUrl).toString())

useHead(() => ({
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#edf2f7' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hrefLang: 'ru-RU', href: canonicalUrl.value },
    { rel: 'alternate', hrefLang: 'x-default', href: canonicalUrl.value }
  ]
}))

useSeoMeta({
  applicationName: siteConfig.companyName,
  titleTemplate: title => title ? `${title} | ${siteConfig.companyName}` : siteConfig.companyName,
  ogSiteName: siteConfig.companyName,
  ogType: 'website',
  ogLocale: 'ru_RU',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => socialImageUrl.value,
  ogImageAlt: siteConfig.ogImageAlt,
  twitterCard: 'summary_large_image',
  twitterImage: () => socialImageUrl.value,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
