<template>
  <header
    class="header"
    :class="{
    'header--scrolled': isScrolled,
    'header--menu-open': isMenuOpen,
    'header--default': true
      
    }"
  >
    <div class="header__inner">
     <NuxtLink
        to="/#inicio"
        class="header__brand"
        aria-label="Bruné Abogacía y Mediación - Inicio"
        @click="closeMenu"
      >
        <img
          src="/images/logo_definitivo.png"
          alt="Bruné Abogacía y Mediación"
          class="header__logo"
        >
    </NuxtLink>

      <nav
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
        aria-label="Navegación principal"
      >
  <NuxtLink
        to="/#inicio"
        @click="closeMenu"
      >
        Inicio
      </NuxtLink>
        <NuxtLink
          to="/por-que-elegirnos"
          @click="closeMenu"
        >
          ¿Por qué elegirnos?
        </NuxtLink>
        <div
          class="header__dropdown"
          :class="{
            'header__dropdown--open': isSpecializationOpen
          }"
        >
          <div class="header__dropdown-trigger">
  <NuxtLink
    to="/#especializacion"
    class="header__dropdown-main-link"
    @click="closeMenu"
  >
    Especialización
  </NuxtLink>

  <button
    type="button"
    class="header__dropdown-toggle"
    aria-label="Mostrar áreas de especialización"
    :aria-expanded="isSpecializationOpen"
    @click="toggleSpecialization"
  >
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
          </div>

          <div class="header__dropdown-menu">
            <NuxtLink
              to="/derecho-familia"
              @click="closeMenu"
            >
              Derecho de Familia y Menores
            </NuxtLink>

            <NuxtLink
              to="/mediacion-familiar"
              @click="closeMenu"
            >
              Mediación Familiar
            </NuxtLink>

            <NuxtLink
              to="/violencia-genero"
              @click="closeMenu"
            >
              Violencia de Género
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
        to="/otras-areas"
        @click="closeMenu"
      >
        Otras Áreas
      </NuxtLink>
       <NuxtLink
          to="/#contacto"
          @click="closeMenu"
        >
          Contacto
        </NuxtLink>

      </nav>

      <a
        href="https://calendly.com/bruneabogaciaymediacion"
        class="header__cta"
        target="_blank"
        rel="noopener noreferrer"
          
      >
        <span>Reserva tu cita</span>
        <span
          class="link-arrow"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 15L15 5M8 5H15V12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="miter"
            />
          </svg>
        </span>
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
const isSpecializationOpen = ref(false)    
const route = useRoute()

const isHome = computed(() => route.path === '/')
const toggleSpecialization = () => {
  isSpecializationOpen.value =
    !isSpecializationOpen.value

}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
  isSpecializationOpen.value = false
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
watch(
  () => route.path,
  () => {
    nextTick(() => {
      handleScroll()
    })
  }
)

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
const isPastHero = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

}
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
 
  transition:
    background-color .45s ease,
    border-color .45s ease,
    box-shadow .45s ease;
}


/* Resto de la web */
.header--default {
  background: rgba(222, 219, 215, .97);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(72, 63, 56, .10);
}


.header--scrolled {
  padding-top: 5px;
  padding-bottom: 5px;

 

  box-shadow:
    0 7px 24px
    rgba(57, 48, 41, 0.05);
 
}
.specializations {
  scroll-margin-top: 90px;
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
.link-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 13px;
  height: 13px;

  flex-shrink: 0;
}

