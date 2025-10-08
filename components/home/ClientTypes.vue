<script setup lang="ts">
import { Building2, Car, ShieldCheck, UsersRound } from 'lucide-vue-next'

const clientTypes = [
  {
    title: 'Sociétés de location',
    description: 'Service rapide & suivi complet (Hertz, Chaabi LLD, Ayvens…)',
    icon: Car
  },
  {
    title: 'Entreprises & usines',
    description: 'Entretien global pour flottes internes.',
    icon: Building2
  },
  {
    title: 'Compagnies d’assurance',
    description: 'Fiers partenaires de RMA, SANLAM et La CAT.',
    icon: ShieldCheck
  },
  {
    title: 'Particuliers exigeants',
    description: 'Service type concession à prix compétitif.',
    icon: UsersRound
  }
]
</script>

<template>
  <section class="bg-light py-20" aria-labelledby="clients-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        id="clients-title"
        eyebrow="CLIENTÈLES"
        title="Qui nous faisons rouler"
        subtitle="Des solutions adaptées aux loueurs, entreprises, assurances et particuliers exigeants."
        align="center"
      />
      <div class="mt-12 grid gap-6 md:grid-cols-2" role="list">
        <article
          v-for="client in clientTypes"
          :key="client.title"
          class="flex h-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow focus:outline-none focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-primary/25 hover:shadow-sm"
          role="listitem"
          tabindex="0"
          v-reveal
        >
          <span class="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
            <component :is="client.icon" class="h-5 w-5" aria-hidden="true" focusable="false" />
          </span>
          <div class="space-y-2">
            <h3 class="text-lg font-semibold text-dark">{{ client.title }}</h3>
            <p class="text-sm text-mute">{{ client.description }}</p>
          </div>
        </article>
      </div>

      <div
        class="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-gray-200 bg-white/85 px-6 py-4 shadow-sm"
        aria-label="Logos partenaires"
      >
        <NuxtImg
          v-for="logo in ['rma', 'sanlam', 'ayvens', 'hertz']"
          :key="logo"
          :src="`/logos/${logo}.svg`"
          :alt="`Logo ${logo.toUpperCase()}`"
          class="h-8 w-auto grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
          loading="lazy"
          sizes="160px"
        />
      </div>
    </div>
  </section>
</template>
