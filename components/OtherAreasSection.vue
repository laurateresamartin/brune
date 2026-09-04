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
           
            >
        <div class="other-area__trigger">
          <span class="other-area__title">
            {{ area.title }}
          </span>
        </div>
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
import { ref, onMounted, watch , nextTick} from 'vue'

const route = useRoute()

const activeArea =
  ref<string | null>(null)

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
const scrollToArea = async (
  id: string
) => {
  await nextTick()

  setTimeout(() => {
    const element =
      document.getElementById(id)

    if (!element) {
      return
    }

    const header =
      document.querySelector<HTMLElement>(
        '.header'
      )

    const headerHeight =
      header?.offsetHeight ?? 0

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      20

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }, 580)
}
const openAreaFromHash = async () => {
  const hash =
    route.hash.replace('#', '')

  const validArea =
    areas.some(
      area => area.id === hash
    )

  if (!validArea) {
    return
  }

  activeArea.value = hash

  await scrollToArea(hash)
}
onMounted(() => {
  openAreaFromHash()
})

watch(
  () => route.hash,
  () => {
    openAreaFromHash()
  }
)

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
    100px
    var(--page-padding);

  background:
    #f2f0ed;
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
      4.8rem
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

/* =========================
   LIST
========================= */
.other-areas__list {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap:
    clamp(
      16px,
      2vw,
      28px
    );

  align-items: start;

  counter-reset: area;
}

.other-area {
  position: relative;

  min-height: 400px;

  overflow: hidden;

  background: #faf9f7;

  transition:
    background 0.45s ease,
    transform 0.5s var(--ease-out),
    box-shadow 0.5s ease;
}

.other-area:hover {
  background: #dedad5;

  transform: translateY(-4px);

  box-shadow:
    0 20px 45px
    rgba(52, 47, 43, 0.06);
}

.other-area::before {
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
    transform 0.7s var(--ease-out),
    opacity 0.18s ease;

  pointer-events: none;
}

.other-area:hover::before,
.other-area--active::before {
  opacity: 1;

  transform:
    scale(1);
}
.other-area__trigger,
.other-area__panel {
  position: relative;
  z-index: 2;
}



/* =========================
   TRIGGER
========================= */
.other-area__trigger {
  min-height: 400px;

  display: flex;
  flex-direction: column;

  padding:
    clamp(30px, 3vw, 42px);

  transition:
    min-height 0.6s var(--ease-out);
}

.other-area:hover
.other-area__trigger {
  min-height: 230px;
}
.other-area__trigger::before {
  content:
    '0' counter(area);

  counter-increment: area;

  display: block;

  margin-bottom:
    clamp(
      70px,
      8vw,
      110px
    );

  font-family:
    var(--font-serif);

  font-size: 1rem;

  font-style: italic;

  color:
    var(--color-accent-dark);
}


/* =========================
   TITLE
========================= */

.other-area__title {
  margin-top: auto;

  font-family: var(--font-serif);

  font-size:
    clamp(2.4rem, 3vw, 3.5rem);

  line-height: 0.96;

  color: var(--color-text-dark);

  transition:
    transform 0.5s var(--ease-out);
}

.other-area:hover
.other-area__title {
  transform: translateY(-10px);
}


.other-area:hover
.other-area__title,
.other-area--active
.other-area__title {
  transform:
    translateY(-4px);

  color:
    var(--color-text-dark);
}

/* =========================
   PLUS
========================= */

.other-area__plus {
  position: absolute;

  right:
    clamp(
      26px,
      3vw,
      40px
    );

  bottom:
    clamp(
      26px,
      3vw,
      38px
    );

  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border:
    1px solid
    rgba(
      90,
      84,
      78,
      0.25
    );

  border-radius: 50%;

  font-family:
    var(--font-sans);

  font-size: 1rem;

  color:
    var(--color-text-dark);

  transition:
    transform 0.45s var(--ease-out),
    background 0.35s ease;
}
.other-area--active
.other-area__plus {
  transform:
    rotate(45deg);

  background:
    var(--color-surface-beige);

  border-color:
    rgba(116, 103, 93, 0.28);
}

