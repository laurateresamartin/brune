<template>
  <section
    id="violencia-genero"
    ref="sectionRef"
    class="violence"
  >
    <div class="violence__inner">
      <header
        class="violence__header"
        :class="{ 'is-visible': isVisible }"
      >
        <p class="violence__eyebrow">
          Violencia de Género
        </p>

        <h2 class="violence__title">
          Asistencia jurídica
          <span>especializada y confidencial.</span>
        </h2>

        <p class="violence__intro">
          Un acompañamiento jurídico riguroso y cercano
          durante todas las fases del procedimiento.
        </p>
      </header>

      <div class="violence__content">
        <div
          class="violence__statement"
          :class="{ 'is-visible': isVisible }"
        >
          <span class="violence__statement-number">
            01
          </span>

          <p>
            Actuación profesional orientada a ofrecer
            seguridad jurídica, protección y acompañamiento
            durante todo el proceso.
          </p>

          <a
            href="#contacto"
            class="violence__cta"
          >
            Solicita asesoramiento
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="violence__services">
          <article
            v-for="(service, index) in services"
            :key="service"
            class="violence-service"
            :class="{ 'is-visible': isVisible }"
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <span class="violence-service__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <p>
              {{ service }}
            </p>
          </article>
        </div>
      </div>

      <div
        class="violence__footer"
        :class="{ 'is-visible': isVisible }"
      >
        <span>
          Atención personalizada
        </span>

        <span class="violence__footer-line" />

        <span>
          Confidencialidad
        </span>

        <span class="violence__footer-line" />

        <span>
          Acompañamiento
        </span>
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

const services = [
  'Asesoramiento jurídico inmediato, confidencial y altamente especializado.',
  'Defensa penal rigurosa en todas las fases del proceso.',
  'Coordinación con servicios sociales y recursos especializados.',
  'Acompañamiento continuo, cercano y comprometido, con especial implicación en la protección de menores y del entorno familiar.',
  'Gestión coordinada de procedimientos civiles asociados: custodia, vivienda y pensiones.',
  'Tramitación integral de prestaciones y otros derechos de la víctima.'
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
.violence {
  padding:
    clamp(110px, 12vw, 190px)
    clamp(20px, 4vw, 64px);

  background: #2f2e2d;

  color: #ffffff;
}

.violence__inner {
  width: min(100%, var(--container-width));
  margin: 0 auto;
}

/* =========================
   HEADER
========================= */

.violence__header {
  max-width: 1050px;

  margin-bottom:
    clamp(
      70px,
      9vw,
      120px
    );

  opacity: 0;

  transform:
    translateY(30px);

  transition:
    opacity 0.85s ease,
    transform 0.85s ease;
}

.violence__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.violence__eyebrow {
  margin-bottom: 22px;

  font-size: 0.7rem;

  letter-spacing: 0.22em;
  text-transform: uppercase;

  color:
    rgba(255, 255, 255, 0.5);
}

.violence__title {
  margin-bottom: 30px;

  font-size:
    clamp(
      3rem,
      6vw,
      6.5rem
    );

  line-height: 0.94;
  letter-spacing: -0.045em;

  color: white;
}

.violence__title span {
  display: block;

  color:
    rgba(255, 255, 255, 0.5);
}

.violence__intro {
  max-width: 660px;

  margin: 0;

  font-size:
    clamp(
      1rem,
      1.4vw,
      1.18rem
    );

  line-height: 1.8;

  color:
    rgba(255, 255, 255, 0.65);
}

/* =========================
   CONTENT
========================= */

.violence__content {
  display: grid;

  grid-template-columns:
    minmax(280px, 0.7fr)
    minmax(0, 1.3fr);

  gap:
    clamp(
      50px,
      8vw,
      120px
    );

  align-items: start;
}

/* =========================
   STATEMENT
========================= */

.violence__statement {
  position: sticky;
  top: 150px;

  opacity: 0;
  transform: translateY(25px);

  transition:
    opacity 0.8s ease 0.15s,
    transform 0.8s ease 0.15s;
}

.violence__statement.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.violence__statement-number {
  display: block;

  margin-bottom: 28px;

  font-family:
    var(--font-serif);

  font-size: 0.8rem;

  color:
    rgba(255, 255, 255, 0.4);
}

.violence__statement p {
  max-width: 420px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.8rem,
      2.8vw,
      3rem
    );

  line-height: 1.12;

  letter-spacing: -0.025em;

  color:
    rgba(255, 255, 255, 0.92);
}

