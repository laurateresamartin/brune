<template>
  <section
    id="contacto"
    class="contact"
  >
    <div class="contact__inner">
      <div class="contact__info">
        <p class="contact__eyebrow">
          Contacto
        </p>

        <h2>
          Estamos aquí
          <span>para ayudarte.</span>
        </h2>

        <p class="contact__intro">
          Contáctanos para una consulta personalizada.
          Atendemos bajo cita previa.
        </p>

        <div class="contact__details">
          <a
            href="tel:+34638812473"
            class="contact-detail"
          >
            <span class="contact-detail__label">
              Teléfono
            </span>

            <span class="contact-detail__value">
              638 812 473
            </span>
          </a>

          <a
            href="mailto:consultabrune@gmail.com"
            class="contact-detail"
          >
            <span class="contact-detail__label">
              Email
            </span>

            <span class="contact-detail__value">
              consultabrune@gmail.com
            </span>
          </a>

          <a
            href="https://maps.google.com/?q=Avda.+Gran+Via+de+San+Marcos+42+Leon"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-detail"
          >
            <span class="contact-detail__label">
              Despacho
            </span>

            <span class="contact-detail__value">
              Avda. Gran Vía de San Marcos,
              N.º 42, 1ºB
              <br>
              24002 León
            </span>
          </a>
        </div>
        <div class="contact__map">
            <iframe
                title="Ubicación de Bruné Abogacía y Mediación"
                src="https://www.google.com/maps?q=Avda.%20Gran%20V%C3%ADa%20de%20San%20Marcos%2042%2C%2024002%20Le%C3%B3n&output=embed"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
            />
        </div>
      </div>

      <div class="contact__form-wrapper">
        <form
          class="contact-form"
          @submit.prevent="submitForm"
        >
          <div class="contact-form__row">
            <label class="contact-form__field">
              <span>Nombre completo</span>

              <input
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                required
                placeholder="Tu nombre"
              >
            </label>

            <label class="contact-form__field">
              <span>Email</span>

              <input
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                required
                placeholder="tu@email.com"
              >
            </label>
          </div>

          <label class="contact-form__field">
            <span>Asunto</span>

            <input
              v-model="form.subject"
              type="text"
              name="subject"
              required
              placeholder="¿En qué podemos ayudarte?"
            >
          </label>

          <label class="contact-form__field">
            <span>Mensaje</span>

            <textarea
              v-model="form.message"
              name="message"
              rows="5"
              required
              placeholder="Cuéntanos brevemente tu consulta"
            />
          </label>

          <label class="contact-form__checkbox">
            <input
              v-model="form.privacy"
              type="checkbox"
              required
            >

            <span>
              He leído y acepto la
              <a href="/politica-privacidad">
                Política de Privacidad
              </a>.
            </span>
          </label>

          <label class="contact-form__checkbox">
            <input
              v-model="form.legal"
              type="checkbox"
              required
            >

            <span>
              Acepto las condiciones establecidas
              en el
              <a href="/aviso-legal">
                Aviso Legal
              </a>.
            </span>
          </label>
          <div class="contact-form__captcha">
            <p class="contact-form__captcha-text">
                Por favor, verifica que eres una persona antes de enviar.
            </p>

            <div
                ref="recaptchaElement"
                class="g-recaptcha"
            />
            </div>
                <p
                v-if="captchaError"
                class="contact-form__error"
                role="alert"
                >
                Debes verificar que eres una persona
                antes de enviar el formulario.
                </p>
          <button
            type="submit"
            class="contact-form__submit"
          >
            <span>
              Enviar consulta
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </button>

          <p
            v-if="submitted"
            class="contact-form__notice"
          >
            El formulario está preparado visualmente.
            Conectaremos el envío cuando configuremos
            el servidor o servicio de correo.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

const submitted = ref(false)
declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
        }
      ) => number
    }
  }
}
const captchaError = ref(false)
const recaptchaElement =
  ref<HTMLElement | null>(null)

const recaptchaToken = ref('')
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false,
  legal: false
})
onMounted(() => {
  const renderRecaptcha = () => {
    if (
      !window.grecaptcha ||
      !recaptchaElement.value
    ) {
      return
    }

    window.grecaptcha.render(
      recaptchaElement.value,
      {
        sitekey:
          '6LdAR4srAAAAAII-1fpPnGQVhU2KAlahfByQxtIJ',

        callback: (token: string) => {
          recaptchaToken.value = token
          captchaError.value = false
        },

        'expired-callback': () => {
          recaptchaToken.value = ''
        },

        'error-callback': () => {
          recaptchaToken.value = ''
        }
      }
    )
  }

  if (window.grecaptcha) {
    renderRecaptcha()
    return
  }

const script =
    document.createElement('script')

    script.src =
        'https://www.google.com/recaptcha/api.js?hl=es'

    script.async = true
    script.defer = true

    script.onload = renderRecaptcha

    document.head.appendChild(script)
})

const submitForm = () => {
submitted.value = false

if (!recaptchaToken.value) {
    captchaError.value = true
    return
  }

  captchaError.value = false
  /*
   * Temporal.
   *
   * Más adelante conectaremos esto
   * con el backend / servicio de correo.
   */

  submitted.value = true
}
</script>

<style scoped>
.contact {
  padding:
    clamp(110px, 12vw, 190px)
    clamp(20px, 4vw, 64px);

  background:
    #e4ded7;
}

.contact__inner {
  width: min(100%, var(--container-width));

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(300px, 0.8fr)
    minmax(0, 1.2fr);

  gap:
    clamp(70px, 10vw, 150px);
}

/* INFO */

