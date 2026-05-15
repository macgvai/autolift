<script setup lang="ts">
defineProps<{
  companyBrand: string
  companyName: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
  contactPhone?: string
  companyLegalName?: string
  companyInn?: string
  companyOgrn?: string
  legalAddress?: string
}>()

const footerLinks = [
  { label: 'Решения', href: '#catalog' },
  { label: 'Сервис и ремонт', href: '#service' },
  { label: 'Почему мы', href: '#advantages' },
  { label: 'Монтаж и запуск', href: '#workflow' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Заявка', href: '#contact' }
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
            Продажа, монтаж, ремонт и обслуживание парковочных подъемников для ЖК, БЦ, ТЦ,
            подземных паркингов, управляющих компаний и частных объектов.
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
          <p>
            {{ contactPhone || 'телефон уточняется' }}
          </p>
        </div>
      </div>

      <div class="mt-6 grid gap-4 border-t border-[var(--site-line)] pt-5 text-xs leading-6 text-[var(--site-muted)] md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p>{{ companyLegalName || companyName }}</p>
          <p>{{ companyInn || 'ИНН уточняется' }} · {{ companyOgrn || 'ОГРН уточняется' }}</p>
          <p>{{ legalAddress || 'Юридический адрес уточняется' }}</p>
        </div>

        <div class="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
          <a
            href="#contact"
            class="transition hover:text-[var(--site-text)]"
          >
            Политика конфиденциальности
          </a>
          <a
            href="#contact"
            class="transition hover:text-[var(--site-text)]"
          >
            Условия обслуживания
          </a>
          <p>© {{ new Date().getFullYear() }} {{ companyName }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
