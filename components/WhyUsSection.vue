<template>
  <section
    id="por-que-elegirnos"
    ref="sectionRef"
    class="why"
  >
    <div class="why__inner">
      <div class="why__header">
        <p class="why__eyebrow">
          ¿Por qué elegirnos?
        </p>

        <div class="why__heading">
          <h2>
            Rigor jurídico.
            <span>Cercanía personal.</span>
          </h2>

          <p>
            Una forma de ejercer la abogacía basada
            en la especialización, el acompañamiento
            y la implicación real en cada asunto.
          </p>
        </div>
      </div>

      <div class="why__list">
        <article
          v-for="(item, index) in items"
          :key="item.title"
          class="why__item"
          :class="{
            'why__item--visible': isVisible
          }"
          :style="{
            '--delay': `${index * 90}ms`
          }"
        >
          <div
            class="why__symbol"
            aria-hidden="true"
          >
            <span
              v-if="item.symbol === 'circle'"
              class="why__shape why__shape--circle"
            />

            <span
              v-else-if="item.symbol === 'line'"
              class="why__shape why__shape--line"
            />

            <span
              v-else-if="item.symbol === 'cross'"
              class="why__shape why__shape--cross"
            />

            <span
              v-else
              class="why__shape why__shape--diamond"
            />
          </div>

          <div class="why__item-copy">
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.text }}
            </p>
          </div>

        </article>
      </div>

      <div class="why__footer">
        <p>
          Cada familia requiere una respuesta jurídica
          propia, no una solución genérica.
        </p>

         <NuxtLink to="/#contacto">
          <span>
           Cuéntanos tu caso
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