.violence__cta {
  display: inline-flex;
  align-items: center;

  gap: 12px;

  margin-top: 38px;

  padding-bottom: 6px;

  border-bottom:
    1px solid rgba(255, 255, 255, 0.55);

  font-size: 0.7rem;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: white;
}

.violence__cta span {
  transition:
    transform 0.25s ease;
}

.violence__cta:hover span {
  transform:
    translate(3px, -3px);
}

/* =========================
   SERVICIOS
========================= */

.violence__services {
  border-top:
    1px solid rgba(255, 255, 255, 0.14);
}

.violence-service {
  display: grid;

  grid-template-columns:
    50px
    minmax(0, 1fr);

  gap: 25px;

  padding:
    clamp(
      26px,
      3vw,
      40px
    )
    0;

  border-bottom:
    1px solid rgba(255, 255, 255, 0.14);

  opacity: 0;

  transform:
    translateY(20px);

  transition:
    opacity 0.7s ease var(--delay),
    transform 0.7s ease var(--delay),
    padding-left 0.3s ease;
}

.violence-service.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.violence-service:hover {
  padding-left: 12px;
}

.violence-service__number {
  padding-top: 5px;

  font-family:
    var(--font-serif);

  font-size: 0.72rem;

  color:
    rgba(255, 255, 255, 0.35);
}

.violence-service p {
  max-width: 720px;

  margin: 0;

  font-size:
    clamp(
      1rem,
      1.5vw,
      1.2rem
    );

  line-height: 1.65;

  color:
    rgba(255, 255, 255, 0.78);
}

/* =========================
   FOOTER
========================= */

.violence__footer {
  margin-top:
    clamp(
      80px,
      10vw,
      140px
    );

  padding-top: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 22px;

  border-top:
    1px solid rgba(255, 255, 255, 0.14);

  opacity: 0;

  transition:
    opacity 0.8s ease 0.4s;
}

.violence__footer.is-visible {
  opacity: 1;
}

.violence__footer span {
  font-size: 0.63rem;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color:
    rgba(255, 255, 255, 0.4);
}

.violence__footer-line {
  width: 40px;
  height: 1px;

  background:
    rgba(255, 255, 255, 0.2);
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .violence__content {
    grid-template-columns: 1fr;

    gap: 65px;
  }

  .violence__statement {
    position: static;

    max-width: 650px;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 640px) {
  .violence {
    padding:
      90px
      20px;
  }

  .violence__title {
    font-size:
      clamp(
        2.9rem,
        13vw,
        4.4rem
      );

    line-height: 0.98;
  }

  .violence__content {
    gap: 55px;
  }

  .violence__statement p {
    font-size:
      clamp(
        1.8rem,
        8vw,
        2.5rem
      );
  }

  .violence-service {
    grid-template-columns:
      34px
      minmax(0, 1fr);

    gap: 15px;

    padding:
      25px
      0;
  }

  .violence-service:hover {
    padding-left: 0;
  }

  .violence-service p {
    font-size: 0.96rem;
  }

  .violence__footer {
    flex-direction: column;

    gap: 14px;

    align-items: flex-start;
  }

  .violence__footer-line {
    display: none;
  }
}

/* =========================
   SIN HOVER
========================= */

@media (hover: none) {
  .violence-service:hover {
    padding-left: 0;
  }
}

/* =========================
   ACCESIBILIDAD
========================= */

@media (prefers-reduced-motion: reduce) {
  .violence__header,
  .violence__statement,
  .violence-service,
  .violence__footer {
    opacity: 1;

    transform: none;

    transition: none;
  }
}
</style>