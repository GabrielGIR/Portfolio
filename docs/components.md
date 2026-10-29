# Componentes

Una línea por componente: qué es, dependencias que agregó y si trae animación propia.

| Componente | Qué es | Dependencias agregadas | Animación propia |
|---|---|---|---|
| `Threads` | Fondo de cintas de luz en WebGL2 (React Bits, TS + CSS) | Ninguna | Sí, loop propio en WebGL. **Animación ajena**; con `prefers-reduced-motion` dibuja un solo frame (con `enableMouseInteraction={false}`) |
| `ThreadsBackground` | Envuelve `Threads`: carga con `React.lazy`, lee `--primary` y `--primary-text` con `getComputedStyle`, pone la capa `--scrim` y funde las cintas al aparecer | Ninguna | Sí, GSAP (fundido de entrada, se omite con reduced-motion) |
| `SideRays` | Rayos de luz en WebGL2 (React Bits, TS + CSS) que se usan **dentro de cada tarjeta de Skills**, desde la esquina superior izquierda y detrás del contenido; sin mouse. Colores `--primary-text`/`--primary`, `opacity` 0.8, carga con `React.lazy` | Ninguna | Sí, loop propio en WebGL. **Animación ajena**; con reduced-motion dibuja un solo cuadro. Son 3 canvas más (uno por tarjeta) además de Threads |
| `SplitText` | Texto que se anima por letras o palabras (React Bits). Se usa en el `h1` del Hero. **Modificado:** se le quitó el `visibility: hidden` inicial; si se reinstala desde el CLI, hay que repetir el cambio | `gsap`, `@gsap/react` | Sí, GSAP. Coordinada en la Fase 3 (duración y easing de los tokens) |
| `Nav` | Barra XMB: íconos y etiquetas por sección, foco en la sección visible (`useActiveSection`), cursor que se desliza con GSAP (`useMarker`) y entrada desde arriba al cargar | Ninguna | Sí, GSAP (cursor y entrada) y transición CSS de color y escala; ambas se cortan con reduced-motion |
| `ProjectCard` | Detalle del proyecto elegido: imagen 16:9, título, descripción, tags y botones Demo/Repositorio (solo con URL real) | Ninguna | No (lo anima `Projects`) |
| `Icon` | Íconos de línea propios: las 4 secciones, las 3 áreas de Skills (`monitor`, `server`, `tools`), `file` (botón CV) y las flechas de los links (`data-dir` para el hover) | Ninguna | No (hover CSS) |
| `SectionHeader` | Encabezado de sección: ícono de la categoría en un círculo de vidrio, título con revelado por máscara y un dato real opcional ("4 proyectos") | Ninguna | No (lo anima `useReveal`) |
| `Footer` | Cierre: "© año nombre. All rights reserved." y "Volver arriba" | Ninguna | No |

Secciones (`src/sections/`), en el orden de la página: `Hero`, `Projects`, `Skills`, `About`, `Contact` (y el footer). Consumen `src/data/` y animan sus elementos `[data-reveal]` con `useReveal` (`src/hooks/useReveal.ts`); los `[data-reveal="title"]` suben detrás de una máscara (`clip-path`). El Hero es un bloque compacto de dos columnas (presentación y "Qué hago"); sin parallax.

`Projects` es una columna XMB: `tablist` con flechas, Inicio y Fin, y el detalle al lado (en móvil, fila deslizable arriba). Con mouse, pasar por un ítem lo elige tras una pausa de `--duration-fast`; un cursor (`useMarker`) se desliza hasta el elegido: barra a la izquierda en escritorio, punto debajo en móvil. Skills son tarjetas de vidrio por área (ícono en burbuja, título y chips en píldora; la última ocupa el ancho completo si el número es impar); al pasar por una, su borde pasa a `--primary` y las otras bajan a `--text-muted`. Al cambiar de proyecto el detalle entra con GSAP. `Contact` tiene un formulario (Formspree, `fetch` sin dependencias: nombre, email y mensaje, validación propia con `aria-invalid`/`aria-describedby`, campo trampa `_gotcha` y estado en `role="status"`) y, al lado, el email oculto (••••@••••.com) hasta pulsar "Mostrar email", guardado en dos partes en `profile.ts` para que no salga en el HTML ni en el bundle, con "Copiar email", LinkedIn y GitHub. Sin `mailto:`.
