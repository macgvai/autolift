<script setup lang="ts">
type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
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
</script>

<template>
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
</template>
