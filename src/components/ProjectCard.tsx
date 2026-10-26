import type { Project } from '../data/projects'
import Icon from './Icon'
import layout from '../styles/layout.module.css'
import styles from './ProjectCard.module.css'

// '#' es el placeholder de los datos de prueba: sin URL real no se muestra el link.
const isReal = (url?: string): url is string => !!url && url !== '#'

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
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags} aria-label="Tecnologías">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {(isReal(repoUrl) || isReal(liveUrl)) && (
          <div className={styles.links}>
            {isReal(liveUrl) && (
              <a
                className={styles.primary}
                href={liveUrl}
                aria-label={`Demo de ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <Icon name="arrow-out" className={layout.arrow} />
              </a>
            )}
            {isReal(repoUrl) && (
              <a
                className={styles.secondary}
                href={repoUrl}
                aria-label={`Repositorio de ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
                <Icon name="arrow-out" className={layout.arrow} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
