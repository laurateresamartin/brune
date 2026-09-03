<template>
  <section
    id="mediacion"
    ref="sectionRef"
    class="mediation"
  >
    <div class="mediation__word" aria-hidden="true">
      DIÁLOGO
    </div>

    <div class="mediation__inner">
      <div class="mediation__header">
        <p class="mediation__eyebrow">
          Mediación Familiar
        </p>

        <div class="mediation__heading">
          <h2>
            El diálogo
            <span>como primera opción.</span>
          </h2>

          <p>
            Durante el proceso de mediación ofrecemos
            un acompañamiento profesional, imparcial
            y orientado a facilitar la comunicación.
          </p>
        </div>
      </div>

      <div class="mediation__intro">
        <p>
          Ayudamos a las partes a identificar intereses
          comunes y a encontrar acuerdos y soluciones
          equilibradas, duraderas y adaptadas a las
          necesidades de cada familia.
        </p>
      </div>

      <div class="mediation__services">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="mediation-card"
          :class="[
            {
              'mediation-card--visible':
                isVisible
            },
            `mediation-card--${index + 1}`
          ]"
        >
          <div class="mediation-card__top">
            <span>
              Mediación
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </div>

          <div class="mediation-card__content">
            <h3>
              {{ service.title }}
            </h3>

            <p>
              {{ service.text }}
            </p>
          </div>

          <NuxtLink to="/#contacto">
            <span>
              Solicita una consulta
            </span>

            <span aria-hidden="true">
              ↗
            </span>
        </ NuxtLink>
        </article>
      </div>

      <div class="mediation__closing">
        <p>
          Hay conflictos que pueden encontrar
          solución a través del diálogo.
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

const services = [
  {
    title:
      'Gestión de Ruptura Familiar',

    text:
      'Divorcios, separaciones, custodias, regímenes de visitas, alimentos y planificación jurídica para afrontar cambios personales y familiares.'
  },
  {
    title:
      'Conflictos Familiares',

    text:
      'Desacuerdos y conflictos entre familiares: conflictos parentales, de cuidado de dependientes, económicos y otras situaciones familiares.'
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
        threshold: 0.18
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
.mediation {
  position: relative;

  padding:
    var(--section-space)
    var(--page-padding);

  overflow: hidden;

  background:
    white;
}

.mediation__inner {
  position: relative;

  z-index: 2;

  width:
    min(
      100%,
      var(--container-width)
    );

  margin: 0 auto;
}

/* =========================
   PALABRA DECORATIVA
========================= */

.mediation__word {
  position: absolute;

  top:
    clamp(
      55px,
      7vw,
      100px
    );

  right:
    clamp(
      -40px,
      -2vw,
      -10px
    );

  z-index: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      7rem,
      16vw,
      17rem
    );

  line-height: 0.8;

  letter-spacing: -0.07em;

  color:
    rgba(
      111,
      91,
      76,
      0.07
    );

  pointer-events: none;

  user-select: none;
}

/* =========================
   HEADER
========================= */

.mediation__header {
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
}

.mediation__eyebrow {
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

.mediation__heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(240px, 0.55fr);

  gap:
    clamp(
      40px,
      7vw,
      110px
    );

  align-items: end;
}

.mediation__heading h2 {
  margin: 0;

  font-size:
    clamp(
      3.6rem,
      6vw,
      7rem
    );

  line-height: 0.92;

  letter-spacing: -0.05em;

  color:
    var(--color-text-dark);
}

.mediation__heading h2 span {
  display: block;

  font-style: italic;

  color:
    var(--color-accent-dark);
}

.mediation__heading > p {
  margin: 0;

  padding-bottom: 8px;

  font-size: 0.95rem;

  line-height: 1.8;

  color:
    rgba(
      64,
      60,
      57,
      0.7
    );
}

/* =========================
   INTRO
========================= */

.mediation__intro {
  margin:
    clamp(
      70px,
      9vw,
      130px
    )
    0
    clamp(
      70px,
      9vw,
      130px
    )
    auto;

  width:
    min(
      100%,
      780px
    );
}

.mediation__intro p {
  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.9rem,
      3.3vw,
      3.5rem
    );

  line-height: 1.12;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}

/* =========================
   SERVICES
========================= */

.mediation__services {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(
      30px,
      5vw,
      75px
    );

  align-items: start;
}

