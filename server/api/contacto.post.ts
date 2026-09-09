export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (
    !body.name ||
    !body.email ||
    !body.subject ||
    !body.message
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios'
    })
  }

  const config = useRuntimeConfig()

  await $fetch(
    'https://api.resend.com/emails',
    {
      method: 'POST',

      headers: {
        Authorization:
          `Bearer ${config.resendApiKey}`
      },

      body: {
        from: 'Bruné Web <web@bruneabogaciaymediacion.es>',

        to: [
          'consultabrune@gmail.com'
        ],

        subject:
          `Nueva consulta web: ${body.subject}`,

        reply_to: body.email,

        text: `
Nueva consulta desde la web de Bruné Abogacía y Mediación

Nombre: ${body.name}
Email: ${body.email}
Asunto: ${body.subject}

Consulta:
${body.message}
        `.trim()
      }
    }
  )

  return {
    ok: true
  }
})