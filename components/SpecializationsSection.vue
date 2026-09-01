<template>
  <section
    id="especializacion"
    class="specializations"
  >
    <div class="specializations__inner">
      <div class="specializations__header">
        <p class="specializations__eyebrow">
          Áreas de Especialización
        </p>

        <h2 class="specializations__title">
          Especialización jurídica
          <span>con una mirada humana.</span>
        </h2>

        <p class="specializations__intro">
          Acompañamos cada caso desde el rigor jurídico, la cercanía
          y una atención especialmente sensible a las circunstancias
          personales y familiares.
        </p>
      </div>

      <div class="specializations__grid">
        <article
          v-for="(item, index) in specializations"
          :key="item.id"
          class="specialization-card"
          :class="{
            'specialization-card--active': activeCard === item.id
          }"
          tabindex="0"
          @click="toggleCard(item.id)"
          @keydown.enter.prevent="toggleCard(item.id)"
          @keydown.space.prevent="toggleCard(item.id)"
        >
          <div class="specialization-card__top">
            <span class="specialization-card__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="specialization-card__category">
              Especialización
            </span>
          </div>

          <div class="specialization-card__content">
            <h3>
              {{ item.title }}
            </h3>

            <div class="specialization-card__description">
              <p>
                {{ item.description }}
              </p>

              <a
                :href="item.link"
                class="specialization-card__link"
                @click.stop
              >
                Descubrir área
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <span
            class="specialization-card__circle"
            aria-hidden="true"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCard = ref<string | null>(null)

const specializations = [
  {
    id: 'familia',
    title: 'Derecho de Familia y Menores',
    description:
      'Asesoramiento especializado en los distintos ámbitos del Derecho de Familia, con especial atención a la protección del menor y a las necesidades reales de cada familia.',
    link: '#familia'
  },
  {
    id: 'mediacion',
    title: 'Mediación Familiar',
    description:
      'Un espacio profesional e imparcial orientado a facilitar el diálogo, gestionar el conflicto y alcanzar soluciones equilibradas y duraderas.',
    link: '#mediacion'
  },
  {
    id: 'violencia',
    title: 'Violencia de Género',
    description:
      'Asistencia jurídica inmediata, confidencial y especializada, con acompañamiento durante todas las fases del procedimiento.',
    link: '#violencia-genero'
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
.specializations {
  padding:
    clamp(90px, 10vw, 150px)
    clamp(20px, 4vw, 64px);

  background: var(--color-text-dark);
}

.specializations__inner {
  width: min(100%, var(--container-width));
  margin: 0 auto;
}

/* Cabecera */

.specializations__header {
  max-width: 900px;

  margin-bottom:
    clamp(
      60px,
      8vw,
      100px
    );
}

.specializations__eyebrow {
  margin-bottom: 20px;

  font-size: 0.72rem;
  font-weight: 500;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: var(--color-accent-light);
}

.specializations__title {
  margin-bottom: 28px;

  font-size:
    clamp(
      2.8rem,
      5vw,
      5.2rem
    );

  line-height: 0.98;
  letter-spacing: -0.035em;

  color: #ffffff;
}

.specializations__title span {
  display: block;

  color: rgba(255, 255, 255, 0.55);
}

.specializations__intro {
  max-width: 680px;

  margin: 0;

  font-size:
    clamp(
      1rem,
      1.4vw,
      1.15rem
    );

  line-height: 1.8;

  color: rgba(255, 255, 255, 0.68);
}

/* Grid */

.specializations__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

/* Card */

.specialization-card {
  position: relative;

  min-height: 560px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding:
    clamp(
      28px,
      3vw,
      42px
    );

  overflow: hidden;

  border-right: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  cursor: pointer;

  outline: none;

  transition:
    background 0.45s ease,
    color 0.45s ease;
}

.specialization-card::before {
  content: '';

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      155deg,
      rgba(197, 187, 176, 0.98),
      rgba(159, 148, 137, 0.98)
    );

  opacity: 0;

  transition: opacity 0.45s ease;
}

.specialization-card:hover::before,
.specialization-card:focus-visible::before,
.specialization-card--active::before {
  opacity: 1;
}

/* Cabecera card */

.specialization-card__top {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
}

.specialization-card__number,
.specialization-card__category {
  font-size: 0.68rem;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);

  transition: color 0.45s ease;
}

