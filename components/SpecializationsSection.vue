<template>
  <section
    id="especializacion"
    ref="sectionRef"
    class="specializations"
  >
    <div class="specializations__inner">
      <!-- CABECERA -->

      <div class="specializations__header">
        <p class="specializations__eyebrow">
          Áreas de Especialización
        </p>

        <div class="specializations__heading">
          <h2>
            Especialización jurídica
            <span>con una mirada humana.</span>
          </h2>

          <p>
            Acompañamiento jurídico especializado en
            situaciones especialmente sensibles para
            las personas y sus familias.
          </p>
        </div>
      </div>

      <!-- TARJETAS -->

      <div class="specializations__grid">
        <NuxtLink
          v-for="(area, index) in areas"
          :key="area.id"
          :to="area.href"
          class="specialization-card"
          :class="{
            'specialization-card--visible': isVisible
          }"
          :style="{
            '--delay': `${index * 110}ms`
          }"
          :aria-label="`Ir a ${area.title}`"
        >
          <!-- ICONO -->

          <div class="specialization-card__icon">
            <!-- FAMILIA / RAMA -->

            <svg
              v-if="area.icon === 'family'"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32 53V21"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M32 38C25 36 21 31 20 25C27 25 32 29 32 38Z"
                stroke="currentColor"
                stroke-width="1.4"
              />

              <path
                d="M32 31C39 29 43 24 44 18C37 18 32 22 32 31Z"
                stroke="currentColor"
                stroke-width="1.4"
              />

              <path
                d="M32 47C39 45 43 40 44 34C37 34 32 38 32 47Z"
                stroke="currentColor"
                stroke-width="1.4"
              />

              <circle
                cx="32"
                cy="15"
                r="2"
                fill="currentColor"
              />
            </svg>

            <!-- MEDIACIÓN / BALANZA -->

            <svg
              v-else-if="area.icon === 'mediation'"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32 13V51"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M19 18H45"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M32 13L27 18"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M32 13L37 18"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M19 18L12 34H26L19 18Z"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
              />

              <path
                d="M45 18L38 34H52L45 18Z"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
              />

              <path
                d="M25 51H39"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>

            <!-- VIOLENCIA / PERFIL -->

            <svg
              v-else
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M40 18C34 13 25 15 22 22C19 29 22 36 27 40"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M39 18C38 24 40 28 45 31L41 34V39C41 42 39 44 36 44H31"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                d="M27 40C23 45 21 50 21 54"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M31 44C33 48 34 51 34 54"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />

              <path
                d="M22 22C17 24 14 29 15 35C16 40 19 43 23 45"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <!-- CONTENIDO -->

          <div class="specialization-card__content">
            <h3>
              {{ area.title }}
            </h3>

            <div class="specialization-card__reveal">
              <p>
                {{ area.text }}
              </p>

              <span class="specialization-card__link">
                <span>
                  Ver área
                </span>

                <span aria-hidden="true">
                  ↗
                </span>
              </span>
            </div>
          </div>

          <!-- FLECHA -->

          <span
            class="specialization-card__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </NuxtLink>
      </div>

      <!-- FOOTER -->

      <div class="specializations__footer">
        <p>
          Cada asunto requiere una estrategia
          jurídica adaptada a sus circunstancias.
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
import {
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'

const sectionRef =
  ref<HTMLElement | null>(null)

const isVisible =
  ref(false)

const areas = [
  {
    id: 'familia',

    icon: 'family',

    title:
      'Derecho de Familia y Menores',

    text:
      'Asesoramiento y asistencia jurídica en procedimientos familiares, protección de menores, medidas de familia, rupturas y situaciones de especial sensibilidad.',

    href:
      '/derecho-familia'
  },
  {
    id: 'mediacion',

    icon: 'mediation',

    title:
      'Mediación Familiar',

    text:
      'Una vía orientada al diálogo y a la búsqueda de acuerdos equilibrados, duraderos y adaptados a las necesidades reales de cada familia.',

    href:
      '/mediacion-familiar'
  },
  {
    id: 'violencia',

    icon: 'violence',

    title:
      'Violencia de Género',

    text:
      'Asesoramiento jurídico inmediato, confidencial y especializado, con acompañamiento durante todas las fases del procedimiento.',

    href:
      '/violencia-genero'
  }
]

let observer:
  IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) return

  observer =
    new IntersectionObserver(
      ([entry]) => {
        if (
          entry &&
          entry.isIntersecting
        ) {
          isVisible.value = true

          observer?.disconnect()
        }
      },
      {
        threshold: 0.15
      }
    )

  observer.observe(
    sectionRef.value
  )
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.specializations {
  position: relative;

  padding:
    40px
    var(--page-padding);

  background:
    #f2f0ed;

    
}

.specializations__inner {
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

.specializations__header {
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
      65px,
      8vw,
      115px
    );
}

