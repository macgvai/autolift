<script setup lang="ts">
import { companyStats, faqItems, homePageMeta, liftCatalog, siteConfig } from '~/data/site'

const companyBrand = siteConfig.brandName
const companyName = siteConfig.companyName
const websiteLabel = siteConfig.websiteLabel
const websiteHref = siteConfig.websiteHref
const contactEmail = siteConfig.contactEmail
const contactPhone = siteConfig.contactPhone
const messengerLabel = siteConfig.messengerLabel
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
    name: 'Поставка, монтаж, ремонт и обслуживание парковочных подъемников',
    description: homePageMeta.description,
    serviceType: 'Парковочные подъемники для ЖК, БЦ, ТЦ, подземных паркингов, управляющих компаний и частных объектов',
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
    name: 'Решения по парковочным подъемникам',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: liftCatalog.length,
    itemListElement: liftCatalog.map((lift, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: lift.title,
      description: `${lift.description} Формат: ${lift.capacity}, расчет: ${lift.price}.`,
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
  <div class="page-shell">
    <div class="page-orb page-orb-left" />
    <div class="page-orb page-orb-right" />

    <TemplateHeader
      :companyBrand="companyBrand"
      :websiteLabel="websiteLabel"
      :websiteHref="websiteHref"
      :contactEmail="contactEmail"
      :contactPhone="contactPhone"
    />

    <main id="top">
      <TemplateHeroSection :companyName="companyName" />
      <TemplateStatsSection :stats="stats" />
      <TemplateCatalogSection />
      <TemplateServiceSection />
      <TemplateAdvantagesSection />
      <TemplateWorkflowSection />
      <TemplateFaqSection />
      <TemplateContactSection
        :companyName="companyName"
        :websiteLabel="websiteLabel"
        :websiteHref="websiteHref"
        :contactEmail="contactEmail"
        :contactPhone="contactPhone"
        :messengerLabel="messengerLabel"
      />
    </main>

    <TemplateFooter
      :companyBrand="companyBrand"
      :companyName="companyName"
      :websiteLabel="websiteLabel"
      :websiteHref="websiteHref"
      :contactEmail="contactEmail"
      :contactPhone="contactPhone"
      :companyLegalName="siteConfig.companyLegalName"
      :companyInn="siteConfig.companyInn"
      :companyOgrn="siteConfig.companyOgrn"
      :legalAddress="siteConfig.legalAddress"
    />
  </div>
</template>
