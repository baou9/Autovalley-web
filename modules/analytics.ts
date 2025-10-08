import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  enabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'autovalley-analytics',
    configKey: 'analytics'
  },
  defaults: {
    enabled: true
  },
  setup(options, nuxt) {
    if (!options.enabled) {
      return
    }

    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/analytics.client'))

    nuxt.options.runtimeConfig.public = nuxt.options.runtimeConfig.public || {}
    nuxt.options.runtimeConfig.public.analytics = {
      ...(nuxt.options.runtimeConfig.public.analytics || {}),
      enabled: true
    }
  }
})
