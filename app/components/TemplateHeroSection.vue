<script setup lang="ts">
defineProps<{
  companyName: string
}>()

const heroPoints = [
  'Подбор конфигурации под поток сервиса, высоту потолка и тип автопарка',
  'Коммерческое предложение с учетом монтажа, электрики и требований к основанию',
  'Поставка по России и СНГ с запуском, инструктажем и сервисной поддержкой'
]

const projectBlocks = [
  {
    title: 'Подбор и расчет',
    text: 'Сравниваем 2-3 рабочие конфигурации, чтобы вы могли согласовать проект по бюджету и срокам.'
  },
  {
    title: 'Монтаж и пусконаладка',
    text: 'Берем на себя анкерение, настройку, проверку геометрии и ввод оборудования в эксплуатацию.'
  },
  {
    title: 'Сервис после запуска',
    text: 'Сопровождаем объект запчастями, регламентным обслуживанием и консультациями инженеров.'
  }
]

const proposalItems = [
  'подборка моделей под ваш сценарий эксплуатации',
  'ориентир по срокам поставки и монтажному окну',
  'требования к полу, питанию и подготовке бокса'
]
</script>

<template>
  <section class="container-shell pb-14 pt-6 sm:pt-8 lg:pb-18">
    <div class="grid gap-6 xl:grid-cols-[1.16fr_0.84fr]">
      <div class="panel-surface rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <span class="eyebrow">Поставка, монтаж и сервис по России и СНГ</span>

        <h1 class="section-title mt-6 max-w-4xl text-4xl sm:text-5xl xl:text-[4.3rem]">
          Автомобильные подъемники для СТО, дилерских центров и грузовых сервисов
        </h1>

        <p class="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--site-muted)]">
          {{ companyName }} поставляет автомобильные подъемники как часть рабочего процесса:
          от подбора модели и расчета бюджета до монтажа, запуска и последующего обслуживания.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            class="btn-primary"
          >
            Запросить подбор
          </a>
          <a
            href="#catalog"
            class="btn-secondary"
          >
            Смотреть модели
          </a>
        </div>

        <div class="mt-8 grid gap-3 lg:grid-cols-3">
          <div
            v-for="point in heroPoints"
            :key="point"
            class="rounded-[1.25rem] border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-4 py-4"
          >
            <div class="flex gap-3">
              <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
              <p class="text-sm leading-6 text-[var(--site-muted)]">
                {{ point }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <aside class="surface-card-accent rounded-[2rem] p-6 sm:p-8">
        <p class="label-caption">
          Структура проекта
        </p>
        <h2 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)] sm:text-[2.25rem]">
          Коммерческое предложение, которое можно быстро согласовать внутри компании
        </h2>
        <p class="mt-4 text-base leading-7 text-[var(--site-muted)]">
          Сразу показываем не только стоимость оборудования, но и состав поставки, требования к объекту и дальнейший сценарий запуска.
        </p>

        <div class="mt-6 grid gap-3">
          <article
            v-for="block in projectBlocks"
            :key="block.title"
            class="rounded-[1.25rem] border border-[rgba(53,97,141,0.14)] bg-white/80 px-4 py-4"
          >
            <p class="text-sm font-semibold text-[var(--site-text)]">
              {{ block.title }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              {{ block.text }}
            </p>
          </article>
        </div>

        <div class="mt-6 rounded-[1.5rem] bg-[var(--site-text)] px-5 py-5 text-white">
          <p class="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
            Что получает заказчик
          </p>
          <ul class="mt-4 grid gap-3">
            <li
              v-for="item in proposalItems"
              :key="item"
              class="flex items-start gap-3 text-sm leading-6 text-white/72"
            >
              <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>
