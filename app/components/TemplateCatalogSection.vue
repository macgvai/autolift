<script setup lang="ts">
import { liftCatalog as lifts } from '~/data/site'

const catalogNotes = [
  'Подбираем решение под поток автомобилей, высоту потолка и формат постов.',
  'Сразу учитываем монтаж, логистику, питание и требования к основанию.',
  'Показываем несколько конфигураций с разным бюджетом и сроком поставки.'
]
</script>

<template>
  <section
    id="catalog"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[1fr_22rem] xl:items-end">
      <div class="max-w-3xl">
        <span class="eyebrow">Каталог решений</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Линейки подъемников под разные сценарии сервиса
        </h2>
        <p class="section-copy mt-5 max-w-2xl">
          Не закрываем все одной моделью. Формируем конфигурацию под тип автомобилей, загрузку бокса,
          доступную электрику и требования к операционному процессу.
        </p>
      </div>

      <aside class="panel-surface rounded-[1.5rem] p-5">
        <p class="label-caption">
          Подход к подбору
        </p>
        <ul class="mt-4 grid gap-3">
          <li
            v-for="note in catalogNotes"
            :key="note"
            class="flex gap-3 text-sm leading-6 text-[var(--site-muted)]"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <span>{{ note }}</span>
          </li>
        </ul>
      </aside>
    </div>

    <div class="mt-10 grid gap-5 xl:grid-cols-2">
      <article
        v-for="lift in lifts"
        :key="lift.title"
        class="metal-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7"
      >
        <div class="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--site-line)] pb-5">
          <div class="max-w-[24rem]">
            <p class="label-caption">
              {{ lift.category }}
            </p>
            <h3 class="font-display mt-3 text-2xl leading-tight text-[var(--site-text)] sm:text-[2rem]">
              {{ lift.title }}
            </h3>
          </div>

          <span class="metric-pill">
            {{ lift.capacity }}
          </span>
        </div>

        <p class="mt-5 text-base leading-7 text-[var(--site-muted)]">
          {{ lift.description }}
        </p>

        <ul class="mt-6 grid gap-3">
          <li
            v-for="point in lift.points"
            :key="point"
            class="flex gap-3 text-sm leading-6 text-[var(--site-muted)]"
          >
            <span class="mt-2 size-2 shrink-0 rounded-full bg-[var(--site-accent)]" />
            <span>{{ point }}</span>
          </li>
        </ul>

        <div class="mt-auto pt-6">
          <div class="flex flex-wrap items-end justify-between gap-4 border-t border-[var(--site-line)] pt-5">
            <div>
              <p class="label-caption">
                Бюджет поставки
              </p>
              <p class="mt-2 text-3xl font-semibold text-[var(--site-text)]">
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

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in lift.tags"
              :key="tag"
              class="rounded-full border border-[var(--site-line)] bg-[var(--site-bg-muted)] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[var(--site-muted)]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
