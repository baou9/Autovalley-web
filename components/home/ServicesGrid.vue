<script setup lang="ts">
import { Gauge, Wrench, Paintbrush, ShieldCheck, Zap, Cog } from 'lucide-vue-next'
import ServiceCard from '@/components/ui/ServiceCard.vue'

const services = [
  {
    title: 'Vidange & entretien',
    description: 'Entretien régulier pour performance et longévité.',
    icon: Wrench
  },
  {
    title: 'Diagnostic électronique',
    description: 'Détection précise grâce à nos outils de pointe.',
    icon: Gauge
  },
  {
    title: 'Carrosserie & peinture',
    description: 'Réparations esthétiques et structurelles soignées.',
    icon: Paintbrush
  },
  {
    title: 'Pneumatique & freinage',
    description: 'Sécurité et tenue de route garanties.',
    icon: ShieldCheck
  },
  {
    title: 'Électricité automobile',
    description: 'Tous systèmes électriques/électroniques.',
    icon: Zap
  },
  {
    title: 'Mécanique lourde & tuning',
    description: 'De la petite réparation à la préparation.',
    icon: Cog
  }
]
</script>

<template>
  <section class="bg-white py-20" aria-labelledby="services-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle id="services-title" title="Services phares" subtitle="Des interventions multimarques, garanties par nos experts." align="center" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.title" v-bind="service" />
      </div>
      <div class="mt-10 flex justify-center">
        <AButton to="/services" variant="outline">Voir tous les services</AButton>
      </div>
    </div>
  </section>
</template>
