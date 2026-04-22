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
    text: 'Получаем размеры помещения, фотографии, типы автомобилей, желаемую производительность и ограничения по электропитанию.'
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

const deliveryFormats = [
  'Отгрузка типовых моделей со склада с быстрым монтажным окном.',
  'Поэтапный запуск для сетевых сервисов, дилеров и сервисных линий.',
  'Согласование графика так, чтобы не останавливать критичные посты.'
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
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
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
        class="metal-card workflow-card rounded-[1.5rem] p-5"
      >
        <div class="flex items-center gap-4">
          <span class="workflow-index">
            {{ item.step }}
          </span>
          <span class="h-px flex-1 bg-[var(--site-line)]" />
        </div>

        <h3 class="mt-5 text-lg font-semibold text-[var(--site-text)]">
          {{ item.title }}
        </h3>
        <p class="mt-3 text-sm leading-6 text-[var(--site-muted)]">
          {{ item.text }}
        </p>
      </article>
    </div>

    <div class="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
      <div class="panel-surface rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Формат работы
        </p>
        <h3 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)]">
          Москва, регионы и поэтапный запуск сетевых объектов
        </h3>
        <div class="mt-6 grid gap-3">
          <div
            v-for="item in deliveryFormats"
            :key="item"
            class="flex gap-3 rounded-[1.25rem] border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-4 py-4"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <p class="text-sm leading-6 text-[var(--site-muted)]">
              {{ item }}
            </p>
          </div>
        </div>
      </div>

      <div class="metal-card rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Подходит для
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in useCases"
            :key="item"
            class="rounded-full border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-3 py-2 text-sm text-[var(--site-muted)]"
          >
            {{ item }}
          </span>
        </div>
        <p class="mt-5 text-sm leading-6 text-[var(--site-muted)]">
          Помогаем распределить типы подъемников по постам так, чтобы сохранить поток работ и не перегружать капитальные затраты на старте.
        </p>
      </div>
    </div>
  </section>
</template>
