<template>
  <section
    id="contacto"
    class="contact"
  >
    <div class="contact__inner">
      <!-- =====================
           CABECERA
      ====================== -->

      <div class="contact__header">
        <p class="contact__eyebrow">
          Contacto
        </p>

        <h2>
          Estamos aquí
          <span>para ayudarte.</span>
        </h2>
      </div>

      <!-- =====================
           CONTENIDO
      ====================== -->

      <div class="contact__content">
        <!-- INFO -->

        <div class="contact__info">
          <p class="contact__intro">
            Contáctanos para una consulta
            personalizada.
          </p>

          <p class="contact__appointment">
            Atendemos bajo cita previa.
          </p>

          <div class="contact__details">
            <div class="contact__detail">
              <span class="contact__label">
                Teléfono
              </span>

              <a href="tel:+34638812473">
                638 812 473
              </a>
            </div>

            <div class="contact__detail">
              <span class="contact__label">
                Email
              </span>

              <a href="mailto:consultabrune@gmail.com">
                consultabrune@gmail.com
              </a>
            </div>

            <div class="contact__detail">
              <span class="contact__label">
                Despacho
              </span>

              <address>
                Avda. Gran Vía de San Marcos,
                N.º 42, 1ºB<br>
                24002 León
              </address>
            </div>
          </div>

          <!-- MAPA -->
          
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

        <!-- FORMULARIO -->

        <div class="contact__form-wrapper">
          <p class="contact__form-heading">
            Cuéntanos brevemente
            <em>cómo podemos ayudarte.</em>
          </p>

          <form
            class="contact__form"
            @submit.prevent="sendForm"
          >
            <div class="contact__field">
              <label for="name">
                Nombre
              </label>

              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                required
                placeholder="Tu nombre"
              >
            </div>

            <div class="contact__field">
              <label for="email">
                Email
              </label>

              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                required
                placeholder="tu@email.com"
              >
            </div>

            <div class="contact__field">
              <label for="subject">
                Asunto
              </label>

              <input
                id="subject"
                v-model="form.subject"
                type="text"
                name="subject"
                required
                placeholder="Motivo de la consulta"
              >
            </div>

            <div class="contact__field">
              <label for="message">
                Mensaje
              </label>

              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="5"
                required
                placeholder="Escribe tu consulta"
              />
            </div>

            <!-- PRIVACIDAD -->

            <label class="contact__privacy">
              <input
                v-model="form.privacy"
                type="checkbox"
                required
              >

              <span>
                He leído y acepto la

                <NuxtLink to="/politica-privacidad">
                  Política de Privacidad
                </NuxtLink>.
              </span>
            </label>


           <button
              type="submit"
              class="contact__submit"
              :disabled="isSending"
            >
              <span>
                {{ isSending
                  ? 'Enviando...'
                  : 'Enviar consulta'
                }}
              </span>
              <span
               v-if="!isSending"
                class="link-arrow"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15L15 5M8 5H15V12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                  />
                </svg>
              </span>
            
            </button>
            <p
              v-if="submitStatus === 'success'"
              class="contact__status contact__status--success"
            >
              Gracias. Tu consulta se ha enviado correctamente.
            </p>

            <p
              v-if="submitStatus === 'error'"
              class="contact__status contact__status--error"
            >
              No hemos podido enviar tu consulta.
              Por favor, inténtalo de nuevo.
            </p>
          </form>

          <p class="contact__notice">
            La información enviada a través de este
            formulario será utilizada únicamente para
            atender tu consulta.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  reactive,
  ref
} from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

const isSending = ref(false)

const submitStatus = ref<
  'idle' | 'success' | 'error'
>('idle')

const sendForm = async () => {
  if (isSending.value) {
    return
  }

  isSending.value = true
  submitStatus.value = 'idle'

  try {
    await $fetch('/api/contacto', {
      method: 'POST',

      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      }
    })

    submitStatus.value = 'success'

    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    form.privacy = false
  }
  catch (error) {
    console.error(error)

    submitStatus.value = 'error'
  }
  finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.contact {
  position: relative;

  padding:
    50px
    var(--page-padding);

  background:
    #fbfaf8;
}
.link-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 13px;
  height: 13px;

  flex-shrink: 0;
}

.link-arrow svg {
  display: block;

  width: 100%;
  height: 100%;
}

.contact__inner {
  width:
    min(
      100%,
      var(--container-width)
    );

  margin: 0 auto;
}

