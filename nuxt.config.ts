import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/base.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n', '~/modules/analytics'],
  tailwindcss: {
    viewer: false
  },
  image: {
    dir: 'assets/images',
    domains: ['api.mapbox.com']
  },
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.bunny.net', crossorigin: '' },
        {
          rel: 'preload',
          href: 'https://fonts.bunny.net/css?family=helvetica-neue:400,600&display=swap',
          as: 'style'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=helvetica-neue:400,600&display=swap'
        },
        {
          rel: 'prefetch',
          href: '/services',
          as: 'document'
        }
      ]
    }
  }
})
