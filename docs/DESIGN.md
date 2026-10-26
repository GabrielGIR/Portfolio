---
name: Portfolio de Gabriel Ignacio Roel
description: Portfolio oscuro y silencioso, verde oliva sobre cintas de luz lentas, con vidrio apagado solo en las tarjetas.
colors:
  bg: "#0f0e13"
  surface: "#17161c"
  surface-raised: "#1f1e26"
  border: "#2c2b35"
  primary: "#606c38"
  primary-hover: "#545f31"
  primary-text: "#8f9c57"
  text: "#e8e8ec"
  text-muted: "#9a9aa6"
typography:
  display:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 6vw, 6.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  pill: "999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4.5rem"
  9: "clamp(5rem, 4rem + 5vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-glass:
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-glass-hover:
    backgroundColor: "{colors.surface-raised}"
  card-project:
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  chip-tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
---

# Design System: Portfolio de Gabriel Ignacio Roel

Derivado del código construido (Fase 4). Fuente única de valores: `src/styles/tokens.css`. Los componentes solo usan `var(--token)`; si este documento y el código difieren, manda el código.

## Overview

**Creative North Star: "El menú de la consola"**

Un portfolio oscuro donde el nombre y los proyectos son lo único grande, sobre cintas de luz que se mueven lento detrás de todo (referencia: el menú XMB de la PS3, en versión Frutiger Aero apagada). Una sola página con scroll y anclas, alineada a la izquierda, con un único acento verde oliva y vidrio translúcido solo en las tarjetas.

La interfaz es plana: no hay sombras en reposo, ni gradientes, ni íconos, ni transiciones CSS. La tipografía es la del sistema, sin descargas. El movimiento lo hace GSAP al entrar en pantalla y el fondo WebGL; todo lo demás está quieto.

**Key Characteristics:**
- Oscuro, un solo acento (verde oliva), texto del acento siempre con `--primary-text`.
- Dos tamaños dominan: `--text-display` y `--text-base`; el resto es de apoyo.
- Vidrio (`--glass`) solo en tarjetas y en el botón secundario; la nav es opaca.
- Sin `transition`, `animation` ni `backdrop-filter` en el CSS propio.
- Duración y easing viven en tokens y GSAP los lee en tiempo de ejecución.

## Colors

Base casi negra con un matiz violeta frío y un único verde oliva apagado como acento.

