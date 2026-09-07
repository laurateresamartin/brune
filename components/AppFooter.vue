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
            src="/images/logo_definitivo.png"
            alt="Bruné Abogacía y Mediación"
          >
        </a>

        <div class="footer__navigation">
          <div>
            <p class="footer__label">
              Navegación
            </p>

            <nav>
              <NuxtLink to="/#inicio">
                Inicio
              </NuxtLink>
                <NuxtLink
                  to="/por-que-elegirnos"
                >
                  ¿Por qué elegirnos?
              </NuxtLink>
              <NuxtLink to="/#especializacion">
                Especialización
              </NuxtLink>

              <NuxtLink to="/#otras-areas">
                Otras Áreas
              </NuxtLink>

              <NuxtLink to="/#contacto">
                Contacto
              </NuxtLink>
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
            <div
            class="footer__social"
            aria-label="Redes sociales"
          >
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/bruneabogaciaymediacion?stkn=bWVta3pkdHcxMDYy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Bruné Abogacía y Mediación"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  class="footer__social-dot"
                />
              </svg>
            </a>

            <!-- TikTok -->
            <a
              href="https://www.tiktok.com/@bruneabogaciaymediacion?_r=1&_t=ZN-99XYpHEN3sk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Bruné Abogacía y Mediación"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="
                    M15 4
                    C15.4 6.4 16.8 7.8 19 8
                    V11
                    C17.5 10.9 16.2 10.4 15 9.5
                    V15.2
                    C15 18.4 12.8 20.5 9.8 20.5
                    C6.8 20.5 4.5 18.3 4.5 15.5
                    C4.5 12.5 6.9 10.3 10.5 10.3
                    V13.3
                    C8.5 13.3 7.5 14.2 7.5 15.5
                    C7.5 16.7 8.4 17.5 9.7 17.5
                    C11.2 17.5 12 16.5 12 15
                    V4
                    Z
                  "
                />
              </svg>
            </a>
          </div>
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

        <NuxtLink
          to="/#inicio"
          class="footer__back"
        >
          Volver arriba
          <span aria-hidden="true">↑</span>
      </NuxtLink>
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
    #514d49;

  color:
    rgba(255, 255, 255, 0.78);
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
    min(100%, 310px);
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
.footer__social {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 24px;
}

.footer__social a {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(255, 255, 255, 0.22);

  border-radius: 50%;

  color:
    rgba(255, 255, 255, 0.76);

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s var(--ease-out);
}

.footer__social svg {
  width: 17px;
  height: 17px;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
}

.footer__social a:last-child svg {
  fill: currentColor;
  stroke: none;
}

.footer__social-dot {
  fill: currentColor;
  stroke: none;
}

.footer__social a:hover {
  background:
    rgba(255, 255, 255, 0.12);

  border-color:
    rgba(255, 255, 255, 0.5);

  color: #fff;

  transform:
    translateY(-3px);
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