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
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,10,15,0.84)] backdrop-blur-xl">
    <div class="container-shell flex items-center gap-4 py-4">
      <a
        href="#top"
        class="flex min-w-0 items-center gap-3"
        @click="closeMobileMenu"
      >
        <span class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span class="logo-mark">
            <span />
            <span />
            <span />
          </span>
        </span>

        <span class="min-w-0">
          <span class="font-display block truncate text-2xl leading-none text-white">{{ companyBrand }}</span>
          <span class="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.32em] text-white/45">продажа и сервис автоподъемников</span>
        </span>
      </a>

      <nav
        class="ml-auto hidden items-center gap-6 text-sm text-white/70 lg:flex"
        aria-label="Основная навигация"
      >
        <a
          href="#catalog"
          class="transition hover:text-white"
        >Каталог</a>
        <a
          href="#advantages"
          class="transition hover:text-white"
        >Преимущества</a>
        <a
          href="#workflow"
          class="transition hover:text-white"
        >Поставка</a>
        <a
          href="#faq"
          class="transition hover:text-white"
        >FAQ</a>
        <a
          href="#contact"
          class="transition hover:text-white"
        >Контакты</a>
      </nav>

      <div class="hidden items-center gap-3 xl:flex">
        <a
          :href="websiteHref"
          class="text-right"
        >
          <span class="block text-[0.68rem] uppercase tracking-[0.3em] text-white/45">сайт компании</span>
          <span class="block text-lg font-semibold text-white">{{ websiteLabel }}</span>
        </a>
      </div>

      <a
        href="#contact"
        class="btn-primary hidden shrink-0 sm:ml-auto sm:inline-flex lg:ml-0"
      >
        Получить КП
      </a>
      <button
        type="button"
        class="burger-toggle ml-auto sm:ml-0 lg:hidden"
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

    <div class="hidden">
      <a
        href="#catalog"
        class="nav-chip"
      >Каталог</a>
      <a
        href="#advantages"
        class="nav-chip"
      >Преимущества</a>
      <a
        href="#workflow"
        class="nav-chip"
      >Поставка</a>
      <a
        href="#contact"
        class="nav-chip"
      >Контакты</a>
    </div>
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="absolute inset-x-0 top-full border-t border-white/10 bg-[rgba(7,10,15,0.94)] px-0 py-4 lg:hidden"
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
                <span class="text-white/35">0{{ index + 1 }}</span>
              </a>
            </nav>

            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                :href="websiteHref"
                class="mobile-contact-card"
              >
                <span class="label-caption">Сайт</span>
                <span class="mt-2 block text-lg font-semibold text-white">{{ websiteLabel }}</span>
              </a>
              <a
                :href="`mailto:${contactEmail}`"
                class="mobile-contact-card"
              >
                <span class="label-caption">E-mail</span>
                <span class="mt-2 block text-lg font-semibold text-white">{{ contactEmail }}</span>
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
      class="fixed inset-0 top-[5.25rem] z-40 bg-black/45 backdrop-blur-[2px] lg:hidden"
      aria-label="Закрыть меню"
      @click="closeMobileMenu"
    />
  </Transition>
</template>
