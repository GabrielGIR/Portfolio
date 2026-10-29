# Dirección visual

**En dos frases:** un portfolio oscuro y silencioso donde el nombre y los proyectos son lo único grande, sobre un fondo de cintas de luz que se mueven lento, como el menú de la PS3. Frutiger Aero apagado: vidrio translúcido y verde oliva, sin brillos ni colores saturados.

Fuente de verdad de la Fase 1. Los valores viven en `src/styles/tokens.css`; si algo de este documento se contradice con el código, se corrige el código.

## Idea

Sobre esta página, **el menú cruzado de la PS3 (XMB)** se vuelve **la navegación y el fondo**: una barra horizontal centrada con las secciones, donde la sección visible toma el foco (más grande, más clara y con un punto debajo, como el ítem elegido del XMB), y cintas de luz lentas detrás de todo (componente Threads, Fase 2).

Un competidor cualquiera (otro portfolio dev oscuro) no tiene esa referencia de consola ni el verde oliva apagado.

## Composición

- Una sola página con scroll y anclas. Un solo marco: márgenes laterales iguales (`--gutter`), contenido hasta `--content-width`.
- Alineado a la izquierda; el centrado solo en el Hero, como mucho.
- Dos tamaños hacen el trabajo visible: `--text-display` (nombre y títulos de sección) y `--text-base`. Nada intermedio salvo `--text-lg` para la frase de apoyo.
- Separación entre secciones: `--space-9`. Cada sección con una composición distinta a la vecina.
- Superficies tipo vidrio (`--glass`) solo en las tarjetas de proyecto, para que se lean sobre las ondas. Todo lo demás va sobre `--bg`.

## Tipografía

**Rediseño (2026-10-26):** títulos, nav y datos destacados en **Sora** (Google Fonts, 400/600/700, `display=swap`, token `--font-display`); el texto corrido sigue en la fuente del sistema. Desde la fase de prueba (2026-10-27) el nombre del hero ya no usa `--text-hero` (token sin uso por ahora).

Una familia sans serif del sistema (`--font-sans`), sin descargas. Pesos: 400, 500 y 700. Títulos grandes con tracking negativo (`--tracking-display`) e interlineado ajustado; texto corrido a 17px, interlineado 1.55, línea de hasta 62 caracteres. Si más adelante se quiere una fuente propia, entra con `display=swap`, máximo 2 familias y 4 pesos.

## Color

Base oscura con un único acento, el verde oliva.

| Rol | Token | Uso |
|---|---|---|
| Fondo | `--bg` | Página |
| Superficies | `--surface`, `--surface-raised` | Bloques y tarjetas |
| Borde | `--border` | Solo divisores decorativos (no hay controles con input) |
| Acento | `--primary` / `--primary-hover` | Fondo de botón; el hover es **más oscuro** |
| Acento como texto | `--primary-text` | Links y detalles; nunca `--primary` para texto |
| Texto | `--text`, `--text-muted` | Principal y secundario |

Contrastes ya medidos en `docs/PLAN.md`; todos los pares de texto pasan 4.5:1.

## Secciones

Estado actual (fase de prueba de diseño, 2026-10-27). Orden en la página: Hero, Proyectos, Skills, Sobre mí, Contacto.

| Sección | Qué lleva | Composición |
|---|---|---|
| Hero | Línea "Fullstack Developer / año", nombre en dos tonos ("Gabriel Ignacio" en `--text`, "Roel" en `--text-muted`), tagline con palabras clave resaltadas y link "Más sobre mí", estado "Disponible para trabajar" con punto oliva, botones "CV" (solo si hay PDF), "Ver proyectos" y "Contacto" | Bloque compacto en dos columnas (`2fr 1fr`): presentación a la izquierda y "Qué hago" (título y pasos) a la derecha; una columna en móvil. Sin parallax |
| Proyectos | Lista de proyectos y el detalle del elegido: imagen, título, descripción, tags, demo y repo | Columna XMB (`tablist`) con el detalle al lado; en móvil, fila deslizable arriba |
| Skills | Frontend, Backend y Herramientas, con una frase de apoyo | Tarjetas de vidrio con ícono en burbuja, título y chips; rayos de luz (`SideRays`) dentro de cada tarjeta; 2 columnas, la última a todo el ancho |
| Sobre mí | Texto (hoy Lorem ipsum) y botones LinkedIn y GitHub | Una columna, sin gráfico (el de puntos `</>` se probó y se descartó) |
| Contacto | Frase, email grande, "Copiar email", LinkedIn y GitHub | Columna única |
| Footer | "© año nombre" y "Volver arriba" | Una línea |

Historial: en el rediseño del 2026-10-26 el Hero era un cartel con el nombre a todo el ancho y parallax, Sobre mí tenía una ficha de datos y Skills eran filas editoriales; la fase de prueba los reemplazó.

## Qué se evita

Frutiger Aero clásico saturado (celestes brillantes, burbujas, reflejos), gradientes de decoración, sombras en reposo, íconos sobre tarjetas, etiquetas pequeñas en mayúsculas sobre los títulos y numeración tipo 01/02. La skill de taste prohíbe el vidrio y los degradados; el plan pide vidrio, así que gana el plan: el vidrio se limita a las tarjetas y los degradados quedan fuera.
