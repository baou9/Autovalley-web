<script setup lang="ts">
const appConfig = useAppConfig()

useSeoMeta({
  title: 'Clients AutoValley',
  description: 'Loueurs, entreprises, assurances et particuliers : AutoValley pilote la maintenance et le suivi complet de vos véhicules.',
  ogTitle: 'Clients AutoValley',
  ogDescription: 'Loueurs, entreprises, assurances et particuliers : AutoValley pilote la maintenance et le suivi complet de vos véhicules.',
  ogUrl: `${appConfig.site.url}/clients`,
  twitterCard: 'summary_large_image'
})

const clientTypes = [
  {
    title: 'Sociétés de location',
    detail:
      'Fleet management proactif, reporting hebdomadaire, priorisation des immobilisations critiques.'
  },
  {
    title: 'Entreprises & usines',
    detail:
      'Maintenance préventive, gestion multi-sites, véhicules utilitaires, pick-ups et VP.'
  },
  {
    title: 'Compagnies d’assurance',
    detail:
      'Procédures agréées RMA, SANLAM et La CAT avec photos horodatées et devis validés rapidement.'
  },
  {
    title: 'Particuliers exigeants',
    detail:
      'Entretien prestige, detailing, véhicules de courtoisie et historique digitalisé.'
  }
]
</script>

<template>
  <section class="bg-light py-20" aria-labelledby="clients-main-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        id="clients-main-title"
        title="Qui nous faisons rouler"
        subtitle="AutoValley accompagne les gestionnaires de flotte comme les conducteurs passionnés."
        align="center"
      />
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <div v-for="client in clientTypes" :key="client.title" class="rounded-xl bg-white p-6 shadow-sm" v-reveal>
          <h3 class="text-lg font-semibold text-dark">{{ client.title }}</h3>
          <p class="mt-2 text-sm text-mute">{{ client.detail }}</p>
        </div>
      </div>
      <div class="mt-12 rounded-xl border border-dashed border-primary/40 bg-white p-6" v-reveal>
        <h3 class="text-lg font-semibold text-dark">Historique digital complet</h3>
        <p class="mt-2 text-sm text-mute">
          Historique complet des réparations par véhicule : photos avant/après, devis, factures et rappels planifiés.
        </p>
      </div>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-6" aria-label="Assureurs partenaires">
        <BadgePartners />
      </div>
    </div>
  </section>
</template>
