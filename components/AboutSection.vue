<template>
  <section
    id="despacho"
    class="about"
  >
    <div class="about__inner">
      <div class="about__header">
        <p class="about__eyebrow">
          El Despacho
        </p>

        <h2>
          Una abogacía
          <span>cercana, especializada</span>
          y humana.
        </h2>
      </div>

      <div class="about__content">
        <div class="about__copy">
          <p class="about__lead">
            Bufete especializado en Derecho de Familia
            y Menores, con sede en León y actuación
            en todo el territorio nacional.
          </p>

          <div class="about__body">
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
            class="about__link"
          >
            <span>
              Conoce nuestras áreas
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div class="about__visual">
          <div class="about__image">
            <!--
              Sustituiremos este bloque
              cuando tengamos la foto real.
            -->
            <div class="about__placeholder">
                <!-- <img
  src="/images/ana-paramo.webp"
  alt="Ana Páramo Moratinos, letrada de Bruné Abogacía y Mediación"
  width="900"
  height="1125"
  loading="lazy"
> -->
              <span>
                Próximamente fotografía
                de Ana Páramo Moratinos
              </span>
            </div>
          </div>

          <div class="about__caption">
            <div>
              <strong>
                Ana Páramo Moratinos
              </strong>

              <span>
                Letrada
              </span>
            </div>

            <div class="about__location">
              León · España
            </div>
          </div>
        </div>
      </div>

      <div class="about__footer">
        <p>
          Asesoramiento jurídico sólido,
          personalizado y de calidad.
        </p>

        <span aria-hidden="true">
          Bruné
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;

  padding:
    var(--section-space)
    var(--page-padding);

  background:
    var(--color-background);
}

.about__inner {
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

.about__header {
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

  align-items: start;

  margin-bottom:
    clamp(
      70px,
      9vw,
      130px
    );
}

.about__eyebrow {
  margin:
    14px
    0
    0;

  font-size: 0.62rem;
  font-weight: 500;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

.about__header h2 {
  max-width: 950px;

  margin: 0;

  font-size:
    clamp(
      3.5rem,
      6vw,
      7rem
    );

  line-height: 0.92;

  letter-spacing: -0.05em;

  color:
    var(--color-text-dark);
}

.about__header h2 span {
  display: block;

  color:
    var(--color-accent-dark);

  font-style: italic;
}

/* =========================
   CONTENIDO
========================= */

.about__content {
  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(360px, 0.75fr);

  gap:
    clamp(
      60px,
      10vw,
      160px
    );

  align-items: start;
}

/* =========================
   TEXTO
========================= */

.about__copy {
  padding-top:
    clamp(
      20px,
      4vw,
      65px
    );
}

.about__lead {
  max-width: 650px;

  margin:
    0
    0
    42px;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.8rem,
      2.8vw,
      3rem
    );

  line-height: 1.14;

  letter-spacing: -0.025em;

  color:
    var(--color-text-dark);
}

.about__body {
  max-width: 590px;

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    clamp(
      25px,
      4vw,
      55px
    );

  margin-bottom: 50px;
}

.about__body p {
  margin: 0;

  font-size: 0.96rem;

  line-height: 1.85;

  color:
    rgba(65, 62, 59, 0.72);
}

/* =========================
   LINK
========================= */

.about__link {
  width: fit-content;

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

.about__link span:last-child {
  transition:
    transform 0.3s var(--ease-out);
}

.about__link:hover
span:last-child {
  transform:
    translate(4px, -4px);
}

/* =========================
   FOTO
========================= */

.about__visual {
  width: 100%;
}

.about__image {
  position: relative;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  background:
    var(--color-background-soft);
}

.about__placeholder {
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 35px;

  background:
    linear-gradient(
      145deg,
      #f0ece8,
      #ded7d0
    );
}

.about__placeholder::before {
  content: '';

  position: absolute;

  width: 65%;
  aspect-ratio: 1;

  border:
    1px solid
    rgba(100, 92, 85, 0.13);

  border-radius: 50%;
}

.about__placeholder span {
  position: relative;

  z-index: 1;

  max-width: 180px;

  text-align: center;

  font-size: 0.62rem;

  line-height: 1.7;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color:
    rgba(75, 70, 66, 0.48);
}

/*
 * Cuando tengamos la fotografía:
 *
 * .about__image img {
 *   width: 100%;
 *   height: 100%;
 *   object-fit: cover;
 * }
 */

.about__caption {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 25px;

  padding-top: 17px;
}

.about__caption div:first-child {
  display: flex;

  flex-direction: column;

  gap: 2px;
}

.about__caption strong {
  font-size: 0.72rem;

  font-weight: 500;

  letter-spacing: 0.03em;

  color:
    var(--color-text-dark);
}

.about__caption span,
.about__location {
  font-size: 0.61rem;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color:
    var(--color-accent-dark);
}

/* =========================
   PIE EDITORIAL
========================= */

.about__footer {
  margin-top:
    clamp(
      80px,
      10vw,
      145px
    );

  padding-top: 20px;

  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  border-top:
    1px solid var(--color-border);
}

.about__footer p {
  max-width: 420px;

  margin: 0;

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      1.15rem,
      1.6vw,
      1.5rem
    );

  line-height: 1.3;

  color:
    var(--color-text-dark);
}

.about__footer > span {
  font-family:
    var(--font-serif);

  font-size:
    clamp(
      2rem,
      4vw,
      4rem
    );

  line-height: 0.8;

  color:
    rgba(137, 127, 118, 0.15);
}

/* =========================
   TABLET
========================= */

@media (max-width: 950px) {
  .about__header {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  .about__eyebrow {
    margin: 0;
  }

  .about__content {
    grid-template-columns:
      1fr
      minmax(300px, 0.7fr);

    gap: 55px;
  }

  .about__body {
    grid-template-columns: 1fr;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 720px) {
  .about {
    padding:
      95px
      20px;
  }

  .about__header {
    margin-bottom: 60px;
  }

  .about__header h2 {
    font-size:
      clamp(
        3rem,
        14vw,
        4.5rem
      );

    line-height: 0.95;
  }

  .about__content {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .about__copy {
    padding-top: 0;
  }

  .about__lead {
    font-size:
      clamp(
        1.7rem,
        7vw,
        2.3rem
      );
  }

  .about__body {
    margin-bottom: 38px;
  }

  .about__visual {
    width:
      min(
        100%,
        500px
      );

    margin-left: auto;
  }

  .about__footer {
    margin-top: 75px;
  }

  .about__footer > span {
    display: none;
  }
}
</style>