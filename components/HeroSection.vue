<template>
  <section
    id="inicio"
    class="hero"
  >
    <div
      class="hero__decoration"
      aria-hidden="true"
    >
      <span class="hero__circle hero__circle--one" />
      <span class="hero__circle hero__circle--two" />
    </div>

    <div class="hero__inner">

      <!-- CABECERA EDITORIAL -->
      <div class="hero__top">
        <p>Bruné</p>
        <p>Abogacía y Mediación</p>
      </div>

      <!-- LOGO -->
      <div class="hero__logo-wrapper">
        <img
          src="/images/logo-recortado-transparent.png"
          alt="Bruné Abogacía y Mediación"
          class="hero__logo"
        >
      </div>

      <!-- PRESENTACIÓN PRINCIPAL -->
      <div class="hero__main">

        <div class="hero__intro">
          <p class="hero__eyebrow">
            Derecho de Familia y Menores
          </p>

          <h1>
            <span>Bufete especializado</span>
            <span>en Derecho de</span>
            <span class="hero__accent">
              Familia y Menores
            </span>
          </h1>

          <p class="hero__description">
            Asesoramiento jurídico especializado,
            cercano y adaptado a las necesidades
            reales de cada familia, con sede en León
            y actuación en todo el territorio nacional.
          </p>

          <a
            href="https://calendly.com/bruneabogaciaymediacion"
            class="hero__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Reserva tu cita</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <!-- FOTO -->
        <div class="hero__visual">
          <div class="hero__image">
            <img
              src="/images/Ana.jpg"
              alt="Ana Páramo Moratinos, letrada de Bruné Abogacía y Mediación"
            >
          </div>

          <div class="hero__caption">
            <div>
              <strong>Ana Páramo Moratinos</strong>
              <span>Letrada</span>
            </div>

            <span>
              León · España
            </span>
          </div>
        </div>

      </div>

      <!-- EL DESPACHO -->
      <div
        class="hero__about"
      >
        <div class="hero__about-title">
          <h2>
            Una abogacía
            <span>cercana, especializada</span>
            y humana.
          </h2>
        </div>

        <div class="hero__about-copy">
          <p class="hero__about-lead">
            Bufete especializado en Derecho de Familia
            y Menores, con sede en León y actuación
            en todo el territorio nacional.
          </p>

          <div class="hero__about-body">
            <p>
              Dirigido por la Letrada Ana Páramo
              Moratinos, el despacho ofrece un servicio
              de asesoramiento y asistencia jurídicos
              integrales, de calidad y adaptados a las
              circunstancias y necesidades reales de
              cada familia.
            </p>

            <p>
              Cada asunto se aborda desde la cercanía,
              el rigor jurídico y una atención
              verdaderamente personalizada.
            </p>
          </div>

          <a
            href="#especializacion"
            class="hero__text-link"
          >
            <span>Conoce nuestras áreas</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- PIE -->
      <div class="hero__footer">
        <div class="hero__location">
          <span>León</span>
          <span>Ámbito nacional</span>
        </div>

        <NuxtLink
          to="/por-que-elegirnos"
          class="hero__why-link"
        >
          <span>Conoce nuestra forma de trabajar</span>
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;

  padding:
    92px
    var(--page-padding)
    clamp(55px, 6vw, 90px);

  overflow: hidden;

  background: #fbfaf8;
}

.hero__inner {
  position: relative;
  z-index: 2;

  width: min(100%, var(--container-width));

  margin: 0 auto;
}

/* =========================
   DECORACIÓN
========================= */

.hero__decoration {
  position: absolute;
  inset: 0;

  overflow: hidden;
  pointer-events: none;
}

.hero__circle {
  position: absolute;

  border:
    1px solid
    rgba(132, 118, 107, 0.10);

  border-radius: 50%;
}

.hero__circle--one {
  width: clamp(450px, 55vw, 850px);
  aspect-ratio: 1;

  right: -22%;
  top: 7%;
}

.hero__circle--two {
  width: clamp(180px, 25vw, 380px);
  aspect-ratio: 1;

  left: -10%;
  bottom: 16%;

  background:
    rgba(238, 231, 223, 0.24);
}

