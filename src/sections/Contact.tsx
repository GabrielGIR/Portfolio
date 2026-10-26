import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={`${layout.container} ${layout.section}`}>
      <h2 className={layout.title}>Contacto</h2>
      <a className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
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
    </section>
  )
}
