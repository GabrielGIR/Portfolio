# Componentes

Una línea por componente: qué es, dependencias que agregó y si trae animación propia.

| Componente | Qué es | Dependencias agregadas | Animación propia |
|---|---|---|---|
| `Threads` | Fondo de cintas de luz en WebGL2 (React Bits, TS + CSS) | Ninguna | Sí, loop propio en WebGL. **Animación ajena**; con `prefers-reduced-motion` dibuja un solo frame (con `enableMouseInteraction={false}`) |
| `ThreadsBackground` | Envuelve `Threads`: carga con `React.lazy`, lee `--primary` y `--primary-text` con `getComputedStyle` y pone la capa `--scrim` | Ninguna | No |
| `SplitText` | Texto que se anima por letras o palabras (React Bits). **Instalado pero sin usar** en las secciones: oculta el texto (`visibility: hidden`) hasta que GSAP y las fuentes cargan | `gsap`, `@gsap/react` | Sí, GSAP. **Animación ajena**; se coordina en la Fase 3 |
| `Nav` | Barra fija con el nombre y las anclas a cada sección | Ninguna | No |
| `ProjectCard` | Tarjeta de proyecto: imagen, título, descripción, tags y links a repo y demo | Ninguna | No |
| `Footer` | Cierre con año y nombre | Ninguna | No |

Secciones (`src/sections/`): `Hero`, `Projects`, `About`, `Skills`, `Contact`. Consumen `src/data/` y no tienen animación.
