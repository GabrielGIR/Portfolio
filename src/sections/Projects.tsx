import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import layout from '../styles/layout.module.css'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="proyectos" className={`${layout.container} ${layout.section}`}>
      <h2 className={layout.title}>Proyectos</h2>
      <ul className={styles.grid}>
        {projects.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
