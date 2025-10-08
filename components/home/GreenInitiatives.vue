<script setup lang="ts">
import { BatteryCharging, Globe2, SunMedium } from 'lucide-vue-next'

const highlights = [
  {
    icon: BatteryCharging,
    text: 'Borne de recharge gratuite sur place'
  },
  {
    icon: SunMedium,
    text: 'Atelier alimenté par l’énergie solaire'
  },
  {
    icon: Globe2,
    text: 'Engagés pour une mobilité durable'
  }
]
</script>

<template>
  <section class="bg-[#f7faf7] py-20" aria-labelledby="green-title">
    <div class="mx-auto max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
      <figure class="space-y-3" v-reveal>
        <NuxtImg
          src="/ev.svg"
          alt="Illustration d’une station de recharge AutoValley"
          class="h-full w-full rounded-2xl object-cover shadow-card"
          sizes="(min-width: 1024px) 50vw, 100vw"
          loading="lazy"
        />
        <figcaption class="text-sm text-gray-500">
          Recharge EV gratuite pour les clients AutoValley
        </figcaption>
      </figure>
      <div class="mt-10 space-y-6 lg:mt-0" v-reveal>
        <SectionTitle
          id="green-title"
          title="Notre Engagement pour un Avenir Durable"
          subtitle="Des actions concrètes pour accompagner la transition énergétique."
        />
        <ul class="space-y-4 text-base text-dark">
          <li v-for="item in highlights" :key="item.text" class="flex items-start gap-4">
            <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
              <component :is="item.icon" class="h-5 w-5" aria-hidden="true" focusable="false" />
            </span>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
