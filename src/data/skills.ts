import type { IconName } from "../components/Icon";

export type SkillGroup = { category: string; icon: IconName; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "monitor",
    items: ["Angular", "Angular Material", "Spartan UI", "PrimeNG", "React"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["TypeScript", "NestJS", "Python", "Django", "FastAPI", "Golang"],
  },
  {
    category: "Herramientas",
    icon: "tools",
    items: ["Docker", "n8n", "PostgreSQL", "MantisBT"],
  },
];
