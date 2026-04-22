<script setup lang="ts">
type LeadForm = {
  name: string
  phone: string
  company: string
  liftType: string
  message: string
}

const props = defineProps<{
  companyName: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
}>()

const leadForm = reactive<LeadForm>({
  name: '',
  phone: '',
  company: '',
  liftType: '',
  message: ''
})

const requestChecklist = [
  'Размеры бокса, высота потолка и толщина бетонного основания',
  'Тип автомобилей и ожидаемая загрузка каждого поста',
  'Количество сервисных линий, регион доставки и желаемые сроки ввода'
]

const responsePackage = [
  {
    title: 'Подборка моделей',
    text: 'Получите 2-3 рабочие конфигурации с аргументацией под ваш сценарий.'
  },
  {
    title: 'Коммерческое предложение',
    text: 'Смета с поставкой, монтажом, запуском и требованиями к объекту.'
  }
]

const mailtoLink = computed(() => {
  const subject = `Запрос КП на автомобильные подъемники${leadForm.company ? ` - ${leadForm.company}` : ''}`
  const body = [
    `Заявка с сайта ${props.companyName}`,
    '',
    `Имя: ${leadForm.name || '-'}`,
    `Телефон: ${leadForm.phone || '-'}`,
    `Компания: ${leadForm.company || '-'}`,
    `Интересующий тип: ${leadForm.liftType || '-'}`,
    '',
    leadForm.message || 'Комментарий не указан'
  ].join('\n')

  return `mailto:${props.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const submitLead = async () => {
  await navigateTo(mailtoLink.value, { external: true })
}
</script>

<template>
  <section
    id="contact"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[0.97fr_1.03fr]">
      <div class="surface-card-accent rounded-[2rem] p-6 sm:p-8">
        <span class="eyebrow">Контакты и заявка</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Получите подбор модели и коммерческое предложение под ваш объект
        </h2>
        <p class="mt-5 max-w-xl text-base leading-7 text-[var(--site-muted)]">
          Напишите параметры помещения, тип автомобилей и желаемую производительность.
          В ответ подготовим подборку моделей, бюджет и требования к монтажу.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            :href="websiteHref"
            class="metal-card rounded-[1.5rem] p-5"
          >
            <p class="label-caption">
              Сайт компании
            </p>
            <p class="mt-3 text-lg font-semibold text-[var(--site-text)]">
              {{ websiteLabel }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              Основная информация о компании, решениях и направлениях работы.
            </p>
          </a>

          <a
            :href="`mailto:${contactEmail}`"
            class="metal-card rounded-[1.5rem] p-5"
          >
            <p class="label-caption">
              E-mail
            </p>
            <p class="mt-3 text-lg font-semibold text-[var(--site-text)]">
              {{ contactEmail }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              Подходит для планировок, тендерных запросов и подробного технического задания.
            </p>
          </a>
        </div>

        <div class="mt-8 rounded-[1.5rem] border border-[rgba(53,97,141,0.14)] bg-white/80 p-5">
          <p class="label-caption">
            Что ускоряет расчет
          </p>
          <ul class="mt-4 grid gap-3">
            <li
              v-for="item in requestChecklist"
              :key="item"
              class="flex gap-3 text-sm leading-6 text-[var(--site-muted)]"
            >
              <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in responsePackage"
            :key="item.title"
            class="rounded-[1.5rem] bg-[var(--site-text)] px-5 py-5 text-white"
          >
            <p class="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
              {{ item.title }}
            </p>
            <p class="mt-3 text-sm leading-6 text-white/72">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>

      <form
        class="panel-surface rounded-[2rem] p-6 sm:p-8"
        @submit.prevent="submitLead"
      >
        <div class="flex flex-col gap-2">
          <p class="label-caption">
            Форма запроса
          </p>
          <h3 class="font-display text-3xl leading-tight text-[var(--site-text)]">
            Параметры объекта и потребности по оборудованию
          </h3>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
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

          <label class="block sm:col-span-2">
            <span class="label-caption">Комментарий по объекту</span>
            <textarea
              v-model="leadForm.message"
              rows="6"
              class="form-input mt-2 min-h-36 resize-y"
              placeholder="Площадь бокса, высота потолка, количество постов, тип автомобилей, регион доставки"
            />
          </label>
        </div>

        <div class="mt-6 flex flex-col gap-4 border-t border-[var(--site-line)] pt-6 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="submit"
            class="btn-primary border-0"
          >
            Получить коммерческое предложение
          </button>

          <p class="max-w-sm text-sm leading-6 text-[var(--site-muted)]">
            Кнопка откроет ваш почтовый клиент с уже собранной заявкой. Текст письма можно доработать под ваш бренд.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
