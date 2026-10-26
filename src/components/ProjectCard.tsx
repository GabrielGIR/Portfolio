import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, tags, repoUrl, liveUrl } = project
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt={`Captura de ${title}`}
        width={1200}
        height={675}
        loading="lazy"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags} aria-label="Tecnologías">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <ul className={styles.links}>
        {repoUrl && (
          <li>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Repositorio
            </a>
          </li>
        )}
        {liveUrl && (
          <li>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </li>
        )}
      </ul>
    </article>
  )
}
