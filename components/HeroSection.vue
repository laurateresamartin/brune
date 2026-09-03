<template>
  <section
    id="inicio"
    class="hero"
  >
    <div
    class="hero__background"
    aria-hidden="true"
      >
      <img
        src="/images/ana-despacho.jpg"
        alt=""
      >
    </div>

    <div
      class="hero__overlay"
      aria-hidden="true"
    />
    <div
      class="hero__decoration"
      aria-hidden="true"
    >
      <span class="hero__circle hero__circle--one" />
      <span class="hero__circle hero__circle--two" />
    </div>

    <div class="hero__inner">
      <div class="hero__top">
        <p>Bruné</p>
        <p>Abogacía y Mediación</p>
      </div>

      <div class="hero__logo-wrapper">
        <img
          src="/images/logo-recortado-transparent.png"
          alt="Bruné Abogacía y Mediación"
          class="hero__logo"
        >
      </div>

      <div class="hero__main">
        <div class="hero__heading">
          <h1>
            <span class="hero__title-line">
              Bufete especializado
            </span>

            <span class="hero__title-line">
              en Derecho de
            </span>

            <span class="hero__title-line hero__title-line--accent">
              Familia y Menores
            </span>
          </h1>
        </div>

        <div class="hero__content">
          <p class="hero__description">
            Asesoramiento jurídico especializado,
            cercano y adaptado a las necesidades
            reales de cada familia, con sede en León
            y actuación en todo el territorio nacional.
          </p>
  <a
            href="https://calendly.com/bruneabogaciaymediacion"
            class="header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Reserva tu cita</span>
            <span aria-hidden="true">↗</span>
          </a>
        
        </div>
      </div>

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

  min-height: 100svh;

  display: flex;

  padding:
    92px
    var(--page-padding)
    30px;

  overflow: hidden;

  background:
    #f4efe9;
}
/* =========================
   FONDO FOTOGRÁFICO
========================= */

.hero__background {
  position: absolute;
  inset: 0;

  z-index: 0;
  opacity: 0.75;
  overflow: hidden;
}

.hero__background img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center 42%;

  filter:
    saturate(0.55)
    contrast(0.85)
    brightness(1.08);

  transform: scale(1.025);
}

/*
  Capa clara sobre la fotografía.
  Es la responsable de que la imagen se intuya
  sin competir con el contenido.
*/
.hero__overlay {
  position: absolute;
  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      90deg,
      rgba(248, 245, 241, .94) 0%,
      rgba(248, 245, 241, .90) 48%,
      rgba(244, 239, 233, .82) 100%
    );
}
.hero__inner {
  position: relative;

  z-index: 2;

  width:
    min(
      100%,
      var(--container-width)
    );

  min-height:
    calc(100svh - 122px);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
}



.hero__decoration {
  display: none;
  position: absolute;

  inset: 0;

  pointer-events: none;
}

.hero__circle {
  position: absolute;

  border:
    1px solid
    rgba(137, 127, 118, 0.13);

  border-radius: 50%;
   border-color:
    rgba(
      132,
      118,
      107,
      0.12
    );
}

.hero__circle--one {
  width:
    clamp(
      350px,
      48vw,
      760px
    );

  height:
    clamp(
      350px,
      48vw,
      760px
    );

  top: 3%;
  right: -15%;
}

.hero__circle--two {
  width:
    clamp(
      180px,
      25vw,
      390px
    );

  height:
    clamp(
      180px,
      25vw,
      390px
    );

  right: 16%;
  bottom: -20%;
}


.hero__top {
  display: flex;

  justify-content: space-between;

  gap: 30px;

  padding-bottom: 14px;

  border-bottom:
    1px solid var(--color-border);
}
.hero__why-link {
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 14px;

  padding: 8px 0;

  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: var(--color-text-dark);
  text-decoration: none;

  transition:
    gap 0.4s var(--ease-out),
    color 0.3s ease;
}

