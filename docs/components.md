# Componentes

Una línea por componente: qué es, dependencias que agregó y si trae animación propia.

| Componente | Qué es | Dependencias agregadas | Animación propia |
|---|---|---|---|
| `Threads` | Fondo de cintas de luz en WebGL2 (React Bits, TS + CSS) | Ninguna | Sí, loop propio en WebGL. **Animación ajena**; con `prefers-reduced-motion` dibuja un solo frame (con `enableMouseInteraction={false}`) |
| `ThreadsBackground` | Envuelve `Threads`: carga con `React.lazy`, lee `--primary` y `--primary-text` con `getComputedStyle`, pone la capa `--scrim` y funde las cintas al aparecer | Ninguna | Sí, GSAP (fundido de entrada, se omite con reduced-motion) |
| `SplitText` | Texto que se anima por letras o palabras (React Bits). Se usa en el `h1` del Hero. **Modificado:** se le quitó el `visibility: hidden` inicial; si se reinstala desde el CLI, hay que repetir el cambio | `gsap`, `@gsap/react` | Sí, GSAP. Coordinada en la Fase 3 (duración y easing de los tokens) |
| `Nav` | Barra XMB: íconos y etiquetas por sección, foco en la sección visible (`useActiveSection`), cursor que se desliza con GSAP (`useMarker`) y entrada desde arriba al cargar | Ninguna | Sí, GSAP (cursor y entrada) y transición CSS de color y escala; ambas se cortan con reduced-motion |
| `ProjectCard` | Detalle del proyecto elegido: imagen 16:9, título, descripción, tags y botones Demo/Repositorio (solo con URL real) | Ninguna | No (lo anima `Projects`) |
| `Icon` | Íconos de línea propios: las 4 categorías y las flechas de los links (`data-dir` para el hover) | Ninguna | No (hover CSS) |
| `SectionHeader` | Encabezado de sección: ícono de la categoría en un círculo de vidrio, título con revelado por máscara y un dato real opcional ("4 proyectos") | Ninguna | No (lo anima `useReveal`) |
| `Footer` | Cierre: el nombre a todo el ancho, apagado, y "Volver arriba" | Ninguna | No |

Secciones (`src/sections/`): `Hero`, `Projects`, `About`, `Skills`, `Contact`. Consumen `src/data/` y animan sus elementos `[data-reveal]` con `useReveal` (`src/hooks/useReveal.ts`); los `[data-reveal="title"]` suben detrás de una máscara (`clip-path`). El Hero tiene parallax al hacer scroll (nombre y datos a distinta velocidad, `scrub`).

`Projects` es una columna XMB: `tablist` con flechas, Inicio y Fin, y el detalle al lado (en móvil, fila deslizable arriba). Con mouse, pasar por un ítem lo elige tras una pausa de `--duration-fast`; un cursor (`useMarker`) se desliza hasta el elegido: barra a la izquierda en escritorio, punto debajo en móvil. En Skills, al pasar por una fila las otras bajan a `--text-muted`. Al cambiar de proyecto el detalle entra con GSAP. `Contact` tiene un botón "Copiar email" con aviso en `role="status"`.