/* =========================
   HEADER
========================= */

.contact__header {
  display: grid;

  grid-template-columns:
    minmax(130px, 0.35fr)
    minmax(0, 1.65fr);

  gap:
    clamp(
      35px,
      6vw,
      100px
    );

  margin-bottom:
    clamp(
      38px,
      5vw,
      68px
    );
}

.contact__eyebrow {
  margin:
    12px
    0
    0;

  font-size: 0.62rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact__header h2 {
  max-width: 900px;

  margin: 0;

  font-size:
    clamp(
      3.1rem,
      5vw,
      4rem
    );

  line-height: 0.91;

  letter-spacing: -0.055em;

  color:
    var(--color-text-dark);
}

.contact__header h2 span {
  display: block;

  font-style: italic;

  color:
    var(--color-accent-dark);
}

/* =========================
   CONTENT
========================= */

.contact__content {
  display: grid;

  grid-template-columns:
    minmax(300px, 0.75fr)
    minmax(400px, 1fr);

  gap:
    clamp(
      45px,
      6vw,
      90px
    );

  align-items: start;
}

/* =========================
   INFO
========================= */

.contact__intro {
  max-width: 480px;

  margin:
    0
    0
    14px;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.65rem,
      2.4vw,
      2.6rem
    );

  line-height: 1.12;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}

.contact__appointment {
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 12px;

  width: fit-content;

  margin:
    8px
    0
    32px;

  padding:
    11px
    17px;

  background:
    var(--color-beige-light);

  border:
    1px solid
    rgba(132, 118, 107, 0.18);

  font-size: 0.68rem;
  font-weight: 600;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color:
    var(--color-text-dark);
}

.contact__appointment::before {
  content: '';

  width: 7px;
  height: 7px;

  flex: 0 0 7px;

  border-radius: 50%;

  background:
    var(--color-accent-dark);
}
/* =========================
   IMAGEN
========================= */

.contact__image {
  position: relative;

  width: 100%;
  height:
    clamp(
      300px,
      34vw,
      440px
    );

  margin-top: 42px;

  overflow: hidden;
}

.contact__image img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  filter:
    saturate(0.78)
    contrast(0.94)
    brightness(1.03);

  transform: scale(1.01);

  transition:
    transform 1.1s var(--ease-out),
    filter 0.7s ease;
}

.contact__image:hover img {
  transform: scale(1.045);

  filter:
    saturate(0.88)
    contrast(0.96)
    brightness(1.02);
}

.contact__details {
  border-top:
    1px solid
    rgba(72, 63, 56, 0.12);
}

.contact__detail {
  display: grid;

  grid-template-columns:
    105px
    minmax(0, 1fr);

  gap: 25px;

  padding:
    16px
    0;

  border-bottom:
    1px solid
    rgba(72, 63, 56, 0.12);
}

.contact__label {
  padding-top: 3px;

  font-size: 0.59rem;

  font-weight: 500;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact__detail a,
.contact__detail address {
  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1rem,
      1.4vw,
      1.25rem
    );

  line-height: 1.5;

  font-style: normal;

  color:
    var(--color-text-dark);
}

.contact__detail a {
  transition:
    color 0.25s ease;
}

.contact__detail a:hover {
  color:
    var(--color-accent-dark);
}

/* =========================
   MAPA
========================= */

.contact__map {
  width: 100%;
  height: 240px;

  margin-top: 14px;

  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  background:
    var(--color-surface-muted);
}

.contact__map iframe {
  display: block;

  width: 100%;
  height: 100%;

  filter:
    grayscale(0.35)
    contrast(0.94)
    sepia(0.12);
}

/* =========================
   FORM HEADER
========================= */
.contact__form-wrapper {
  padding:
    clamp(
      28px,
      3.5vw,
      46px
    );

  background:
    #ffffff;

  border:
    1px solid
    rgba(100, 92, 85, 0.12);

  box-shadow:
    0 18px 50px
    rgba(66, 57, 50, 0.04);
}

.contact__form-heading {
  max-width: 520px;

  margin:
    0
    0
    34px;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.85rem,
      2.8vw,
      3rem
    );

  line-height: 1.05;

  letter-spacing: -0.035em;

  color:
    var(--color-text-dark);
}

.contact__form-heading em {
  display: block;

  font-weight: 400;

  color:
    var(--color-accent-dark);
}

