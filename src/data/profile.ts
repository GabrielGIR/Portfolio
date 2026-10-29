export const profile = {
  firstName: "Gabriel Ignacio",
  lastName: "Roel",
  name: "Gabriel Ignacio Roel",
  role: "Fullstack Developer",
  tagline:
    "Desarrollador Full Stack con enfoque a backend. Desarrollo websites para escalar tu startup.",
  about: "Hola, Soy Gabriel y soy de Argentina.", // TODO: texto real
  // Frases de la tagline que se resaltan en el hero
  keywords: ["backend", "aplicaciones web escalables", "análisis de datos"],
  availability: "Disponible para trabajar",
  whatIDo: { title: "Websites a medida, análisis de datos", steps: ["Idea", "Arquitectura", "Desarrollo", "Lanzamiento"] },
  // Poné el PDF en public/cv.pdf y asigná "/cv.pdf": mientras tanto el botón CV no se muestra
  cvUrl: undefined as string | undefined,
  // En dos partes para que no aparezca completo en el código (los scrapers buscan "algo@dominio"); se une al hacer clic
  email: ["gabrielroel777", "gmail.com"] as const,
  // ID de https://formspree.io/f/<ID>; sin ID el formulario de Contacto no se muestra
  formspreeId: "xljjbqrw",
  linkedin: "https://www.linkedin.com/in/gabriel-roel-187a8b247/",
  github: "https://github.com/GabrielGIR",
};
