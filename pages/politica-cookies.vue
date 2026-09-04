<template>
  <div class="cookies-page">
    <AppHeader />

    <main>
   
      <!-- =====================
           CONTENIDO
      ====================== -->

      <section class="cookies-content">
        <div class="cookies-content__inner">

          <!-- LATERAL -->

          <aside class="cookies-aside">
            <p class="cookies-aside__label">
              Política de Cookies
            </p>

            <div class="cookies-aside__line" />

            <p class="cookies-aside__text">
              Bruné<br>
              Abogacía y Mediación
            </p>

            <div class="cookies-aside__contact">
              <span>Contacto</span>

              <a href="mailto:consultabrune@gmail.com">
                consultabrune@gmail.com
              </a>
            </div>
          </aside>


          <!-- TEXTO -->

          <div class="cookies-text">

            <!-- INTRODUCCIÓN -->

            <article class="cookies-block cookies-block--intro">
              <span class="cookies-block__number">
                01
              </span>

              <div>
                <p>
                  Este sitio web utiliza cookies para mejorar
                  la experiencia del usuario. Las cookies son
                  ficheros que se descargan en su ordenador
                  al acceder a determinados sitios web. Las
                  cookies permiten a una página web, entre
                  otras cosas, almacenar y recuperar
                  información sobre los hábitos de navegación
                  de un usuario y, dependiendo de la
                  información obtenida y de la forma en que
                  utilice su equipo, pueden utilizarse para
                  reconocer al usuario.
                </p>

                <p>
                  Esta Política de Cookies explica qué son las
                  cookies, cómo las utilizamos en nuestro sitio
                  web y cómo puedes gestionarlas.
                </p>
              </div>
            </article>


            <!-- QUÉ SON -->

            <article class="cookies-block">
              <span class="cookies-block__number">
                02
              </span>

              <div>
                <h2>
                  ¿Qué son las cookies?
                </h2>

                <p>
                  Las cookies son pequeños archivos de texto
                  que se almacenan en su navegador o en su
                  dispositivo cuando visita un sitio web.
                  Permiten que el sitio web reconozca su
                  navegador y recuerde información sobre su
                  visita, como sus preferencias o datos de
                  inicio de sesión.
                </p>
              </div>
            </article>


            <!-- TIPOS -->

            <article class="cookies-block">
              <span class="cookies-block__number">
                03
              </span>

              <div>
                <h2>
                  ¿Qué tipos de cookies utilizamos?
                </h2>

                <p>
                  En nuestro sitio web, utilizamos diferentes
                  tipos de cookies:
                </p>

                <div class="cookies-types">

                  <div class="cookies-type">
                    <span class="cookies-type__label">
                      Cookies propias
                    </span>

                    <p>
                      aquellas de las que es responsable el
                      propio editor y que, en general, se
                      envían al equipo terminal del usuario
                      desde un equipo o dominio gestionado por
                      el propio editor y desde el que se presta
                      el servicio solicitado por el usuario.
                    </p>
                  </div>

                  <div class="cookies-type">
                    <span class="cookies-type__label">
                      Cookies de terceros
                    </span>

                    <p>
                      aquellas de las que es responsable una
                      entidad diferente del editor y que, en
                      general, se envían al equipo terminal del
                      usuario desde un dominio o equipo que no
                      es gestionado por el editor, sino por
                      otra entidad que trata los datos
                      obtenidos a través de las cookies.
                    </p>
                  </div>

                </div>
              </div>
            </article>


            <!-- GESTIÓN -->

            <article class="cookies-block">
              <span class="cookies-block__number">
                04
              </span>

              <div>
                <h2>
                  Gestión y control de las cookies
                </h2>

                <p>
                  Puede gestionar o eliminar las cookies a
                  través de la configuración de su navegador
                  en cualquier momento. Tenga en cuenta que
                  desactivar algunas cookies puede afectar la
                  funcionalidad del sitio.
                </p>
              </div>
            </article>


            <!-- CONSENTIMIENTO -->

            <article class="cookies-block cookies-block--featured">
              <span class="cookies-block__number">
                05
              </span>

              <div>
                <h2>
                  Consentimiento
                </h2>

                <p>
                  Al navegar y utilizar nuestro sitio web,
                  acepta la instalación de cookies según lo
                  descrito en esta Política. Puede retirar su
                  consentimiento en cualquier momento
                  modificando la configuración de cookies en
                  su navegador.
                </p>
              </div>
            </article>


            <!-- CAMBIOS -->

            <article class="cookies-block">
              <span class="cookies-block__number">
                06
              </span>

              <div>
                <h2>
                  Cambios en la Política de Cookies
                </h2>

                <p>
                  Nos reservamos el derecho a modificar o
                  actualizar esta Política en cualquier
                  momento. La versión más reciente estará
                  siempre disponible en esta página.
                </p>
              </div>
            </article>


            <!-- CONTACTO -->

            <article class="cookies-block cookies-block--contact">
              <span class="cookies-block__number">
                07
              </span>

              <div>
                <h2>
                  Contacto
                </h2>

                <p>
                  Si tiene alguna duda o quiere ejercer sus
                  derechos relacionados con las cookies, puede
                  contactarnos en el correo electrónico:
                  consultabrune@gmail.com
                </p>

                <a
                  href="mailto:consultabrune@gmail.com"
                  class="cookies-email"
                >
                  <span>
                    consultabrune@gmail.com
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>


            <!-- FECHA -->

            <footer class="cookies-update">
              <span>
                Fecha de última actualización
              </span>

              <span>
                22 de julio de 2025
              </span>
            </footer>

          </div>

        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>


