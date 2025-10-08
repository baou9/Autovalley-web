export default defineEventHandler(async event => {
  const body = await readBody<Record<string, unknown>>(event)

  const requiredFields = ['nom', 'telephone', 'serviceType']
  const missing = requiredFields.filter(field => !body?.[field])

  if (missing.length) {
    throw createError({
      statusCode: 400,
      statusMessage: `Champs manquants: ${missing.join(', ')}`
    })
  }

  // eslint-disable-next-line no-console
  console.log('📩 Nouvelle demande AutoValley', body)

  setResponseStatus(event, 200)
  return { ok: true }
})
