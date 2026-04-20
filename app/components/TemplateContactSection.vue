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
            :href="websiteHref"
            class="metal-card rounded-[1.5rem] p-5 transition hover:border-[rgba(249,115,22,0.32)]"
          >
            <p class="label-caption">Сайт компании</p>
            <p class="mt-3 text-xl font-semibold text-white">{{ websiteLabel }}</p>
            <p class="mt-2 text-sm leading-6 text-white/62">Официальный сайт с общей информацией о бренде, решениях и каналах связи.</p>
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
</template>
