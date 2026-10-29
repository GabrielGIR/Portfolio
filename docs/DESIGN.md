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
  border-input: "#6b6a78"
typography:
  display:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.25rem + 5vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "Sora, system-ui, sans-serif"
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

Derivado del código construido. Primera versión: Fase 4. **Actualizado el 2026-10-27** con el rediseño del 2026-10-26 (Sora, nav y proyectos estilo XMB) y la fase de prueba de diseño (hero compacto, Skills con rayos, Sobre mí sin ficha). Fuente única de valores: `src/styles/tokens.css`. Los componentes solo usan `var(--token)`; si este documento y el código difieren, manda el código.

## Overview

**Creative North Star: "El menú de la consola"**

Un portfolio oscuro donde el nombre y los proyectos son lo único grande, sobre cintas de luz que se mueven lento detrás de todo (referencia: el menú XMB de la PS3, en versión Frutiger Aero apagada). Una sola página con scroll y anclas, alineada a la izquierda, con un único acento verde oliva y vidrio translúcido solo en las tarjetas.

La interfaz es plana: no hay sombras en reposo ni gradientes. Títulos, nav y datos van en Sora; el texto corrido, en la fuente del sistema. Hay íconos de línea propios (secciones, áreas de Skills, flechas). El movimiento de entrada y los cursores los hace GSAP; los hovers usan transiciones CSS cortas; hay dos efectos WebGL (Threads de fondo y SideRays en las tarjetas de Skills). Todo se corta con `prefers-reduced-motion`.

**Key Characteristics:**
- Oscuro, un solo acento (verde oliva), texto del acento siempre con `--primary-text`.
- Dos tamaños dominan: `--text-display` y `--text-base`; el resto es de apoyo.
- Vidrio (`--glass`) en tarjetas, botones secundarios, burbujas de íconos y tarjetas de Skills; la nav es opaca.
- Transiciones CSS solo de hover/estado (color, fondo, borde, `transform`), ≤ `--duration-base`, con `transition: none` en reduced-motion. Sin `backdrop-filter`.
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
- **Borde de campo** (`--border-input`, #6b6a78): borde de los campos del formulario de Contacto. 3.62 sobre `--bg` y 3.39 sobre `--surface`, por encima del 3:1 que piden los controles.
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

**Display Font:** `--font-display` = "Sora", con `--font-sans` de respaldo. Google Fonts, pesos 400/600/700, `display=swap` (`index.html`). Se usa en `h1`-`h3` (`index.css`), nav, datos y etiquetas.
**Body Font:** `--font-sans` = system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif. Sin descargas.

**Character:** Sora geométrica en los títulos y la nav, con peso 700, tracking negativo e interlineado apretado; el texto corrido queda neutral y de sistema.

### Hierarchy
- **Display** (700, `--text-display` clamp(2.5rem, 1.25rem + 5vw, 5.5rem), 0.98, tracking -0.035em): títulos de sección (`h2`, `.title` en `layout.module.css`).
- **Headline** (`--text-2xl` clamp(1.75rem, 0.75rem + 3.5vw, 3.75rem)): nombre del Hero (`h1`, en dos tonos, para que entre en una línea a 1280 px). `--text-xl`: email de Contacto, título de "Qué hago" y texto de Sobre mí.
- `--text-hero` (clamp(3.25rem, 0.75rem + 9vw, 10rem)) existe como token pero hoy no tiene consumidores (era el nombre del hero tipo cartel).
- **Title** (`--text-lg` clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)): frase del Hero, texto de Sobre mí, título de tarjeta (1.2), categorías de Skills (en `--primary-text`).
- **Body** (400, `--text-base` 1.0625rem, 1.55): texto corrido, hasta `--measure` 62ch.
- **Label** (`--text-sm` 0.875rem): tags de las tarjetas y footer.

Pesos en uso: `--weight-regular` 400, `--weight-medium` 500 (botones, rol, email), `--weight-bold` 700 (display, marca de la nav). `--tracking-normal` y `--leading-snug`/`--leading-body` existen como tokens.

### Named Rules
**The Two Sizes Rule.** El peso visual lo llevan `--text-display` y `--text-base`; `--text-lg` y `--text-xl` apoyan, no compiten.

## Layout

Una columna única con anclas (`#inicio`, `#proyectos`, `#skills`, `#sobre-mi`, `#contacto`), en este orden: Hero, Proyectos, Skills, Sobre mí, Contacto (y el footer). La nav sigue el mismo orden.

