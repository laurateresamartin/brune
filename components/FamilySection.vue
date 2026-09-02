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
              Área de actuación
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

          <span
            class="family-card__index"
            aria-hidden="true"
          >
            {{ area.short }}
          </span>
        </article>
      </div>

      <div class="family__footer">
        <p>
          Cada procedimiento requiere una valoración
          jurídica específica y adaptada a la realidad
          de cada familia.
        </p>

        <a href="#contacto">
          <span>
            Solicita una consulta
          </span>

          <span aria-hidden="true">
            ↗
          </span>
        </a>
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
      'Incumplimiento de Sentencias'
    ]
  },
  {
    id: 'menores',
    short: '03',

    title:
      'Menores',

    items: [
      'Filiación y Adopción',
      'Jurisdicción Voluntaria',
      'Medidas de Apoyo',
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
    var(--color-surface-warm);
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

  gap: 1px;

  background:
    var(--color-border);

  border:
    1px solid var(--color-border);
}

/* =========================
   CARD
========================= */

.family-card {
  position: relative;

  min-height:
    clamp(
      430px,
      34vw,
      560px
    );

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding:
    clamp(
      30px,
      3.8vw,
      52px
    );

  overflow: hidden;

  background:
    rgba(
      255,
      255,
      255,
      0.42
    );

  border-color:
    rgba(
      111,
      97,
      85,
      0.14
    );

  cursor: pointer;

  outline: none;

  isolation: isolate;
}

.family-card::before {
  content: '';

  position: absolute;

  inset: 0;

  z-index: -1;

  background:
    linear-gradient(
      145deg,
      var(--color-background-soft),
      #ddd5cd
    );

  transform:
    scaleY(0);

  transform-origin:
    bottom center;

  transition:
    transform
    0.58s
    var(--ease-out);
}

.family-card:hover::before,
.family-card:focus-visible::before,
.family-card--active::before {
  transform:
    scaleY(1);
    background:
    var(--color-surface-beige);
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

.family-card__label {
  font-size: 0.58rem;

  font-weight: 500;

  letter-spacing: 0.15em;

  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.family-card__plus {
  width: 38px;

  height: 38px;

  display: grid;

  place-items: center;

  border:
    1px solid
    rgba(90, 85, 80, 0.22);

  border-radius: 50%;

  font-family:
    var(--font-sans);

  font-size: 1.1rem;

  font-weight: 300;

  color:
    var(--color-text-dark);
     border-color:
    rgba(
      116,
      103,
      93,
      0.3
    );

  background:
    rgba(
      255,
      255,
      255,
      0.3
    );

  transition:
    transform
    0.45s
    var(--ease-out),

    background
    0.35s ease;
}

.family-card:hover
.family-card__plus,
.family-card--active
.family-card__plus {
  transform:
    rotate(45deg);

  background:
    rgba(255, 255, 255, 0.4);
}

/* =========================
   CONTENT
========================= */

.family-card__content {
  margin-top: auto;

  padding-top:
    clamp(
      65px,
      8vw,
      130px
    );
}

.family-card h3 {
  max-width: 470px;

  margin:
    0
    0
    30px;

  font-size:
    clamp(
      2.8rem,
      4.1vw,
      4.8rem
    );

  line-height: 0.95;

  letter-spacing: -0.045em;

  color:
    var(--color-text-dark);

  transition:
    transform
    0.5s
    var(--ease-out);
}

.family-card:hover h3,
.family-card--active h3 {
  transform:
    translateY(-8px);
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
   INDEX
========================= */

.family-card__index {
  position: absolute;

  right:
    clamp(
      20px,
      3vw,
      42px
    );

  bottom:
    clamp(
      18px,
      3vw,
      35px
    );

  z-index: -1;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      6rem,
      11vw,
      10rem
    );

  line-height: 0.7;

  color:
    rgba(120, 110, 100, 0.06);

  pointer-events: none;

  transition:
    transform
    0.5s
    var(--ease-out),

    opacity
    0.5s ease;
}

.family-card:hover
.family-card__index,
.family-card--active
.family-card__index {
  transform:
    translateY(10px);

  opacity: 0.45;
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
    min-height: 360px;

    padding:
      28px
      24px;
  }

  .family-card__content {
    padding-top: 65px;
  }

  .family-card h3 {
    font-size:
      clamp(
        2.4rem,
        11vw,
        3.5rem
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