.specialization-card:hover .specialization-card__number,
.specialization-card:hover .specialization-card__category,
.specialization-card:focus-visible .specialization-card__number,
.specialization-card:focus-visible .specialization-card__category,
.specialization-card--active .specialization-card__number,
.specialization-card--active .specialization-card__category {
  color: rgba(255, 255, 255, 0.82);
}

/* Contenido */

.specialization-card__content {
  position: relative;
  z-index: 2;
}

.specialization-card__content h3 {
  max-width: 380px;

  margin: 0;

  font-size:
    clamp(
      2.4rem,
      3.5vw,
      4rem
    );

  line-height: 0.98;
  letter-spacing: -0.035em;

  color: white;

  transition:
    transform 0.45s ease;
}

.specialization-card__description {
  max-height: 0;

  margin-top: 0;

  overflow: hidden;

  opacity: 0;

  transform: translateY(18px);

  transition:
    max-height 0.55s ease,
    opacity 0.4s ease,
    transform 0.45s ease,
    margin-top 0.45s ease;
}

.specialization-card:hover
.specialization-card__description,
.specialization-card:focus-visible
.specialization-card__description,
.specialization-card--active
.specialization-card__description {
  max-height: 260px;

  margin-top: 28px;

  opacity: 1;

  transform: translateY(0);
}

.specialization-card__description p {
  margin: 0;

  max-width: 370px;

  font-size: 0.96rem;
  line-height: 1.72;

  color: rgba(255, 255, 255, 0.84);
}

.specialization-card__link {
  display: inline-flex;
  align-items: center;

  gap: 10px;

  margin-top: 24px;

  padding-bottom: 4px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.55);

  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: white;
}

.specialization-card__link span {
  transition: transform 0.25s ease;
}

.specialization-card__link:hover span {
  transform: translate(3px, -3px);
}

/* Decoración */

.specialization-card__circle {
  position: absolute;
  top: 50%;
  right: -180px;

  z-index: 1;

  width: 300px;
  height: 300px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;

  transform:
    translateY(-50%)
    scale(0.8);

  opacity: 0;

  transition:
    opacity 0.5s ease,
    transform 0.6s ease;
}

.specialization-card:hover
.specialization-card__circle,
.specialization-card:focus-visible
.specialization-card__circle,
.specialization-card--active
.specialization-card__circle {
  opacity: 1;

  transform:
    translateY(-50%)
    scale(1);
}

/* Tablet */

@media (max-width: 1050px) {
  .specializations__grid {
    grid-template-columns: 1fr;
  }

  .specialization-card {
    min-height: 390px;
  }

  .specialization-card__content h3 {
    max-width: 650px;
  }

  .specialization-card__description {
    max-width: 620px;
  }
}

/* Móvil */

@media (max-width: 640px) {
  .specializations {
    padding:
      80px
      20px;
  }

  .specializations__title {
    font-size:
      clamp(
        2.5rem,
        11vw,
        3.8rem
      );

    line-height: 1.02;
  }

  .specializations__intro {
    font-size: 0.97rem;
    line-height: 1.7;
  }

  .specialization-card {
    min-height: 360px;

    padding:
      26px
      22px;
  }

  .specialization-card__content h3 {
    font-size:
      clamp(
        2.35rem,
        11vw,
        3.5rem
      );

    line-height: 1;
  }

  /*
    En móvil el contenido se abre
    al tocar la card.
  */

  .specialization-card--active
  .specialization-card__description {
    max-height: 320px;
  }

  .specialization-card__circle {
    right: -210px;
  }
}

/* Dispositivos que no tienen hover */

@media (hover: none) {
  .specialization-card:hover::before {
    opacity: 0;
  }

  .specialization-card:hover
  .specialization-card__description {
    max-height: 0;
    margin-top: 0;
    opacity: 0;
    transform: translateY(18px);
  }

  .specialization-card--active::before {
    opacity: 1;
  }

  .specialization-card--active
  .specialization-card__description {
    max-height: 320px;
    margin-top: 28px;
    opacity: 1;
    transform: translateY(0);
  }
}

/* Accesibilidad */

@media (prefers-reduced-motion: reduce) {
  .specialization-card,
  .specialization-card::before,
  .specialization-card__content h3,
  .specialization-card__description,
  .specialization-card__circle {
    transition: none;
  }
}
</style>