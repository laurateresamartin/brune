<template>
  <header
    class="header"
    :class="{
      'header--scrolled': isScrolled,
      'header--menu-open': isMenuOpen
    }"
  >
    <div class="header__inner">
      <a
        href="#inicio"
        class="header__brand"
        aria-label="Bruné Abogacía y Mediación - Inicio"
        @click="closeMenu"
      >
        <img
          src="/images/logo-small-transparent.png"
          alt="Bruné Abogacía y Mediación"
          class="header__logo"
        >
      </a>

      <nav
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
        aria-label="Navegación principal"
      >
        <a
          href="#despacho"
          @click="closeMenu"
        >
          El Despacho
        </a>

        <a
          href="#por-que-elegirnos"
          @click="closeMenu"
        >
          ¿Por qué elegirnos?
        </a>

        <a
          href="#especializacion"
          @click="closeMenu"
        >
          Especialización
        </a>

     <div
  class="header__dropdown"
  :class="{
    'header__dropdown--open': isOtherAreasOpen
  }"
>
  <button
    type="button"
    class="header__dropdown-trigger"
    aria-haspopup="true"
    :aria-expanded="isOtherAreasOpen"
    @click="toggleOtherAreas"
  >
    <span>Otras Áreas</span>

    <svg
      class="header__dropdown-icon"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        stroke-width="1"
      />
    </svg>
  </button>

  <div class="header__dropdown-menu">
    <a
      href="#civil"
      @click="closeMenu"
    >
      Derecho Civil
    </a>

    <a
      href="#extranjeria"
      @click="closeMenu"
    >
      Extranjería y Nacionalidad
    </a>

    <a
      href="#penal"
      @click="closeMenu"
    >
      Derecho Penal
    </a>
  </div>
