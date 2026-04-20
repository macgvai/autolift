<script setup lang="ts">
type StatItem = {
  value: string
  label: string
}

defineProps<{
  companyName: string
  stats: StatItem[]
}>()
</script>

<template>
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
</template>