- **Contenedor** (`.container`): `max-width: var(--content-width)` (72rem), centrado, `padding-inline: var(--gutter)` (clamp(1rem, 0.5rem + 2.5vw, 2rem)).
- **Secciones** (`.section`): `padding-block: var(--space-9)` (clamp(5rem, 4rem + 5vw, 9rem)) y `scroll-margin-top: var(--space-8)` para la nav pegajosa. Título con margen inferior `--space-7`.
- **Hero**: bloque compacto; desde 48rem, dos columnas `2fr 1fr` (presentación y "Qué hago"); una columna en móvil.
- **Grillas** (breakpoint `min-width: 48rem`): Proyectos como columna XMB (lista a la izquierda, detalle a la derecha; en móvil fila deslizable); Skills 2 columnas de tarjetas, la última a todo el ancho si el número es impar; Sobre mí una columna.
- **Nav móvil** (`max-width: 48rem`): íconos arriba y etiquetas abajo; se oculta la marca y los links ocupan toda la fila.
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
- **Íconos:** `inline-flex` con `gap: --space-2`; las flechas (`.arrow`) se corren hacia donde llevan al pasar el mouse.
- **Hover / Focus:** cambio de fondo y borde con `transition` de `--duration-fast` (cortada con reduced-motion). Foco global: `:focus-visible { outline: 2px solid var(--primary-text); outline-offset: 2px }`.

### Cards / Containers (`ProjectCard`)
- **Corner Style:** `--radius-lg`. **Background:** `--glass`. **Border:** 1px `--glass-border`. **Padding:** `--space-5`. **Sombra:** ninguna.
- Columna flex, gap `--space-4`: imagen (`--radius-md`), título `h3` (`--text-lg`), descripción en `--text-muted`, lista de tags, links (`margin-top: auto` los ancla abajo).
- Los links de repositorio y demo solo se renderizan si la URL no es vacía ni `'#'`; llevan `aria-label` con el título (`Repositorio de …`, `Demo de …`), `target="_blank"` y `rel="noopener noreferrer"`. Color heredado de `a` (`--primary-text`), sin hover propio.

### Chips (tags)
- `--surface-raised`, texto `--text`, `--text-sm`, píldora, `padding: --space-1 --space-3`. Lista con `aria-label="Tecnologías"`. Sin estados.

### Navigation (`Nav`)
- Sticky, fondo `--surface` opaco. Marca (`--text`, 700) a la izquierda; links centrados con ícono + etiqueta en Sora, `--text-muted`, hover a `--text` con transición corta.
- Foco tipo XMB: el link de la sección que cruza el centro de la pantalla (`useActiveSection`) lleva `aria-current="location"`, pasa a `--text` y crece a `--scale-focus` (1.15). Un punto `--primary-text` se desliza con GSAP hasta él (`useMarker`). Al cargar, la barra baja desde arriba (GSAP).
- En móvil se oculta la marca y los links ocupan toda la fila.
- `nav aria-label="Principal"`. Skip-link "Saltar al contenido" (`#contenido`): fijo, fuera de pantalla con `translateY(-200%)`, visible en `:focus` sobre `--primary` con texto `--text`.

### Hero
- Línea "rol / año" en `--text-muted` y `--text-sm`; `h1` con dos `SplitText` (`span`): nombre en `--text` y apellido en `--text-muted`.
- Tagline con las frases de `profile.keywords` en `<strong>` (`--text`) y link "Más sobre mí" a `#sobre-mi`.
- Estado: punto `--primary-text` + "Disponible para trabajar" (texto fijo de `profile.availability`).
- Botones: "CV" (primario, solo si `profile.cvUrl`), "Ver proyectos" (primario si no hay CV) y "Contacto". Todos con ícono.
- `aside` "Qué hago": etiqueta, título (`profile.whatIDo.title`) y pasos unidos con " · ".

### Proyectos (`Projects` + `ProjectCard`)
- `tablist` vertical con flechas, Inicio y Fin, `tabIndex` móvil y `aria-selected`; el `tabpanel` muestra el `ProjectCard` del elegido. Con mouse fino, pasar por un ítem lo elige tras `--duration-fast`. Cursor `useMarker`: barra a la izquierda en escritorio, punto debajo en móvil. Al cambiar, el detalle entra con GSAP.
- `ProjectCard`: imagen 16:9, título, descripción, tags y botones Demo/Repositorio solo con URL real.

