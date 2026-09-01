<template>
  <section
    id="mediacion"
    ref="sectionRef"
    class="mediation"
  >
    <!-- Palabra decorativa -->
    <div
      class="mediation__background-word"
      aria-hidden="true"
    >
      DIÁLOGO
    </div>

    <div class="mediation__inner">
      <!-- Cabecera -->
      <header
        class="mediation__header"
        :class="{ 'is-visible': isVisible }"
      >
        <p class="mediation__eyebrow">
          Mediación Familiar
        </p>

        <h2 class="mediation__title">
          El diálogo como
          <span>primera opción.</span>
        </h2>
      </header>

      <!-- Introducción -->
      <div
        class="mediation__intro"
        :class="{ 'is-visible': isVisible }"
      >
        <span class="mediation__intro-number">
          01
        </span>

        <p>
          Durante el proceso de Mediación ofrecemos un
          acompañamiento profesional, imparcial y orientado
          a facilitar la comunicación.
        </p>

        <p>
          Ayudamos a las partes a identificar intereses comunes
          y encontrar acuerdos y soluciones equilibradas,
          duraderas y adaptadas a las necesidades de cada familia.
        </p>
      </div>

      <!-- Ámbitos -->
      <div class="mediation__areas">
        <article
          class="mediation-area mediation-area--left"
          :class="{ 'is-visible': isVisible }"
        >
          <div class="mediation-area__top">
            <span>01</span>
            <span>Ámbito de mediación</span>
          </div>

          <div class="mediation-area__content">
            <h3>
              Gestión de
              <span>Ruptura Familiar</span>
            </h3>

            <p>
              Divorcios, separaciones, custodias,
              regímenes de visitas, alimentos y
              planificación jurídica para afrontar
              cambios personales y familiares.
            </p>
          </div>

          <div
            class="mediation-area__circle"
            aria-hidden="true"
          />
        </article>

        <article
          class="mediation-area mediation-area--right"
          :class="{ 'is-visible': isVisible }"
        >
          <div class="mediation-area__top">
            <span>02</span>
            <span>Ámbito de mediación</span>
          </div>

          <div class="mediation-area__content">
            <h3>
              Conflictos
              <span>Familiares</span>
            </h3>

            <p>
              Desacuerdos y conflictos entre familiares,
              conflictos parentales, relacionados con el
              cuidado de personas dependientes, cuestiones
              económicas y otras situaciones familiares.
            </p>
          </div>

          <div
            class="mediation-area__circle"
            aria-hidden="true"
          />
        </article>
      </div>

      <!-- Cierre -->
      <div
        class="mediation__footer"
        :class="{ 'is-visible': isVisible }"
      >
        <div class="mediation__footer-line" />

        <div class="mediation__footer-content">
          <p>
            Hay conflictos que no necesitan
            empezar en un juzgado.
          </p>

          <a href="#contacto">
            Solicita información
            <span aria-hidden="true">↗</span>
          </a>
        </div>
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

const sectionRef = ref<HTMLElement | null>(null)

const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true

        observer?.disconnect()
      }
    },
    {
      threshold: 0.12
    }
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.mediation {
  position: relative;

  padding:
    clamp(110px, 13vw, 200px)
    clamp(20px, 4vw, 64px);

  overflow: hidden;

  background: #e7e1da;
}

.mediation__inner {
  position: relative;
  z-index: 2;

  width: min(
    100%,
    var(--container-width)
  );

  margin: 0 auto;
}

/* =========================
   PALABRA DE FONDO
========================= */

.mediation__background-word {
  position: absolute;

  top: 70px;
  left: 50%;

  z-index: 0;

  transform:
    translateX(-50%);

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      8rem,
      20vw,
      22rem
    );

  line-height: 0.8;

  letter-spacing: -0.07em;

  white-space: nowrap;

  color:
    rgba(255, 255, 255, 0.25);

  pointer-events: none;
  user-select: none;
}

/* =========================
   HEADER
========================= */

.mediation__header {
  position: relative;

  max-width: 980px;

  margin-bottom:
    clamp(
      70px,
      10vw,
      140px
    );

  opacity: 0;

  transform:
    translateY(35px);

  transition:
    opacity 0.9s ease,
    transform 0.9s ease;
}

.mediation__header.is-visible {
  opacity: 1;

  transform:
    translateY(0);
}