### Primary
- **Oliva** (`--primary`, #606c38): fondo del botón primario y del skip-link, y color de las cintas de Threads. Nunca como color de texto.
- **Oliva oscuro** (`--primary-hover`, #545f31): hover del botón primario; es más oscuro que el reposo.
- **Oliva claro** (`--primary-text`, #8f9c57): links, rol del Hero, títulos de categoría de Skills, acento de Threads y anillo de foco.

### Neutral
- **Noche** (`--bg`, #0f0e13): fondo de página y base del fondo fijo.
- **Superficie** (`--surface`, #17161c): barra de navegación (opaca) y base del vidrio.
- **Superficie elevada** (`--surface-raised`, #1f1e26): chips de tags y hover del botón de vidrio.
- **Borde** (`--border`, #2c2b35): definido pero sin consumidores en el código actual (ver Diferencias). Contraste con `--bg` 1.38: solo decorativo, nunca para delimitar controles.
- **Texto** (`--text`, #e8e8ec): texto principal.
- **Texto atenuado** (`--text-muted`, #9a9aa6): links de la nav, descripciones, footer.

### Capas translúcidas (derivadas, `color-mix`)
- `--glass`: `--surface` al 72 % sobre transparente. Tarjetas y botón secundario.
- `--glass-border`: `--text` al 10 %. Borde de 1px de tarjetas y botón secundario.
- `--scrim`: `--bg` al 60 %. Capa sobre las cintas de Threads para proteger el contraste del texto.

### Contrastes medidos (Fase 1, `docs/PLAN.md`)
| Par | Ratio |
|---|---|
| `--text` / `--bg` | 15.7 |
| `--text-muted` / `--bg` | 6.9 |
| `--primary-text` / `--bg` | 6.46 |
| `--text` sobre `--primary` | 4.65 |
| `--text` sobre `--primary-hover` | 5.62 |
| `--border` / `--bg` | 1.38 (decorativo) |

### Named Rules
**The Olive Text Rule.** El texto en verde es `--primary-text`; `--primary` solo se usa como relleno detrás de `--text`.
**The Hover Darker Rule.** El hover del acento oscurece (`--primary-hover`); no ilumina ni agrega brillo.

## Typography

**Display Font:** `--font-sans` = system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
**Body Font:** la misma. Una sola familia, sin descargas.

**Character:** neutral y de sistema; el peso 700 con tracking negativo y interlineado apretado da la voz en los títulos grandes.

### Hierarchy
- **Display** (700, `--text-display` clamp(2.75rem, 1.5rem + 6vw, 6.5rem), 0.98, tracking -0.035em): nombre del Hero (`h1`) y títulos de sección (`h2`, `.title` en `layout.module.css`).
- **Headline** (500, `--text-xl` clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem), 1.2 en el rol): rol del Hero (en `--primary-text`) y email de Contacto.
- **Title** (`--text-lg` clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)): frase del Hero, texto de Sobre mí, título de tarjeta (1.2), categorías de Skills (en `--primary-text`).
- **Body** (400, `--text-base` 1.0625rem, 1.55): texto corrido, hasta `--measure` 62ch.
- **Label** (`--text-sm` 0.875rem): tags de las tarjetas y footer.

Pesos en uso: `--weight-regular` 400, `--weight-medium` 500 (botones, rol, email), `--weight-bold` 700 (display, marca de la nav). `--tracking-normal` y `--leading-snug`/`--leading-body` existen como tokens.

### Named Rules
**The Two Sizes Rule.** El peso visual lo llevan `--text-display` y `--text-base`; `--text-lg` y `--text-xl` apoyan, no compiten.

## Layout

Una columna única con anclas (`#inicio`, `#proyectos`, `#sobre-mi`, `#skills`, `#contacto`), en este orden: Hero, Proyectos, Sobre mí, Skills, Contacto.

- **Contenedor** (`.container`): `max-width: var(--content-width)` (72rem), centrado, `padding-inline: var(--gutter)` (clamp(1rem, 0.5rem + 2.5vw, 2rem)).
- **Secciones** (`.section`): `padding-block: var(--space-9)` (clamp(5rem, 4rem + 5vw, 9rem)) y `scroll-margin-top: var(--space-8)` para la nav pegajosa. Título con margen inferior `--space-7`.
- **Hero**: columna flex, `min-height: 90svh`, `gap: --space-5`, acciones con `margin-top: --space-4`.
- **Grillas** (breakpoint `min-width: 48rem`): Proyectos 2 columnas (1 en móvil, gap `--space-6`); Skills 3 columnas (gap `--space-6`); Sobre mí `2fr 1fr` con gap `--space-8` (gap `--space-6` en móvil).
- **Nav móvil** (`max-width: 30rem`): se oculta la marca y los links ocupan toda la fila con `justify-content: space-between`.
- **Escala de espaciado** (múltiplos de 4px): `--space-1` 0.25rem, 2 0.5rem, 3 0.75rem, 4 1rem, 5 1.5rem, 6 2rem, 7 3rem, 8 4.5rem, 9 fluido.
- Targets táctiles: los links sueltos llevan `padding-block` (`--space-2` o `--space-3`) con `display: inline-block`.

### Named Rules
**The Single Frame Rule.** Todo bloque de página vive dentro de `.container`; nada define márgenes laterales propios.
**The Token Only Rule.** Ningún módulo CSS escribe un valor propio de color, tamaño o espacio (la excepción son los breakpoints, que son literales porque `var()` no funciona en media queries).

## Elevation & Depth

Plano y por capas tonales. En reposo no hay sombras. La profundidad sale de: fondo fijo de cintas (`z-index: -1`) con `--scrim` encima, superficies de vidrio translúcido en tarjetas, y nav opaca `--surface` (`position: sticky`, `z-index: 10`). El skip-link va a `z-index: 20`.

### Shadow Vocabulary
- **Flotante** (`--shadow-float`: `0 12px 40px` de `--bg` al 70 %): reservada para lo que flota (menú, diálogo). Hoy no tiene consumidores.

### Named Rules
**The Flat At Rest Rule.** Ninguna superficie lleva sombra en reposo; solo `--shadow-float` y solo en elementos que flotan.
**The Opaque Nav Rule.** La nav es `--surface` opaca. Con vidrio el contenido de las tarjetas se mezclaba con los links al hacer scroll.
**The Glass Is Not Blur Rule.** El vidrio es solo `--glass` + `--glass-border`; no hay `backdrop-filter`.

## Shapes

Formas redondeadas y suaves. Radios: `--radius-sm` 0.5rem (sin consumidores), `--radius-md` 1rem (imagen de tarjeta), `--radius-lg` 1.5rem (tarjeta), `--radius-pill` 999px (botones, tags, skip-link). Bordes de 1px solo con `--glass-border`. Las imágenes de tarjeta se piden a 1200x675 con `loading="lazy"`.

## Components

### Buttons
- **Shape:** píldora (999px), `padding: --space-3 --space-5`, peso 500, sin subrayado.
- **Primary** (`.button.buttonPrimary`): relleno y borde `--primary`, texto `--text`. Hover: relleno y borde `--primary-hover`.
- **Secundario** (`.button`): `--glass` con borde `--glass-border`, texto `--text`. Hover: `--surface-raised`.
- **Hover / Focus:** el hover es un cambio de color estático, sin `transition`. Foco global: `:focus-visible { outline: 2px solid var(--primary-text); outline-offset: 2px }`.

### Cards / Containers (`ProjectCard`)
- **Corner Style:** `--radius-lg`. **Background:** `--glass`. **Border:** 1px `--glass-border`. **Padding:** `--space-5`. **Sombra:** ninguna.
- Columna flex, gap `--space-4`: imagen (`--radius-md`), título `h3` (`--text-lg`), descripción en `--text-muted`, lista de tags, links (`margin-top: auto` los ancla abajo).
- Los links de repositorio y demo solo se renderizan si la URL no es vacía ni `'#'`; llevan `aria-label` con el título (`Repositorio de …`, `Demo de …`), `target="_blank"` y `rel="noopener noreferrer"`. Color heredado de `a` (`--primary-text`), sin hover propio.

### Chips (tags)
- `--surface-raised`, texto `--text`, `--text-sm`, píldora, `padding: --space-1 --space-3`. Lista con `aria-label="Tecnologías"`. Sin estados.

### Navigation (`Nav`)
- Sticky, fondo `--surface` opaco, `padding-block: --space-2` dentro del contenedor, `gap: --space-5`. Marca (`--text`, 700, `white-space: nowrap`) a la izquierda; lista de anclas a la derecha en `--text-muted`, hover a `--text` (estático).
- Debajo de 30rem la marca se oculta (el nombre ya está en el Hero).
- Foco tipo XMB (Fase 4): los links van centrados (grilla `1fr auto 1fr`) y el de la sección que cruza el centro de la pantalla (`useActiveSection`, IntersectionObserver) lleva `aria-current="location"`: `--text`, `scale(1.15)` y un punto `--primary-text` debajo. Cambio de estado instantáneo, sin transición; el deslizamiento del foco queda para la Fase 3.
- `nav aria-label="Principal"`. Skip-link "Saltar al contenido" (`#contenido`): fijo, fuera de pantalla con `translateY(-200%)`, visible en `:focus` sobre `--primary` con texto `--text`.

### Fondo (`ThreadsBackground`)
- `position: fixed; inset: 0; z-index: -1; pointer-events: none; aria-hidden`, fondo `--bg`, y `::after` con `--scrim`. Carga con `React.lazy`. Lee `--primary` (color) y `--primary-text` (acento) con `getComputedStyle`, porque Threads no entiende `var()`. Parámetros: brightness 0.6, opacity 0.5, speed 0.25, `enableMouseInteraction={false}`.
- `Threads` (React Bits) y `SplitText` (React Bits) son piezas ajenas: se describen, no se rediseñan aquí. `SplitText` anima el `h1` del Hero (`splitType="words"`, `effect="wave"`, `trigger="load"`).

### Footer
- Contenedor estándar, `padding-block: --space-6`, `--text-muted`, `--text-sm`: "© año nombre".

### Movimiento
- Tokens: `--duration-fast` 150ms, `--duration-base` 300ms, `--duration-slow` 600ms (máximo por elemento), `--ease-out` cubic-bezier(0.22, 1, 0.36, 1), `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).
- `src/lib/motion.ts`: `seconds('--duration-x')` convierte ms a segundos y `ease('--ease-x')` crea un `CustomEase` desde el token; ambos leen `getComputedStyle`. GSAP no entiende `var()`.
- `useReveal` (`src/hooks/useReveal.ts`): los hijos `[data-reveal]` parten de `opacity: 0, y: 24` (aplicado por GSAP, no por CSS, así sin JS todo queda visible) y entran con `ScrollTrigger.batch` (`start: 'top 90%'`, `once`), duración `--duration-slow`, easing `--ease-out`, stagger `--duration-fast` / 2.
- Hero: SplitText con `--duration-slow`, delay `--duration-fast` y `--ease-out`.
- `prefers-reduced-motion: reduce`: `useReveal` no hace nada (usa `gsap.matchMedia`), `scroll-behavior` vuelve a `auto`, y Threads dibuja un solo frame (según `docs/components.md`, no verificado en `Threads.tsx`).

## Do's and Don'ts

### Do:
- **Do** usar solo `var(--token)` en CSS Modules; si falta un valor, se agrega a `tokens.css`.
- **Do** usar `--primary-text` para texto en verde y `--primary` como relleno bajo `--text`.
- **Do** aplicar el foco global (`outline: 2px solid var(--primary-text)`, offset 2px) y no sobrescribirlo.
- **Do** dejar el hover como cambio de color estático (botón primario a `--primary-hover`, botón de vidrio a `--surface-raised`, link de nav a `--text`).
- **Do** envolver cada sección en `layout.container` + `layout.section` y marcar con `data-reveal` lo que debe entrar con scroll.
- **Do** leer duración y easing desde los tokens con `seconds()` y `ease()` al animar con GSAP.
- **Do** mantener un único `h1` (nombre), `h2` por sección, `h3` por tarjeta o categoría; landmarks `nav`, `main#contenido`, `footer`; `aria-label` en links de tarjeta.
- **Do** mantener vidrio solo en tarjetas y el botón secundario; el contenido restante va sobre `--bg` y el scrim.

### Don't:
- **Don't** agregar `transition` ni `animation` en CSS: el movimiento es de GSAP y respeta `prefers-reduced-motion`.
- **Don't** usar `backdrop-filter` ni vidrio en la nav.
- **Don't** poner sombras en reposo ni gradientes de decoración.
- **Don't** usar `--primary` ni `--border` para texto; `--border` (1.38) no delimita controles.
- **Don't** esconder contenido en CSS esperando que JS lo revele.
- **Don't** agregar íconos sobre tarjetas, etiquetas pequeñas en mayúsculas sobre los títulos ni numeración tipo 01/02.
- **Don't** superar `--duration-slow` (600ms) por elemento.

## Accesibilidad

- Skip-link, un solo `h1`, landmarks (`nav` con `aria-label="Principal"`, `main#contenido`, `footer`), `lang="es"`, fondo `aria-hidden`.
- Imágenes de tarjeta con `alt` ("Captura de …") y dimensiones explícitas; `noscript` con nombre y email.
- `prefers-reduced-motion`: ver Movimiento.
- Todos los pares de texto cumplen 4.5:1 (ver tabla de contrastes). `color-scheme: dark`.

## Diferencias entre dirección y código

`docs/direction.md` es intención; donde difiere, vale el código.
- **Glass**: dirección dice "solo en las tarjetas"; el código también lo usa en el botón secundario (`.button`).
- **Tamaños de texto**: dirección dice "nada intermedio salvo `--text-lg`"; el código usa además `--text-xl` (rol del Hero, email) y `--text-sm` (tags, footer).
- **Nav**: dirección dice "todo lo demás va sobre `--bg`"; la nav es `--surface` opaca (decisión posterior, documentada en el CSS).
- **`--border`**: dirección lo asigna a divisores decorativos; ningún módulo lo usa. Los bordes reales usan `--glass-border`, que dirección no menciona.
- **Sombra**: `--shadow-float` está definida pero sin consumidores; igual `--radius-sm`, `--duration-base` y `--ease-in-out`.
- **Orden de secciones**: dirección lista Sobre mí antes de Proyectos; `App.tsx` monta Hero, Proyectos, Sobre mí, Skills, Contacto.
- **Sobre mí**: dirección pide 2-3 párrafos; el código renderiza un único `<p>` con `profile.about` (columna `2fr 1fr` con los links, como se pidió).
- **Hero**: dirección pide el nombre "ocupando el ancho"; el nombre usa `--text-display` con tope 6.5rem, sin ocupar el ancho forzado.
- **Fuente de la verdad**: dirección dice que el código se corrige; esta fase invierte esa regla (manda el código).

## Pendientes conocidos

- `og:image` y `og:url` sin definir (TODO en `index.html`; falta `public/og-image.png` 1200x630 y dominio).
- Contenido mockup en `src/data` (`projects.ts` con "Proyecto 1…", lorem ipsum, `repoUrl`/`liveUrl` en `'#'`, imagen placeholder).
- `SplitText` modificado respecto de React Bits (se quitó el `visibility: hidden` inicial); si se reinstala desde el CLI hay que repetir el cambio.
- `Threads` y `SplitText` son código ajeno y no siguen la regla de solo-tokens.
- Favicon (`public/favicon.svg`) escribe `#606c38` y `#e8e8ec` como literales (no puede usar `var()`); si cambia la paleta, actualizarlo a mano.
- Comportamiento de `Threads` con reduced-motion tomado de `docs/components.md`, no verificado en el código.