.mediation-card {
  min-height:
    clamp(
      430px,
      40vw,
      560px
    );

  display: flex;

  flex-direction: column;

  padding:
    clamp(
      30px,
      4vw,
      50px
    );

  border:
    1px solid
    rgba(
      90,
      82,
      75,
      0.15
    );

 background: #f5f4f3;
border-color:
    rgba(
      110,
      94,
      81,
      0.16
    );
  opacity: 0;

  transform:
    translateY(40px);

  transition:
    opacity 0.85s
    var(--ease-out),

    transform 0.85s
    var(--ease-out),

    background 0.4s ease;
}

.mediation-card--2 {
  margin-top: 110px;

  transition-delay: 120ms;
}

.mediation-card--visible {
  opacity: 1;

  transform:
    translateY(0);
}

.mediation-card:hover {
  background:
  
      #e0dfdf
    
}

/* =========================
   CARD TOP
========================= */

.mediation-card__top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  padding-bottom: 20px;

  border-bottom:
    1px solid
    rgba(
      90,
      82,
      75,
      0.15
    );
}

.mediation-card__top span:first-child {
  font-size: 0.58rem;

  font-weight: 500;

  letter-spacing: 0.15em;

  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.mediation-card__top span:last-child {
  color:
    var(--color-accent-dark);

  transition:
    transform 0.35s
    var(--ease-out);
}

.mediation-card:hover
.mediation-card__top
span:last-child {
  transform:
    translate(
      4px,
      -4px
    );
}

/* =========================
   CARD CONTENT
========================= */

.mediation-card__content {
  margin-top: auto;

  padding:
    clamp(
      65px,
      8vw,
      125px
    )
    0
    35px;
}

.mediation-card h3 {
  max-width: 460px;

  margin:
    0
    0
    30px;

  font-size:
    clamp(
      2.7rem,
      4vw,
      4.6rem
    );

  line-height: 0.97;

  letter-spacing: -0.045em;

  color:
    var(--color-text-dark);
}

.mediation-card p {
  max-width: 490px;

  margin: 0;

  font-size: 0.94rem;

  line-height: 1.8;

  color:
    rgba(
      60,
      57,
      54,
      0.7
    );
}

/* =========================
   CARD LINK
========================= */

.mediation-card > a {
  width: fit-content;

  display: inline-flex;

  align-items: center;

  gap: 16px;

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
   CLOSING
========================= */

.mediation__closing {
  margin-top:
    clamp(
      90px,
      12vw,
      170px
    );

  padding-top:
    clamp(
      35px,
      5vw,
      60px
    );

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 50px;

  border-top:
    1px solid
    rgba(
      90,
      82,
      75,
      0.18
    );
}

.mediation__closing p {
  max-width: 760px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      2.2rem,
      4.3vw,
      4.8rem
    );

  line-height: 1;

  letter-spacing: -0.04em;

  color:
    var(--color-text-dark);
}

.mediation__closing > a {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 20px;

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

@media (max-width: 950px) {
  .mediation__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .mediation__eyebrow {
    margin: 0;
  }

  .mediation__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .mediation__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .mediation__services {
    gap: 30px;
  }

  .mediation-card--2 {
    margin-top: 70px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 720px) {
  .mediation {
    padding:
      95px
      20px;
  }

  .mediation__word {
    top: 70px;

    right: -20px;

    font-size: 7rem;

  }

  .mediation__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .mediation__intro {
    margin:
      65px
      0;
  }

  .mediation__intro p {
    font-size:
      clamp(
        1.7rem,
        8vw,
        2.5rem
      );
  }

  .mediation__services {
    grid-template-columns: 1fr;
  }

  .mediation-card {
    min-height: 390px;

    padding:
      28px
      24px;
  }

  .mediation-card--2 {
    margin-top: 0;
  }

  .mediation-card h3 {
    font-size:
      clamp(
        2.4rem,
        11vw,
        3.5rem
      );
  }

  .mediation__closing {
    flex-direction: column;

    align-items: flex-start;

    gap: 38px;

    margin-top: 80px;
  }

  .mediation__closing p {
    font-size:
      clamp(
        2rem,
        10vw,
        3.2rem
      );
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .mediation-card {
    opacity: 1;

    transform: none;

    transition: none;
  }
}
</style>