</div>

        <a
          href="#contacto"
          class="header__mobile-contact"
          @click="closeMenu"
        >
          Contacto
        </a>
      </nav>

      <a
        href="#contacto"
        class="header__cta"
      >
        <span>Reserva tu cita</span>
        <span aria-hidden="true">↗</span>
      </a>

      <button
        type="button"
        class="header__menu-button"
        :class="{ 'is-open': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir o cerrar menú"
        @click="toggleMenu"
      >
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isOtherAreasOpen = ref(false)
const toggleOtherAreas = () => {
  isOtherAreasOpen.value =
    !isOtherAreasOpen.value
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
  isOtherAreasOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(isMenuOpen, (open) => {
  document.documentElement.style.overflow =
    open
      ? 'hidden'
      : ''
})

onMounted(() => {
  handleScroll()

  window.addEventListener(
    'scroll',
    handleScroll,
    { passive: true }
  )

  window.addEventListener(
    'keydown',
    handleEscape
  )
})

onBeforeUnmount(() => {
  window.removeEventListener(
    'scroll',
    handleScroll
  )

  window.removeEventListener(
    'keydown',
    handleEscape
  )

  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 1000;

  padding:
    7px
    var(--page-padding);

  background:
    #e4dbd2;

  border-bottom:
    1px solid
    rgba(91, 78, 67, 0.16);

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    padding 0.35s var(--ease-out);
}

.header--scrolled {
  padding-top: 5px;
  padding-bottom: 5px;

  background:
    #e4dbd2;

  border-bottom:
    1px solid
    rgba(91, 78, 67, 0.24);

  box-shadow:
    0 7px 24px
    rgba(57, 48, 41, 0.05);
}
.header::after {
  content: '';

  position: absolute;

  left: var(--page-padding);
  right: var(--page-padding);
  bottom: 0;

  height: 1px;

  background:
    rgba(116, 103, 93, 0.16);
}
.header--scrolled {
  padding-top: 5px;
  padding-bottom: 5px;

  background:
    rgba(238, 232, 225, 0.98);

  border-bottom:
    1px solid
    rgba(116, 103, 93, 0.22);

  box-shadow:
    0 8px 28px
    rgba(70, 58, 48, 0.045);
}

.header__inner {
  width:
    min(
      100%,
      var(--container-width)
    );

  min-height: 58px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(145px, 195px)
    minmax(0, 1fr)
    auto;

  gap:
    clamp(
      25px,
      4vw,
      65px
    );

  align-items: center;
}

.header__brand {
  position: relative;
  z-index: 20;
  width: 100%;
   padding: 25px 0;
}

.header__logo {
  display: block;

  width: 100%;
 
  height: 50px;

  object-fit: contain;

  /*
   * TEMPORAL:
   * el archivo actual es JPG.
   *
   * Cuando tengamos SVG/PNG transparente
   * eliminaremos mix-blend-mode.
   */
  mix-blend-mode: multiply;
}

/* =========================
   NAVEGACIÓN
========================= */

.header__nav {
  display: flex;

  align-items: center;
  justify-content: center;

  gap:
    clamp(
      18px,
      2vw,
      34px
    );
}

.header__nav > a,
.header__dropdown-trigger {
  position: relative;

  padding: 8px 0;

  border: 0;
  background: transparent;

  white-space: nowrap;

  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 500;
  line-height: 1;

  letter-spacing: 0.075em;
  text-transform: uppercase;

  color: var(--color-text-dark);

  cursor: pointer;
}

.header__nav a::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 2px;

  width: 100%;
  height: 1px;

  background:
    var(--color-text-dark);

  transform:
    scaleX(0);

  transform-origin:
    right center;

  transition:
    transform 0.35s var(--ease-out);
}

.header__nav a:hover::after {
  transform:
    scaleX(1);

  transform-origin:
    left center;
}

.header__mobile-contact {
  display: none;
}

/* =========================
   CTA
========================= */

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
    rgba(255, 255, 255, 0.42);

  border-color:
    rgba(76, 67, 60, 0.55);
  color:
    var(--color-text-dark);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.header__cta:hover {
  background:
    var(--color-dark);

  border-color:
    var(--color-dark);

  color:
    var(--color-white);
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

/* =========================
   HAMBURGUESA
========================= */
/* =========================
   DROPDOWN OTRAS ÁREAS
========================= */


/* =========================
   DROPDOWN OTRAS ÁREAS
========================= */

.header__dropdown {
  position: relative;

  display: flex;
  align-items: center;
}

.header__dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.header__dropdown-icon {
  width: 9px;
  height: 6px;

  flex-shrink: 0;

  transition:
    transform
    0.3s
    var(--ease-out);
}

.header__dropdown-menu {
  position: absolute;

  top: calc(100% + 14px);
  left: 50%;

  min-width: 245px;

  padding: 10px;

 

  border-color:
    rgba(116, 103, 93, 0.18);
   background: #e4dbd2;

  border:
    1px solid
    rgba(91, 78, 67, 0.18);

  box-shadow:
    0 18px 45px
    rgba(40, 36, 33, 0.08);

  opacity: 0;
  visibility: hidden;

  transform:
    translate(-50%, 8px);

  pointer-events: none;

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.3s var(--ease-out);
}

.header__dropdown-menu::before {
  content: '';

  position: absolute;

  top: -15px;
  left: 0;

  width: 100%;
  height: 15px;
}

.header__dropdown-menu a {
  position: relative;

  display: block;

  padding: 13px 15px;

  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 500;
  line-height: 1.35;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color:
    var(--color-text-dark);

  transition:
    background 0.25s ease,
    padding-left 0.3s var(--ease-out);
}

.header__dropdown-menu a::after {
  display: none;
}

.header__dropdown-menu a:hover {
  padding-left: 20px;

  background:
    var(--color-background-soft);
}

@media (hover: hover) and (pointer: fine) {
  .header__dropdown:hover
  .header__dropdown-menu,
  .header__dropdown:focus-within
  .header__dropdown-menu {
    opacity: 1;
    visibility: visible;

    transform:
      translate(-50%, 0);

    pointer-events: auto;
  }

  .header__dropdown:hover
  .header__dropdown-icon,
  .header__dropdown:focus-within
  .header__dropdown-icon {
    transform: rotate(180deg);
  }
}
.header__dropdown-menu {
  position: absolute;

  top: calc(100% + 14px);

  left: 50%;

  min-width: 245px;

  padding: 10px;

  background:
    rgba(253, 252, 251, 0.98);

  border:
    1px solid var(--color-border);

  box-shadow:
    0 18px 45px
    rgba(40, 36, 33, 0.08);

  opacity: 0;

  visibility: hidden;

  transform:
    translate(
      -50%,
      8px
    );

  pointer-events: none;

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform
    0.3s
    var(--ease-out);
}

.header__dropdown-menu::before {
  content: '';

  position: absolute;

  top: -15px;
  left: 0;

  width: 100%;
  height: 15px;
}

.header__dropdown-menu a {
  display: block;

  padding:
    13px
    15px;

  font-size: 0.65rem;

  letter-spacing: 0.05em;

  color:
    var(--color-text-dark);

  transition:
    background 0.25s ease,
    padding-left 0.3s
    var(--ease-out);
}

.header__dropdown-menu a:hover {
  padding-left: 20px;

  background:
    var(--color-background-soft);
}

.header__dropdown:hover
.header__dropdown-menu,
.header__dropdown:focus-within
.header__dropdown-menu {
  opacity: 1;

  visibility: visible;

  transform:
    translate(
      -50%,
      0
    );

  pointer-events: auto;
}


.header__menu-button {
  position: relative;

  z-index: 20;

  display: none;

  width: 46px;
  height: 46px;

  padding: 0;

  border:
    1px solid var(--color-border);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.2);

  cursor: pointer;
}

.header__menu-button span {
  position: absolute;

  left: 50%;

  width: 17px;
  height: 1px;

  background:
    var(--color-text-dark);

  transition:
    top 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);
}