<script setup lang="ts">
useSeoMeta({
  title:
    'Política de Cookies | Bruné Abogacía y Mediación',

  description:
    'Política de cookies del sitio web de Bruné Abogacía y Mediación.'
})
</script>


<style scoped>
/* =========================
   PÁGINA
========================= */

.cookies-page {
  min-height: 100vh;

  background: #fbfaf8;

  color:
    var(
      --color-text-dark,
      #342f2b
    );
}


/* =========================
   HERO
========================= */

.cookies-hero {
  padding:
    clamp(145px, 15vw, 205px)
    var(
      --page-padding,
      clamp(20px, 4vw, 64px)
    )
    clamp(80px, 9vw, 125px);

  background: #f2f0ed;
}

.cookies-hero__inner {
  width:
    min(
      100%,
      var(--container-width, 1280px)
    );

  margin: 0 auto;
}

.cookies-hero__top {
  display: flex;

  justify-content: space-between;

  gap: 30px;

  padding-bottom: 15px;

  margin-bottom:
    clamp(55px, 7vw, 90px);

  border-bottom:
    1px solid
    rgba(72, 63, 56, .15);
}

.cookies-hero__top span {
  font-size: .61rem;
  font-weight: 500;

  letter-spacing: .15em;
  text-transform: uppercase;

  color: #84766b;
}

.cookies-hero__content {
  display: grid;

  grid-template-columns:
    minmax(0, 1.25fr)
    minmax(280px, .55fr);

  gap:
    clamp(60px, 10vw, 150px);

  align-items: end;
}

.cookies-hero__eyebrow {
  margin: 0 0 24px;

  font-size: .62rem;
  font-weight: 500;

  letter-spacing: .17em;
  text-transform: uppercase;

  color: #84766b;
}

.cookies-hero h1 {
  max-width: 850px;

  margin: 0;

  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size:
    clamp(
      4rem,
      8vw,
      8rem
    );

  font-weight: 400;

  line-height: .82;

  letter-spacing: -.055em;

  color: #342f2b;
}

.cookies-hero h1 em {
  display: block;

  margin-left: .55em;

  font-weight: 400;

  color: #84766b;
}


/* =========================
   CONTENIDO
========================= */

.cookies-hero__intro {
  max-width: 390px;

  margin: 0;

  font-size: 1rem;

  line-height: 1.8;

  color:
    rgba(
      52,
      47,
      43,
      .7
    );
}

.cookies-content {
  padding:
    clamp(90px, 11vw, 155px)
    var(
      --page-padding,
      clamp(20px, 4vw, 64px)
    );
}

.cookies-content__inner {
  width:
    min(
      100%,
      var(--container-width, 1280px)
    );

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(190px, .34fr)
    minmax(0, 1fr);

  gap:
    clamp(65px, 10vw, 165px);

  align-items: start;
}


/* =========================
   ASIDE
========================= */

.cookies-aside {
  position: sticky;

  top: 125px;
}

.cookies-aside__label {
  margin: 0;

  font-size: .62rem;

  letter-spacing: .15em;
  text-transform: uppercase;

  color: #84766b;
}

.cookies-aside__line {
  width: 100%;
  height: 1px;

  margin:
    18px
    0
    24px;

  background:
    rgba(
      72,
      63,
      56,
      .15
    );
}

.cookies-aside__text {
  margin: 0;

  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size: 1.75rem;

  line-height: 1.05;

  color: #342f2b;
}

.cookies-aside__contact {
  display: flex;

  flex-direction: column;

  gap: 10px;

  margin-top: 50px;
}

.cookies-aside__contact > span {
  font-size: .59rem;

  letter-spacing: .14em;
  text-transform: uppercase;

  color: #84766b;
}

.cookies-aside__contact a {
  font-size: .72rem;

  color:
    rgba(
      52,
      47,
      43,
      .65
    );

  text-decoration: none;
}

.cookies-aside__contact a:hover {
  color: #342f2b;
}


/* =========================
   BLOQUES
========================= */

.cookies-text {
  min-width: 0;
}

.cookies-block {
  display: grid;

  grid-template-columns:
    60px
    minmax(0, 1fr);

  gap:
    clamp(28px, 4vw, 55px);

  padding:
    0
    0
    clamp(55px, 7vw, 85px);

  margin-bottom:
    clamp(55px, 7vw, 85px);

  border-bottom:
    1px solid
    rgba(72, 63, 56, .13);
}