.mediation__eyebrow {
  margin-bottom: 22px;

  font-size: 0.7rem;
  font-weight: 500;

  letter-spacing: 0.22em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.mediation__title {
  margin: 0;

  font-size:
    clamp(
      3.4rem,
      7vw,
      7.5rem
    );

  line-height: 0.88;

  letter-spacing: -0.055em;
}

.mediation__title span {
  display: block;

  margin-left:
    clamp(
      0px,
      8vw,
      130px
    );

  color:
    var(--color-accent-dark);
}

/* =========================
   INTRO
========================= */

.mediation__intro {
  width: min(100%, 680px);

  margin-left: auto;

  margin-bottom:
    clamp(
      90px,
      12vw,
      170px
    );

  padding-left:
    clamp(
      25px,
      4vw,
      55px
    );

  border-left:
    1px solid var(--color-accent);

  opacity: 0;

  transform:
    translateY(30px);

  transition:
    opacity 0.9s ease 0.2s,
    transform 0.9s ease 0.2s;
}

.mediation__intro.is-visible {
  opacity: 1;

  transform:
    translateY(0);
}

.mediation__intro-number {
  display: block;

  margin-bottom: 28px;

  font-family:
    var(--font-serif);

  font-size: 0.75rem;

  color:
    var(--color-accent-dark);
}

.mediation__intro p {
  margin: 0;

  font-size:
    clamp(
      1.05rem,
      1.6vw,
      1.3rem
    );

  line-height: 1.75;

  color:
    rgba(70, 68, 66, 0.86);
}

.mediation__intro p + p {
  margin-top: 18px;
}

/* =========================
   ÁREAS
========================= */

.mediation__areas {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(
      30px,
      6vw,
      90px
    );

  align-items: start;
}

.mediation-area {
  position: relative;

  min-height: 590px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding:
    clamp(
      30px,
      4vw,
      50px
    );

  overflow: hidden;

  background:
    rgba(255, 255, 255, 0.38);

  border:
    1px solid rgba(255, 255, 255, 0.6);

  opacity: 0;

  transform:
    translateY(50px);

  transition:
    opacity 0.9s ease,
    transform 0.9s ease,
    background 0.45s ease;
}

.mediation-area--left {
  transition-delay: 0.2s;
}

.mediation-area--right {
  margin-top: 100px;

  transition-delay: 0.35s;
}

.mediation-area.is-visible {
  opacity: 1;

  transform:
    translateY(0);
}

.mediation-area:hover {
  background:
    rgba(255, 255, 255, 0.58);
}

/* Parte superior */

.mediation-area__top {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  gap: 20px;

  font-size: 0.65rem;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

/* Contenido */

.mediation-area__content {
  position: relative;
  z-index: 2;

  max-width: 470px;
}

.mediation-area__content h3 {
  margin-bottom: 28px;

  font-size:
    clamp(
      2.8rem,
      4.5vw,
      5rem
    );

  line-height: 0.94;

  letter-spacing: -0.045em;
}

.mediation-area__content h3 span {
  display: block;

  color:
    var(--color-accent-dark);
}

.mediation-area__content p {
  max-width: 400px;

  margin: 0;

  font-size: 1rem;

  line-height: 1.75;

  color:
    rgba(70, 68, 66, 0.78);
}

/* Decoración */

.mediation-area__circle {
  position: absolute;

  width: 330px;
  height: 330px;

  top: 50%;
  right: -210px;

  border:
    1px solid
    rgba(145, 135, 125, 0.16);

  border-radius: 50%;

  transform:
    translateY(-50%);

  transition:
    right 0.7s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

.mediation-area:hover
.mediation-area__circle {
  right: -150px;
}

/* =========================
   FOOTER
========================= */

.mediation__footer {
  margin-top:
    clamp(
      100px,
      12vw,
      170px
    );

  opacity: 0;

  transform:
    translateY(30px);

  transition:
    opacity 0.8s ease 0.4s,
    transform 0.8s ease 0.4s;
}

.mediation__footer.is-visible {
  opacity: 1;

  transform:
    translateY(0);
}

.mediation__footer-line {
  width: 100%;
  height: 1px;

  margin-bottom: 35px;

  background:
    rgba(145, 135, 125, 0.35);
}

.mediation__footer-content {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 40px;
}

.mediation__footer-content p {
  max-width: 580px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.8rem,
      3vw,
      3rem
    );

  line-height: 1.1;

  letter-spacing: -0.025em;
}

.mediation__footer-content a {
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

.mediation__footer-content a span {
  transition:
    transform 0.25s ease;
}

.mediation__footer-content a:hover span {
  transform:
    translate(3px, -3px);
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {
  .mediation__areas {
    grid-template-columns: 1fr;
  }

  .mediation-area {
    min-height: 480px;
  }

  .mediation-area--right {
    margin-top: 0;
  }

  .mediation__title span {
    margin-left: 0;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 640px) {
  .mediation {
    padding:
      90px
      20px;
  }

  .mediation__background-word {
    top: 80px;

    font-size: 30vw;
  }

  .mediation__header {
    margin-bottom: 65px;
  }

  .mediation__title {
    font-size:
      clamp(
        3rem,
        14vw,
        4.6rem
      );

    line-height: 0.94;
  }

  .mediation__intro {
    margin-bottom: 75px;

    padding-left: 22px;
  }

  .mediation__intro p {
    font-size: 1rem;
  }

  .mediation__areas {
    gap: 20px;
  }

  .mediation-area {
    min-height: 430px;

    padding: 26px 22px;
  }

  .mediation-area__content h3 {
    font-size:
      clamp(
        2.7rem,
        12vw,
        3.8rem
      );
  }

  .mediation__footer {
    margin-top: 75px;
  }

  .mediation__footer-content {
    flex-direction: column;
  }
}

/* =========================
   SIN HOVER
========================= */

@media (hover: none) {
  .mediation-area:hover {
    background:
      rgba(255, 255, 255, 0.38);
  }

  .mediation-area:hover
  .mediation-area__circle {
    right: -210px;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  .mediation__header,
  .mediation__intro,
  .mediation-area,
  .mediation__footer {
    opacity: 1;

    transform: none;

    transition: none;
  }
}
</style>