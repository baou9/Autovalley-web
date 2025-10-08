<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary' | 'outline',
    default: 'primary'
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  ariaLabel: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const variantClasses: Record<string, string> = {
  primary: 'border border-transparent bg-primary text-white hover:bg-primary/90',
  secondary:
    'border border-primary/40 bg-white text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white',
  outline: 'border border-primary/70 bg-transparent text-primary hover:bg-primary hover:text-white'
}

const baseClasses =
  'inline-flex min-h-[48px] min-w-[180px] items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold leading-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const tag = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink')
  }
  if (props.href) {
    return 'a'
  }
  return 'button'
})

const attrs = computed(() => ({
  to: props.to || undefined,
  href: props.href || undefined,
  type: props.to || props.href ? undefined : props.type,
  'aria-label': props.ariaLabel || undefined,
  disabled: props.disabled || undefined
}))
</script>

<template>
  <component :is="tag" v-bind="attrs" :class="[baseClasses, variantClasses[variant]]">
    <slot />
  </component>
</template>
