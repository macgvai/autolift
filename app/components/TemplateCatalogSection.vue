<script setup lang="ts">
type LiftItem = {
  category: string
  title: string
  capacity: string
  price: string
  description: string
  points: string[]
  tags: string[]
}

const lifts: LiftItem[] = [
  {
    category: 'Базовый поток',
    title: 'Двухстоечные подъемники',
    capacity: '4.0-5.5 т',
    price: 'от 219 000 ₽',
    description: 'Для универсальных постов ремонта, ежедневной приемки и быстрого доступа к подвеске, тормозам и трансмиссии.',
    points: [
      'Асимметричные и симметричные лапы под легковые и LCV',
      'Нижняя или верхняя синхронизация под высоту вашего бокса',
      'Исполнение на 220 В и 380 В, низкий подхват для седанов'
    ],
    tags: ['СТО', 'шиномонтаж', 'универсальный пост']
  },
  {
    category: 'Диагностика',
    title: 'Четырехстоечные платформы',
    capacity: '4.0-6.5 т',
    price: 'от 468 000 ₽',
    description: 'Под стенды развал-схождения, регулировку геометрии и обслуживание длиннобазных автомобилей без потери жесткости.',
    points: [
      'Платформы под встроенные поворотные круги и сдвижные плиты',
      'Увеличенная длина для кроссоверов, микроавтобусов и коммерческого транспорта',
      'Опции траверсы, осветительных комплектов и рельсовых домкратов'
    ],
    tags: ['развал-схождение', 'дилерский центр', 'коммерческий транспорт']
  },
  {
    category: 'Низкие потолки',
    title: 'Ножничные модели',
    capacity: '3.5-5.0 т',
    price: 'от 289 000 ₽',
    description: 'Решение для детейлинга, постов экспресс-сервиса, шинных центров и помещений, где нельзя ставить высокие стойки.',
    points: [
      'Низкопрофильные платформы с быстрым циклом подъема',
      'Врезное и напольное исполнение под ваш тип пола',
      'Минимальная потеря полезной площади при ежедневной эксплуатации'
    ],
    tags: ['детейлинг', 'экспресс-сервис', 'низкий потолок']
  },
  {
    category: 'Тяжелый сегмент',
    title: 'Колонные и грузовые системы',
    capacity: '7.5-18 т',
    price: 'от 790 000 ₽',
    description: 'Для автобусных парков, грузовых сервисов и корпоративных автопарков, где нужна надежная работа в несколько смен.',
    points: [
      'Мобильные колонны и стационарные решения под тяжелую технику',
      'Синхронизация колонн, беспроводное управление и контроль нагрузки',
      'Подготовка проекта с учетом покрытия пола, ворот и зоны маневра'
    ],
    tags: ['грузовой сервис', 'автопарк', 'автобусы']
  }
]
</script>

<template>
  <section
    id="catalog"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="max-w-3xl">
      <span class="eyebrow">Каталог решений</span>
      <h2 class="section-title mt-5 text-4xl text-white sm:text-5xl">
        Подъемники под разные сценарии сервиса
      </h2>
      <p class="section-copy mt-5 max-w-2xl">
        Не пытаемся закрыть все одной моделью. Собираем конфигурацию под тип машин, загрузку бокса,
        доступную электрику и требования к сервисному процессу.
      </p>
    </div>

    <div class="mt-10 grid gap-5 xl:grid-cols-2">
      <article
        v-for="lift in lifts"
        :key="lift.title"
        class="metal-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7"
      >
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="max-w-[22rem]">
            <p class="label-caption">
              {{ lift.category }}
            </p>
            <h3 class="mt-3 font-display text-3xl leading-none text-white">
              {{ lift.title }}
            </h3>
          </div>
          <span class="rounded-full border border-[rgba(255,184,107,0.32)] bg-[rgba(249,115,22,0.08)] px-3 py-1 text-sm font-medium text-[var(--site-accent-soft)]">
            {{ lift.capacity }}
          </span>
        </div>

        <p class="mt-5 text-base leading-7 text-white/72">
          {{ lift.description }}
        </p>

        <div class="mt-6 flex items-end justify-between gap-4">
          <div>
            <p class="label-caption">
              стоимость
            </p>
            <p class="mt-2 text-3xl font-semibold text-white">
              {{ lift.price }}
            </p>
          </div>
          <a
            href="#contact"
            class="btn-secondary"
          >
            Запросить расчет
          </a>
        </div>

        <ul class="mt-7 space-y-3">
          <li
            v-for="point in lift.points"
            :key="point"
            class="flex gap-3 text-sm leading-6 text-white/72"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <span>{{ point }}</span>
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in lift.tags"
            :key="tag"
            class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
