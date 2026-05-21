<script setup lang="ts">
type LeadForm = {
  name: string
  phone: string
  message: string
}

const props = defineProps<{
  companyName: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
  contactPhone?: string
  messengerLabel?: string
}>()

const leadForm = reactive<LeadForm>({
  name: '',
  phone: '',
  message: ''
})

const requestChecklist = [
  'город или адрес объекта, тип паркинга и задача: поставка, монтаж, ремонт, ТО или диагностика',
  'количество машиномест, высота потолка, размеры места, масса и габариты автомобилей',
  'фото, план паркинга, информация по основанию, колоннам, проездам и электропитанию'
]

const responsePackage = [
  {
    title: 'Расчет машиномест',
    text: 'Подберем тип парковочного подъемника и оценим возможность установки на объекте.'
  },
  {
    title: 'Диагностика и сервис',
    text: 'Для действующего оборудования подготовим план осмотра, ремонта или регулярного ТО.'
  }
]

// const objectTypes = [
//   'ЖК',
//   'БЦ',
//   'ТЦ',
//   'частный паркинг',
//   'гараж',
//   'управляющая компания',
//   'другое'
// ]
//
// const taskTypes = [
//   'поставка',
//   'монтаж',
//   'ремонт',
//   'обслуживание',
//   'диагностика',
//   'запчасти'
// ]
//
// const mailtoLink = computed(() => {
//   const subject = `Запрос расчета парковочного подъемника${leadForm.company ? ` - ${leadForm.company}` : ''}`
//   const body = [
//     `Заявка с сайта ${props.companyName}`,
//     '',
//     `Имя: ${leadForm.name || '-'}`,
//     `Телефон: ${leadForm.phone || '-'}`,
//     `E-mail: ${leadForm.email || '-'}`,
//     `Компания / УК / собственник: ${leadForm.company || '-'}`,
//     `Город / адрес объекта: ${leadForm.address || '-'}`,
//     `Тип объекта: ${leadForm.objectType || '-'}`,
//     `Задача: ${leadForm.taskType || '-'}`,
//     `Количество машиномест: ${leadForm.parkingSpaces || '-'}`,
//     `Высота потолка: ${leadForm.ceilingHeight || '-'}`,
//     `Размеры места: ${leadForm.placeSize || '-'}`,
//     `Есть фото / план паркинга: ${leadForm.hasFiles || '-'}`,
//     '',
//     leadForm.message || 'Комментарий не указан'
//   ].join('\n')
//
//   return `mailto:${props.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
// })

const submitForm = async () => {
  try {
    const response = await $fetch('/api/rabbitmq', {
      method: 'POST',
      body: {...leadForm}
    });

    console.log('Успех:', response);
    alert('Сообщение отправлено!');
    // leadForm = { name: '', email: '', message: '' }; // сброс
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Не удалось отправить сообщение');
  }
};

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
          Получите расчет парковочного подъемника или заявку на диагностику
        </h2>
        <p class="mt-5 max-w-xl text-base leading-7 text-[var(--site-muted)]">
          Опишите объект, количество машиномест, ограничения по высоте и задачу. Для ремонта укажите,
          что происходит с оборудованием: не поднимается, не опускается, простаивает или требует ТО.
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
              Информация о поставке, монтаже, ремонте, ТО и запчастях для парковочных подъемников.
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
              Подходит для планировок, фото паркинга, тендерных запросов и технических заданий.
            </p>
          </a>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="metal-card rounded-[1.5rem] p-5">
            <p class="label-caption">
              Телефон
            </p>
            <p class="mt-3 text-lg font-semibold text-[var(--site-text)]">
              {{ contactPhone || 'уточняется' }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              Для срочной диагностики, ремонта и выезда инженера на объект.
            </p>
          </div>

          <div class="metal-card rounded-[1.5rem] p-5">
            <p class="label-caption">
              Мессенджеры
            </p>
            <p class="mt-3 text-lg font-semibold text-[var(--site-text)]">
              {{ messengerLabel || 'WhatsApp / Telegram' }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[var(--site-muted)]">
              Можно отправить фото, видео работы подъемника и план паркинга.
            </p>
          </div>
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
        @submit.prevent="submitForm"
      >
        <div class="flex flex-col gap-2">
          <p class="label-caption">
            Форма запроса
          </p>
          <h3 class="font-display text-3xl leading-tight text-[var(--site-text)]">
            Параметры паркинга, задача и контактные данные
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

          <label class="block sm:col-span-2">
            <span class="label-caption">Комментарий по объекту</span>
            <textarea
              v-model="leadForm.message"
              rows="6"
              class="form-input mt-2 min-h-36 resize-y"
              placeholder="Опишите задачу, состояние оборудования, ограничения по паркингу, автомобили, сроки и удобный способ связи"
            />
          </label>
        </div>

        <div class="mt-6 flex flex-col gap-4 border-t border-[var(--site-line)] pt-6 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="submit"
            class="btn-primary border-0"
          >
            Получить расчет парковочного подъемника
          </button>

          <p class="max-w-sm text-sm leading-6 text-[var(--site-muted)]">
            Сейчас кнопка открывает почтовый клиент с собранной заявкой. Для стабильного приема заявок лучше подключить серверную отправку формы, политику конфиденциальности и согласие на обработку персональных данных.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
