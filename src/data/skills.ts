export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Angular", "Angular Material", "Spartan UI", "PrimeNG", "React"],
  },
  {
    category: "Backend",
    items: ["TypeScript", "NestJS", "Python", "Django", "FastAPI", "Golang"],
  },
  {
    category: "Herramientas",
    items: ["Docker", "n8n", "PostgreSQL"],
  },
];
