<script setup lang="ts">
defineProps<{
  companyName: string
}>()

const heroPoints = [
  'Подбор под высоту потолка, габариты машиноместа, колонны, проезды, массу автомобилей и основание.',
  'Монтаж, анкерение, подключение, настройка гидравлики, электрики, датчиков и систем безопасности.',
  'Диагностика, регламентное ТО, ремонт, замена расходных и критичных узлов после запуска.'
]

const projectBlocks = [
  {
    title: 'Подбор типа подъемника',
    text: 'Зависимая или независимая схема, масса и габариты автомобилей, режим пользования и ограничения объекта.'
  },
  {
    title: 'Схема и требования',
    text: 'Предварительное размещение, основание, высота, электропитание, зона проезда и безопасная эксплуатация.'
  },
  {
    title: 'Бюджет и документы',
    text: 'Состав поставки, монтаж, запуск, обслуживание и перечень документов после ввода оборудования.'
  }
]
</script>

<template>
  <section class="hero-section container-shell">
    <div class="hero-layout">
      <div class="hero-copy">
        <span class="eyebrow">Парковочные подъемники / сервис / монтаж</span>

        <h1 class="hero-title section-title mt-6">
          Парковочные подъемники для ЖК, БЦ, ТЦ и частных паркингов
        </h1>

        <p class="hero-text mt-6">
          {{ companyName }} помогает увеличить количество машиномест, восстановить неисправное оборудование
          и организовать безопасную эксплуатацию парковочных подъемников: от подбора и монтажа до ремонта,
          технического обслуживания и поставки запчастей.
        </p>

        <div class="hero-actions mt-8">
          <a
            href="#contact"
            class="btn-primary"
          >
            Получить расчет машиномест
          </a>
          <a
            href="#service"
            class="btn-secondary"
          >
            Вызвать инженера на объект
          </a>
        </div>

        <div class="hero-points mt-10">
          <div
            v-for="(point, index) in heroPoints"
            :key="point"
            class="hero-point"
          >
<!--            <span class="hero-point-index">0{{ index + 1 }}</span>-->
            <p class="mt-3 text-sm leading-6 text-[var(--site-muted)]">
              {{ point }}
            </p>
          </div>
        </div>
      </div>

      <aside
        class="hero-visual-panel"
        aria-label="Схема двухуровневого парковочного подъемника"
        style="    background-image: url(./bg.jpg); background-repeat: no-repeat; background-size: contain;background-position: center;"      >
        <div class="lift-scene" >
          <!--          <div class="scene-building" />-->
<!--          <div class="scene-parking">-->
<!--            P-->
<!--          </div>-->

<!--          <div class="lift-system">-->
<!--            <span class="lift-brace" />-->
<!--            <span class="lift-column lift-column-left" />-->
<!--            <span class="lift-column lift-column-right" />-->
<!--            <span class="lift-deck lift-deck-top" />-->
<!--            <span class="lift-deck lift-deck-bottom" />-->

<!--            <span class="lift-car lift-car-top">-->
<!--              <span class="lift-wheel lift-wheel-left" />-->
<!--              <span class="lift-wheel lift-wheel-right" />-->
<!--            </span>-->
<!--            <span class="lift-car lift-car-bottom">-->
<!--              <span class="lift-wheel lift-wheel-left" />-->
<!--              <span class="lift-wheel lift-wheel-right" />-->
<!--            </span>-->
<!--          </div>-->
        </div>

        <div class="visual-caption">
          <strong>2 уровня на одном месте</strong>
          <span>Поставка, монтаж, запуск, сервис и ремонт парковочного оборудования.</span>
        </div>
      </aside>
    </div>

    <div class="project-strip">
      <div class="project-strip-title">
        <p class="label-caption text-white/60">
          Структура проекта
        </p>
        <h2 class="font-display mt-3 text-3xl leading-tight">
          Расчет для собственника, УК или технической службы
        </h2>
      </div>

      <div class="project-strip-grid">
        <article
          v-for="block in projectBlocks"
          :key="block.title"
          class="project-strip-card"
        >
          <h3 class="text-base font-extrabold uppercase tracking-[0.04em] text-[var(--site-text)]">
            {{ block.title }}
          </h3>
          <p class="mt-3 text-sm leading-6 text-[var(--site-muted)]">
            {{ block.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