.cookies-block__number {
  padding-top: 5px;

  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size: 1.25rem;

  color: #a99b8f;
}

.cookies-block h2 {
  max-width: 700px;

  margin:
    0
    0
    28px;

  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size:
    clamp(
      2.4rem,
      4vw,
      3.8rem
    );

  font-weight: 400;

  line-height: .98;

  letter-spacing: -.035em;

  color: #342f2b;
}

.cookies-block p {
  max-width: 780px;

  margin:
    0
    0
    20px;

  font-size:
    clamp(
      .96rem,
      1.15vw,
      1.03rem
    );

  line-height: 1.95;

  color:
    rgba(
      52,
      47,
      43,
      .75
    );
}


/* =========================
   INTRO
========================= */

.cookies-block--intro > div {
  max-width: 820px;
}

.cookies-block--intro p:first-child {
  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size:
    clamp(
      1.45rem,
      2.2vw,
      2rem
    );

  line-height: 1.45;

  color: #342f2b;
}


/* =========================
   TIPOS
========================= */

.cookies-types {
  display: grid;

  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );

  gap: 18px;

  margin-top: 38px;
}

.cookies-type {
  min-height: 260px;

  padding:
    clamp(25px, 3vw, 38px);

  background: #eee7df;

  transition:
    transform .35s ease,
    background .35s ease;
}

.cookies-type:nth-child(2) {
  background: #e7e5e2;
}

.cookies-type:hover {
  transform: translateY(-5px);

  background: #ddd7d1;
}

.cookies-type__label {
  display: block;

  margin-bottom: 25px;

  font-family:
    var(
      --font-serif,
      'Cormorant Garamond',
      Georgia,
      serif
    );

  font-size:
    clamp(
      1.7rem,
      2.5vw,
      2.25rem
    );

  line-height: 1;

  color: #342f2b;
}

.cookies-type p {
  margin: 0;

  font-size: .86rem;

  line-height: 1.75;
}


/* =========================
   CONSENTIMIENTO
========================= */

.cookies-block--featured > div {
  padding:
    clamp(30px, 4vw, 48px);

  background: #eee7df;
}

.cookies-block--featured h2 {
  font-style: italic;
}


/* =========================
   CONTACTO
========================= */

.cookies-block--contact > div {
  padding-left:
    clamp(0px, 2vw, 30px);

  border-left:
    1px solid
    rgba(
      132,
      118,
      107,
      .35
    );
}

.cookies-email {
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  max-width: 780px;

  margin-top: 35px;

  padding:
    17px
    0;

  border-top:
    1px solid
    rgba(72, 63, 56, .16);

  border-bottom:
    1px solid
    rgba(72, 63, 56, .16);

  text-decoration: none;

  font-size: .68rem;
  font-weight: 500;

  letter-spacing: .09em;

  color: #342f2b;

  transition:
    padding .3s ease,
    color .3s ease;
}

.cookies-email:hover {
  padding-left: 8px;
  padding-right: 8px;

  color: #84766b;
}


/* =========================
   ACTUALIZACIÓN
========================= */

.cookies-update {
  display: flex;

  justify-content: space-between;

  gap: 25px;

  padding-top: 5px;

  font-size: .59rem;

  letter-spacing: .13em;
  text-transform: uppercase;

  color: #84766b;
}

.cookies-update span:last-child {
  color: #342f2b;
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {
  .cookies-hero__content {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .cookies-hero__intro {
    margin-left: auto;
  }

  .cookies-content__inner {
    grid-template-columns: 1fr;

    gap: 70px;
  }

  .cookies-aside {
    position: static;
  }

  .cookies-types {
    grid-template-columns: 1fr 1fr;
  }
}


/* =========================
   MÓVIL
========================= */

@media (max-width: 620px) {
  .cookies-hero {
    padding:
      120px
      20px
      75px;
  }

  .cookies-hero__top {
    margin-bottom: 50px;
  }

  .cookies-hero h1 {
    font-size:
      clamp(
        3.7rem,
        18vw,
        5.7rem
      );
  }

  .cookies-hero h1 em {
    margin-left: .18em;
  }

  .cookies-content {
    padding:
      75px
      20px
      95px;
  }

  .cookies-content__inner {
    gap: 55px;
  }

  .cookies-block {
    grid-template-columns: 1fr;

    gap: 17px;

    padding-bottom: 48px;

    margin-bottom: 48px;
  }

  .cookies-block__number {
    font-size: 1rem;
  }

  .cookies-types {
    grid-template-columns: 1fr;
  }

  .cookies-type {
    min-height: 0;
  }

  .cookies-block--featured > div {
    padding: 25px 22px;
  }

  .cookies-block--contact > div {
    padding-left: 18px;
  }

  .cookies-update {
    flex-direction: column;

    gap: 7px;
  }
}
</style>