.hero__why-link::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: 2px;

  width: 100%;
  height: 1px;

  background: var(--color-accent-dark);

  transform: scaleX(0.28);
  transform-origin: left;

  transition:
    transform 0.5s var(--ease-out);
}

.hero__why-link span:last-child {
  font-size: 0.9rem;

  transition:
    transform 0.4s var(--ease-out);
}

.hero__why-link:hover {
  gap: 19px;

  color: var(--color-accent-dark);
}

.hero__why-link:hover::after {
  transform: scaleX(1);
}

.hero__why-link:hover span:last-child {
  transform: translate(3px, -3px);
}
.hero__top p {
  margin: 0;

  font-size: 0.6rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

/* =========================
   LOGO
========================= */
.hero__logo-wrapper {
  position: relative;

  width: 100vw;

  margin-left:
    calc(
      50% - 50vw
    );

  display: flex;
  align-items: center;
  justify-content: center;

  padding:
    clamp(
      26px,
      3.5vw,
      48px
    )
    var(--page-padding);

  background: transparent;

}
.hero__logo {
  display: block;
  width:
    min(
      58vw,
      620px
    );

  height: auto;
 transform-origin:
    center center;

  animation:
    logoEntrance
    2.6s
    var(--ease-out)
    both;
  object-fit: contain;
}

@keyframes logoEntrance {
  0% {
    opacity: 0;

    transform:
      scale(0.72);
  }

  38% {
    opacity: 1;

    transform:
      scale(1.035);
  }

  58% {
    transform:
      scale(0.985);
  }

  76% {
    transform:
      scale(1.012);
  }

  100% {
    opacity: 1;

    transform:
      scale(1);
  }
}

/* =========================
   MAIN
========================= */

.hero__main {
  flex: 1;

  display: grid;

  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(300px, 0.6fr);

  gap:
    clamp(
      45px,
      6vw,
      100px
    );

  align-items: end;

  padding:
    5px
    0
    clamp(
      50px,
      5vw,
      80px
    );
}

/* =========================
   TÍTULO
========================= */

.hero__heading h1 {
  margin: 0;

  font-size:
    clamp(
      3.7rem,
      6vw,
      6.8rem
    );

  line-height: 0.94;

  letter-spacing: -0.055em;

  color:
    var(--color-text-dark);
}

.hero__title-line {
  display: block;
}

.hero__title-line--accent {
  color:
    var(--color-accent-dark);

  font-style: italic;
}

/* =========================
   TEXTO
========================= */

.hero__content {
  padding-bottom: 5px;
}

.hero__description {
  max-width: 390px;

  margin:
    0
    0
    34px;

  font-size:
    clamp(
      0.98rem,
      1.15vw,
      1.08rem
    );

  line-height: 1.75;

  color:
    rgba(52, 47, 43, 0.82);
}
.hero__background img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 58% center;

  filter:
    saturate(0.48)
    contrast(0.82)
    brightness(1.1);

  transform: scale(1.03);
}
/* =========================
   CTA
========================= */
@media (max-width: 640px) {
  .hero__background img {
    object-position: 58% center;

    filter:
      saturate(0.42)
      contrast(0.82)
      brightness(1.12);
  }

  .hero__overlay {
    background:
      rgba(248, 245, 241, 0.88);
  }
}
.hero__cta {
  min-height: 56px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 38px;

  padding:
    0
    22px;

  border:
    1px solid var(--color-text-dark);

  background:
    var(--color-text-dark);

  color: white;

  font-size: 0.66rem;
  font-weight: 500;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.hero__cta:hover {
  background: transparent;

  color:
    var(--color-text-dark);
}

.hero__cta span:last-child {
  transition:
    transform 0.3s var(--ease-out);
}

.hero__cta:hover span:last-child {
  transform:
    translate(3px, -3px);
}

/* =========================
   FOOTER
========================= */

.hero__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  margin-top: clamp(45px, 6vw, 80px);
  padding-top: 22px;

  border-top: 1px solid var(--color-border);
}
.hero__location {
  display: flex;

  gap:
    clamp(
      25px,
      5vw,
      70px
    );
}

