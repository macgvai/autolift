<script setup lang="ts">
const repairItems = [
  'гидравлика и электрика',
  'блоки управления и пульты',
  'датчики, концевые выключатели и ограничители',
  'тросы, цепи и механические узлы',
  'замки безопасности и аварийное опускание',
  'анкерное крепление и металлоконструкции'
]

const maintenanceItems = [
  'проверка креплений и основания',
  'осмотр гидросистемы и электрики',
  'контроль датчиков, ограничителей и синхронизации',
  'проверка систем безопасности',
  'рекомендации по эксплуатации',
  'плановая замена расходных узлов'
]

const safetyItems = [
  'замки безопасности',
  'аварийное опускание',
  'ограничители хода',
  'концевые выключатели',
  'защита от самопроизвольного опускания',
  'визуальная проверка металлоконструкций',
  'проверка анкеров',
  'инструктаж пользователей'
]

const requestReasons = [
  'нужно увеличить количество машиномест',
  'подъемник не поднимается или не опускается',
  'оборудование простаивает после предыдущего подрядчика',
  'нет запчастей или регулярного сервиса',
  'требуется техническое обслуживание для УК или ЖК',
  'нужно восстановить оборудование перед вводом паркинга в эксплуатацию',
  'нужно подготовить КП для собственника, УК или тендера'
]
</script>

<template>
  <section
    id="service"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
      <div class="max-w-3xl">
        <span class="eyebrow">Сервис и ремонт</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Ремонт, техническое обслуживание и безопасность парковочных подъемников
        </h2>
      </div>
      <p class="section-copy max-w-xl">
        Работаем с задачами действующих паркингов: от диагностики отказа до регламентного ТО и поставки запчастей.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-2">
      <article class="metal-card rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Ремонт
        </p>
        <h3 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)]">
          Ремонт парковочных подъемников
        </h3>
        <p class="mt-4 text-base leading-7 text-[var(--site-muted)]">
          Выполняем диагностику и ремонт парковочных подъемников: гидравлика, электрика, блоки управления,
          датчики, тросы, цепи, замки безопасности, пульты управления, аварийное опускание,
          анкерное крепление и механические узлы.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="item in repairItems"
            :key="item"
            class="rounded-full border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-3 py-2 text-sm text-[var(--site-muted)]"
          >
            {{ item }}
          </span>
        </div>
      </article>

      <article class="metal-card rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Техническое обслуживание
        </p>
        <h3 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)]">
          ТО для УК, ЖК, БЦ и частных паркингов
        </h3>
        <p class="mt-4 text-base leading-7 text-[var(--site-muted)]">
          Проводим плановое ТО для управляющих компаний, жилых комплексов, бизнес-центров и частных паркингов.
          Проверяем крепления, гидросистему, электрику, датчики, ограничители, синхронизацию,
          системы безопасности и общее состояние оборудования.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="item in maintenanceItems"
            :key="item"
            class="rounded-full border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-3 py-2 text-sm text-[var(--site-muted)]"
          >
            {{ item }}
          </span>
        </div>
      </article>
    </div>

    <div class="mt-5 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
      <article class="surface-card-accent rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Безопасность
        </p>
        <h3 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)]">
          Проверяем элементы, от которых зависит безопасная эксплуатация
        </h3>
        <ul class="mt-5 grid gap-3 sm:grid-cols-2">
          <li
            v-for="item in safetyItems"
            :key="item"
            class="flex gap-3 rounded-[1.25rem] border border-[rgba(53,97,141,0.14)] bg-white/80 px-4 py-4 text-sm leading-6 text-[var(--site-muted)]"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>

      <article class="panel-surface rounded-[1.75rem] p-6 sm:p-7">
        <p class="label-caption">
          Когда обращаются
        </p>
        <h3 class="font-display mt-3 text-3xl leading-tight text-[var(--site-text)]">
          Помогаем на этапе подбора, запуска и восстановления оборудования
        </h3>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <div
            v-for="item in requestReasons"
            :key="item"
            class="flex gap-3 rounded-[1.25rem] border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-4 py-4"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <p class="text-sm leading-6 text-[var(--site-muted)]">
              {{ item }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-5 rounded-[1.75rem] bg-[var(--site-text)] px-6 py-6 text-white sm:px-7">
      <p class="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/60">
        Нормативные и технические требования
      </p>
      <p class="mt-4 max-w-5xl text-sm leading-7 text-white/72">
        При подборе и установке оборудования учитываются требования к объекту, основанию, электропитанию,
        безопасной эксплуатации, технической документации и действующим нормам для стоянок автомобилей.
        СП 113.13330.2023 «Стоянки автомобилей» является действующим сводом правил, утвержденным приказом
        Минстроя № 718/пр и введенным в действие 06.11.2023.
      </p>
    </div>
  </section>
</template>
