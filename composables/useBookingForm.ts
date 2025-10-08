import { object, string, ValidationError } from 'yup'

type BookingForm = {
  nom: string
  telephone: string
  serviceType: string
}

const schema = object({
  nom: string().min(2, 'Merci d’indiquer un nom valide.').required('Le nom est requis.'),
  telephone: string()
    .min(8, 'Le numéro doit contenir au moins 8 chiffres.')
    .required('Le téléphone est requis.'),
  serviceType: string().required('Sélectionnez un service.')
})

export function useBookingForm(initial: Partial<BookingForm> = {}) {
  const form = reactive<BookingForm>({
    nom: '',
    telephone: '',
    serviceType: '',
    ...initial
  })

  const errors = reactive<Record<keyof BookingForm, string | null>>({
    nom: null,
    telephone: null,
    serviceType: null
  })

  const loading = ref(false)
  const successMessage = ref('')

  const reset = () => {
    form.nom = ''
    form.telephone = ''
    form.serviceType = initial.serviceType || ''
    Object.keys(errors).forEach(key => {
      errors[key as keyof BookingForm] = null
    })
  }

  const validate = async () => {
    try {
      await schema.validate(form, { abortEarly: false })
      Object.keys(errors).forEach(key => {
        errors[key as keyof BookingForm] = null
      })
      return true
    } catch (err) {
      if (err instanceof ValidationError) {
        Object.keys(errors).forEach(key => {
          errors[key as keyof BookingForm] = null
        })
        err.inner.forEach(detail => {
          if (detail.path) {
            errors[detail.path as keyof BookingForm] = detail.message
          }
        })
      }
      return false
    }
  }

  const submit = async () => {
    successMessage.value = ''
    if (!(await validate())) {
      return false
    }
    loading.value = true
    try {
      await $fetch('/api/booking', {
        method: 'POST',
        body: {
          nom: form.nom,
          telephone: form.telephone,
          serviceType: form.serviceType
        }
      })
      successMessage.value = 'Demande envoyée ! Nous vous rappelons très vite.'
      reset()
      return true
    } catch (error) {
      console.error('Erreur de soumission', error)
      successMessage.value = 'Une erreur est survenue. Merci de réessayer.'
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    form,
    errors,
    loading,
    successMessage,
    submit,
    reset
  }
}