.link-arrow svg {
  display: block;

  width: 100%;
  height: 100%;
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
.header__dropdown-main-link {
  flex: 1;
  color: inherit;
  text-decoration: none;
}

.header__dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  margin: -8px;

  border: 0;
  background: transparent;

  color: inherit;
  cursor: pointer;
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
    var(--color-text-dark);

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
.header__dropdown--open
.header__dropdown-menu {
  opacity: 1;
  visibility: visible;

  transform:
    translate(-50%, 0);

  pointer-events: auto;
}

.header__dropdown--open
.header__dropdown-icon {
  transform:
    rotate(180deg);
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


.header--default {
  background: rgba(222, 219, 215, .97);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(72, 63, 56, .10);
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
      minmax(145px, 210px)
      1fr
      auto;
  }
  .header__dropdown-main-link {
  flex: 1;

  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;

  color: inherit;
}

.header__dropdown-toggle {
  width: 46px;
  height: 46px;

  flex: 0 0 46px;

  margin: 0;
  padding: 0;
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

    inset:
      0;

    z-index: 10;

    min-height: 100svh;

    display: flex;
    flex-direction: column;

    align-items: stretch;
    justify-content: flex-start;

    gap: 0;

    padding:
      130px
      clamp(28px, 6vw, 70px)
      55px;

    background:
      rgba(222, 219, 215, 0.995);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transform:
      translateY(-10px);

    transition:
      opacity 0.35s ease,
      visibility 0.35s ease,
      transform 0.35s var(--ease-out);

    overflow-y: auto;
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

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:
      20px
      0;

    border: 0;

    border-bottom:
      1px solid
      rgba(72, 63, 56, 0.14);

    background: transparent;

    font-family:
      var(--font-serif);

    font-size:
      clamp(
        2rem,
        5.6vw,
        1.3rem
      );

    font-weight: 400;

    line-height: 1;

    letter-spacing:
      -0.035em;

    text-transform:
      none;

    color:
      var(--color-text-dark);

    text-align: left;
  }

  .header__nav a::after {
    display: none;
  }



  .header__dropdown-trigger {
    cursor: pointer;
  }

  .header__dropdown-trigger > a {
    flex: 1;
  }

  .header__dropdown-icon {
    width: 14px;
    height: 8px;

    margin-left: 20px;

    flex-shrink: 0;
  }

.header__dropdown {
    width: 100%;
    display: block;
  }

  .header__dropdown-menu {
    position: static !important;

    width: 100%;
    min-width: 0;

    margin: 0;
    padding: 0;

    border: 0;
    box-shadow: none;

    background: transparent;

    opacity: 1 !important;
    visibility: visible !important;

    transform: none !important;

    pointer-events: auto;

    max-height: 0;
    overflow: hidden;

    transition:
      max-height 0.35s ease;
  }

  .header__dropdown--open
  .header__dropdown-menu {
    max-height: 240px;
  }

  .header__dropdown-menu::before {
    display: none;
  }

  .header__dropdown-menu a {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;

    min-height: 46px;

    padding:
      12px
      0
      12px
      22px;

    border-bottom:
      1px solid
      rgba(72, 63, 56, 0.10);

    background: transparent;

    font-family:
      var(--font-sans);

    font-size: 0.72rem;
    font-weight: 500;

    line-height: 1.35;

    letter-spacing: 0.08em;
    text-transform: uppercase;

    color:
      var(--color-accent-dark);

    opacity: 1;
    visibility: visible;

    white-space: normal;
  }

  .header__dropdown-menu a::before {
    content: '';

    position: absolute;

    left: 0;
    top: 50%;

    width: 9px;
    height: 1px;

    background:
      var(--color-accent-dark);
  }

  .header__dropdown-menu a::after {
    display: none !important;
  }
}
/* =========================
   MÓVIL
========================= */

@media (max-width: 640px) {
  .header {
    padding:
      8px
      18px;
  }

  .header__inner {
    min-height: 58px;

    grid-template-columns:
      minmax(120px, 170px)
      1fr
      auto;
  }

  .header__brand {
    padding:
      16px
      0;
  }

  .header__logo {
    height: 43px;
  }

  .header__menu-button {
    width: 40px;
    height: 40px;
  }

  .header__menu-button span:first-child {
    top: 16px;
  }

  .header__menu-button span:last-child {
    top: 23px;
  }

  .header__menu-button.is-open
  span:first-child,
  .header__menu-button.is-open
  span:last-child {
    top: 19px;
  }

  .header__nav {
    padding:
      105px
      20px
      35px;
  }

  .header__nav > a,
  .header__dropdown-trigger {
    padding:
      13px
      0;

    font-size:
      clamp(
        1.45rem,
        6.5vw,
        1.9rem
      );

    line-height: 1.15;
  }

 .header__dropdown-menu a {
    padding:
      12px
      0
      12px
      18px;

    font-size:
      0.68rem;

    line-height:
      1.4;
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