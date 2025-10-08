export default defineNuxtPlugin(nuxtApp => {
  const directive = {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      if (!import.meta.client || !('IntersectionObserver' in window)) {
        el.classList.add('revealed')
        return
      }

      el.classList.add('reveal')

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.2
        }
      )

      observer.observe(el)
    }
  }

  nuxtApp.vueApp.directive('reveal', directive)
})
