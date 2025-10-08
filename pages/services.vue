<script setup lang="ts">
import { Gauge, Wrench, Paintbrush, ShieldCheck, Zap, Cog } from 'lucide-vue-next'

const appConfig = useAppConfig()

useSeoMeta({
  title: 'Tous les services AutoValley',
  description:
    'Vidange, diagnostic, carrosserie, pneumatique, électricité, mécanique lourde : découvrez toutes les prestations AutoValley.',
  ogTitle: 'Tous les services AutoValley',
  ogDescription:
    'Vidange, diagnostic, carrosserie, pneumatique, électricité, mécanique lourde : découvrez toutes les prestations AutoValley.',
  ogUrl: `${appConfig.site.url}/services`,
  twitterCard: 'summary_large_image'
})

const services = [
  {
    title: 'Vidange & entretien',
    description:
      'Entretien périodique constructeur, filtres premium, diagnostics visuels complets et remise à zéro des indicateurs.'
  },
  {
    title: 'Diagnostic électronique',
    description:
      'Lecture des calculateurs, calibrations ADAS, tests batterie haute tension et rapport détaillé des anomalies.'
  },
  {
    title: 'Carrosserie & peinture',
    description:
      'Réparations structurelles, débosselage sans peinture, cabine pressurisée et finitions conformes aux standards constructeurs.'
  },
  {
    title: 'Pneumatique & freinage',
    description:
      'Montage toutes dimensions, équilibrage laser, géométrie 3D, freinage régénératif pour EV et pose de plaquettes homologuées.'
  },
  {
    title: 'Électricité automobile',
    description:
      'Diagnostics réseaux multiplexés, réparation faisceaux, climatisation, systèmes d’aide à la conduite et conversions LED.'
  },
  {
    title: 'Mécanique lourde & tuning',
    description:
      'Réfection moteurs, boîtes auto/robotisées, upgrades performances, suspensions sport et accompagnement homologation.'
  }
]

const icons = [Wrench, Gauge, Paintbrush, ShieldCheck, Zap, Cog]
</script>

<template>
  <section class="bg-white py-20" aria-labelledby="services-main-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        id="services-main-title"
        title="Tous les services AutoValley"
        subtitle="Un guichet unique pour la performance et la sécurité de vos véhicules."
        align="center"
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :icon="icons[index]"
        >
          <p class="mt-4 text-xs uppercase tracking-wide text-mute">Service complet</p>
        </ServiceCard>
      </div>
      <div class="mt-14 flex justify-center">
        <AButton to="/contact" variant="primary">Je planifie ma réservation</AButton>
      </div>
    </div>
  </section>
</template>
