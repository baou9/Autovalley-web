<script setup lang="ts">
const { $analytics } = useNuxtApp()

const onPrimaryClick = () => {
  $analytics?.track?.('cta_click', { location: 'hero', type: 'booking' })
}

const onSecondaryClick = () => {
  $analytics?.track?.('cta_click', { location: 'hero', type: 'discover' })
}
</script>

<template>
  <section class="relative isolate overflow-hidden bg-dark text-white" aria-labelledby="hero-title">
    <NuxtImg
      src="/hero.svg"
      sizes="100vw"
      preload
      class="absolute inset-0 h-full w-full"
      :img-attrs="{
        alt: 'Illustration stylisée d’un atelier AutoValley',
        class: 'h-full w-full object-cover',
        loading: 'eager',
        fetchpriority: 'high'
      }"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent"></div>

    <div class="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8">
      <div class="max-w-3xl space-y-6 sm:space-y-8" v-reveal>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Casablanca</p>
        <h1 id="hero-title" class="text-[3.15rem] font-bold leading-[1.15] sm:text-[4.125rem]">
          La meilleure alternative aux concessionnaires à Casablanca.
        </h1>
        <p class="max-w-[62ch] text-lg text-white/80">
          Service multimarque haut de gamme, agréé par les assurances, pour les particuliers et les grandes flottes.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <AButton class="w-full sm:w-auto" to="/#booking" variant="primary" @click="onPrimaryClick">
            Réservez votre service
          </AButton>
          <AButton class="w-full sm:w-auto" to="/services" variant="secondary" @click="onSecondaryClick">
            Découvrir nos services
          </AButton>
        </div>
        <BadgePartners />
      </div>
    </div>
  </section>
</template>
