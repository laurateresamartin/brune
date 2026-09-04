<template>
  <section
    id="familia"
    class="family"
  >
    <div class="family__inner">
      <div class="family__header">
        <p class="family__eyebrow">
          Derecho de Familia y Menores
        </p>

        <div class="family__heading">
          <h2>
            La familia cambia.
            <span>
              El acompañamiento permanece.
            </span>
          </h2>

          <p>
            La separación no es el final de una familia,
            es su transformación. La redefinimos contigo
            con respeto, equilibrio y seguridad jurídica.
          </p>
        </div>
      </div>

      <div class="family__grid">
        <article
          v-for="area in areas"
          :key="area.id"
          class="family-card"
          :class="{
            'family-card--active':
              activeCard === area.id
          }"
          tabindex="0"
          role="button"
          :aria-expanded="activeCard === area.id"
          @click="toggleCard(area.id)"
          @keydown.enter.prevent="toggleCard(area.id)"
          @keydown.space.prevent="toggleCard(area.id)"
          @mouseenter="activateDesktop(area.id)"
          @mouseleave="deactivateDesktop"
        >
          <div class="family-card__top">
           <span class="family-card__label">
  {{ area.short }}
</span>

            <span
              class="family-card__plus"
              aria-hidden="true"
            >
              +
            </span>
          </div>

          <div class="family-card__content">
            <h3>
              {{ area.title }}
            </h3>

            <div class="family-card__details">
              <ul>
                <li
                  v-for="item in area.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>

              <a
                href="#contacto"
                @click.stop
              >
                <span>
                  Consultar
                </span>

                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          
        </article>
      </div>

      <div class="family__footer">
        <p>
          Cada procedimiento requiere una valoración
          jurídica específica y adaptada a la realidad
          de cada familia.
        </p>

        <NuxtLink to="/#contacto">
          <span>
            Solicita una consulta
          </span>

          <span aria-hidden="true">
            ↗
          </span>
        </ NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCard =
  ref<string | null>(null)

