<script setup lang="ts">
  const props = defineProps<{
    companyBrand: string
    companyName: string
    contactPhone: string
    contactEmail: string
  }>()

</script>

<template>
  <UFooter>
    <template>

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
    </template>
  </UFooter>
</template>

<style scoped>

</style>
