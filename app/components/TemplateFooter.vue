<script setup lang="ts">
defineProps<{
  companyBrand: string
  companyName: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
}>()

const footerLinks = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Поставка', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' }
]
</script>

<template>
  <footer class="container-shell pb-10 pt-4">
    <div class="footer-card rounded-[1.75rem] px-6 py-6 sm:px-8 sm:py-7">
      <div class="grid gap-6 lg:grid-cols-[1.1fr_auto_auto] lg:items-end">
        <div>
          <div class="flex items-center gap-3">
            <span class="flex size-10 items-center justify-center rounded-[0.9rem] bg-[var(--site-bg-muted)]">
              <span class="logo-mark">
                <span />
                <span />
                <span />
              </span>
            </span>
            <p class="font-display text-xl font-semibold tracking-[0.06em] text-[var(--site-text)]">
              {{ companyBrand }}
            </p>
          </div>

          <p class="mt-4 max-w-xl text-sm leading-6 text-[var(--site-muted)]">
            Продажа, монтаж и обслуживание автомобильных подъемников для СТО, дилерских центров, шинных комплексов и грузовых сервисов.
          </p>
        </div>

        <nav
          class="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          aria-label="Навигация в подвале"
        >
          <a
            v-for="link in footerLinks"
            :key="link.href"
            :href="link.href"
            class="nav-link"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="text-sm leading-6 text-[var(--site-muted)] lg:text-right">
          <p>
            <a
              :href="websiteHref"
              class="transition hover:text-[var(--site-text)]"
            >
              {{ websiteLabel }}
            </a>
          </p>
          <p>
            <a
              :href="`mailto:${contactEmail}`"
              class="transition hover:text-[var(--site-text)]"
            >
              {{ contactEmail }}
            </a>
          </p>
          <p>© {{ new Date().getFullYear() }} {{ companyName }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
