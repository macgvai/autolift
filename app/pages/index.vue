<script setup lang="ts">
const companyBrand = 'STROYPROTEH.RU'
const companyName = 'СтройПротех'
const contactPhone = 'stroyproteh.ru'
const contactPhoneHref = 'https://stroyproteh.ru/'
const contactEmail = 'info@stroyproteh.ru'
const headerLinks = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Поставка', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' }
]
const mobileMenuOpen = ref(false)
const route = useRoute()

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

const lifts = [
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

const benefits = [
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

const workflow = [
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

const faqs = [
  {
    question: 'Как понять, выдержит ли пол двухстоечный подъемник?',
    answer: 'Мы запрашиваем толщину и марку бетона, схему армирования и состояние покрытия. Если данных нет, закладываем обследование или предлагаем альтернативную модель с другой схемой нагрузки.'
  },
  {
    question: 'Можно ли подобрать решение под низкий потолок?',
    answer: 'Да. Для таких объектов обычно рассматриваем ножничные модели, короткие двухстоечные версии или компоновку с переносом части работ на другие посты.'
  },
  {
    question: 'Сколько занимает монтаж одного поста?',
    answer: 'Типовой двухстоечный подъемник при подготовленном основании обычно монтируется за один рабочий день. Пуск и инструктаж занимают еще несколько часов.'
  },
  {
    question: 'Работаете только по Москве?',
    answer: 'Нет. Отгружаем и запускаем объекты по всей России и в странах СНГ. Формат монтажа зависит от региона, количества постов и срока ввода.'
  }
]

const leadForm = reactive({
  name: '',
  phone: '',
  company: '',
  liftType: '',
  message: ''
})

const mailtoLink = computed(() => {
  const subject = `Запрос КП на автомобильные подъемники${leadForm.company ? ` - ${leadForm.company}` : ''}`
  const body = [
    `Заявка с сайта ${companyName}`,
    '',
    `Имя: ${leadForm.name || '-'}`,
    `Телефон: ${leadForm.phone || '-'}`,
    `Компания: ${leadForm.company || '-'}`,
    `Интересующий тип: ${leadForm.liftType || '-'}`,
    '',
    leadForm.message || 'Комментарий не указан'
  ].join('\n')

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const submitLead = async () => {
  await navigateTo(mailtoLink.value, { external: true })
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

watch(() => route.fullPath, closeMobileMenu)

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

    <header class="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,10,15,0.84)] backdrop-blur-xl">
      <div class="container-shell flex items-center gap-4 py-4">
        <a
          href="#top"
          class="flex min-w-0 items-center gap-3"
          @click="closeMobileMenu"
        >
          <span class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span class="logo-mark">
              <span />
              <span />
              <span />
            </span>
          </span>

          <span class="min-w-0">
            <span class="font-display block truncate text-2xl leading-none text-white">{{ companyBrand }}</span>
            <span class="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.32em] text-white/45">продажа и сервис автоподъемников</span>
          </span>
        </a>

        <nav class="ml-auto hidden items-center gap-6 text-sm text-white/70 lg:flex">
          <a
            href="#catalog"
            class="transition hover:text-white"
          >Каталог</a>
          <a
            href="#advantages"
            class="transition hover:text-white"
          >Преимущества</a>
          <a
            href="#workflow"
            class="transition hover:text-white"
          >Поставка</a>
          <a
            href="#faq"
            class="transition hover:text-white"
          >FAQ</a>
          <a
            href="#contact"
            class="transition hover:text-white"
          >Контакты</a>
        </nav>

        <div class="hidden items-center gap-3 xl:flex">
          <a
            :href="contactPhoneHref"
            class="text-right"
          >
            <span class="block text-[0.68rem] uppercase tracking-[0.3em] text-white/45">сайт компании</span>
            <span class="block text-lg font-semibold text-white">{{ contactPhone }}</span>
          </a>
        </div>

        <a
          href="#contact"
          class="btn-primary hidden shrink-0 sm:ml-auto sm:inline-flex lg:ml-0"
        >
          Получить КП
        </a>
        <button
          type="button"
          class="burger-toggle ml-auto sm:ml-0 lg:hidden"
          :class="{ 'is-open': mobileMenuOpen }"
          :aria-expanded="mobileMenuOpen"
          :aria-label="mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
          @click="toggleMobileMenu"
        >
          <span class="burger-toggle-lines">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div class="hidden">
        <a
          href="#catalog"
          class="nav-chip"
        >Каталог</a>
        <a
          href="#advantages"
          class="nav-chip"
        >Преимущества</a>
        <a
          href="#workflow"
          class="nav-chip"
        >Поставка</a>
        <a
          href="#contact"
          class="nav-chip"
        >Контакты</a>
      </div>
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="absolute inset-x-0 top-full border-t border-white/10 bg-[rgba(7,10,15,0.94)] px-0 py-4 lg:hidden"
        >
          <div class="container-shell">
            <div class="mobile-menu-panel rounded-[1.75rem] p-4">
              <nav class="grid gap-2">
                <a
                  v-for="(link, index) in headerLinks"
                  :key="`${link.href}-mobile`"
                  :href="link.href"
                  class="mobile-menu-link"
                  @click="closeMobileMenu"
                >
                  <span>{{ link.label }}</span>
                  <span class="text-white/35">0{{ index + 1 }}</span>
                </a>
              </nav>

              <div class="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  :href="contactPhoneHref"
                  class="mobile-contact-card"
                >
                  <span class="label-caption">Телефон</span>
                  <span class="mt-2 block text-lg font-semibold text-white">{{ contactPhone }}</span>
                </a>
                <a
                  :href="`mailto:${contactEmail}`"
                  class="mobile-contact-card"
                >
                  <span class="label-caption">E-mail</span>
                  <span class="mt-2 block text-lg font-semibold text-white">{{ contactEmail }}</span>
                </a>
              </div>

              <a
                href="#contact"
                class="btn-primary mt-4 w-full"
                @click="closeMobileMenu"
              >
                Получить КП
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <Transition name="mobile-backdrop">
      <button
        v-if="mobileMenuOpen"
        type="button"
        class="fixed inset-0 top-[5.25rem] z-40 bg-black/45 backdrop-blur-[2px] lg:hidden"
        aria-label="Закрыть меню"
        @click="closeMobileMenu"
      />
    </Transition>

    <main id="top">
      <section class="container-shell relative grid gap-10 pb-18 pt-12 lg:grid-cols-[1fr] lg:items-center lg:pt-18 xl:pb-24">
        <div>
          <span class="eyebrow">Продажа, монтаж и сервис по России и СНГ</span>

          <h1 class="mt-6 max-w-4xl font-display text-5xl leading-[0.92] text-white sm:text-6xl xl:text-7xl">
            Автомобильные подъемники для СТО, дилерских центров и шинных комплексов
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {{ companyName }} поставляет и обслуживает автомобильные подъемники под формат вашего сервиса:
            от подбора модели и расчета проекта до монтажа, запуска и последующего обслуживания.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
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

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              v-for="stat in stats.slice(0, 2)"
              :key="stat.value"
              class="metal-card rounded-[1.5rem] p-5"
            >
              <p class="font-display text-4xl leading-none text-white">
                {{ stat.value }}
              </p>
              <p class="mt-3 text-sm leading-6 text-white/65">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="container-shell pb-12 sm:pb-16">
        <div class="grid gap-4 md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="metal-card rounded-[1.5rem] p-5"
          >
            <p class="font-display text-3xl leading-none text-white">
              {{ stat.value }}
            </p>
            <p class="mt-3 text-sm leading-6 text-white/65">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </section>

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
              <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70">универсальные СТО</span>
              <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70">дилерские центры</span>
              <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70">шиномонтажные линии</span>
              <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70">грузовые сервисы</span>
              <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70">автопарки</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        class="container-shell py-12 sm:py-16 xl:py-20"
      >
        <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span class="eyebrow">FAQ</span>
            <h2 class="section-title mt-5 text-4xl text-white sm:text-5xl">
              Частые вопросы перед покупкой
            </h2>
            <p class="section-copy mt-5 max-w-xl">
              Если нужно, подготовим отдельный чек-лист по полу, потолку, электрической части и зоне обслуживания еще до выезда инженера.
            </p>
          </div>

          <div class="space-y-4">
            <details
              v-for="item in faqs"
              :key="item.question"
              class="metal-card group rounded-[1.5rem] p-5"
            >
              <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                <span>{{ item.question }}</span>
                <span class="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/45 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p class="mt-4 max-w-3xl text-sm leading-7 text-white/68">
                {{ item.answer }}
              </p>
            </details>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="container-shell py-12 sm:py-16 xl:py-20"
      >
        <div class="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
          <div class="panel-surface rounded-[2rem] p-6 sm:p-8">
            <span class="eyebrow">Контакты и заявка</span>
            <h2 class="mt-5 font-display text-4xl leading-none text-white sm:text-5xl">
              Получите подбор модели и коммерческое предложение под ваш объект
            </h2>
            <p class="mt-5 max-w-xl text-base leading-7 text-white/72">
              Напишите параметры помещения, тип автомобилей и желаемую производительность. Ответим с подборкой моделей, сметой и требованиями к монтажу.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                :href="contactPhoneHref"
                class="metal-card rounded-[1.5rem] p-5 transition hover:border-[rgba(249,115,22,0.32)]"
              >
                <p class="label-caption">Телефон</p>
                <p class="mt-3 text-xl font-semibold text-white">{{ contactPhone }}</p>
                <p class="mt-2 text-sm leading-6 text-white/62">Быстрый созвон по выбору модели, монтажу и срокам отгрузки.</p>
              </a>
              <a
                :href="`mailto:${contactEmail}`"
                class="metal-card rounded-[1.5rem] p-5 transition hover:border-[rgba(249,115,22,0.32)]"
              >
                <p class="label-caption">E-mail</p>
                <p class="mt-3 text-xl font-semibold text-white">{{ contactEmail }}</p>
                <p class="mt-2 text-sm leading-6 text-white/62">Подходит для планировок, тендерных запросов и детального ТЗ.</p>
              </a>
            </div>

            <div class="mt-8 rounded-[1.5rem] border border-white/10 bg-black/[0.15] p-5">
              <p class="label-caption">
                Что можно отправить сразу
              </p>
              <p class="mt-3 text-base leading-7 text-white/72">
                Фото помещения, размеры бокса, высоту потолка, марку и толщину пола, список автомобилей и желаемое количество постов.
              </p>
            </div>
          </div>

          <form
            class="metal-card rounded-[2rem] p-6 sm:p-8"
            @submit.prevent="submitLead"
          >
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block">
                <span class="label-caption">Имя</span>
                <input
                  v-model="leadForm.name"
                  type="text"
                  class="form-input mt-2"
                  placeholder="Как к вам обращаться"
                >
              </label>

              <label class="block">
                <span class="label-caption">Телефон</span>
                <input
                  v-model="leadForm.phone"
                  type="tel"
                  class="form-input mt-2"
                  placeholder="+7 (___) ___-__-__"
                >
              </label>

              <label class="block">
                <span class="label-caption">Компания</span>
                <input
                  v-model="leadForm.company"
                  type="text"
                  class="form-input mt-2"
                  placeholder="Название сервиса или организации"
                >
              </label>

              <label class="block">
                <span class="label-caption">Тип подъемника</span>
                <input
                  v-model="leadForm.liftType"
                  type="text"
                  class="form-input mt-2"
                  placeholder="Например: двухстоечный 4 т"
                >
              </label>
            </div>

            <label class="mt-4 block">
              <span class="label-caption">Комментарий по объекту</span>
              <textarea
                v-model="leadForm.message"
                rows="6"
                class="form-input mt-2 min-h-36 resize-y"
                placeholder="Площадь бокса, высота потолка, количество постов, тип автомобилей, регион доставки"
              />
            </label>

            <div class="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                class="btn-primary border-0"
              >
                Отправить заявку
              </button>
              <p class="max-w-sm text-sm leading-6 text-white/55">
                Кнопка откроет ваш почтовый клиент с уже собранной заявкой. Контактные данные можно заменить под ваш бренд.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer class="container-shell pb-10 pt-6">
      <div class="flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-[rgba(10,14,22,0.82)] px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="font-display text-2xl text-white">
            {{ companyBrand }}
          </p>
          <p class="mt-2 text-sm leading-6 text-white/55">
            Продажа и обслуживание автомобильных подъемников: подбор, поставка, монтаж, запуск и сервис для СТО, дилеров и шинных центров.
          </p>
        </div>

        <div class="text-sm leading-6 text-white/55 sm:text-right">
          <p>{{ contactPhone }}</p>
          <p>{{ contactEmail }}</p>
          <p>© {{ new Date().getFullYear() }} {{ companyName }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