/* =========================
   PARTE SUPERIOR
========================= */

.hero__top {
  display: flex;
  justify-content: space-between;

  gap: 30px;

  padding-bottom: 14px;

  border-bottom:
    1px solid
    var(--color-border);
}

.hero__top p {
  margin: 0;

  font-size: 0.6rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

/* =========================
   LOGO
========================= */

.hero__logo-wrapper {
  display: flex;
  justify-content: center;

  padding:
    clamp(25px, 3.5vw, 45px)
    0
    clamp(35px, 4vw, 55px);
}

.hero__logo {
  display: block;

  width: min(44vw, 500px);
  height: auto;

  object-fit: contain;

  transform-origin: center;

  animation:
    logoEntrance
    2.2s
    var(--ease-out)
    both;
}

@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: scale(0.82);
  }

  45% {
    opacity: 1;
    transform: scale(1.025);
  }

  70% {
    transform: scale(0.99);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* =========================
   HERO + FOTO
========================= */

.hero__main {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(330px, 0.72fr);

  gap:
    clamp(60px, 9vw, 140px);

  align-items: center;
}

.hero__intro {
  padding:
    clamp(15px, 3vw, 45px)
    0;
}

.hero__eyebrow {
  margin: 0 0 26px;

  font-size: 0.62rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

.hero h1 {
  max-width: 780px;

  margin: 0 0 40px;

  font-size:
    clamp(3.8rem, 6vw, 5.5rem);

  line-height: 0.91;
  letter-spacing: -0.055em;

  color: var(--color-text-dark);
}

.hero h1 > span {
  display: block;
}

.hero h1 .hero__accent {
  color: var(--color-accent-dark);
  font-style: italic;
}

.hero__description {
  max-width: 500px;

  margin: 0 0 36px;

  font-size:
    clamp(0.98rem, 1.1vw, 1.08rem);

  line-height: 1.8;

  color:
    rgba(52, 47, 43, 0.76);
}

/* =========================
   CTA
========================= */

.hero__cta {
  width: fit-content;
  min-width: 210px;
  min-height: 56px;

  display: inline-flex;

  align-items: center;
  justify-content: space-between;

  gap: 38px;

  padding: 0 22px;

  border:
    1px solid
    var(--color-text-dark);

  background:
    var(--color-text-dark);

  color: #fff;

  text-decoration: none;

  font-size: 0.66rem;
  font-weight: 500;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  transition:
    background .3s ease,
    color .3s ease;
}

.hero__cta:hover {
  background: transparent;
  color: var(--color-text-dark);
}

.hero__cta span:last-child {
  transition:
    transform .3s var(--ease-out);
}

.hero__cta:hover span:last-child {
  transform: translate(3px, -3px);
}

/* =========================
   FOTO ANA
========================= */

.hero__visual {
  position: relative;

  width: min(100%, 480px);

  justify-self: end;
}

.hero__image {
  position: relative;

  aspect-ratio: 4 / 5;

  padding: 14px;

  background: #eee7df;
}

.hero__image::before {
  content: '';

  position: absolute;

  width: 74%;
  aspect-ratio: 1;

  right: -18%;
  top: -10%;

  border:
    1px solid
    rgba(132, 118, 107, 0.16);

  border-radius: 50%;

  pointer-events: none;
}

.hero__image img {
  position: relative;
  z-index: 1;

  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
}

.hero__caption {
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;

  padding-top: 16px;
}

.hero__caption div {
  display: flex;
  flex-direction: column;

  gap: 3px;
}

.hero__caption strong {
  font-size: 0.72rem;
  font-weight: 500;

  color: var(--color-text-dark);
}

.hero__caption span {
  font-size: 0.6rem;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

/* =========================
   EL DESPACHO INTEGRADO
========================= */

.hero__about {
  display: grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(360px, 0.75fr);

  gap:
    clamp(60px, 10vw, 160px);

  align-items: start;

  margin-top:
    clamp(100px, 12vw, 30px);

  padding-top:
    clamp(55px, 7vw, 90px);

  border-top:
    1px solid
    var(--color-border);

  scroll-margin-top: 100px;
}

.hero__about-title > p {
  margin: 0 0 25px;

  font-size: 0.62rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

.hero__about-title h2 {
  max-width: 760px;

  margin: 0;

  font-size:
    clamp(3.3rem, 5.3vw, 5rem);

  line-height: 0.93;

  letter-spacing: -0.05em;

  color: var(--color-text-dark);
}

.hero__about-title h2 span {
  display: block;

  color: var(--color-accent-dark);
  font-style: italic;
}

.hero__about-copy {
  padding-top: 40px;
}

.hero__about-lead {
  margin: 0 0 35px;

  font-family: var(--font-serif);

  font-size:
    clamp(1.55rem, 2.2vw, 2.15rem);

  line-height: 1.18;

  letter-spacing: -0.025em;

  color: var(--color-text-dark);
}

.hero__about-body {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(25px, 3vw, 45px);

  margin-bottom: 42px;
}

.hero__about-body p {
  margin: 0;

  font-size: 0.94rem;
  line-height: 1.8;

  color:
    rgba(65, 62, 59, 0.72);
}

/* =========================
   LINKS
========================= */

.hero__text-link,
.hero__why-link {
  position: relative;

  width: fit-content;

  display: inline-flex;

  align-items: center;

  gap: 16px;

  padding-bottom: 7px;

  color: var(--color-text-dark);

  text-decoration: none;

  font-size: 0.66rem;
  font-weight: 500;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  border-bottom:
    1px solid
    var(--color-text-dark);
}

.hero__text-link span:last-child,
.hero__why-link span:last-child {
  transition:
    transform .3s var(--ease-out);
}

.hero__text-link:hover span:last-child,
.hero__why-link:hover span:last-child {
  transform: translate(4px, -4px);
}

/* =========================
   FOOTER
========================= */

.hero__footer {
  display: flex;

  justify-content: space-between;
  align-items: flex-end;

  gap: 40px;

  margin-top:
    clamp(70px, 8vw, 110px);

  padding-top: 22px;

  border-top:
    1px solid
    var(--color-border);
}

.hero__location {
  display: flex;

  gap:
    clamp(25px, 5vw, 70px);
}

.hero__location span {
  font-size: 0.6rem;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: var(--color-accent-dark);
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .hero__main {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(280px, .7fr);

    gap: 50px;
  }

  .hero__about {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .hero__about-copy {
    max-width: 720px;

    padding-top: 0;
    margin-left: auto;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 720px) {
  .hero {
    padding:
      82px
      20px
      65px;
  }

  .hero__top {
    padding-bottom: 12px;
  }

  .hero__logo-wrapper {
    padding:
      24px
      0
      40px;
  }

  .hero__logo {
    width: min(78vw, 390px);
  }

  .hero__main {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .hero h1 {
    font-size:
      clamp(3.25rem, 14vw, 4.7rem);
  }

  .hero__visual {
    width: min(90%, 470px);

    justify-self: end;
  }

  .hero__about {
    margin-top: 95px;
    padding-top: 55px;
  }

  .hero__about-title h2 {
    font-size:
      clamp(3rem, 13vw, 4.5rem);
  }

  .hero__about-body {
    grid-template-columns: 1fr;
  }

  .hero__footer {
    align-items: flex-start;
    flex-direction: column;

    gap: 28px;
  }
}

/* =========================
   MÓVIL PEQUEÑO
========================= */

@media (max-width: 480px) {
  .hero__top p:first-child {
    display: none;
  }

  .hero__top {
    justify-content: flex-end;
  }

  .hero h1 {
    font-size:
      clamp(3rem, 15vw, 4rem);
  }

  .hero__visual {
    width: 100%;
  }

  .hero__caption {
    gap: 12px;
  }

  .hero__about {
    margin-top: 80px;
  }

  .hero__location {
    flex-direction: column;
    gap: 7px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__logo {
    animation: none;
  }
}
</style>