<template>
  <section
    id="otras-areas"
    class="other-areas"
  >
    <div class="other-areas__inner">
      <div class="other-areas__header">
        <p class="other-areas__eyebrow">
          Otras Áreas de Actuación
        </p>

        <div class="other-areas__heading">
          <h2>
            Asesoramiento jurídico
            <span>más allá del ámbito familiar.</span>
          </h2>

          <p>
            El despacho presta también asistencia
            en otras materias jurídicas, con un enfoque
            cercano, riguroso y adaptado a cada caso.
          </p>
        </div>
      </div>

      <div class="other-areas__list">
        <article
            v-for="area in areas"
            :id="area.id"
            :key="area.id"
            class="other-area"
            :class="{
                'other-area--active':
                activeArea === area.id
            }"
            >
          <button
            type="button"
            class="other-area__trigger"
            :aria-expanded="activeArea === area.id"
            :aria-controls="`panel-${area.id}`"
            @click="toggleArea(area.id)"
          >
            <span class="other-area__title">
              {{ area.title }}
            </span>

            <span
              class="other-area__plus"
              aria-hidden="true"
            >
              +
            </span>
          </button>

          <div
            :id="`panel-${area.id}`"
            class="other-area__panel"
          >
            <div class="other-area__panel-inner">
              <ul>
                <li
                  v-for="item in area.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>

              <a href="#contacto">
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

      <div class="other-areas__footer">
        <p>
          Si tu consulta no encaja en estas áreas,
          puedes contactar con el despacho para valorar
          tu caso de forma personalizada.
        </p>

        <a href="#contacto">
          <span>
            Contactar
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

const activeArea =
  ref<string | null>('civil')

const areas = [
  {
    id: 'civil',

    title:
      'Derecho Civil',

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

    title:
      'Extranjería y Nacionalidad',

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

    title:
      'Derecho Penal',

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
</script>

<style scoped>
.other-areas {
  position: relative;
 transition:
    background
    0.35s ease;
  padding:
    var(--section-space)
    var(--page-padding);

  background:
    var(--color-surface);
}

.other-areas__inner {
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

.other-areas__header {
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
      9vw,
      125px
    );
}

.other-areas__eyebrow {
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

.other-areas__heading {
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

.other-areas__heading h2 {
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

.other-areas__heading h2 span {
  display: block;

  font-style: italic;

  color:
    var(--color-accent-dark);
}

.other-areas__heading > p {
  margin: 0;

  padding-bottom: 7px;

  font-size: 0.95rem;

  line-height: 1.8;

  color:
    rgba(65, 62, 59, 0.68);
}

/* =========================
   LIST
========================= */

.other-areas__list {
  border-top:
    1px solid
    var(--color-border);
}

.other-area {
  border-bottom:
    1px solid
    var(--color-border);
}

.other-area__trigger {
  width: 100%;
 padding-left:
    clamp(
      20px,
      2vw,
      30px
    );

  padding-right:
    clamp(
      20px,
      2vw,
      30px
    );
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    54px;

  gap: 30px;

  align-items: center;

  padding:
    clamp(
      34px,
      5vw,
      60px
    )
    0;

  border: 0;

  background: transparent;

  color:
    var(--color-text-dark);

  text-align: left;

  cursor: pointer;
}

.other-area__title {
  font-family:
    var(--font-serif);

  font-size:
    clamp(
      2.8rem,
      5vw,
      5.8rem
    );

  line-height: 0.98;

  letter-spacing: -0.045em;
}

.other-area__plus {
  width: 48px;
  height: 48px;

  display: grid;

  place-items: center;

  justify-self: end;

  border:
    1px solid
    rgba(90, 84, 78, 0.18);

  border-radius: 50%;

  font-family:
    var(--font-sans);

  font-size: 1.2rem;

  font-weight: 300;

  color:
    var(--color-text-dark);

  transition:
    transform
    0.4s
    var(--ease-out),

    background
    0.35s ease;
}

.other-area--active
.other-area__plus {
  transform:
    rotate(45deg);

 background:
    rgba(
      238,
      232,
      225,
      0.42
    );
}

/* =========================
   PANEL
========================= */

.other-area__panel {
  display: grid;

  grid-template-rows: 0fr;

  overflow: hidden;

  transition:
    grid-template-rows
    0.55s
    var(--ease-out);
}

.other-area--active
.other-area__panel {
  grid-template-rows: 1fr;
}

.other-area__panel-inner {
  min-height: 0;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  gap:
    clamp(
      40px,
      8vw,
      120px
    );

  align-items: end;

  padding:
    0
    0
    clamp(
      40px,
      5vw,
      62px
    )
    clamp(
      40px,
      10vw,
      150px
    );
}

.other-area__panel ul {
  margin: 0;

  padding: 0;

  list-style: none;
}

.other-area__panel li {
  position: relative;

  max-width: 760px;

  padding:
    12px
    0
    12px
    22px;

  border-bottom:
    1px solid
    rgba(80, 75, 70, 0.1);

  font-size: 0.95rem;

  line-height: 1.6;

  color:
    rgba(60, 57, 54, 0.72);
}

.other-area__panel li::before {
  content: '';

  position: absolute;

  top: 21px;
  left: 0;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  background:
    var(--color-accent-dark);
}

.other-area__panel a {
  flex-shrink: 0;

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
   HOVER
========================= */

@media (
  hover: hover
) and (
  pointer: fine
) {
  .other-area__trigger:hover
  .other-area__title {
    color:
      var(--color-accent-dark);
  }

  .other-area__trigger:hover
  .other-area__plus {
    background:
      var(--color-background-soft);
  }
}

/* =========================
   FOOTER
========================= */

.other-areas__footer {
  margin-top:
    clamp(
      75px,
      9vw,
      120px
    );

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 45px;
}

.other-areas__footer p {
  max-width: 660px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.5rem,
      2.6vw,
      2.7rem
    );

  line-height: 1.15;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}

.other-areas__footer > a {
  flex-shrink: 0;

  display: inline-flex;

  align-items: center;

  gap: 18px;

  padding-bottom: 7px;

  border-bottom:
    1px solid
    var(--color-text-dark);

  font-size: 0.63rem;

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
  .other-areas__header {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .other-areas__eyebrow {
    margin: 0;
  }

  .other-areas__heading {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .other-areas__heading > p {
    max-width: 520px;

    margin-left: auto;
  }

  .other-area__panel-inner {
    padding-left: 70px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 720px) {
  .other-areas {
    padding:
      95px
      20px;
  }

  .other-areas__header {
    margin-bottom: 60px;
  }

  .other-areas__heading h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.4rem
      );
  }

  .other-area__trigger {
    grid-template-columns:
      minmax(0, 1fr)
      42px;

    gap: 20px;

    padding:
      30px
      0;
  }

  .other-area__title {
    font-size:
      clamp(
        2.4rem,
        11vw,
        3.5rem
      );
  }

  .other-area__plus {
    width: 40px;
    height: 40px;
  }

  .other-area__panel-inner {
    grid-template-columns: 1fr;

    gap: 32px;

    padding:
      0
      0
      38px;
  }

  .other-areas__footer {
    flex-direction: column;

    align-items: flex-start;

    gap: 34px;

    margin-top: 70px;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (
  prefers-reduced-motion: reduce
) {
  .other-area__panel,
  .other-area__plus {
    transition: none;
  }
}
</style>