# Dirección visual

**En dos frases:** un portfolio oscuro y silencioso donde el nombre y los proyectos son lo único grande, sobre un fondo de cintas de luz que se mueven lento, como el menú de la PS3. Frutiger Aero apagado: vidrio translúcido y verde oliva, sin brillos ni colores saturados.

Fuente de verdad de la Fase 1. Los valores viven en `src/styles/tokens.css`; si algo de este documento se contradice con el código, se corrige el código.

## Idea

Sobre esta página, **el menú cruzado de la PS3 (XMB)** se vuelve **la navegación y el fondo**: una barra horizontal simple con las secciones, y cintas de luz lentas detrás de todo (componente Threads, Fase 2).

Un competidor cualquiera (otro portfolio dev oscuro) no tiene esa referencia de consola ni el verde oliva apagado.

## Composición

- Una sola página con scroll y anclas. Un solo marco: márgenes laterales iguales (`--gutter`), contenido hasta `--content-width`.
- Alineado a la izquierda; el centrado solo en el Hero, como mucho.
- Dos tamaños hacen el trabajo visible: `--text-display` (nombre y títulos de sección) y `--text-base`. Nada intermedio salvo `--text-lg` para la frase de apoyo.
- Separación entre secciones: `--space-9`. Cada sección con una composición distinta a la vecina.
- Superficies tipo vidrio (`--glass`) solo en las tarjetas de proyecto, para que se lean sobre las ondas. Todo lo demás va sobre `--bg`.

## Tipografía

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

| Sección | Qué lleva | Composición |
|---|---|---|
| Hero | Nombre, "Fullstack Developer", la frase de valor, botones "Ver proyectos" y "Contacto" | Nombre a `--text-display` ocupando el ancho, frase debajo, botones en la misma línea de base |
| Sobre mí | 2-3 párrafos cortos, sin foto | Columna de texto a la izquierda y los links (LinkedIn, GitHub) a la derecha |
| Proyectos | 4 tarjetas: imagen, título, descripción, tags, repo y demo | Grilla de 2 columnas en escritorio, 1 en móvil; tarjetas de vidrio |
| Skills | Frontend, Backend y Herramientas | Tres columnas de texto, sin barras ni íconos |
| Contacto | Email, LinkedIn, GitHub | Frase grande con el email como link, links debajo |

## Qué se evita

Frutiger Aero clásico saturado (celestes brillantes, burbujas, reflejos), gradientes de decoración, sombras en reposo, íconos sobre tarjetas, etiquetas pequeñas en mayúsculas sobre los títulos y numeración tipo 01/02. La skill de taste prohíbe el vidrio y los degradados; el plan pide vidrio, así que gana el plan: el vidrio se limita a las tarjetas y los degradados quedan fuera.