### Skills
- Frase de apoyo y tarjetas de vidrio por área: burbuja con ícono (`monitor`, `server`, `tools`), título y chips en píldora. Al pasar por una tarjeta su borde va a `--primary` y las otras bajan a `--text-muted`.
- Dentro de cada tarjeta, `SideRays` (React Bits, WebGL2) desde la esquina superior izquierda, detrás del contenido, `aria-hidden`, cargado con `React.lazy`; colores `--primary-text` y `--primary` leídos con `token()`.

### Encabezados (`SectionHeader`) e íconos (`Icon`)
- `SectionHeader`: burbuja de vidrio con el ícono de la sección, `h2` con revelado por máscara y, opcional, un dato real a la derecha ("4 proyectos", "15 tecnologías en 3 áreas").
- `Icon`: íconos de línea 24×24 con `currentColor` y `aria-hidden`.

### Fondo (`ThreadsBackground`)
- `position: fixed; inset: 0; z-index: -1; pointer-events: none; aria-hidden`, fondo `--bg`, y `::after` con `--scrim`. Carga con `React.lazy` y aparece con un fundido GSAP. Lee `--primary` y `--primary-text` con `getComputedStyle`. Parámetros: brightness 0.6, opacity 0.5, speed 0.25, `enableMouseInteraction={false}`.
- `Threads`, `SideRays` y `SplitText` (React Bits) son piezas ajenas: se describen, no se rediseñan aquí.

### Contacto y Footer
- Contacto: frase y dos columnas (una en móvil). Izquierda: formulario de Formspree (`profile.formspreeId`; sin ID no se muestra) con nombre, email y mensaje, `label` por campo, errores en texto ("Error: …") enlazados con `aria-describedby` y `aria-invalid`, foco al primer campo inválido, campo trampa `_gotcha`, asunto `_subject`, botón "Enviar mensaje" deshabilitado mientras envía y estado en `role="status"`; aviso "Solo uso tus datos para responderte". Derecha: el email como texto (sin `mailto:`, corta después de la @), "Copiar email", LinkedIn y GitHub.
- Campos: fondo `--surface`, borde 1px `--border-input` (3.39 sobre `--surface`), `--radius-md`; con error, borde 2px `--text`.
- Footer: una línea con "© año nombre. All rights reserved." y "Volver arriba", en `--text-muted` y `--text-sm`.

### Movimiento
- Tokens: `--duration-fast` 150ms, `--duration-base` 300ms, `--duration-slow` 600ms (máximo por elemento), `--ease-out` cubic-bezier(0.22, 1, 0.36, 1), `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).
- `src/lib/motion.ts`: `seconds('--duration-x')` convierte ms a segundos y `ease('--ease-x')` crea un `CustomEase` desde el token; ambos leen `getComputedStyle`. GSAP no entiende `var()`.
- `useReveal` (`src/hooks/useReveal.ts`): los hijos `[data-reveal]` parten de `opacity: 0, y: 24` (aplicado por GSAP, no por CSS, así sin JS todo queda visible) y entran con `ScrollTrigger.batch` (`start: 'top 90%'`, `once`), duración `--duration-slow`, easing `--ease-out`, stagger `--duration-fast` / 2. Los `[data-reveal="title"]` suben detrás de una máscara (`clip-path`).
- `useMarker`: desliza el cursor de la nav y de Proyectos (`--duration-base`); se reubica sin animar al cargar Sora y al cambiar el tamaño de la ventana.
- Hero: SplitText con `--duration-slow`, delay `--duration-fast` y `--ease-out`, en el nombre y el apellido. Sin parallax.
- Transiciones CSS: solo hover/estado (botones, flechas, links de la nav, ítems de Proyectos, tarjetas y chips de Skills).
- `prefers-reduced-motion: reduce`: `useReveal` no hace nada (`gsap.matchMedia`), los demás efectos GSAP se cortan con `reducedMotion()`, las transiciones CSS pasan a `none`, `scroll-behavior` vuelve a `auto`, y Threads y SideRays dibujan un solo cuadro (verificado en su código).

## Do's and Don'ts

### Do:
- **Do** usar solo `var(--token)` en CSS Modules; si falta un valor, se agrega a `tokens.css`.
- **Do** usar `--primary-text` para texto en verde y `--primary` como relleno bajo `--text`.
- **Do** aplicar el foco global (`outline: 2px solid var(--primary-text)`, offset 2px) y no sobrescribirlo.
- **Do** limitar las transiciones CSS a hover/estado, con duración de tokens (≤ `--duration-base`) y `transition: none` en reduced-motion.
- **Do** envolver cada sección en `layout.container` + `layout.section` y marcar con `data-reveal` lo que debe entrar con scroll.
- **Do** leer duración y easing desde los tokens con `seconds()` y `ease()` al animar con GSAP.
- **Do** mantener un único `h1` (nombre), `h2` por sección, `h3` por tarjeta o categoría; landmarks `nav`, `main#contenido`, `footer`; `aria-label` en links de tarjeta.
- **Do** mantener el vidrio en tarjetas, botones secundarios y burbujas de íconos; el contenido restante va sobre `--bg` y el scrim.