.contact__eyebrow {
  margin-bottom: 22px;

  font-size: 0.7rem;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact__info h2 {
  margin-bottom: 28px;

  font-size:
    clamp(3rem, 5.5vw, 5.8rem);

  line-height: 0.94;

  letter-spacing: -0.045em;
}

.contact__info h2 span {
  display: block;

  color:
    var(--color-accent-dark);
}

.contact__intro {
  max-width: 480px;

  margin-bottom: 60px;

  font-size:
    clamp(1rem, 1.4vw, 1.15rem);

  line-height: 1.75;

  color:
    rgba(70, 68, 66, 0.78);
}

/* DATOS */

.contact__details {
  border-top:
    1px solid rgba(80, 76, 72, 0.18);
}

.contact-detail {
  display: grid;

  grid-template-columns:
    100px
    minmax(0, 1fr);

  gap: 25px;

  padding:
    24px
    0;

  border-bottom:
    1px solid rgba(80, 76, 72, 0.18);
}

.contact-detail__label {
  padding-top: 4px;

  font-size: 0.62rem;

  letter-spacing: 0.13em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact-detail__value {
  font-family:
    var(--font-serif);

  font-size:
    clamp(1.1rem, 1.5vw, 1.35rem);

  line-height: 1.4;

  transition:
    opacity 0.25s ease;
}

.contact-detail:hover
.contact-detail__value {
  opacity: 0.58;
}

/* FORM */

.contact__form-wrapper {
  padding:
    clamp(30px, 5vw, 65px);

  background:
    rgba(255, 255, 255, 0.48);

  border:
    1px solid rgba(255, 255, 255, 0.7);
}

.contact-form {
  display: grid;

  gap: 32px;
}

.contact-form__row {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 25px;
}

.contact-form__field {
  display: grid;
  gap: 10px;
}

.contact-form__field > span {
  font-size: 0.63rem;

  letter-spacing: 0.13em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact-form input,
.contact-form textarea {
  width: 100%;

  padding:
    13px
    0;

  border: 0;
  border-bottom:
    1px solid rgba(70, 68, 66, 0.25);

  border-radius: 0;

  outline: none;

  background: transparent;

  color:
    var(--color-text-dark);

  transition:
    border-color 0.25s ease;
}

.contact-form textarea {
  min-height: 130px;

  resize: vertical;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color:
    rgba(70, 68, 66, 0.35);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color:
    var(--color-text-dark);
}

/* CHECKBOX */

.contact-form__checkbox {
  display: flex;

  align-items: flex-start;

  gap: 12px;

  font-size: 0.78rem;

  line-height: 1.55;

  color:
    rgba(70, 68, 66, 0.75);
}

.contact-form__checkbox input {
  width: 16px;
  height: 16px;

  flex-shrink: 0;

  margin-top: 2px;
}

.contact-form__checkbox a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* SUBMIT */

.contact-form__submit {
  min-height: 62px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;

  margin-top: 5px;

  padding:
    0
    25px;

  border:
    1px solid var(--color-text-dark);

  background:
    var(--color-text-dark);

  color: white;

  cursor: pointer;

  font-size: 0.72rem;

  letter-spacing: 0.11em;
  text-transform: uppercase;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}
.contact__map {
  position: relative;

  width: 100%;
  height: 330px;

  margin-top: 40px;

  overflow: hidden;

  background: #d8d2cb;

  border:
    1px solid rgba(80, 76, 72, 0.15);
}

.contact__map iframe {
  display: block;

  width: 100%;
  height: 100%;
}

/* Tablet */

@media (max-width: 950px) {
  .contact__map {
    height: 380px;
  }
}

/* Móvil */

@media (max-width: 640px) {
  .contact__map {
    height: 300px;

    margin-top: 32px;
  }
}

.contact-form__submit:hover {
  background: transparent;

  color:
    var(--color-text-dark);
}

.contact-form__submit
span:last-child {
  font-size: 1rem;

  transition:
    transform 0.25s ease;
}

.contact-form__submit:hover
span:last-child {
  transform:
    translate(3px, -3px);
}

.contact-form__notice {
  margin: 0;

  padding:
    14px
    18px;

  border:
    1px solid rgba(70, 68, 66, 0.15);

  font-size: 0.78rem;
  line-height: 1.5;
}

/* TABLET */

@media (max-width: 950px) {
  .contact__inner {
    grid-template-columns: 1fr;
  }

  .contact__info {
    max-width: 760px;
  }
}

/* MÓVIL */

@media (max-width: 640px) {
  .contact {
    padding:
      85px
      20px;
  }

  .contact__inner {
    gap: 60px;
  }

  .contact__info h2 {
    font-size:
      clamp(2.9rem, 13vw, 4.2rem);
  }

  .contact__intro {
    margin-bottom: 45px;
  }

  .contact-detail {
    grid-template-columns: 1fr;

    gap: 8px;
  }

  .contact__form-wrapper {
    padding:
      30px
      22px;
  }

  .contact-form__row {
    grid-template-columns: 1fr;
  }
  .contact-form__captcha {
  display: grid;

  gap: 14px;

  padding-top: 5px;
}

.contact-form__captcha-text {
  margin: 0;

  font-size: 0.78rem;

  line-height: 1.5;

  color:
    rgba(70, 68, 66, 0.75);
}

.contact-form__error {
  margin: -5px 0 0;

  font-size: 0.76rem;

  line-height: 1.5;

  color: #7a3f3f;
}

.g-recaptcha {
  max-width: 100%;
  overflow: hidden;
}

@media (max-width: 380px) {
  .g-recaptcha {
    transform: scale(0.88);
    transform-origin: left top;

    margin-bottom: -8px;
  }
}
}
</style>