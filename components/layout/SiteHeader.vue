<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from '#imports'

const { t } = useI18n()
const route = useRoute()
const menuOpen = ref(false)
const hasScrolled = ref(false)

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 8
}

const links = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.services'), to: '/services' },
  { label: t('nav.clients'), to: '/clients' },
  { label: t('nav.contact'), to: '/contact' },
  { label: t('nav.blog'), to: '/blog', disabled: true }
])

const isActive = (path: string) => route.path === path

const closeMenu = () => {
  menuOpen.value = false
}

const onLinkClick = (link: { disabled?: boolean }, event: MouseEvent) => {
  if (link.disabled) {
    event.preventDefault()
    return
  }
  closeMenu()
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 border-b transition-all backdrop-blur-sm',
      hasScrolled ? 'border-black/5 bg-white/95 shadow-sm' : 'border-transparent bg-white/80'
    ]"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3 font-bold text-dark focus-ring" @click="closeMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">AV</span>
        <span class="hidden text-lg sm:block">AutoValley</span>
      </NuxtLink>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-md border border-light text-dark focus-ring sm:hidden"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Ouvrir le menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="h-6 w-6"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav
        id="main-navigation"
        class="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-mute sm:flex"
        aria-label="Navigation principale"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative rounded-md px-3 py-2 transition hover:text-dark focus-ring"
          :class="
            isActive(link.to)
              ? 'font-semibold text-dark after:absolute after:left-0 after:top-[calc(100%+6px)] after:h-[2px] after:w-full after:rounded-full after:bg-primary after:content-[\'\']'
              : ''
          "
          :aria-disabled="link.disabled || undefined"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          @click="onLinkClick(link, $event)"
        >
          {{ link.label }}
          <span v-if="link.disabled" class="ml-2 text-[10px] uppercase tracking-widest text-mute">Bientôt</span>
        </NuxtLink>
      </nav>

      <AButton class="hidden sm:inline-flex" to="/#booking" variant="primary">
        Réserver
      </AButton>
    </div>

    <transition name="fade">
      <div v-if="menuOpen" class="sm:hidden" aria-label="Navigation mobile">
        <div class="space-y-2 border-t border-light bg-white px-4 py-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to + '-mobile'"
            :to="link.to"
            class="flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-mute focus-ring"
            :class="isActive(link.to) ? 'text-dark font-semibold' : ''"
            :aria-disabled="link.disabled || undefined"
            :aria-current="isActive(link.to) ? 'page' : undefined"
            @click="onLinkClick(link, $event)"
          >
            {{ link.label }}
            <span v-if="link.disabled" class="text-xs uppercase tracking-wide">Bientôt</span>
          </NuxtLink>
          <AButton class="w-full" to="/#booking" variant="primary" @click="closeMenu">
            Réserver
          </AButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
