<script setup lang="ts">
const appConfig = useAppConfig()

useSeoMeta({
  title: appConfig.site.title,
  description: appConfig.site.description,
  ogTitle: appConfig.site.title,
  ogDescription: appConfig.site.description,
  ogType: 'website',
  ogUrl: appConfig.site.url,
  twitterCard: 'summary_large_image'
})

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels services propose AutoValley ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AutoValley prend en charge la mécanique, la carrosserie, l’électronique, le freinage et la préparation des véhicules particuliers ou flottes professionnelles.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment réserver un entretien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remplissez le formulaire de réservation en ligne ou contactez-nous par WhatsApp : nous vous confirmons le créneau sous une heure ouvrée.'
      }
    }
  ]
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'AutoValley',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '122, Zone Industrielle Sapino',
    addressLocality: 'Casablanca',
    addressCountry: 'MA'
  },
  telephone: '+212623456789',
  openingHours: 'Mo-Fr 08:30-19:00',
  image: `${appConfig.site.url}/hero.svg`
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqJsonLd),
      key: 'jsonld-faq'
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessJsonLd),
      key: 'jsonld-business'
    }
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'jsonld-faq': ['innerHTML'],
    'jsonld-business': ['innerHTML']
  }
})
</script>

<template>
  <div>
    <Hero />
    <ServicesGrid />
    <ClientTypes />
    <GreenInitiatives />
    <Testimonials />
    <BookingCTA />
  </div>
</template>