/* =========================
   FORM
========================= */

.contact__form {
  display: grid;

  gap: 20px;
}

.contact__field {
  display: grid;

  gap: 8px;
}

.contact__field label {
  font-size: 0.59rem;

  font-weight: 500;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.contact__field input,
.contact__field textarea {
  width: 100%;

  padding:
    12px
    0
    15px;

  border: 0;

  border-bottom:
    1px solid
    rgba(75, 70, 66, 0.22);

  border-radius: 0;

  outline: none;

  background: transparent;

  font: inherit;

  font-size: 0.98rem;

  color:
    var(--color-text-dark);

  transition:
    border-color
    0.25s ease;
}

.contact__field textarea {
  min-height: 52px;

  resize: vertical;
}
.contact__whatsapp-note {
  margin: 14px 0 0;

  font-size: 0.72rem;
  line-height: 1.6;

  color: var(--color-text);

  opacity: 0.7;
}
.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color:
    rgba(70, 66, 62, 0.35);
}

.contact__field input:focus,
.contact__field textarea:focus {
  border-color:
    var(--color-text-dark);
}

/* =========================
   PRIVACY
========================= */

.contact__privacy {
  display: grid;

  grid-template-columns:
    18px
    minmax(0, 1fr);

  gap: 12px;

  align-items: start;

  cursor: pointer;
}

.contact__privacy input {
  width: 15px;
  height: 15px;

  margin-top: 4px;

  accent-color:
    var(--color-dark);
}

.contact__privacy span {
  font-size: 0.75rem;

  line-height: 1.6;

  color:
    rgba(60, 57, 54, 0.65);
}

.contact__privacy a {
  text-decoration: underline;

  text-underline-offset: 3px;

  color:
    var(--color-text-dark);
}



.contact__error {
  margin:
    12px
    0
    0;

  font-size: 0.74rem;

  color: #8b3d38;
}

/* =========================
   SUBMIT
========================= */

.contact__submit {
  width: 100%;

  min-height: 58px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  padding:
    0
    24px;

  border:
    1px solid var(--color-dark);

  background:
    var(--color-dark);

  color:
    var(--color-white);

  font-size: 0.64rem;

  font-weight: 500;

  letter-spacing: 0.11em;

  text-transform: uppercase;

  cursor: pointer;

  transition:
    background 0.35s ease,
    color 0.35s ease;
}

.contact__submit
span:last-child {
  font-size: 1rem;

  transition:
    transform
    0.35s
    var(--ease-out);
}

.contact__submit:hover {
  background: transparent;

  color:
    var(--color-dark);
}

.contact__submit:hover
span:last-child {
  transform:
    translate(5px, -5px);
}

.contact__notice {
  margin:
    25px
    0
    0;

  font-size: 0.68rem;

  line-height: 1.6;

  color:
    rgba(60, 57, 54, 0.48);
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .contact__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .contact__eyebrow {
    margin: 0;
  }

  .contact__content {
    grid-template-columns: 1fr;

    gap: 75px;
  }

  .contact__info {
    display: grid;

    grid-template-columns:
      minmax(0, 0.8fr)
      minmax(300px, 1fr);

    column-gap: 55px;
  }

  .contact__intro,
  .contact__appointment {
    grid-column: 1;
  }

  .contact__details {
    grid-column: 1;
  }

  .contact__map {
    grid-column: 2;

    grid-row:
      1 / span 3;

    height: 100%;

    min-height: 380px;

    margin-top: 0;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 680px) {
  .contact {
    padding:
      72px
      20px;
  }

  .contact__header {
    margin-bottom: 38px;
  }

  .contact__header h2 {
    font-size:
      clamp(
        3.1rem,
        15vw,
        4.6rem
      );
  }

  .contact__info {
    display: block;
  }

  .contact__appointment {
    margin-bottom: 28px;
  }

  .contact__detail {
    grid-template-columns: 1fr;

    gap: 8px;
  }

  .contact__map {
    width: 100%;
    height: 240px;

    margin-top: 14px;

    overflow: hidden;

    border:
      1px solid
      rgba(100, 92, 85, 0.12);

    background:
      #ffffff;
  }
  .contact__form-wrapper {
    padding:
      30px
      22px;
  }

  .contact__form-heading {
    margin-bottom: 30px;
  }
   .contact__form {
    gap: 18px;
  }

}
</style>