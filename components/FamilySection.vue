<template>
  <section
    id="familia"
    class="family"
  >
    <div class="family__inner">

      <!-- Cabecera -->
      <header class="family__header">
        <div class="family__header-left">
          <p class="family__eyebrow">
            Derecho de Familia y Menores
          </p>

          <h2 class="family__title">
            La familia cambia.
            <span>El acompañamiento permanece.</span>
          </h2>
        </div>

        <div class="family__header-right">
          <p>
            La separación no es el final de una familia,
            es su transformación.
          </p>

          <p>
            La redefinimos contigo con respeto,
            equilibrio y seguridad jurídica.
          </p>
        </div>
      </header>

      <!-- Servicios -->
      <div class="family__services">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="family-card"
          :class="{
            'family-card--active': activeCard === service.id
          }"
          tabindex="0"
          :aria-expanded="activeCard === service.id"
          @click="toggleCard(service.id)"
          @keydown.enter.prevent="toggleCard(service.id)"
          @keydown.space.prevent="toggleCard(service.id)"
        >
          <!-- Número -->
          <div class="family-card__number">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Contenido principal -->
          <div class="family-card__main">
            <h3>
              {{ service.title }}
            </h3>

            <span
              class="family-card__indicator"
              aria-hidden="true"
            >
              +
            </span>
          </div>

          <!-- Información desplegable -->
          <div class="family-card__details">
            <div class="family-card__details-inner">
              <p class="family-card__label">
                Servicios
              </p>

              <ul>
                <li
                  v-for="item in service.items"
                  :key="item"
                >
                  <span>{{ item }}</span>
                  <span aria-hidden="true">↗</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Decoración -->
          <span
            class="family-card__decoration"
            aria-hidden="true"
          />
        </article>
      </div>

      <!-- CTA -->
      <div class="family__footer">
        <p>
          ¿Necesitas asesoramiento en Derecho de Familia?
        </p>

        <a
          href="#contacto"
          class="family__cta"
        >
          Cuéntanos tu caso
          <span aria-hidden="true">↗</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCard = ref<string | null>(null)

const services = [
  {
    id: 'matrimonios',
    title: 'Matrimonios y Uniones de Hecho',
    items: [
      'Divorcios, Separaciones y Nulidades',
      'Mutuo Acuerdo y Contencioso',
      'Capitulaciones Matrimoniales',
      'Regímenes Económicos Matrimoniales'
    ]
  },
  {
    id: 'medidas',
    title: 'Medidas de Familia',
    items: [
      'Patria Potestad y Custodia',
      'Alimentos y Visitas',
      'Convenios Reguladores',
      'Modificación de Medidas',
      'Incumplimiento de Sentencias'
    ]
  },
  {
    id: 'menores',
    title: 'Menores',
    items: [
      'Filiación y Adopción',
      'Jurisdicción Voluntaria',
      'Medidas de Apoyo',
      'Procesos de Oposición a Resoluciones Administrativas en Materia de Protección de Menores'
    ]
  },
  {
    id: 'internacional',
    title: 'Derecho Internacional',
    items: [
      'Sustracción Internacional de Menores',
      'Matrimonios Mixtos'
    ]
  }
]

const toggleCard = (id: string) => {
  activeCard.value =
    activeCard.value === id
      ? null
      : id
}
</script>

<style scoped>
.family {
  padding:
    clamp(100px, 11vw, 170px)
    clamp(20px, 4vw, 64px);

  background: var(--color-background);
}

.family__inner {
  width: min(100%, var(--container-width));
  margin: 0 auto;
}

/* =========================
   HEADER
========================= */

.family__header {
  display: grid;
  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(280px, 0.6fr);

  gap: clamp(50px, 8vw, 120px);

  align-items: end;

  margin-bottom:
    clamp(70px, 9vw, 120px);
}

