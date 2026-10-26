import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className={`${layout.container} ${layout.section}`}>
      <h2 className={layout.title}>Sobre mí</h2>
      <div className={styles.grid}>
        <p className={styles.text}>{profile.about}</p>
        <ul className={styles.links}>
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
