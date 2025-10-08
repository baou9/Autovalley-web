<script setup lang="ts">
const testimonials = [
  {
    name: 'Karim B., Particulier',
    quote: 'Service impeccable, rapide et transparent. Je recommande !'
  },
  {
    name: 'Sophie L., Ayvens',
    quote: 'Le suivi précis facilite la gestion de notre flotte.'
  },
  {
    name: 'Youssef & Sana, Gestion privée',
    quote: 'Qualité concession… à meilleur prix.'
  }
]
</script>

<template>
  <section class="bg-white py-20" aria-labelledby="testimonials-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        id="testimonials-title"
        title="Ils nous font confiance"
        subtitle="Professionnels et particuliers saluent notre transparence et notre exigence."
        align="center"
      />
      <div class="mt-12 hidden grid-cols-2 gap-6 lg:grid">
        <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.name" v-bind="testimonial" />
      </div>
      <div
        class="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden"
        aria-label="Avis clients"
      >
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name + '-mobile'"
          v-bind="testimonial"
          class="snap-start min-w-[85%] shrink-0"
        />
      </div>
    </div>
  </section>
</template>
