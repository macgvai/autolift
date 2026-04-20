<script setup lang="ts">
type WorkflowItem = {
  step: string
  title: string
  text: string
}

const workflow: WorkflowItem[] = [
  {
    step: '01',
    title: 'Собираем вводные',
    text: 'Получаем размеры помещения, фотографии, типы автомобилей, желаемую производительность и ограничения по питанию.'
  },
  {
    step: '02',
    title: 'Готовим предложение',
    text: 'Показываем 2-3 конфигурации с разной стоимостью, сроком поставки и составом опций под ваш бюджет.'
  },
  {
    step: '03',
    title: 'Привозим и монтируем',
    text: 'Организуем логистику, разгрузку, монтаж, анкерение, настройку гидравлики и проверку геометрии установки.'
  },
  {
    step: '04',
    title: 'Запускаем в работу',
    text: 'Проводим пусконаладку, обучаем персонал, передаем документы и рекомендации по первому техническому обслуживанию.'
  }
]

const useCases = [
  'универсальные СТО',
  'дилерские центры',
  'шиномонтажные линии',
  'грузовые сервисы',
  'автопарки'
]
</script>

<template>
  <section
    id="workflow"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
      <div class="max-w-3xl">
        <span class="eyebrow">Поставка и запуск</span>
        <h2 class="section-title mt-5 text-4xl text-white sm:text-5xl">
          От замера помещения до ввода в эксплуатацию
        </h2>
      </div>
      <p class="section-copy max-w-xl">
        Работаем как проектный поставщик: считаем риски заранее и доводим оборудование до рабочего состояния, а не до момента разгрузки.
      </p>
    </div>

    <div class="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="item in workflow"
        :key="item.step"
        class="metal-card rounded-[1.5rem] p-5"
      >
        <p class="font-display text-4xl leading-none text-[var(--site-accent-soft)]">
          {{ item.step }}
        </p>
        <h3 class="mt-4 text-lg font-semibold text-white">
          {{ item.title }}
        </h3>
        <p class="mt-3 text-sm leading-6 text-white/68">
          {{ item.text }}
        </p>
      </article>
    </div>

    <div class="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="panel-surface rounded-[1.75rem] p-6">
        <p class="label-caption">
          География поставки
        </p>
        <h3 class="mt-3 font-display text-3xl leading-none text-white">
          Москва, регионы, объекты с поэтапным запуском
        </h3>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/70">
          Отгружаем со склада типовые модели и параллельно готовим монтажную группу. Для сетевых сервисов и дилеров ведем поэтапный график: сначала критичные посты, затем расширение линии.
        </p>
      </div>

      <div class="metal-card rounded-[1.75rem] p-6">
        <p class="label-caption">
          Подходит для
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in useCases"
            :key="item"
            class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