.header__menu-button span:first-child {
  top: 19px;

  transform:
    translateX(-50%);
}

.header__menu-button span:last-child {
  top: 26px;

  transform:
    translateX(-50%);
}

.header__menu-button.is-open
span:first-child {
  top: 22px;

  transform:
    translateX(-50%)
    rotate(45deg);
}

.header__menu-button.is-open
span:last-child {
  top: 22px;

  transform:
    translateX(-50%)
    rotate(-45deg);
}

/* =========================
   TABLET / MENÚ
========================= */

@media (max-width: 1100px) {
  .header__inner {
    grid-template-columns:
      minmax(150px, 220px)
      1fr
      auto;
  }

  .header__cta {
    display: none;
  }

  .header__menu-button {
    display: block;

    grid-column: 3;
  }

  .header__nav {
    position: fixed;

    inset: 0;

    z-index: 10;

    min-height: 100svh;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    gap: 0;

    padding:
      130px
      var(--page-padding)
      60px;

    background:
      rgba(244, 241, 236, 0.985);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transform:
      translateY(-15px);

    transition:
      opacity 0.4s ease,
      visibility 0.4s ease,
      transform 0.4s var(--ease-out);
  }

  .header__nav--open {
    opacity: 1;

    visibility: visible;

    pointer-events: auto;

    transform:
      translateY(0);
  }
.header__nav > a,
.header__dropdown-trigger {
  width: 100%;

  padding: 17px 0;

  border: 0;

  border-bottom:
    1px solid
    var(--color-border);

  font-family:
    var(--font-serif);

  font-size:
    clamp(
      2rem,
      6vw,
      4.5rem
    );

  font-weight: 400;
  line-height: 1;

  letter-spacing: -0.035em;
  text-transform: none;

  color:
    var(--color-text-dark);

  text-align: left;
}

  .header__nav a::after {
    display: none;
  }

  .header__mobile-contact {
    display: block;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 640px) {
  .header {
    padding:
      10px
      20px;
  }

  .header__inner {
    min-height: 60px;

    grid-template-columns:
      minmax(130px, 190px)
      1fr
      auto;
  }

  .header__menu-button {
    width: 42px;
    height: 42px;
  }

  .header__menu-button span:first-child {
    top: 17px;
  }

  .header__menu-button span:last-child {
    top: 24px;
  }

  .header__menu-button.is-open
  span:first-child,
  .header__menu-button.is-open
  span:last-child {
    top: 20px;
  }

  .header__nav {
    padding:
      115px
      20px
      45px;
  }

 .header__nav > a,
.header__dropdown-trigger {
  padding: 15px 0;

  font-size:
    clamp(
      2rem,
      11vw,
      3.4rem
    );
}
}

/* =========================
   ACCESIBILIDAD
========================= */

@media (prefers-reduced-motion: reduce) {
  .header,
  .header__nav,
  .header__menu-button span,
  .header__nav a::after {
    transition: none;
  }
}
</style>