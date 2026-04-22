<script setup lang="ts">
import { faqItems as faqs } from '~/data/site'
</script>

<template>
  <section
    id="faq"
    class="container-shell py-12 sm:py-16 xl:py-20"
  >
    <div class="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <div>
        <span class="eyebrow">FAQ</span>
        <h2 class="section-title mt-5 text-4xl sm:text-5xl">
          Частые вопросы перед согласованием закупки
        </h2>
        <p class="section-copy mt-5 max-w-xl">
          По запросу подготовим отдельный чек-лист по полу, потолку, электрике и рабочей зоне еще до выезда инженера.
        </p>
      </div>

      <div class="space-y-4">
        <details
          v-for="(item, index) in faqs"
          :key="item.question"
          class="faq-item metal-card rounded-[1.5rem]"
        >
          <summary class="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6">
            <span class="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--site-bg-muted)] text-sm font-semibold text-[var(--site-accent-strong)]">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="flex-1 text-base font-semibold leading-7 text-[var(--site-text)] sm:text-lg">
              {{ item.question }}
            </span>
            <span class="faq-toggle shrink-0">
              +
            </span>
          </summary>

          <div class="px-5 pb-5 sm:px-6 sm:pb-6">
            <p class="border-t border-[var(--site-line)] pt-4 text-sm leading-7 text-[var(--site-muted)]">
              {{ item.answer }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>