const areas = [
  {
    id: 'matrimonios',
    short: '01',

    title:
      'Matrimonios y Uniones de Hecho',

    items: [
      'Divorcios, Separaciones y Nulidades',
      'Mutuo Acuerdo y Contencioso',
      'Capitulaciones Matrimoniales',
      'Regímenes Económicos Matrimoniales'
    ]
  },
  {
    id: 'medidas',
    short: '02',

    title:
      'Medidas de Familia',

    items: [
      'Patria Potestad y Custodia',
      'Alimentos y Visitas',
      'Convenios Reguladores',
      'Modificación de Medidas',
      'Incumplimiento de Sentencias',
      'Filiación y Adopción',
      'Jurisdicción Voluntaria',
      'Medidas de Apoyo',
    ]
  },
  {
    id: 'menores',
    short: '03',

    title:
      'Menores',

    items: [
      'Procesos de Oposición a Resoluciones Administrativas en Materia de Protección de Menores'
    ]
  },
  {
    id: 'internacional',
    short: '04',

    title:
      'Derecho Internacional',

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

const activateDesktop = (id: string) => {
  if (
    window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches
  ) {
    activeCard.value = id
  }
}

const deactivateDesktop = () => {
  if (
    window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches
  ) {
    activeCard.value = null
  }
}
</script>

<style scoped>
.family {
  position: relative;

  padding:
    var(--section-space)
    var(--page-padding);

  background:
    white;
}

.family__inner {
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

.family__header {
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
      70px,
      8vw,
      120px
    );
}

.family__eyebrow {
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

.family__heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(250px, 0.55fr);

  gap:
    clamp(
      40px,
      7vw,
      110px
    );

  align-items: end;
}

.family__heading h2 {
  margin: 0;

  font-size:
    clamp(
      3.5rem,
      5.8vw,
      6.8rem
    );

  line-height: 0.93;

  letter-spacing: -0.05em;

  color:
    var(--color-text-dark);
}

.family__heading h2 span {
  display: block;

  color:
    var(--color-accent-dark);

  font-style: italic;
}

.family__heading > p {
  margin: 0;

  padding-bottom: 8px;

  font-size: 0.96rem;

  line-height: 1.8;

  color:
    rgba(65, 62, 59, 0.68);
}

/* =========================
   GRID
========================= */
.family__grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(
      28px,
      4vw,
      56px
    );

  background: transparent;

  border: none;
}
/* =========================
   CARD
========================= */

.family-card {
  position: relative;

  min-height: clamp(260px, 23vw, 330px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: clamp(30px, 3.2vw, 44px);

  overflow: hidden;

  background: #f5f4f3;

  border: 1px solid rgba(111, 97, 85, 0.14);

  border-radius: 2px;

  cursor: pointer;
  outline: none;
  isolation: isolate;

  transition:
    min-height 0.65s var(--ease-out),
    transform 0.5s var(--ease-out),
    box-shadow 0.5s ease,
    border-color 0.4s ease;
}


.family-card::before {
  content: '';

  position: absolute;

  inset: 0;

  z-index: -1;

  background:
    linear-gradient(
      145deg,
      #eee6de,
      #e9e0d7
    );

  opacity: 0;

  transform:
    scale(0.88);

  transform-origin:
    center center;

  transition:
    transform
    0.65s
    var(--ease-out),

    opacity
    0.35s ease;
}

.family-card::before {
  content: '';

  position: absolute;
  inset: 0;

  z-index: -1;

  background:
    linear-gradient(
      145deg,
      #e2e2e0 0%,
      #eee7df 100%
    );

  opacity: 0;

  transform:
    scale(0.94);

  transform-origin:
    center center;

  transition:
    opacity 0.4s ease,
    transform 0.65s var(--ease-out);
}

.family-card:hover::before,
.family-card:focus-visible::before,
.family-card--active::before {
  opacity: 1;

  transform:
    scale(1);
}
/* =========================
   TOP
========================= */

.family-card__top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;
}

.family-card__plus {
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(90, 85, 80, 0.2);
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 300;

  color: var(--color-text-dark);

  background: rgba(255, 255, 255, 0.25);

  transition:
    transform 0.45s var(--ease-out),
    background 0.35s ease,
    border-color 0.35s ease;
}

.family-card:hover .family-card__plus,
.family-card:focus-visible .family-card__plus,
.family-card--active .family-card__plus {
  transform: rotate(45deg);
  background: rgba(255, 255, 255, 0.48);
  border-color: rgba(116, 103, 93, 0.3);
}


/* =========================
   CONTENT
========================= */

.family-card__content {
  position: relative;
  z-index: 2;

  margin-top: auto;

  padding-top:
    clamp(
      38px,
      5vw,
      70px
    );
}
.family-card h3 {
  max-width: 440px;

  margin: 0 0 24px;

  font-size:
    clamp(
      2.5rem,
      3.5vw,
      4rem
    );

  line-height: 0.97;

  letter-spacing: -0.04em;

  color: var(--color-text-dark);

  transition:
    transform 0.5s var(--ease-out),
    color 0.35s ease;
}

.family-card:hover h3,
.family-card:focus-visible h3,
.family-card--active h3 {
  transform: translateY(-5px);
}

/* =========================
   DETAILS
========================= */

.family-card__details {
  max-height: 0;

  overflow: hidden;

  opacity: 0;

  transform:
    translateY(18px);

  transition:
    max-height
    0.62s
    var(--ease-out),

    opacity
    0.4s ease,

    transform
    0.55s
    var(--ease-out);
}

.family-card:hover
.family-card__details,
.family-card:focus-visible
.family-card__details,
.family-card--active
.family-card__details {
  max-height: 420px;

  opacity: 1;

  transform:
    translateY(0);
}

.family-card__details ul {
  margin:
    0
    0
    30px;

  padding: 0;

  list-style: none;
}

.family-card__details li {
  position: relative;

  padding:
    9px
    0
    9px
    19px;

  border-bottom:
    1px solid
    rgba(90, 84, 78, 0.13);

  font-size: 0.9rem;

  line-height: 1.5;

  color:
    rgba(60, 57, 54, 0.75);
}

.family-card__details li::before {
  content: '';

  position: absolute;

  top: 18px;
  left: 0;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    var(--color-accent-dark);
}

.family-card__details a {
  display: inline-flex;

  align-items: center;

  gap: 15px;

  padding-bottom: 6px;

  border-bottom:
    1px solid
    var(--color-text-dark);

  font-size: 0.62rem;

  font-weight: 500;

  letter-spacing: 0.11em;

  text-transform: uppercase;

  color:
    var(--color-text-dark);
}


/* =========================
   FOOTER
========================= */

.family__footer {
  margin-top:
    clamp(
      60px,
      8vw,
      105px
    );

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 45px;
}

.family__footer p {
  max-width: 620px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.45rem,
      2.4vw,
      2.5rem
    );

  line-height: 1.17;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}
.family-card__label {
  font-family:
    var(--font-serif);

  font-size: 1.05rem;

  font-style: italic;

  color:
    var(--color-accent-dark);

  opacity: 0.7;
}

.family__footer > a {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 20px;

  padding-bottom: 7px;

  border-bottom:
    1px solid var(--color-text-dark);

  font-size: 0.65rem;

  font-weight: 500;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  color:
    var(--color-text-dark);
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .family__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .family__eyebrow {
    margin: 0;
  }

  .family__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .family__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .family-card {
    min-height: 410px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 720px) {
  .family {
    padding:
      95px
      20px;
  }

  .family__header {
    margin-bottom: 58px;
  }

  .family__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .family__grid {
    grid-template-columns: 1fr;
  }

  .family-card {
  min-height: 245px;

  padding:
    26px
    22px;
}

.family-card:hover,
.family-card:focus-visible,
.family-card--active {
  min-height: 410px;
  transform: none;
}

.family-card__content {
  padding-top: 42px;
}

.family-card h3 {
  font-size:
    clamp(
      2.25rem,
      10vw,
      3.15rem
    );
}

  .family-card__index {
    font-size: 7rem;
  }

  .family__footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 35px;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .family-card::before,
  .family-card__plus,
  .family-card h3,
  .family-card__details,
  .family-card__index {
    transition: none;
  }
}
</style>