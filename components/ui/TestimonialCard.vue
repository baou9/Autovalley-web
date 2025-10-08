<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <figure
    class="flex h-full flex-col gap-5 rounded-xl border border-gray-200 bg-white/90 p-6 shadow-sm transition-all focus:outline-none focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-primary/25 hover:-translate-y-0.5 hover:shadow-md"
    tabindex="0"
    v-reveal
  >
    <div class="flex items-center gap-1 text-primary" aria-hidden="true">
      <Star v-for="index in 5" :key="index" class="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
    </div>
    <blockquote
      class="relative pl-5 text-[16px] font-medium leading-7 text-dark before:absolute before:left-0 before:top-0 before:text-2xl before:text-primary before:content-['“']"
    >
      {{ props.quote }}
    </blockquote>
    <figcaption class="mt-auto flex items-center gap-3">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary" aria-hidden="true">
        {{ props.name.charAt(0) }}
      </div>
      <div>
        <p class="text-base font-semibold text-dark">{{ props.name }}</p>
        <p v-if="props.role" class="text-sm text-mute">{{ props.role }}</p>
      </div>
    </figcaption>
  </figure>
</template>
