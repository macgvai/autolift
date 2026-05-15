<script setup lang="ts">
defineProps<{
  companyBrand: string
  websiteLabel: string
  websiteHref: string
  contactEmail: string
  contactPhone:string
}>()

const headerLinks = [
  { label: 'Решения', href: '#catalog' },
  { label: 'Сервис и ремонт', href: '#service' },
  { label: 'Почему мы', href: '#advantages' },
  { label: 'Монтаж и запуск', href: '#workflow' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Заявка', href: '#contact' }
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
            <span class="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.18em] text-[var(--site-muted)]">парковочные подъемники: поставка, монтаж, ремонт и обслуживание</span>
          </span>
        </a>

        <nav
          class="ml-auto hidden items-center gap-5 lg:flex"
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

<!--          <a-->
<!--            href="#contact"-->
<!--            class="btn-primary !hidden shrink-0 lg:!inline-flex"-->
<!--          >-->
<!--            Расчет машиномест-->
<!--          </a>-->          <div class="xl:block text-right">
          <!--            <span class="block text-[0.68rem] uppercase tracking-[0.28em] text-[var(&#45;&#45;site-muted)]">звоните</span>-->
          <a
              :href="`tel:${contactPhone}`"
              class="mt-1 flex items-center gap-1 text-sm font-semibold text-[var(--site-text)]"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.6.28 1.2.47 1.78a2 2 0 0 0 .45.73l1.27 1.27a2 2 0 0 1 .45 2.11l-.2.6a2 2 0 0 0 .45 2.11l2.34 2.34a2 2 0 0 0 2.11.45l.6-.2a2 2 0 0 1 2.11.45l1.27 1.27a2 2 0 0 0 .73.45c.58.19 1.18.35 1.78.47A2 2 0 0 1 22 16.92z" />
            </svg>
            <span class="hidden sm:inline">
              {{ contactPhone }}
            </span>
          </a>
        </div>

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
                :href="`tel:${contactPhone}`"
                class="mobile-contact-card"
              >
                <span class="label-caption">Телефон</span>
                <span class="mt-2 block text-base font-semibold text-[var(--site-text)]">{{ contactPhone }}</span>
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
              Расчет машиномест
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