.hero__location span {
  font-size: 0.6rem;

  letter-spacing: 0.14em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.hero__scroll {
  display: flex;

  align-items: center;

  gap: 14px;

  font-size: 0.6rem;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}
.header__cta {
  min-height: 42px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  padding:
    0
    21px;

  border:
    1px solid var(--color-text-dark);

  font-size: 0.65rem;
  font-weight: 500;

  letter-spacing: 0.09em;
  text-transform: uppercase;
   background:
    var(--color-dark);

  border-color:
    var(--color-dark);
 
  color:
    var(--color-white);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.header__cta:hover {
  background:
    rgba(255, 255, 255, 0.42);

  border-color:
    rgba(76, 67, 60, 0.55);

  color:
    var(--color-text-dark);
}

.header__cta span:last-child {
  transition:
    transform 0.3s var(--ease-out);
}

.header__cta:hover
span:last-child {
  transform:
    translate(3px, -3px);
}

.hero__scroll-number {
  font-family:
    var(--font-serif);
}

.hero__scroll-arrow {
  display: inline-block;

  font-size: 1rem;

  animation:
    scrollArrow
    1.8s
    ease-in-out
    infinite;
}

@keyframes scrollArrow {
  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(5px);
  }
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .hero {
    min-height: auto;

    padding-top: 90px;
  }

  .hero__inner {
    min-height:
      calc(100svh - 120px);
  }

  .hero__logo {
    width:
      min(
        94vw,
        820px
      );
  }

  .hero__main {
    grid-template-columns: 1fr;

    gap: 38px;

    align-items: start;
  }

  .hero__content {
    width:
      min(
        100%,
        520px
      );

    margin-left: auto;
  }

  .hero__description {
    max-width: none;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 640px) {
  .hero {
    min-height: 100svh;

    padding:
      75px
      20px
      22px;
  }
  .hero__logo-wrapper {
  width: 100vw;

  margin-left:
    calc(
      50% - 50vw
    );

  padding:
    18px
    20px;
}

.hero__logo {
  width:
    min(
      84vw,
      480px
    );
}

  .hero__inner {
    min-height:
      calc(
        100svh - 97px
      );
  }

  .hero__top {
    justify-content: flex-end;

    padding-bottom: 12px;
  }

  .hero__top p:first-child {
    display: none;
  }

.hero__logo-wrapper {
  padding:
    22px
    0
    18px;
}

.hero__logo {
  width:
    min(
      88vw,
      500px
    );
}

  .hero__main {
    padding:
      5px
      0
      35px;

    gap: 30px;
  }

  .hero__heading h1 {
    font-size:
      clamp(
        2.9rem,
        13vw,
        4.2rem
      );

    line-height: 0.98;
  }

  .hero__description {
    margin-bottom: 26px;

    font-size: 0.95rem;
  }

  .hero__cta {
    width: 100%;

    min-height: 54px;
  }

  .hero__footer {
    padding-top: 15px;
  }

  .hero__location {
    flex-direction: column;

    gap: 3px;
  }

  .hero__scroll-text,
  .hero__scroll-number {
    display: none;
  }

  .hero__circle--one {
    top: 12%;
    right: -70%;
  }
}

/* =========================
   MÓVILES BAJOS
========================= */
@media (max-width: 700px) {
  .hero__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 26px;

    margin-top: 45px;
  }

  .hero__why-link {
    font-size: 0.68rem;
  }
}
@media
  (max-width: 640px)
  and (max-height: 720px) {
 .hero__logo-wrapper {
  padding:
    15px
    0
    12px;
}

  .hero__main {
    padding-bottom: 25px;
  }

  .hero__heading h1 {
    font-size: 2.7rem;
  }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {
  .hero__logo-wrapper,
  .hero__scroll-arrow {
    animation: none;
  }
}
</style>