const items = [
  {
    title:
      'Experiencia y Especialización',

    text:
      'Amplia experiencia en el asesoramiento jurídico combinada con una continua y rigurosa formación nos permite ofrecer un asesoramiento y asistencia jurídicos sólidos, personalizados y de calidad.',

    symbol:
      'circle'
  },
  {
    title:
      'El interés del menor',

    text:
      'El bienestar de los menores guía nuestra actuación. Trabajamos para proteger sus derechos, preservar su estabilidad y favorecer soluciones que minimicen el impacto del conflicto familiar.',

    symbol:
      'line'
  },
  {
    title:
      'Acompañamiento',

    text:
      'Sabemos que detrás de cada procedimiento hay una historia personal. Por ello, ofrecemos un acompañamiento cercano, honesto y respetuoso, proporcionando seguridad jurídica y apoyo durante todo el proceso.',

    symbol:
      'cross'
  },
  {
    title:
      'Compromiso',

    text:
      'Ejercicio de la abogacía desde la seriedad, la responsabilidad y el trato humanizado, con sensibilidad y absoluta implicación en cada asunto, adaptado a las circunstancias y necesidades reales de cada familia.',

    symbol:
      'diamond'
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
.why {
  position: relative;

  padding:
    var(--section-space)
    var(--page-padding);

  overflow: hidden;

 background:
    white;
}

.why__inner {
  width:
    min(
      100%,
      var(--container-width)
    );

  margin: 0 auto;
}

/* =========================
   CABECERA
========================= */

.why__header {
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

.why__eyebrow {
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

.why__heading {
  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(240px, 0.55fr);

  gap:
    clamp(
      35px,
      7vw,
      110px
    );

  align-items: end;
}

.why__heading h2 {
  margin: 0;

  font-size:
    clamp(
      3.5rem,
      5.8vw,
      6.7rem
    );

  line-height: 0.93;

  letter-spacing:
    -0.05em;

  color:
    var(--color-text-dark);
}

.why__heading h2 span {
  display: block;

  color:
    var(--color-taupe-dark);

  font-style: italic;
}

.why__heading > p {
  margin: 0;

  padding-bottom: 7px;

  font-size: 0.95rem;

  line-height: 1.8;

  color:
    rgba(
      52,
      47,
      43,
      0.72
    );
}

/* =========================
   LISTA
========================= */

.why__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: clamp(14px, 1.8vw, 24px);
}
.why__item {
  --delay: 0ms;

  position: relative;

  min-height:
    clamp(360px, 34vw, 480px);

  display: flex;
  flex-direction: column;

  padding:
    clamp(34px, 4vw, 58px);

  overflow: hidden;

  background: #e8e6e3;

  border:
    1px solid
    rgba(90, 80, 72, 0.1);

  opacity: 0;

  transform:
    translateY(24px);

  transition:
    opacity 0.75s var(--ease-out) var(--delay),
    transform 0.6s var(--ease-out),
    background 0.5s ease,
    box-shadow 0.5s ease;
}

.why__item--visible {
  opacity: 1;
  transform: translateY(0);
}

.why__item:hover {
  background: #dcd8d3;

  transform:
    translateY(-6px);

  box-shadow:
    0 22px 50px
    rgba(52, 47, 43, 0.07);
}


.why__item:nth-child(2),
.why__item:nth-child(3) {
  background: #f1ede8;
}

.why__item:nth-child(2):hover,
.why__item:nth-child(3):hover {
  background: #ddd6d0;
}
.why__item:hover {
  padding-left: 18px;
   background:
    rgba(255, 255, 255, 0.48);

  transform:
    translateX(6px);
}
.why-us__symbol::before,
.why-us__symbol::after {
  border-color:
    var(--color-accent-dark);

  background:
    var(--color-accent-dark);
}
.why__symbol,
.why__item-copy,
.why__arrow {
  position: relative;

  z-index: 1;
}

/* =========================
   SÍMBOLOS
========================= */

.why__symbol {
  width: 74px;
  height: 74px;

  display: grid;
  place-items: center;

  margin-bottom:
    clamp(55px, 7vw, 95px);

  border:
    1px solid
    rgba(116, 103, 93, 0.28);

  border-radius: 50%;

  transition:
    transform 0.55s var(--ease-out),
    background 0.4s ease;
}

.why__item:hover .why__symbol {
  transform:
    rotate(8deg)
    scale(1.05);

  background:
    rgba(255, 255, 255, 0.42);
}

.why__shape {
  position: relative;

  display: block;
}

.why__shape--circle {
  width: 25px;
  height: 25px;

  border:
    1px solid
    var(--color-accent-dark);

  border-radius: 50%;
}

.why__shape--line {
  width: 34px;
  height: 1px;

  background:
    var(--color-accent-dark);
}

.why__shape--cross {
  width: 30px;
  height: 30px;
}

.why__shape--cross::before,
.why__shape--cross::after {
  content: '';

  position: absolute;

  top: 50%;
  left: 50%;

  width: 30px;
  height: 1px;

  background:
    var(--color-accent-dark);
}

.why__shape--cross::before {
  transform:
    translate(-50%, -50%);
}

.why__shape--cross::after {
  transform:
    translate(-50%, -50%)
    rotate(90deg);
}

.why__shape--diamond {
  width: 23px;
  height: 23px;

  border:
    1px solid
    var(--color-accent-dark);

  transform:
    rotate(45deg);
}

/* =========================
   COPY
========================= */

.why__item-copy {
  display: flex;
  flex-direction: column;

  max-width: 540px;
}

.why__item-copy h3 {
  max-width: 420px;

  margin: 0 0 24px;

  font-size:
    clamp(2rem, 3vw, 3.35rem);

  line-height: 0.98;

  letter-spacing: -0.04em;

  color: var(--color-text-dark);
}
.why__item-copy p {
  max-width: 650px;

  margin: 0;

  font-size: 0.93rem;

  line-height: 1.8;

  color:
    rgba(
      65,
      62,
      59,
      0.67
    );
}

/* =========================
   FLECHA
========================= */

.why__arrow {
  justify-self: end;

  font-size: 1.1rem;

  color:
    var(--color-accent-dark);

  opacity: 0.45;

  transition:
    opacity 0.3s ease,
    transform 0.4s
    var(--ease-out);
}

.why__item:hover
.why__arrow {
  opacity: 1;

  transform:
    translate(
      5px,
      -5px
    );
}

/* =========================
   FOOTER
========================= */

.why__footer {
  margin-top:
    clamp(
      60px,
      8vw,
      100px
    );

  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 45px;
}

.why__footer p {
  max-width: 620px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.5rem,
      2.5vw,
      2.6rem
    );

  line-height: 1.16;

  letter-spacing:
    -0.025em;

  color:
    var(--color-text-dark);
}

.why__footer a {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 20px;

  padding-bottom: 7px;

  border-bottom:
    1px solid var(--color-text-dark);

  font-size: 0.66rem;
  font-weight: 500;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color:
    var(--color-text-dark);
}

.why__footer a
span:last-child {
  transition:
    transform 0.3s
    var(--ease-out);
}

.why__footer a:hover
span:last-child {
  transform:
    translate(
      4px,
      -4px
    );
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .why__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .why__eyebrow {
    margin: 0;
  }

  .why__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .why__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .why__item {
    grid-template-columns:
      90px
      minmax(0, 1fr)
      30px;

    gap: 30px;
  }

  .why__symbol {
    width: 70px;
    height: 70px;
  }

  .why__item-copy {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .why__item-copy p {
    max-width: 620px;
  }
}

/* =========================
   MÓVIL
========================= */
@media (max-width: 800px) {
  .why__list {
    grid-template-columns: 1fr;
  }

  .why__item {
    min-height: auto;

    padding:
      34px 28px 80px;
  }

  .why__symbol {
    width: 64px;
    height: 64px;

    margin-bottom: 48px;
  }
}
@media (max-width: 680px) {
  .why {
    padding:
      95px
      20px;

  }

  .why__header {
    margin-bottom: 60px;
  }

  .why__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .why__item {
    min-height: auto;

    grid-template-columns:
      58px
      minmax(0, 1fr);

    gap:
      20px
      22px;

    padding:
      32px
      0;
  }

  .why__item:hover {
    padding-left: 0;
  }

  .why__symbol {
    width: 54px;
    height: 54px;
  }

  .why__shape--circle {
    width: 20px;
    height: 20px;
  }

  .why__shape--line {
    width: 26px;
  }

  .why__shape--cross {
    width: 23px;
    height: 23px;
  }

  .why__shape--cross::before,
  .why__shape--cross::after {
    width: 23px;
  }

  .why__shape--diamond {
    width: 18px;
    height: 18px;
  }

  .why__item-copy {
    grid-column: 2;

    gap: 14px;
  }

  .why__item-copy h3 {
    font-size:
      clamp(
        1.65rem,
        8vw,
        2.25rem
      );
  }

  .why__item-copy p {
    font-size: 0.91rem;
  }

  .why__arrow {
    display: none;
  }

  .why__footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 35px;

    margin-top: 60px;
  }

  .why__footer p {
    font-size:
      clamp(
        1.6rem,
        8vw,
        2.2rem
      );
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .why__item {
    opacity: 1;

    transform: none;

    transition: none;
  }

  .why__item::before,
  .why__symbol,
  .why__arrow {
    transition: none;
  }
}
</style>