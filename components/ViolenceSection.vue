<template>
  <section
    id="violencia-genero"
    ref="sectionRef"
    class="violence"
  >
    <div class="violence__inner">
      <div class="violence__header">
        <p class="violence__eyebrow">
          Violencia de Género
        </p>

        <div class="violence__heading">
          <h2>
            Asistencia jurídica
            <span>
              especializada y confidencial.
            </span>
          </h2>

          <p>
            Una atención jurídica rigurosa,
            cercana y especialmente cuidadosa
            ante situaciones que requieren
            protección y respuesta inmediata.
          </p>
        </div>
      </div>

      <div class="violence__body">
        <aside class="violence__intro">
          <div class="violence__intro-inner">
            <p class="violence__statement">
              Protección,
              acompañamiento
              y defensa jurídica.
            </p>

            <p class="violence__intro-text">
              Cada actuación se aborda desde
              la confidencialidad, la sensibilidad
              y una implicación profesional absoluta.
            </p>

            <a
              href="#contacto"
              class="violence__cta"
            >
              <span>
                Solicita asesoramiento
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </aside>

        <div class="violence__services">
          <article
            v-for="(service, index) in services"
            :key="service.title"
            class="violence-service"
            :class="{
              'violence-service--visible':
                isVisible
            }"
            :style="{
              '--delay':
                `${index * 80}ms`
            }"
          >
            <div class="violence-service__marker">
              <span aria-hidden="true" />
            </div>

            <div class="violence-service__content">
              <h3>
                {{ service.title }}
              </h3>

              <p>
                {{ service.text }}
              </p>
            </div>

            <span
              class="violence-service__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </article>
        </div>
      </div>

      <div class="violence__footer">
        <p>
          Asesoramiento · Defensa ·
          Protección · Acompañamiento
        </p>

        <NuxtLink to="/#contacto">
            <span>
              Contactar
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
      'Asesoramiento jurídico inmediato',

    text:
      'Atención jurídica confidencial y altamente especializada desde el primer momento.'
  },
  {
    title:
      'Defensa penal',

    text:
      'Defensa penal rigurosa durante todas las fases del procedimiento.'
  },
  {
    title:
      'Coordinación profesional',

    text:
      'Coordinación con servicios sociales y recursos especializados cuando las circunstancias lo requieren.'
  },
  {
    title:
      'Acompañamiento continuo',

    text:
      'Acompañamiento cercano y comprometido, con especial implicación en la protección de menores y del entorno familiar.'
  },
  {
    title:
      'Procedimientos civiles asociados',

    text:
      'Gestión coordinada de cuestiones como custodia, vivienda, pensiones y otras medidas vinculadas al procedimiento.'
  },
  {
    title:
      'Prestaciones y derechos',

    text:
      'Tramitación integral de prestaciones y otros derechos reconocidos a la víctima.'
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
        threshold: 0.12
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
.violence {
  position: relative;

  padding:
    var(--section-space)
    var(--page-padding);

  overflow: hidden;

  background: #fbfaf8;

  color: var(--color-text);
}

.violence::before {
  content: '';

  position: absolute;

  top: -220px;
  right: -180px;

  width: 620px;
  height: 620px;

  border:
    1px solid
    rgba(116, 103, 93, 0.08);

  border-radius: 50%;

  pointer-events: none;
}

.violence::after {
  content: '';

  position: absolute;

  top: -70px;
  right: -30px;

  width: 340px;
  height: 340px;

   border:
    1px solid
    rgba(116, 103, 93, 0.06);

  border-radius: 50%;

  pointer-events: none;
}

.violence__inner {
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
   HEADER
========================= */

.violence__header {
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
      80px,
      10vw,
      145px
    );
}

.violence__eyebrow {
  margin:
    12px
    0
    0;

  font-size: 0.62rem;

  font-weight: 500;

  letter-spacing: 0.16em;

  text-transform: uppercase;

  color: var(--color-accent-dark);
}

.violence__heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(240px, 0.55fr);

  gap:
    clamp(
      40px,
      7vw,
      110px
    );

  align-items: end;
}

.violence__heading h2 {
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

.violence__heading h2 span {
  display: block;

  font-style: italic;

  color:
    var(--color-accent-dark);
}

.violence__heading > p {
  margin: 0;

  padding-bottom: 8px;

  font-size: 0.94rem;

  line-height: 1.8;

  color: var(--color-text);
}

/* =========================
   BODY
========================= */

.violence__body {
  display: grid;

  grid-template-columns:
    minmax(260px, 0.55fr)
    minmax(0, 1.25fr);

  gap:
    clamp(
      70px,
      10vw,
      150px
    );

  align-items: start;
}

/* =========================
   INTRO
========================= */

.violence__intro {
  position: relative;
}

.violence__intro-inner {
  position: sticky;

  top: 130px;
}

.violence__statement {
  max-width: 390px;

  margin:
    0
    0
    30px;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      2.2rem,
      3.7vw,
      4.1rem
    );

  line-height: 1;

  letter-spacing: -0.04em;

  color:
    var(--color-text-dark);
}

.violence__intro-text {
  max-width: 360px;

  margin:
    0
    0
    42px;

  font-size: 0.92rem;

  line-height: 1.8;

  color: var(--color-text);
}

