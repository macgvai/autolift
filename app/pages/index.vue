<script setup lang="ts">
import { companyStats, faqItems, homePageMeta, liftCatalog, siteConfig } from '~/data/site'

const companyBrand = siteConfig.brandName
const companyName = siteConfig.companyName
const websiteLabel = siteConfig.websiteLabel
const websiteHref = siteConfig.websiteHref
const contactEmail = siteConfig.contactEmail
const stats = companyStats
const pageUrl = siteConfig.siteUrl
const socialImageUrl = new URL(siteConfig.ogImagePath, siteConfig.siteUrl).toString()

useSeoMeta({
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords.join(', '),
  ogTitle: homePageMeta.socialTitle,
  ogDescription: homePageMeta.socialDescription,
  twitterTitle: homePageMeta.socialTitle,
  twitterDescription: homePageMeta.socialDescription
})

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${pageUrl}#organization`,
    name: companyName,
    alternateName: companyBrand,
    url: siteConfig.siteUrl,
    email: contactEmail,
    image: socialImageUrl,
    logo: socialImageUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: websiteHref,
        email: contactEmail,
        areaServed: ['RU', 'KZ', 'BY', 'AM', 'KG', 'UZ'],
        availableLanguage: ['ru']
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${pageUrl}#website`,
    url: pageUrl,
    name: companyName,
    inLanguage: 'ru-RU',
    publisher: {
      '@id': `${pageUrl}#organization`
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: homePageMeta.title,
    description: homePageMeta.description,
    inLanguage: 'ru-RU',
    isPartOf: {
      '@id': `${pageUrl}#website`
    },
    about: {
      '@id': `${pageUrl}#service`
    },
    primaryImageOfPage: socialImageUrl
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Продажа, монтаж и сервис автомобильных подъемников',
    description: homePageMeta.description,
    serviceType: 'Автомобильные подъемники под ключ для СТО, дилеров и шинных центров',
    url: pageUrl,
    provider: {
      '@id': `${pageUrl}#organization`
    },
    areaServed: ['Россия', 'СНГ'],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceUrl: websiteHref,
        availableLanguage: ['ru']
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#catalog-schema`,
    name: 'Категории автомобильных подъемников',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: liftCatalog.length,
    itemListElement: liftCatalog.map((lift, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: lift.title,
      description: `${lift.description} Грузоподъемность ${lift.capacity}, стоимость ${lift.price}.`,
      url: `${pageUrl}/#catalog`
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq-schema`,
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
]

useHead({
  script: structuredData.map((schema, index) => ({
    key: `ld-json-${index}`,
    type: 'application/ld+json',
    textContent: JSON.stringify(schema)
  }))
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-[-12rem] h-[34rem] bg-[radial-gradient(circle,rgba(249,115,22,0.24),transparent_58%)] blur-3xl" />
    <div class="pointer-events-none absolute right-[-12rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(255,184,107,0.08)] blur-3xl" />

    <TemplateHeader
      :companyBrand="companyBrand"
      :websiteLabel="websiteLabel"
      :websiteHref="websiteHref"
      :contactEmail="contactEmail"
    />

    <main id="top">
      <TemplateHeroSection
        :companyName="companyName"
        :stats="stats"
      />
      <TemplateStatsSection :stats="stats" />
      <TemplateCatalogSection />
      <TemplateAdvantagesSection />
      <TemplateWorkflowSection />
      <TemplateFaqSection />
      <TemplateContactSection
        :companyName="companyName"
        :websiteLabel="websiteLabel"
        :websiteHref="websiteHref"
        :contactEmail="contactEmail"
      />
    </main>

    <TemplateFooter
      :companyBrand="companyBrand"
      :companyName="companyName"
      :websiteLabel="websiteLabel"
      :websiteHref="websiteHref"
      :contactEmail="contactEmail"
    />
  </div>
</template>
