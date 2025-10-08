<script setup lang="ts">
import { useBookingForm } from '@/composables/useBookingForm'

const { form, errors, loading, successMessage, submit } = useBookingForm()

const serviceOptions = [
  'Vidange & entretien',
  'Diagnostic électronique',
  'Carrosserie & peinture',
  'Pneumatique & freinage',
  'Électricité automobile',
  'Mécanique lourde & tuning'
]
</script>

<template>
  <section id="booking" class="bg-primary py-16" aria-labelledby="booking-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div class="space-y-4 text-white" v-reveal>
          <h2 id="booking-title" class="text-3xl font-bold sm:text-4xl">
            📅 Réservez votre service en quelques clics
          </h2>
          <p class="text-base text-white/80">Dites-nous ce dont vous avez besoin : notre équipe prépare votre dossier.</p>
          <p class="text-sm font-medium text-white/80">
            ✓ Réponse sous 1h ouvrée • ✓ Agréé assurances • ✓ Multi-marques
          </p>
          <p
            v-if="successMessage"
            class="rounded-md bg-white/10 px-4 py-3 text-sm"
            role="status"
            aria-live="polite"
          >
            {{ successMessage }}
          </p>
        </div>
        <form
          class="grid gap-4 rounded-xl bg-white p-6 shadow-card"
          aria-describedby="booking-title"
          @submit.prevent="submit"
          novalidate
          v-reveal
        >
          <label class="space-y-2 text-sm font-medium text-dark">
            Nom et prénom
            <input
              v-model="form.nom"
              type="text"
              name="nom"
              autocomplete="name"
              class="w-full rounded-md border border-white/60 bg-white px-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[48px]"
              :aria-invalid="Boolean(errors.nom)"
              aria-describedby="nom-error"
            />
            <span v-if="errors.nom" id="nom-error" class="text-xs text-white/80">{{ errors.nom }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-dark">
            Téléphone
            <input
              v-model="form.telephone"
              type="tel"
              name="telephone"
              autocomplete="tel"
              class="w-full rounded-md border border-white/60 bg-white px-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[48px]"
              :aria-invalid="Boolean(errors.telephone)"
              aria-describedby="telephone-error"
            />
            <span v-if="errors.telephone" id="telephone-error" class="text-xs text-white/80">{{ errors.telephone }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-dark">
            Type de service
            <select
              v-model="form.serviceType"
              name="serviceType"
              class="w-full rounded-md border border-white/60 bg-white px-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[48px]"
              :aria-invalid="Boolean(errors.serviceType)"
              aria-describedby="service-error"
            >
              <option disabled value="">Choisir un service</option>
              <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
            </select>
            <span v-if="errors.serviceType" id="service-error" class="text-xs text-white/80">{{ errors.serviceType }}</span>
          </label>
          <AButton type="submit" variant="primary" class="w-full sm:w-auto" :disabled="loading">
            <span v-if="loading" class="animate-pulse">Envoi…</span>
            <span v-else>Réserver maintenant</span>
          </AButton>
          <p class="text-xs text-white/80">Vos informations ne sont jamais partagées.</p>
        </form>
      </div>
    </div>
  </section>
</template>