.violence__cta {
  width: fit-content;

  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding-bottom: 7px;

  border-bottom:
    1px solid
    rgba(52, 47, 43, 0.45);

  color: var(--color-text-dark);

  font-size: 0.63rem;

  font-weight: 500;

  letter-spacing: 0.1em;

  text-transform: uppercase;


}

.violence__cta
span:last-child {
  transition:
    transform
    0.35s
    var(--ease-out);
}

.violence__cta:hover
span:last-child {
  transform:
    translate(4px, -4px);
}

/* =========================
   SERVICES
========================= */

.violence__services {
   display: grid;

  gap: 12px;
 
}

.violence-service {
  --delay: 0ms;

  position: relative;

  display: grid;

  grid-template-columns:
    42px
    minmax(0, 1fr)
    30px;

  gap:
    clamp(
      22px,
      4vw,
      55px
    );

  align-items: start;

  padding:
    clamp(32px, 4vw, 48px)
    clamp(28px, 3.5vw, 46px);

  background: #e7e5e2;

  border:
    1px solid
    rgba(111, 97, 85, 0.12);

  opacity: 0;

  transform:
    translateY(22px);

  transition:
    opacity 0.75s var(--ease-out) var(--delay),
    transform 0.75s var(--ease-out) var(--delay),
    background 0.45s ease,
    padding-left 0.4s var(--ease-out);
}

.violence-service--visible {
  opacity: 1;

  transform:
    translateY(0);
}

.violence-service:hover {
  padding-left:
    clamp(36px, 4vw, 56px);

  background: #d8d4cf;
}

/* =========================
   MARKER
========================= */

.violence-service__marker {
  padding-top: 9px;
}

.violence-service__marker span {
  display: block;

  width: 7px;
  height: 7px;

  border:
    1px solid
    var(--color-accent-dark);

  border-radius: 50%;

  transition:
    background 0.35s ease,
    transform 0.35s var(--ease-out);
}

.violence-service:hover
.violence-service__marker span {
  background:
    var(--color-accent-dark);

  transform:
    scale(1.35);
}

/* =========================
   SERVICE CONTENT
========================= */

.violence-service__content {
  display: grid;

  grid-template-columns:
    minmax(230px, 0.7fr)
    minmax(0, 1fr);

  gap:
    clamp(
      30px,
      5vw,
      70px
    );
}

.violence-service h3 {
  margin: 0;

  font-size:
    clamp(
      1.65rem,
      2.4vw,
      2.6rem
    );

  line-height: 1.02;

  letter-spacing: -0.03em;

  color:
    var(--color-text-dark);
}

.violence-service p {
  max-width: 520px;

  margin: 0;

  font-size: 0.9rem;

  line-height: 1.8;

  color: var(--color-text);
}

/* =========================
   ARROW
========================= */

.violence-service__arrow {
  justify-self: end;

  padding-top: 5px;

  color:
    rgba(52, 47, 43, 0.35);
  transition:
    color 0.3s ease,
    transform
    0.35s
    var(--ease-out);
}

.violence-service:hover
.violence-service__arrow {
  color:
    var(--color-text-dark);

  transform:
    translate(4px, -4px);
}

/* =========================
   FOOTER
========================= */

.violence__footer {
  margin-top:
    clamp(
      90px,
      11vw,
      150px
    );

  padding-top: 22px;

  display: flex;

  justify-content: space-between;
  align-items: flex-end;

  gap: 40px;

 border-top:
    1px solid
    var(--color-border);
}

.violence__footer p {
  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.25rem,
      2vw,
      2rem
    );

  line-height: 1.2;

  color: var(--color-text);
}

.violence__footer a {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding-bottom: 7px;

  

  font-size: 0.62rem;

  font-weight: 500;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  border-bottom:
    1px solid
    rgba(52, 47, 43, 0.45);

  color:
    var(--color-text-dark);
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .violence__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .violence__eyebrow {
    margin: 0;
  }

  .violence__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .violence__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .violence__body {
    grid-template-columns:
      minmax(210px, 0.45fr)
      minmax(0, 1fr);

    gap: 55px;
  }

  .violence-service__content {
    grid-template-columns: 1fr;

    gap: 17px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 720px) {
  .violence {
    padding:
      95px
      20px;
  }

  .violence__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .violence__body {
    grid-template-columns: 1fr;

    gap: 70px;
  }

  .violence__intro-inner {
    position: static;
  }

  .violence__statement {
    font-size:
      clamp(
        2.2rem,
        11vw,
        3.3rem
      );
  }

  .violence-service {
    grid-template-columns:
      25px
      minmax(0, 1fr);

    gap: 18px;

    padding:
      30px
      0;
  }

  .violence-service:hover {
    padding-left: 0;
  }

  .violence-service__content {
    gap: 14px;
  }

  .violence-service h3 {
    font-size:
      clamp(
        1.7rem,
        8vw,
        2.25rem
      );
  }

  .violence-service__arrow {
    display: none;
  }

  .violence__footer {
    flex-direction: column;

    align-items: flex-start;

    margin-top: 75px;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .violence-service {
    opacity: 1;

    transform: none;

    transition: none;
  }

  .violence-service__marker span,
  .violence-service__arrow,
  .violence__cta span {
    transition: none;
  }
}
</style>