.family__eyebrow {
  margin-bottom: 22px;

  font-size: 0.72rem;
  font-weight: 500;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

.family__title {
  max-width: 850px;

  margin: 0;

  font-size:
    clamp(
      3rem,
      6vw,
      6.4rem
    );

  line-height: 0.92;
  letter-spacing: -0.045em;
}

.family__title span {
  display: block;

  color: var(--color-accent);
}

.family__header-right {
  padding-bottom: 8px;
}

.family__header-right p {
  margin: 0;

  font-size:
    clamp(
      1rem,
      1.3vw,
      1.1rem
    );

  line-height: 1.75;

  color: rgba(85, 84, 83, 0.8);
}

.family__header-right p + p {
  margin-top: 12px;
}

/* =========================
   GRID
========================= */

.family__services {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  border-top:
    1px solid var(--color-border);

  border-left:
    1px solid var(--color-border);
}

/* =========================
   CARD
========================= */

.family-card {
  position: relative;

  min-height: 500px;

  display: flex;
  flex-direction: column;

  padding:
    clamp(28px, 4vw, 48px);

  overflow: hidden;

  border-right:
    1px solid var(--color-border);

  border-bottom:
    1px solid var(--color-border);

  cursor: pointer;

  outline: none;

  transition:
    background 0.5s ease,
    color 0.5s ease;
}

/* Fondo hover */

.family-card::before {
  content: '';

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      145deg,
      #b6ada4 0%,
      #978d83 100%
    );

  opacity: 0;

  transition:
    opacity 0.5s ease;
}

.family-card:hover::before,
.family-card:focus-visible::before,
.family-card--active::before {
  opacity: 1;
}

/* =========================
   NÚMERO
========================= */

.family-card__number {
  position: relative;
  z-index: 2;

  font-family: var(--font-serif);

  font-size: 0.8rem;

  color: var(--color-accent-dark);

  transition:
    color 0.45s ease;
}

.family-card:hover
.family-card__number,
.family-card:focus-visible
.family-card__number,
.family-card--active
.family-card__number {
  color:
    rgba(255, 255, 255, 0.7);
}

/* =========================
   TÍTULO
========================= */

.family-card__main {
  position: relative;
  z-index: 2;

  margin-top: auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  transition:
    transform 0.5s ease;
}

.family-card__main h3 {
  max-width: 480px;

  margin: 0;

  font-size:
    clamp(
      2.7rem,
      4.3vw,
      4.8rem
    );

  line-height: 0.96;
  letter-spacing: -0.04em;

  transition:
    color 0.45s ease;
}

.family-card:hover
.family-card__main h3,
.family-card:focus-visible
.family-card__main h3,
.family-card--active
.family-card__main h3 {
  color: #ffffff;
}

.family-card__indicator {
  flex-shrink: 0;

  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border:
    1px solid var(--color-border);

  border-radius: 50%;

  font-size: 1.2rem;

  transition:
    transform 0.45s ease,
    color 0.45s ease,
    border-color 0.45s ease;
}

.family-card:hover
.family-card__indicator,
.family-card:focus-visible
.family-card__indicator,
.family-card--active
.family-card__indicator {
  color: white;

  border-color:
    rgba(255, 255, 255, 0.5);

  transform: rotate(45deg);
}

/* =========================
   DETALLES
========================= */

.family-card__details {
  position: relative;
  z-index: 2;

  max-height: 0;

  overflow: hidden;

  opacity: 0;

  transform:
    translateY(24px);

  transition:
    max-height 0.65s ease,
    opacity 0.4s ease,
    transform 0.5s ease,
    margin-top 0.5s ease;
}

.family-card:hover
.family-card__details,
.family-card:focus-visible
.family-card__details,
.family-card--active
.family-card__details {
  max-height: 420px;

  margin-top: 36px;

  opacity: 1;

  transform:
    translateY(0);
}

.family-card__details-inner {
  padding-top: 24px;

  border-top:
    1px solid rgba(255, 255, 255, 0.3);
}

