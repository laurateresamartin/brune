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

        <h2 class="why__title">
          Rigor jurídico.
          <span>Cercanía personal.</span>
        </h2>

        <p class="why__intro">
          Una forma de ejercer la abogacía basada en la especialización,
          la responsabilidad y un acompañamiento real durante todo el proceso.
        </p>
      </div>

      <div class="why__grid">
        <article
          v-for="(item, index) in items"
          :key="item.title"
          class="why__item"
          :class="{ 'why__item--visible': isVisible }"
          :style="{ '--delay': `${index * 110}ms` }"
        >
          <div class="why__item-top">
            <span class="why__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="why__line" />
          </div>

          <div class="why__item-content">
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const items = [
  {
    title: 'Experiencia y Especialización',
    description:
      'Amplia experiencia en el asesoramiento jurídico, unida a una formación continua y rigurosa, para ofrecer una asistencia sólida, personalizada y de calidad.'
  },
  {
    title: 'El interés del menor',
    description:
      'El bienestar de los menores guía cada actuación, protegiendo sus derechos y favoreciendo soluciones que reduzcan el impacto del conflicto familiar.'
  },
  {
    title: 'Acompañamiento',
    description:
      'Cada procedimiento tiene una historia personal detrás. Por eso ofrecemos un acompañamiento cercano, honesto y respetuoso durante todo el proceso.'
  },
  {
    title: 'Compromiso',
    description:
      'Ejercicio de la abogacía desde la seriedad, la responsabilidad, el trato humanizado y la implicación en cada asunto.'
  }
]

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
      threshold: 0.2
    }
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.why {
  padding:
    clamp(90px, 10vw, 150px)
    clamp(20px, 4vw, 64px);

  background: #efebe6;
}

.why__inner {
  width: min(100%, var(--container-width));
  margin: 0 auto;
}

/* Cabecera */

.why__header {
  max-width: 900px;

  margin-bottom:
    clamp(
      60px,
      8vw,
      100px
    );
}

.why__eyebrow {
  margin-bottom: 20px;

  font-size: 0.72rem;
  font-weight: 500;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: var(--color-accent);
}

.why__title {
  margin-bottom: 26px;

  font-size:
    clamp(
      2.8rem,
      5vw,
      5.2rem
    );

  line-height: 0.98;
  letter-spacing: -0.035em;
}

.why__title span {
  display: block;

  color: var(--color-text);
}

.why__intro {
  max-width: 680px;

  margin: 0;

  font-size:
    clamp(
      1rem,
      1.4vw,
      1.15rem
    );

  line-height: 1.8;

  color: rgba(85, 84, 83, 0.84);
}

/* Grid */

.why__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

/* Item */

.why__item {
  min-height: 390px;

  padding:
    clamp(
      28px,
      4vw,
      48px
    );

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);

  background: transparent;

  opacity: 0;
  transform: translateY(28px);

  transition:
    opacity 0.75s ease var(--delay),
    transform 0.75s ease var(--delay),
    background 0.4s ease;
}

.why__item--visible {
  opacity: 1;
  transform: translateY(0);
}

.why__item:hover {
  background: rgba(255, 255, 255, 0.4);
}

.why__item-top {
  display: flex;
  align-items: center;

  gap: 14px;
}

.why__number {
  font-family: var(--font-serif);

  font-size: 0.82rem;

  color: var(--color-accent);
}

.why__line {
  width: 42px;
  height: 1px;

  background: var(--color-border);
}

.why__item-content {
  max-width: 470px;
}

.why__item-content h3 {
  margin-bottom: 18px;

  font-size:
    clamp(
      2rem,
      3vw,
      3.1rem
    );

  line-height: 1.04;
  letter-spacing: -0.025em;
}

.why__item-content p {
  margin: 0;

  max-width: 420px;

  font-size: 0.98rem;
  line-height: 1.75;

  color: rgba(85, 84, 83, 0.84);
}

/* Tablet */

@media (max-width: 900px) {
  .why__grid {
    grid-template-columns: 1fr;
  }

  .why__item {
    min-height: 330px;
  }
}

/* Móvil */

@media (max-width: 640px) {
  .why {
    padding:
      80px
      20px;
  }

  .why__title {
    font-size:
      clamp(
        2.5rem,
        11vw,
        3.8rem
      );

    line-height: 1.02;
  }

  .why__intro {
    font-size: 0.97rem;
    line-height: 1.7;
  }

  .why__item {
    min-height: 300px;

    padding: 28px 24px;
  }

  .why__item-content h3 {
    font-size:
      clamp(
        2rem,
        9vw,
        2.9rem
      );
  }
}

/* Accesibilidad */

@media (prefers-reduced-motion: reduce) {
  .why__item {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>