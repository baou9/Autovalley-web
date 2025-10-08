<script setup lang="ts">
import { object, string, ValidationError } from 'yup'

const appConfig = useAppConfig()

useSeoMeta({
  title: 'Contact AutoValley',
  description: 'Prenez rendez-vous avec AutoValley : formulaire, WhatsApp ou téléphone. Réponse garantie sous une heure ouvrée.',
  ogTitle: 'Contact AutoValley',
  ogDescription: 'Prenez rendez-vous avec AutoValley : formulaire, WhatsApp ou téléphone. Réponse garantie sous une heure ouvrée.',
  ogUrl: `${appConfig.site.url}/contact`,
  twitterCard: 'summary_large_image'
})

const contactSchema = object({
  nom: string().min(2, 'Merci d’indiquer un nom valide.').required('Le nom est requis.'),
  email: string().email('Email invalide.').required('L’email est requis.'),
  telephone: string().min(8, 'Le numéro doit contenir au moins 8 chiffres.').required('Le téléphone est requis.'),
  message: string().min(10, 'Le message doit contenir au moins 10 caractères.').required('Le message est requis.')
})

const form = reactive({
  nom: '',
  email: '',
  telephone: '',
  message: ''
})

const errors = reactive<Record<string, string | null>>({
  nom: null,
  email: null,
  telephone: null,
  message: null
})

const loading = ref(false)
const successMessage = ref('')

const reset = () => {
  form.nom = ''
  form.email = ''
  form.telephone = ''
  form.message = ''
  Object.keys(errors).forEach(key => {
    errors[key] = null
  })
}

const submit = async () => {
  successMessage.value = ''
  try {
    await contactSchema.validate(form, { abortEarly: false })
    Object.keys(errors).forEach(key => {
      errors[key] = null
    })
  } catch (err) {
    if (err instanceof ValidationError) {
      Object.keys(errors).forEach(key => {
        errors[key] = null
      })
      err.inner.forEach(detail => {
        if (detail.path) {
          errors[detail.path] = detail.message
        }
      })
    }
    return
  }

  loading.value = true
  try {
    await $fetch('/api/booking', {
      method: 'POST',
      body: {
        nom: form.nom,
        telephone: form.telephone,
        serviceType: 'Contact',
        email: form.email,
        message: form.message
      }
    })
    successMessage.value = 'Merci ! Nous vous recontactons très vite.'
    reset()
  } catch (error) {
    console.error('Erreur de contact', error)
    successMessage.value = 'Une erreur est survenue. Merci de réessayer.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="bg-white py-20" aria-labelledby="contact-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2">
        <div class="space-y-6" v-reveal>
          <SectionTitle
            id="contact-title"
            title="Contactez AutoValley"
            subtitle="Rdv atelier, expertise sinistre ou simple question : notre équipe vous répond rapidement."
          />
          <p class="text-sm text-mute">
            Téléphone :
            <a class="focus-ring font-semibold text-dark" href="tel:+212623456789">+212 6 23 45 67 89</a>
            <br />
            Email :
            <a class="focus-ring font-semibold text-dark" href="mailto:contact@autovalley.ma">contact@autovalley.ma</a>
          </p>
          <div class="overflow-hidden rounded-xl shadow-card">
            <NuxtImg
              src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-7.62,33.57,12,0,0/600x360?access_token=pk.eyJ1IjoibnV4dCIsImEiOiJja2x6ZGdmdXUwMHdxMm9wZzltdDJhMWpiIn0.faketoken"
              alt="Carte localisant AutoValley à Casablanca"
              class="h-full w-full object-cover"
              loading="lazy"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
        <form class="grid gap-4 rounded-xl border border-light bg-light/60 p-6 shadow-sm" @submit.prevent="submit" novalidate v-reveal>
          <label class="space-y-2 text-sm font-medium text-dark">
            Nom et prénom
            <input
              v-model="form.nom"
              type="text"
              name="nom"
              autocomplete="name"
              class="w-full rounded-md border border-light bg-white px-4 py-3 text-sm focus-ring"
              :aria-invalid="Boolean(errors.nom)"
              aria-describedby="contact-nom"
            />
            <span v-if="errors.nom" id="contact-nom" class="text-xs text-primary/90">{{ errors.nom }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-dark">
            Email
            <input
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              class="w-full rounded-md border border-light bg-white px-4 py-3 text-sm focus-ring"
              :aria-invalid="Boolean(errors.email)"
              aria-describedby="contact-email"
            />
            <span v-if="errors.email" id="contact-email" class="text-xs text-primary/90">{{ errors.email }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-dark">
            Téléphone
            <input
              v-model="form.telephone"
              type="tel"
              name="telephone"
              autocomplete="tel"
              class="w-full rounded-md border border-light bg-white px-4 py-3 text-sm focus-ring"
              :aria-invalid="Boolean(errors.telephone)"
              aria-describedby="contact-telephone"
            />
            <span v-if="errors.telephone" id="contact-telephone" class="text-xs text-primary/90">{{ errors.telephone }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-dark">
            Message
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              class="w-full rounded-md border border-light bg-white px-4 py-3 text-sm focus-ring"
              :aria-invalid="Boolean(errors.message)"
              aria-describedby="contact-message"
            />
            <span v-if="errors.message" id="contact-message" class="text-xs text-primary/90">{{ errors.message }}</span>
          </label>
          <AButton type="submit" variant="primary" :disabled="loading">
            <span v-if="loading" class="animate-pulse">Envoi…</span>
            <span v-else>Envoyer</span>
          </AButton>
          <p v-if="successMessage" class="rounded-md bg-white px-4 py-3 text-sm text-dark" role="status">
            {{ successMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
