export default defineNuxtPlugin(() => {
  const track = (event: string, payload?: Record<string, unknown>) => {
    if (process.dev) {
      // eslint-disable-next-line no-console
      console.info('[analytics]', event, payload)
    }
  }

  return {
    provide: {
      analytics: {
        track
      }
    }
  }
})
