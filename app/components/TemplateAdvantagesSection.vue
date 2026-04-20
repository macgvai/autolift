<script setup lang="ts">
type BenefitItem = {
  title: string
  text: string
}

const benefits: BenefitItem[] = [
  {
    title: 'Подбор под объект',
    text: 'Смотрим высоту потолка, толщину плиты, поток автомобилей и схему перемещения мастеров, а не просто высылаем прайс.'
  },
  {
    title: 'Монтаж и запуск',
    text: 'Выставляем колонны, анкера, синхронизацию, гидравлику и проводим испытание под нагрузкой на площадке заказчика.'
  },
  {
    title: 'Склад запчастей',
    text: 'Тросы, каретки, лапы, резинки, гидроцилиндры и блоки управления доступны без долгого ожидания под заказ.'
  },
  {
    title: 'Нормальная документация',
    text: 'Передаем паспорта, схемы подключения, регламент ТО и рекомендации по подготовке бетонного основания.'
  },
  {
    title: 'Экономика проекта',
    text: 'Считаем не только цену подъемника, но и стоимость монтажа, логистики, электрики и простоя бокса во время запуска.'
  },
  {
    title: 'Сервис после поставки',
    text: 'Остаемся на связи после ввода в эксплуатацию: консультации, диагностика, регламентное обслуживание и выезд инженера.'
  }
]

const included = [
  'Подбор модели под тип машин и высоту потолка',
  'План расстановки оборудования и требования к основанию',
  'Смета на поставку, монтаж, пуск и обучение персонала',
  'График отгрузки со склада и комплект паспортов'
]
</script>

<template>
  <section
    id="advantages"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div>
        <span class="eyebrow">Почему это работает</span>
        <h2 class="section-title mt-5 text-4xl text-white sm:text-5xl">
          Не просто продаем оборудование, а запускаем рабочий пост
        </h2>
        <p class="section-copy mt-5 max-w-2xl">
          У подъемника нет ценности, если его невозможно быстро ввести в работу и обслуживать.
          Поэтому проектируем, монтируем и сопровождаем оборудование как часть производственного процесса.
        </p>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article
            v-for="benefit in benefits"
            :key="benefit.title"
            class="metal-card rounded-[1.5rem] p-5"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ benefit.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-white/68">
              {{ benefit.text }}
            </p>
          </article>
        </div>
      </div>

      <aside class="panel-surface rounded-[2rem] p-6 sm:p-8">
        <span class="eyebrow">Что входит в проект</span>
        <h3 class="mt-5 font-display text-4xl leading-none text-white">
          Поставка под ключ без сюрпризов на объекте
        </h3>
        <p class="mt-5 text-base leading-7 text-white/72">
          Сразу закладываем монтаж, требования к основанию, электрическую часть и запуск.
          Поэтому у вас есть понятный бюджет и сроки еще до согласования договора.
        </p>

        <ul class="mt-7 space-y-4">
          <li
            v-for="item in included"
            :key="item"
            class="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/[0.15] px-4 py-4 text-sm leading-6 text-white/72"
          >
            <span class="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(249,115,22,0.16)] text-[var(--site-accent-soft)]">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="rounded-[1.5rem] border border-white/10 bg-black/[0.15] p-5">
            <p class="label-caption">
              Сервисные бригады
            </p>
            <p class="mt-2 font-display text-4xl text-white">
              9
            </p>
            <p class="mt-3 text-sm leading-6 text-white/62">
              Инженерные выезды по Москве, регионам и удаленный запуск по чек-листу.
            </p>
          </div>
          <div class="rounded-[1.5rem] border border-white/10 bg-black/[0.15] p-5">
            <p class="label-caption">
              Наличие запчастей
            </p>
            <p class="mt-2 font-display text-4xl text-white">
              24/7
            </p>
            <p class="mt-3 text-sm leading-6 text-white/62">
              Критичные позиции держим на складе, чтобы не останавливать рабочий пост.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
