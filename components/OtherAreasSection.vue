<template>
  <section
    id="otras-areas"
    ref="sectionRef"
    class="other-areas"
  >
    <div class="other-areas__inner">
      <header
        class="other-areas__header"
        :class="{ 'is-visible': isVisible }"
      >
        <p class="other-areas__eyebrow">
          Otras Áreas de Actuación
        </p>

        <h2>
          Asesoramiento jurídico
          <span>más allá del ámbito familiar.</span>
        </h2>
      </header>

      <div class="other-areas__list">
        <article
          v-for="(area, index) in areas"
          :key="area.id"
          class="area"
          :class="{
            'area--active': activeArea === area.id,
            'is-visible': isVisible
          }"
          :style="{ '--delay': `${index * 100}ms` }"
          tabindex="0"
          :aria-expanded="activeArea === area.id"
          @click="toggleArea(area.id)"
          @keydown.enter.prevent="toggleArea(area.id)"
          @keydown.space.prevent="toggleArea(area.id)"
        >
          <div class="area__heading">
            <span class="area__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <h3>
              {{ area.title }}
            </h3>

            <button
              type="button"
              class="area__button"
              tabindex="-1"
              aria-hidden="true"
            >
              <span />
              <span />
            </button>
          </div>

          <div class="area__details">
            <div class="area__details-inner">
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
                Consultar
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
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
const activeArea = ref<string | null>(null)

const areas = [
  {
    id: 'civil',
    title: 'Derecho Civil',
    items: [
      'Herencias y Sucesiones',
      'Derecho Bancario',
      'Reclamaciones de deudas',
      'Responsabilidad civil',
      'Comunidades de Propietarios',
      'Revisión, elaboración, asesoramiento y seguimiento de documentación contractual'
    ]
  },
  {
    id: 'extranjeria',
    title: 'Extranjería y Nacionalidad',
    items: [
      'Visados y permisos de residencia',
      'Nacionalidad española',
      'Expulsiones y recursos',
      'Matrimonios entre personas de diferentes nacionalidades',
      'Homologaciones de títulos'
    ]
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    items: [
      'Asesoramiento legal en materia penal',
      'Asistencia letrada',
      'Defensa',
      'Acusación'
    ]
  }
]

const toggleArea = (id: string) => {
  activeArea.value =
    activeArea.value === id
      ? null
      : id
}

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
      threshold: 0.1
    }
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.other-areas {
  padding:
    clamp(100px, 11vw, 170px)
    clamp(20px, 4vw, 64px);

  background: #f5f2ed;
}

.other-areas__inner {
  width: min(100%, var(--container-width));
  margin: 0 auto;
}

.other-areas__header {
  max-width: 900px;

  margin-bottom:
    clamp(65px, 8vw, 110px);

  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.other-areas__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.other-areas__eyebrow {
  margin-bottom: 20px;

  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

.other-areas__header h2 {
  margin: 0;

  font-size:
    clamp(3rem, 5.5vw, 5.8rem);

  line-height: 0.96;
  letter-spacing: -0.04em;
}

.other-areas__header h2 span {
  display: block;
  color: var(--color-accent);
}

/* LISTADO */

.other-areas__list {
  border-top:
    1px solid var(--color-border);
}

.area {
  border-bottom:
    1px solid var(--color-border);

  cursor: pointer;

  opacity: 0;
  transform: translateY(20px);

  transition:
    opacity 0.7s ease var(--delay),
    transform 0.7s ease var(--delay);
}

.area.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.area__heading {
  min-height: 155px;

  display: grid;
  grid-template-columns:
    70px
    minmax(0, 1fr)
    50px;

  gap: 25px;

  align-items: center;

  transition:
    padding-left 0.35s ease;
}

.area:hover .area__heading {
  padding-left: 15px;
}

.area__number {
  font-family:
    var(--font-serif);

  font-size: 0.78rem;

  color: var(--color-accent-dark);
}

.area__heading h3 {
  margin: 0;

  font-size:
    clamp(2.2rem, 4vw, 4.4rem);

  line-height: 1;
  letter-spacing: -0.035em;
}

/* BOTÓN + */

.area__button {
  position: relative;

  width: 46px;
  height: 46px;

  padding: 0;

  border:
    1px solid var(--color-border);

  border-radius: 50%;

  background: transparent;
}

.area__button span {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 14px;
  height: 1px;

  background:
    var(--color-text-dark);

  transform:
    translate(-50%, -50%);

  transition:
    transform 0.4s ease;
}

.area__button span:last-child {
  transform:
    translate(-50%, -50%)
    rotate(90deg);
}

.area--active
.area__button span:last-child {
  transform:
    translate(-50%, -50%)
    rotate(0);
}

/* DETALLES */

.area__details {
  max-height: 0;

  overflow: hidden;

  opacity: 0;

  transition:
    max-height 0.65s ease,
    opacity 0.4s ease;
}

.area--active
.area__details {
  max-height: 600px;
  opacity: 1;
}

.area__details-inner {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  gap: 50px;

  padding:
    0
    0
    55px
    95px;
}

.area__details ul {
  margin: 0;
  padding: 0;

  columns: 2;
  column-gap: 60px;

  list-style: none;
}

.area__details li {
  position: relative;

  padding:
    9px
    0
    9px
    20px;

  break-inside: avoid;

  color:
    rgba(70, 68, 66, 0.78);
}

.area__details li::before {
  content: '';

  position: absolute;

  top: 19px;
  left: 0;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    var(--color-accent-dark);
}

.area__details a {
  align-self: end;

  display: inline-flex;
  align-items: center;

  gap: 10px;

  padding-bottom: 5px;

  border-bottom:
    1px solid var(--color-text-dark);

  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* TABLET */

@media (max-width: 800px) {
  .area__heading {
    grid-template-columns:
      45px
      minmax(0, 1fr)
      46px;

    min-height: 130px;
  }

  .area__details-inner {
    padding-left: 70px;
  }
}

/* MÓVIL */

@media (max-width: 640px) {
  .other-areas {
    padding:
      85px
      20px;
  }

  .other-areas__header h2 {
    font-size:
      clamp(2.8rem, 12vw, 4rem);
  }

  .area__heading {
    min-height: 120px;

    grid-template-columns:
      30px
      minmax(0, 1fr)
      40px;

    gap: 12px;
  }

  .area__heading h3 {
    font-size:
      clamp(2rem, 9vw, 3rem);
  }

  .area__button {
    width: 38px;
    height: 38px;
  }

  .area:hover
  .area__heading {
    padding-left: 0;
  }

  .area__details-inner {
    grid-template-columns: 1fr;

    gap: 30px;

    padding:
      0
      0
      40px
      42px;
  }

  .area__details ul {
    columns: 1;
  }

  .area__details a {
    justify-self: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .other-areas__header,
  .area,
  .area__details {
    transition: none;
  }

  .other-areas__header,
  .area {
    opacity: 1;
    transform: none;
  }
}
</style>