.specializations__eyebrow {
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

.specializations__heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(240px, 0.55fr);

  gap:
    clamp(
      35px,
      7vw,
      110px
    );

  align-items: end;
}

.specializations__heading h2 {
  margin: 0;

  font-size:
    clamp(
      3.5rem,
      5.8vw,
      4.8rem
    );

  line-height: 0.93;

  letter-spacing: -0.05em;

  color:
    var(--color-text-dark);
}

.specializations__heading h2 span {
  display: block;

  font-style: italic;

  color:
    var(--color-accent-dark);
}

.specializations__heading > p {
  margin: 0;

  padding-bottom: 7px;

  font-size: 0.95rem;

  line-height: 1.8;

  color:
    rgba(65, 62, 59, 0.68);
}

/* =========================
   GRID
========================= */

.specializations__grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap:
    clamp(
      16px,
      2vw,
      28px
    );
}

/* =========================
   CARD
========================= */

.specialization-card {
  --delay: 0ms;

  position: relative;

 min-height:
  clamp(
    430px,
    32vw,
    500px
  );

  display: flex;
  flex-direction: column;

  padding:
    clamp(
      30px,
      3vw,
      42px
    );

  overflow: hidden;

  border:
    1px solid
    rgba(
      132,
      118,
      107,
      0.19
    );

  background:#faf9f7;

  color:
    var(--color-text-dark);

  cursor: pointer;

  outline: none;

opacity: 0;

transform:
  translateY(28px)
  scale(0.97);

  transform-origin:
    center center;

  transition:
    opacity
    0.65s ease
    var(--delay),

    transform
    0.95s
    var(--ease-out)
    var(--delay),

    border-color
    0.4s ease,

    box-shadow
    0.4s ease;
}

.specialization-card--visible {
  opacity: 1;

  transform:
    translateY(0)
    scale(1);
}

/* =========================
   FONDO HOVER

   Ya NO es negro.
   Nace desde el centro.
========================= */

.specialization-card::before {
  content: '';

  position: absolute;

  inset: 0;

  background:
   linear-gradient(
      145deg,
      #e7e5e2,
      #dad6d1
    );

  opacity: 0;

  transform:
    scale(0.15);

  transform-origin:
    center center;

  transition:
    transform
    0.7s
    var(--ease-out),

    opacity
    0.18s ease;
}

.specialization-card:hover::before,
.specialization-card:focus-visible::before {
  opacity: 1;

  transform:
    scale(1);
}

.specialization-card:hover,
.specialization-card:focus-visible {
  border-color:
    rgba(
      123,
      105,
      91,
      0.32
    );

  box-shadow:
    0 22px 55px
    rgba(
      77,
      61,
      49,
      0.07
    );
}

/* =========================
   ICON
========================= */
.specialization-card__icon {
  position: relative;
  z-index: 2;
  width: clamp(68px, 5.5vw, 82px);
  height: clamp(68px, 5.5vw, 82px);

  display: grid;
  place-items: center;

  border: 1px solid rgba(132, 118, 107, 0.24);
  border-radius: 50%;

  color: var(--color-accent-dark);

  background: rgba(255, 255, 255, 0.28);

  transition:
    color 0.4s ease,
    border-color 0.4s ease,
    background 0.4s ease,
    transform 0.5s var(--ease-out);
}

.specialization-card__icon::after {
  content: '';

  position: absolute;

  top: 50%;
  left: calc(100% + 18px);

  width: clamp(55px, 6vw, 100px);
  height: 1px;

  background:
    linear-gradient(
      90deg,
      rgba(132, 118, 107, 0.2),
      rgba(132, 118, 107, 0)
    );

  transform-origin: left center;

  transition:
    opacity 0.35s ease,
    transform 0.6s var(--ease-out);
}
.specialization-card__icon svg {
  width: 52%;
  height: 52%;
}

.specialization-card:hover
.specialization-card__icon,
.specialization-card:focus-visible
.specialization-card__icon {
  color:
    var(--color-taupe-dark);

  border-color:
    rgba(
      116,
      103,
      93,
      0.38
    );

  background:
    rgba(
      255,
      255,
      255,
      0.3
    );

  transform:
    scale(1.05);
}

/* =========================
   CONTENT
========================= */

.specialization-card__content {
  position: relative;

  z-index: 2;

  margin-top: auto;

  padding-top:
    clamp(
      45px,
      5vw,
      75px
    );
}

.specialization-card h3 {
  max-width: 340px;

  margin: 0 0 20px;

  font-size:
    clamp(
      2.35rem,
      2.8vw,
      3.45rem
    );

  line-height: 0.98;
  letter-spacing: -0.035em;

  color: var(--color-text-dark);

  transition:
    color 0.4s ease,
    transform 0.5s var(--ease-out);
}

.specialization-card:hover h3,
.specialization-card:focus-visible h3 {
  color: #403832;

  transform: translateY(-5px);
}

