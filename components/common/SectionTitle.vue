<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String as () => 'left' | 'center',
    default: 'left'
  }
})
</script>

<template>
  <div
    v-bind="$attrs"
    :class="['space-y-3', align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left']"
    v-reveal
  >
    <p v-if="props.eyebrow" class="text-sm font-semibold uppercase tracking-widest text-primary">
      {{ props.eyebrow }}
    </p>
    <h2 class="text-3xl font-bold text-dark sm:text-4xl">
      {{ props.title }}
    </h2>
    <p v-if="props.subtitle" class="text-base text-mute">
      {{ props.subtitle }}
    </p>
  </div>
</template>
