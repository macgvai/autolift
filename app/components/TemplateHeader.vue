<script setup lang="ts">
defineProps<{
  companyBrand: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
}>()

const headerLinks = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Поставка', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' }
]

const mobileMenuOpen = ref(false)
const route = useRoute()

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

watch(() => route.fullPath, closeMobileMenu)
</script>

<template>
  <header class="site-header relative">
    <div class="container-shell">
      <div class="header-card flex items-center gap-4 rounded-[1.5rem] px-4 py-3 sm:px-5">
        <a
          href="#top"
          class="flex min-w-0 items-center gap-4"
          @click="closeMobileMenu"
        >
          <span class="flex size-11 shrink-0 items-center justify-center rounded-[1rem] bg-[var(--site-bg-muted)]">
            <span class="logo-mark">
              <span />
              <span />
              <span />
            </span>
          </span>

          <span class="min-w-0">
            <span class="font-display block truncate text-lg font-semibold tracking-[0.08em] text-[var(--site-text)] sm:text-xl">{{ companyBrand }}</span>
            <span class="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.28em] text-[var(--site-muted)]">подъемники для сервисных зон</span>
          </span>
        </a>

        <nav
          class="ml-auto hidden items-center gap-6 lg:flex"
          aria-label="Основная навигация"
        >
          <a
            v-for="link in headerLinks"
            :key="link.href"
            :href="link.href"
            class="nav-link"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-3 lg:ml-0">
          <div class="hidden xl:block xl:text-right">
            <span class="block text-[0.68rem] uppercase tracking-[0.28em] text-[var(--site-muted)]">сайт компании</span>
            <a
              :href="websiteHref"
              class="mt-1 block text-sm font-semibold text-[var(--site-text)]"
            >
              {{ websiteLabel }}
            </a>
          </div>

          <a
            href="#contact"
            class="btn-primary !hidden shrink-0 lg:!inline-flex"
          >
            Получить КП
          </a>

          <button
            type="button"
            class="burger-toggle inline-flex lg:hidden"
            :class="{ 'is-open': mobileMenuOpen }"
            :aria-expanded="mobileMenuOpen"
            :aria-label="mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
            @click="toggleMobileMenu"
          >
            <span class="burger-toggle-lines">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="absolute inset-x-0 top-[calc(100%+0.65rem)] z-50 px-0 lg:hidden"
      >
        <div class="container-shell">
          <div class="mobile-menu-panel rounded-[1.75rem] p-4">
            <nav
              class="grid gap-2"
              aria-label="Мобильная навигация"
            >
              <a
                v-for="(link, index) in headerLinks"
                :key="`${link.href}-mobile`"
                :href="link.href"
                class="mobile-menu-link"
                @click="closeMobileMenu"
              >
                <span>{{ link.label }}</span>
                <span class="text-[var(--site-muted)]">0{{ index + 1 }}</span>
              </a>
            </nav>

            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                :href="websiteHref"
                class="mobile-contact-card"
              >
                <span class="label-caption">Сайт</span>
                <span class="mt-2 block text-base font-semibold text-[var(--site-text)]">{{ websiteLabel }}</span>
              </a>
              <a
                :href="`mailto:${contactEmail}`"
                class="mobile-contact-card"
              >
                <span class="label-caption">E-mail</span>
                <span class="mt-2 block text-base font-semibold text-[var(--site-text)]">{{ contactEmail }}</span>
              </a>
            </div>

            <a
              href="#contact"
              class="btn-primary mt-4 w-full"
              @click="closeMobileMenu"
            >
              Получить КП
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <Transition name="mobile-backdrop">
    <button
      v-if="mobileMenuOpen"
      type="button"
      class="fixed inset-0 z-40 bg-slate-950/15 backdrop-blur-[2px] lg:hidden"
      aria-label="Закрыть меню"
      @click="closeMobileMenu"
    />
  </Transition>
</template>
