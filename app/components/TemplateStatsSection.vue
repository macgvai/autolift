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
</template>