.family-card__label {
  margin-bottom: 18px;

  font-size: 0.62rem;

  letter-spacing: 0.18em;
  text-transform: uppercase;

  color:
    rgba(255, 255, 255, 0.62);
}

.family-card__details ul {
  margin: 0;
  padding: 0;

  list-style: none;
}

.family-card__details li {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding:
    10px 0;

  border-bottom:
    1px solid rgba(255, 255, 255, 0.13);

  font-size:
    clamp(
      0.88rem,
      1.1vw,
      1rem
    );

  color:
    rgba(255, 255, 255, 0.9);
}

.family-card__details li:last-child {
  border-bottom: 0;
}

.family-card__details li span:last-child {
  opacity: 0.45;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.family-card__details li:hover
span:last-child {
  opacity: 1;

  transform:
    translate(3px, -3px);
}

/* =========================
   DECORACIÓN
========================= */

.family-card__decoration {
  position: absolute;

  top: -90px;
  right: -90px;

  z-index: 1;

  width: 250px;
  height: 250px;

  border:
    1px solid rgba(255, 255, 255, 0.16);

  border-radius: 50%;

  opacity: 0;

  transform:
    scale(0.7);

  transition:
    opacity 0.5s ease,
    transform 0.7s ease;
}

.family-card:hover
.family-card__decoration,
.family-card:focus-visible
.family-card__decoration,
.family-card--active
.family-card__decoration {
  opacity: 1;

  transform:
    scale(1);
}

/* =========================
   FOOTER
========================= */

.family__footer {
  margin-top:
    clamp(
      50px,
      6vw,
      80px
    );

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.family__footer p {
  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.4rem,
      2vw,
      2rem
    );
}

.family__cta {
  flex-shrink: 0;

  display: inline-flex;
  align-items: center;

  gap: 12px;

  padding-bottom: 6px;

  border-bottom:
    1px solid var(--color-text-dark);

  font-size: 0.72rem;

  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.family__cta span {
  transition:
    transform 0.25s ease;
}

.family__cta:hover span {
  transform:
    translate(3px, -3px);
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .family__header {
    grid-template-columns: 1fr;

    gap: 34px;
  }

  .family__header-right {
    max-width: 620px;
  }

  .family-card {
    min-height: 440px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 700px) {
  .family {
    padding:
      85px
      20px;
  }

  .family__header {
    margin-bottom: 55px;
  }

  .family__title {
    font-size:
      clamp(
        2.7rem,
        12vw,
        4rem
      );

    line-height: 0.98;
  }

  .family__services {
    grid-template-columns: 1fr;
  }

  .family-card {
    min-height: 360px;

    padding:
      26px
      22px;
  }

  .family-card__main h3 {
    font-size:
      clamp(
        2.5rem,
        11vw,
        3.6rem
      );
  }

  .family-card__indicator {
    width: 38px;
    height: 38px;
  }

  .family__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* =========================
   DISPOSITIVOS TÁCTILES
========================= */

@media (hover: none) {

  .family-card:hover::before {
    opacity: 0;
  }

  .family-card:hover
  .family-card__details {
    max-height: 0;

    margin-top: 0;

    opacity: 0;

    transform:
      translateY(24px);
  }

  .family-card:hover
  .family-card__main h3 {
    color:
      var(--color-text-dark);
  }

  .family-card--active::before {
    opacity: 1;
  }

  .family-card--active
  .family-card__main h3 {
    color: white;
  }

  .family-card--active
  .family-card__details {
    max-height: 500px;

    margin-top: 32px;

    opacity: 1;

    transform:
      translateY(0);
  }
}

/* =========================
   ACCESIBILIDAD
========================= */

@media (prefers-reduced-motion: reduce) {

  .family-card,
  .family-card::before,
  .family-card__main,
  .family-card__indicator,
  .family-card__details,
  .family-card__decoration {
    transition: none;
  }
}
</style>