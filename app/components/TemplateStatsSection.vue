<script setup lang="ts">
type StatItem = {
  value: string
  label: string
}

defineProps<{
  stats: StatItem[]
}>()
</script>

<template>
  <section class="container-shell pb-12 sm:pb-14 xl:pb-18">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-3xl">
        <span class="eyebrow">Ориентиры по срокам и сервису</span>
        <h2 class="section-title mt-5 text-3xl sm:text-4xl">
          Цифры, которые важны для закупки, запуска и дальнейшей эксплуатации
        </h2>
      </div>

      <p class="section-copy max-w-xl">
        Эти показатели удобно использовать для внутреннего согласования бюджета, сроков поставки и сервисных обязательств.
      </p>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="stat in stats"
        :key="stat.label"
        class="metal-card stat-card rounded-[1.5rem] p-6"
      >
        <p class="label-caption">
          Показатель
        </p>
        <p class="font-display mt-6 text-4xl leading-none text-[var(--site-text)] sm:text-[2.7rem]">
          {{ stat.value }}
        </p>
        <p class="mt-4 text-sm leading-6 text-[var(--site-muted)]">
          {{ stat.label }}
        </p>
      </article>
    </div>
  </section>
</template>
