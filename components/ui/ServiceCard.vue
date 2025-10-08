<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: Component
}>()
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all focus:outline-none focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-primary/25 hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-primary/10"
    tabindex="0"
    v-reveal
  >
    <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
      <component :is="props.icon" class="h-5 w-5" aria-hidden="true" focusable="false" />
    </span>
    <h3 class="mt-5 text-lg font-semibold text-dark">
      {{ props.title }}
    </h3>
    <p class="mt-2 text-sm text-mute line-clamp-2">
      {{ props.description }}
    </p>
    <slot />
  </article>
</template>