### Don't:
- **Don't** usar `transition` o `animation` en CSS para entradas o movimientos de página: eso es de GSAP.
- **Don't** usar `backdrop-filter` ni vidrio en la nav.
- **Don't** poner sombras en reposo ni gradientes de decoración.
- **Don't** usar `--primary` ni `--border` para texto; `--border` (1.38) no delimita controles.
- **Don't** esconder contenido en CSS esperando que JS lo revele.
- **Don't** usar etiquetas pequeñas en mayúsculas sobre los títulos ni numeración tipo 01/02.
- **Don't** superar `--duration-slow` (600ms) por elemento.

## Accesibilidad

- Skip-link, un solo `h1`, landmarks (`nav` con `aria-label="Principal"`, `main#contenido`, `footer`), `lang="es"`, fondo `aria-hidden`.
- Imágenes de tarjeta con `alt` ("Captura de …") y dimensiones explícitas; `noscript` con nombre y email.
- `prefers-reduced-motion`: ver Movimiento.
- Todos los pares de texto cumplen 4.5:1 (ver tabla de contrastes). `color-scheme: dark`.

## Diferencias entre dirección y código

`docs/direction.md` es intención; donde difiere, vale el código.
- **Íconos sobre tarjetas**: `direction.md` los evita en "Qué se evita"; el código los usa en las tarjetas de Skills y en los encabezados de sección (decisión del rediseño, pendiente de reflejar en `direction.md`).
- **WebGL**: el plan permitía un solo efecto WebGL (Threads); Skills agrega `SideRays` en cada tarjeta (3 canvas más). Pendiente de decisión en `PLAN.md`.
- **Tamaños de texto**: dirección dice "nada intermedio salvo `--text-lg`"; el código usa además `--text-xl`, `--text-2xl` y `--text-sm`.
- **Nav**: la nav es `--surface` opaca (decisión de la Fase 4).
- **`--border`**: dirección lo asigna a divisores decorativos; ningún módulo lo usa. Los bordes reales usan `--glass-border`.
- **Tokens sin consumidores**: `--text-hero`, `--shadow-float`, `--radius-sm` y `--ease-in-out`.
- **Sobre mí**: dirección pide 2-3 párrafos; hoy hay un único `<p>` con Lorem ipsum y los botones LinkedIn/GitHub. El gráfico de puntos `</>` de la fase de prueba se descartó.

## Pendientes conocidos

- **Accesibilidad del `h1`**: `SplitText` pone `aria-label` sobre dos `<span>` y oculta las palabras con `aria-hidden`. Chrome expone el nombre completo, pero `aria-label` en un `span` no está permitido por ARIA y algunos lectores de pantalla pueden leer el `h1` vacío; axe lo marcaría. Revisar en la Fase 5.
- `og:image` y `og:url` sin definir (TODO en `index.html`).
- Contenido de prueba en `src/data`: `about` en Lorem ipsum, proyectos 3 y 4 con "Proyecto N", tags "Lorem/Ipsum", links `'#'` e imagen placeholder.
- Footer en inglés ("All rights reserved.") en un sitio en español.
- `cv.pdf` pendiente: el botón "CV" no aparece hasta que `profile.cvUrl` tenga valor.
- `SplitText` modificado respecto de React Bits (sin `visibility: hidden` inicial); si se reinstala, repetir el cambio.
- `Threads`, `SideRays` y `SplitText` son código ajeno y no siguen la regla de solo-tokens (sus colores por defecto son hex, pero siempre se pasan desde tokens).
- Favicon (`public/favicon.svg`) y placeholder de proyectos escriben colores de la paleta como literales; si cambia la paleta, actualizarlos a mano.
- `docs/design.json` no se regeneró en esta actualización: describe la versión de la Fase 4.
