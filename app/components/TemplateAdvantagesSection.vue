<script setup lang="ts">
type BenefitItem = {
  title: string
  text: string
}

const benefits: BenefitItem[] = [
  {
    title: 'Обследуем объект',
    text: 'Проверяем габариты, высоту, основание, проезды, расположение колонн и инженерных сетей.'
  },
  {
    title: 'Подбираем тип подъемника',
    text: 'Учитываем массу и габариты автомобилей, режим эксплуатации, частоту использования и требования собственника.'
  },
  {
    title: 'Монтируем и запускаем',
    text: 'Выполняем установку, анкерение, подключение, настройку, проверку работы и инструктаж.'
  },
  {
    title: 'Проверяем безопасность',
    text: 'Контролируем работу замков, датчиков, ограничителей, аварийного опускания и систем управления.'
  },
  {
    title: 'Передаем документы',
    text: 'Паспорт, инструкцию, рекомендации по эксплуатации, акты выполненных работ и регламент ТО.'
  },
  {
    title: 'Обслуживаем после запуска',
    text: 'Проводим диагностику, плановое ТО, ремонт, замену узлов и поставку запчастей.'
  }
]

const included = [
  'выезд или удаленный анализ объекта по фото и плану',
  'подбор типа парковочного подъемника',
  'проверка ограничений по высоте, ширине, длине и массе автомобилей',
  'требования к основанию и анкерному креплению',
  'согласование места установки',
  'доставка оборудования',
  'монтаж, подключение и пусконаладка',
  'проверка систем безопасности',
  'инструктаж пользователей или ответственных лиц',
  'передача технической документации',
  'предложение по дальнейшему техническому обслуживанию'
]

const documents = [
  'договор',
  'счет или спецификация',
  'паспорт оборудования',
  'руководство по эксплуатации',
  'документы о соответствии оборудования',
  'акт выполненных работ',
  'акт пусконаладки',
  'регламент технического обслуживания'
]
</script>

<template>
  <section
    id="advantages"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
      <div>
        <span class="eyebrow">Почему мы</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Запускаем парковочное место, а не просто привозим оборудование
        </h2>
        <p class="section-copy mt-5 max-w-2xl">
          Парковочный подъемник должен быть удобен для пользователей, безопасен в эксплуатации
          и понятен управляющей компании или собственнику по документам и обслуживанию.
        </p>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <article
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            class="metal-card rounded-[1.5rem] p-5"
          >
<!--            <p class="label-caption">-->
<!--              0{{ index + 1 }}-->
<!--            </p>-->
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
          Поставка и монтаж парковочного подъемника с понятным составом работ
        </h3>
        <p class="mt-5 text-base leading-7 text-[var(--site-muted)]">
          До договора фиксируем ограничения объекта, состав поставки, монтажные работы, запуск,
          документы и дальнейшее техническое обслуживание.
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

        <div class="mt-8 rounded-[1.5rem] bg-[var(--site-text)] px-5 py-5 text-white">
          <p class="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
            Документы заказчику
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="document in documents"
              :key="document"
              class="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm text-white/72"
            >
              {{ document }}
            </span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
