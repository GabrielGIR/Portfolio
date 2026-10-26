import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import layout from '../styles/layout.module.css'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="proyectos" className={`${layout.container} ${layout.section}`}>
      <h2 data-reveal className={layout.title}>Proyectos</h2>
      <ul className={styles.grid}>
        {projects.map((p) => (
          <li data-reveal key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
