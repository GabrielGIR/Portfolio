export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string; // ruta en /public/projects
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

// TODO: reemplazar los mockups por los 4 proyectos reales (título, descripción, imagen, tags, repoUrl, liveUrl)
export const projects: Project[] = [
  {
    slug: "proyecto-1",
    title: "Gestión canchas de padel",
    description: "Un sistema que ayuda a clubes a administrar sus canchas de padel",
    image: "/projects/placeholder.svg",
    tags: ["TYPESCRIPT", "NESTJS", "ANGULAR", "DOCKER"],
    repoUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "proyecto-2",
    title: "SERVICIOS SAN JOSÉ",
    description: "Rediseño de landing page más un sistema para poder llevar regsitros de sus servicios",
    image: "/projects/placeholder.svg",
    tags: ["Lorem", "Ipsum"],
    repoUrl: "#",
    liveUrl: "#",
  },
   {
    slug: "proyecto-3",
    title: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/placeholder.svg",
    tags: ["Lorem", "Ipsum"],
    repoUrl: "#",
    liveUrl: "#",
  },
   {
    slug: "proyecto-4",
    title: "Proyecto 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/placeholder.svg",
    tags: ["Lorem", "Ipsum"],
    repoUrl: "#",
    liveUrl: "#",
  },
];
