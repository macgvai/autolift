<script setup lang="ts">
const companyBrand = 'STROYPROTEH.RU'
const companyName = 'СтройПротех'
const contactPhone = 'stroyproteh.ru'
const contactPhoneHref = 'https://stroyproteh.ru/'
const contactEmail = 'info@stroyproteh.ru'

const stats = [
  {
    value: '180+',
    label: 'подъемных постов смонтировали для СТО, дилеров и шинных центров'
  },
  {
    value: '48 часов',
    label: 'уходит на коммерческое предложение, планировку боксов и подбор модели'
  },
  {
    value: '36 месяцев',
    label: 'гарантия на раму, гидравлику и основные узлы поставки'
  },
  {
    value: '7-14 дней',
    label: 'средний срок отгрузки со склада по типовым конфигурациям'
  }
]

useSeoMeta({
  title: 'Продажа и обслуживание автомобильных подъемников для СТО и дилерских центров',
  description: 'СтройПротех: продажа, подбор, доставка, монтаж и обслуживание автомобильных подъемников под ключ: двухстоечные, ножничные, четырехстоечные и грузовые решения.',
  ogTitle: 'СтройПротех',
  ogDescription: 'Продажа и сервис автомобильных подъемников для СТО, дилеров и шинных центров.',
  twitterTitle: 'СтройПротех',
  twitterDescription: 'Подбор, поставка, монтаж и обслуживание автомобильных подъемников.'
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-[-12rem] h-[34rem] bg-[radial-gradient(circle,rgba(249,115,22,0.24),transparent_58%)] blur-3xl" />
    <div class="pointer-events-none absolute right-[-12rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(255,184,107,0.08)] blur-3xl" />

    <TemplateHeader
      :companyBrand="companyBrand"
      :contactPhone="contactPhone"
      :contactPhoneHref="contactPhoneHref"
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
        :contactPhone="contactPhone"
        :contactPhoneHref="contactPhoneHref"
        :contactEmail="contactEmail"
      />
    </main>

    <TemplateFooter
      :companyBrand="companyBrand"
      :contactPhone="contactPhone"
      :contactPhoneHref="contactPhoneHref"
      :contactEmail="contactEmail"
    />
  </div>
</template>
