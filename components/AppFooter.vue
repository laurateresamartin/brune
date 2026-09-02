<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <a
          href="#inicio"
          class="footer__brand"
          aria-label="Bruné Abogacía y Mediación - Inicio"
        >
          <img
            src="/images/brune-logo-transparent.png"
            alt="Bruné Abogacía y Mediación"
          >
        </a>

        <div class="footer__navigation">
          <div>
            <p class="footer__label">
              Navegación
            </p>

            <nav>
              <a href="#inicio">
                Inicio
              </a>

              <a href="#despacho">
                El Despacho
              </a>

              <a href="#especializacion">
                Especialización
              </a>

              <a href="#otras-areas">
                Otras Áreas
              </a>

              <a href="#contacto">
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <p class="footer__label">
              Contacto
            </p>

            <nav>
              <a href="tel:+34638812473">
                638 812 473
              </a>

              <a href="mailto:consultabrune@gmail.com">
                consultabrune@gmail.com
              </a>

              <span>
                León
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ currentYear }}
          Bruné Abogacía y Mediación
        </p>

        <div class="footer__legal">
          <NuxtLink to="/aviso-legal">
            Aviso Legal
          </NuxtLink>

          <NuxtLink to="/politica-privacidad">
            Política de Privacidad
          </NuxtLink>

          <NuxtLink to="/politica-cookies">
            Política de Cookies
          </NuxtLink>
        </div>

        <a
          href="#inicio"
          class="footer__back"
        >
          Volver arriba
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear =
  new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding:
    75px
    clamp(20px, 4vw, 64px)
    35px;

  background:
    #2f2e2d;

  color:
    rgba(255, 255, 255, 0.72);
}

.footer__inner {
  width:
    min(100%, var(--container-width));

  margin:
    0 auto;
}

.footer__top {
  display: grid;

  grid-template-columns:
    minmax(250px, 1fr)
    minmax(450px, 1fr);

  gap:
    70px;

  padding-bottom:
    75px;
}

/* LOGO */

.footer__brand {
  width:
    min(100%, 410px);
}

.footer__brand img {
  width: 100%;
  mix-blend-mode: screen;
  filter:
    grayscale(1)
    brightness(2);
}

/* NAV */

.footer__navigation {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 50px;
}

.footer__label {
  margin-bottom:
    22px;

  font-size:
    0.62rem;

  letter-spacing:
    0.17em;

  text-transform:
    uppercase;

  color:
    rgba(255, 255, 255, 0.35);
}

.footer nav {
  display: grid;

  gap: 12px;
}

.footer nav a,
.footer nav span {
  font-family:
    var(--font-serif);

  font-size:
    1.15rem;

  transition:
    color 0.25s ease;
}

.footer nav a:hover {
  color: white;
}

/* BOTTOM */

.footer__bottom {
  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  gap: 35px;

  align-items: center;

  padding-top: 30px;

  border-top:
    1px solid rgba(255, 255, 255, 0.12);

  font-size: 0.65rem;

  letter-spacing: 0.06em;
}

.footer__bottom p {
  margin: 0;
}

.footer__legal {
  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap:
    10px
    22px;
}

.footer__legal a:hover {
  color: white;
}

.footer__back {
  justify-self: end;

  display: flex;

  align-items: center;

  gap: 10px;
}

.footer__back span {
  transition:
    transform 0.25s ease;
}

.footer__back:hover span {
  transform:
    translateY(-4px);
}

/* TABLET */

@media (max-width: 900px) {
  .footer__top {
    grid-template-columns: 1fr;
  }

  .footer__bottom {
    grid-template-columns: 1fr;
  }

  .footer__legal {
    justify-content: flex-start;
  }

  .footer__back {
    justify-self: start;
  }
}

/* MÓVIL */

@media (max-width: 600px) {
  .footer {
    padding-top: 60px;
  }

  .footer__top {
    gap: 55px;

    padding-bottom: 55px;
  }

  .footer__navigation {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .footer__brand {
    width: 230px;
  }
}
</style>