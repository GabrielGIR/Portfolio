import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './About.module.css'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="sobre-mi" className={`${layout.container} ${layout.section}`}>
      <h2 data-reveal className={layout.title}>Sobre mí</h2>
      <div className={styles.grid}>
        <p data-reveal className={styles.text}>{profile.about}</p>
        <ul data-reveal className={styles.links}>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