/* =========================
   PANEL
========================= */

.other-area__panel {
  display: grid;
  grid-template-rows: 0fr;

  opacity: 0;

  transition:
    grid-template-rows 0.6s var(--ease-out),
    opacity 0.35s ease;
}

.other-area:hover .other-area__panel {
  grid-template-rows: 1fr;
  opacity: 1;
}

.other-area__panel-inner {
  min-height: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 28px;

  padding:
    0
    clamp(30px, 3vw, 42px)
    clamp(34px, 4vw, 46px);
}




/* línea fina superior del contenido */

.other-area__panel-inner::before {
  content: '';

  width: 100%;
  height: 1px;

  background:
    rgba(
      90,
      80,
      72,
      0.14
    );

  margin-bottom: 8px;
}
/* =========================
   LIST ITEMS
========================= */

.other-area__panel ul {
  margin: 0;

  padding: 0;

  list-style: none;
}

.other-area__panel li {
  position: relative;

  max-width: 720px;

  padding:
    9px
    0
    9px
    16px;

  border-bottom:
    1px solid
    rgba(80, 75, 70, 0.07);

  font-size: 0.88rem;

  line-height: 1.55;

  color:
    rgba(60, 57, 54, 0.7);
}

.other-area__panel li::before {
  content: '';

  position: absolute;

  top: 16px;
  left: 1px;

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background:
    var(--color-accent-dark);
}



/* =========================
   CONSULTAR
========================= */

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

  transition:
    gap
    0.35s
    var(--ease-out),
    color
    0.35s ease;
}

.other-area__panel a:hover {
  gap: 23px;

  color:
    var(--color-accent-dark);
}

/* =========================
   HOVER
========================= */
@media (max-width: 850px) {
  .other-areas__list {
    grid-template-columns: 1fr;
  }

  .other-area {
    min-height: 320px;
  }

  .other-area__trigger {
    min-height: 320px;
  }
}
@media (max-width: 850px) {
  .other-areas__list {
    grid-template-columns: 1fr;
  }

  .other-area__panel {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .other-area__trigger {
    min-height: auto;
  }

  .other-area__title {
    margin-top: 80px;
  }

  .other-area__arrow {
    display: none;
  }
}
@media (
  hover: hover
) and (
  pointer: fine
) {
  .other-area:hover {
    border-color:
      rgba(
        111,
        97,
        85,
        0.22
      );

    box-shadow:
      0 22px 60px
      rgba(
        69,
        55,
        44,
        0.055
      );
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
      55px,
      6vw,
      80px
    );

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 45px;
}

.other-areas__footer p {
  max-width: 610px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.35rem,
      2vw,
      2.1rem
    );

  line-height: 1.18;

  letter-spacing: -0.02em;

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
      88px
      20px;
  }

  .other-areas__header {
    margin-bottom:
      48px;
  }

  .other-areas__heading h2 {
    font-size:
      clamp(
        2.8rem,
        13vw,
        4.1rem
      );
  }

  .other-areas__list {
    gap: 14px;
  }

  .other-area__trigger {
    grid-template-columns:
      36px
      minmax(0, 1fr)
      36px;

    gap: 15px;

    padding:
      23px
      18px;
  }

  .other-area__trigger::before {
    width: 34px;
    height: 34px;

    font-size: 0.76rem;
  }

  .other-area__title {
    font-size:
      clamp(
        1.85rem,
        8.5vw,
        2.7rem
      );
  }

  .other-area__plus {
    width: 34px;
    height: 34px;
  }

  .other-area__panel-inner {
    grid-template-columns:
      1fr;

    gap: 26px;

    padding:
      0
      18px
      28px
      68px;
  }

  .other-areas__footer {
    flex-direction:
      column;

    align-items:
      flex-start;

    gap: 28px;

    margin-top:
      55px;
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