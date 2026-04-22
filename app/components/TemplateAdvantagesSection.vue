<script setup lang="ts">
type BenefitItem = {
  title: string
  text: string
}

const benefits: BenefitItem[] = [
  {
    title: 'Подбор под объект',
    text: 'Учитываем высоту потолка, толщину плиты, поток автомобилей и схему перемещения мастеров, а не просто отправляем прайс.'
  },
  {
    title: 'Монтаж и запуск',
    text: 'Выставляем колонны, анкера, синхронизацию, гидравлику и проводим испытание под нагрузкой на площадке заказчика.'
  },
  {
    title: 'Склад запчастей',
    text: 'Тросы, каретки, лапы, гидроцилиндры и блоки управления доступны без долгого ожидания под заказ.'
  },
  {
    title: 'Рабочая документация',
    text: 'Передаем паспорта, схемы подключения, регламент ТО и рекомендации по подготовке бетонного основания.'
  },
  {
    title: 'Экономика проекта',
    text: 'Считаем не только цену подъемника, но и стоимость логистики, монтажа, электрики и простоя бокса во время запуска.'
  },
  {
    title: 'Сервис после поставки',
    text: 'Остаемся в проекте после ввода в эксплуатацию: консультации, диагностика, регламентное обслуживание и выезд инженера.'
  }
]

const included = [
  'Подбор модели под тип автомобилей и высоту потолка',
  'План расстановки оборудования и требования к основанию',
  'Смета на поставку, монтаж, пуск и обучение персонала',
  'График отгрузки со склада и комплект технических документов'
]

const projectFacts = [
  {
    value: '9',
    label: 'сервисных бригад',
    text: 'Инженерные выезды по Москве, регионам и удаленное сопровождение запуска по чек-листу.'
  },
  {
    value: '24/7',
    label: 'критичные запчасти',
    text: 'Ключевые позиции держим на складе, чтобы не останавливать рабочий пост из-за простой детали.'
  }
]
</script>

<template>
  <section
    id="advantages"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
      <div>
        <span class="eyebrow">Почему с нами удобно работать</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Запускаем рабочий пост, а не ограничиваемся отгрузкой оборудования
        </h2>
        <p class="section-copy mt-5 max-w-2xl">
          У подъемника нет ценности, если его долго вводить в эксплуатацию или сложно обслуживать.
          Поэтому рассматриваем проект как часть сервисного процесса заказчика.
        </p>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="metal-card rounded-[1.5rem] p-5"
          >
            <p class="label-caption">
              0{{ index + 1 }}
            </p>
            <h3 class="mt-4 text-lg font-semibold text-[var(--site-text)]">
              {{ benefit.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-[var(--site-muted)]">
              {{ benefit.text }}
            </p>
          </article>
        </div>
      </div>

      <aside class="surface-card-accent rounded-[2rem] p-6 sm:p-8">
        <span class="eyebrow">Что входит в проект</span>
        <h3 class="font-display mt-5 text-3xl leading-tight text-[var(--site-text)] sm:text-[2.35rem]">
          Поставка под ключ с понятным составом работ и бюджета
        </h3>
        <p class="mt-5 text-base leading-7 text-[var(--site-muted)]">
          До подписания договора фиксируем монтаж, требования к основанию, электрическую часть и сценарий запуска.
          Это сокращает количество сюрпризов на объекте и помогает защищать бюджет внутри компании.
        </p>

        <ul class="mt-7 grid gap-3">
          <li
            v-for="item in included"
            :key="item"
            class="flex items-start gap-3 rounded-[1.25rem] border border-[rgba(53,97,141,0.14)] bg-white/80 px-4 py-4 text-sm leading-6 text-[var(--site-muted)]"
          >
            <span class="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(53,97,141,0.12)] text-[var(--site-accent-strong)]">+</span>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            v-for="fact in projectFacts"
            :key="fact.label"
            class="rounded-[1.5rem] bg-[var(--site-text)] px-5 py-5 text-white"
          >
            <p class="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
              {{ fact.label }}
            </p>
            <p class="font-display mt-3 text-4xl">
              {{ fact.value }}
            </p>
            <p class="mt-3 text-sm leading-6 text-white/72">
              {{ fact.text }}
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