/* =========================
   TEXTO REVEAL
========================= */

.specialization-card__reveal {
  max-height: 0;
  overflow: hidden;

  opacity: 0;

  transform: translateY(14px);

  transition:
    max-height 0.55s var(--ease-out),
    opacity 0.35s ease,
    transform 0.55s var(--ease-out);
}

.specialization-card:hover .specialization-card__reveal,
.specialization-card:focus-visible .specialization-card__reveal {
  max-height: 250px;

  opacity: 1;

  transform: translateY(0);
}
.specialization-card__reveal p {
  max-width: 390px;

  margin:
    0
    0
    25px;

  font-size: 0.9rem;

  line-height: 1.7;

  color:
    rgba(
      64,
      56,
      50,
      0.68
    );
}

/* =========================
   VER ÁREA
========================= */

.specialization-card__link {
  display: inline-flex;

  align-items: center;

  gap: 14px;

  padding-bottom: 5px;

  border-bottom:
    1px solid
    rgba(
      64,
      56,
      50,
      0.5
    );

  font-size: 0.61rem;
  font-weight: 500;

  letter-spacing: 0.11em;
  text-transform: uppercase;

  color:
    var(--color-text-dark);
}

/* =========================
   FLECHA ESQUINA
========================= */

.specialization-card__arrow {
  position: absolute;

  z-index: 2;

  top:
    clamp(
      32px,
      3vw,
      43px
    );

  right:
    clamp(
      30px,
      3vw,
      42px
    );

  font-size: 1rem;

  color:
    var(--color-accent-dark);

  transition:
    color
    0.35s ease,

    transform
    0.4s
    var(--ease-out);
}

.specialization-card:hover
.specialization-card__arrow,
.specialization-card:focus-visible
.specialization-card__arrow {
  color:
    var(--color-taupe-dark);

  transform:
    translate(
      5px,
      -5px
    );
}
/* =========================
   DECORACIÓN DE FONDO
========================= */

/* =========================
   DECORACIÓN EDITORIAL
========================= */

.specialization-card::after {
  content: '';

  position: absolute;

  width: clamp(220px, 19vw, 310px);
  aspect-ratio: 1;

  left: 50%;
  top: 43%;

  transform:
    translate(-50%, -50%)
    scale(1);

  border:
    1px solid
    rgba(132, 118, 107, 0.085);

  border-radius: 50%;

  z-index: 1;
  pointer-events: none;

  transition:
    opacity 0.45s ease,
    transform 0.75s var(--ease-out);
}

.specialization-card:hover::after,
.specialization-card:focus-visible::after {
  opacity: 0;

  transform:
    translate(-50%, -50%)
    scale(1.18);
}



/* =========================
   FOOTER
========================= */

.specializations__footer {
  margin-top:
    clamp(
      55px,
      7vw,
      90px
    );

  display: flex;

  justify-content: space-between;
  align-items: flex-end;

  gap: 45px;
}

.specializations__footer p {
  max-width: 580px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.45rem,
      2.3vw,
      2.4rem
    );

  line-height: 1.18;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}

.specializations__footer > a {
  display: inline-flex;

  align-items: center;

  gap: 20px;

  flex-shrink: 0;

  padding-bottom: 7px;

  border-bottom:
    1px solid
    var(--color-text-dark);

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
  .specializations__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .specializations__eyebrow {
    margin: 0;
  }

  .specializations__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .specializations__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .specializations__grid {
    grid-template-columns: 1fr;
  }

  .specialization-card {
    min-height: 400px;
  }

  .specialization-card h3 {
    max-width: 600px;
  }

  .specialization-card__content {
    padding-top: 70px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 680px) {
  .specializations {
    padding:
      95px
      20px;
  }

  .specializations__header {
    margin-bottom: 58px;
  }

  .specializations__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .specializations__grid {
    gap: 18px;
  }

  .specialization-card {
    min-height: 410px;

    padding:
      28px
      24px;

    /*
     * En móvil no tenemos hover,
     * así que mostramos el contenido.
     */
  }

  .specialization-card__icon {
    width: 68px;
    height: 68px;
  }

  .specialization-card__content {
    padding-top: 55px;
  }

  .specialization-card h3 {
    font-size:
      clamp(
        2.25rem,
        11vw,
        3.2rem
      );
  }

  .specialization-card__reveal {
    max-height: 250px;

    opacity: 1;

   transform: translateY(0);
  }

  .specialization-card__arrow {
    top: 30px;
    right: 24px;
  }

  .specializations__footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 32px;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .specialization-card {
    opacity: 1;

    transform: none;

    transition: none;
  }

  .specialization-card::before,
  .specialization-card::after,
  .specialization-card__icon,
  .specialization-card h3,
  .specialization-card__reveal,
  .specialization-card__arrow {
    transition: none;
  }
}
</style>