import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="contacto" className={`${layout.container} ${layout.section}`}>
      <h2 data-reveal className={layout.title}>Contacto</h2>
      <a data-reveal className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
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
    </section>
  )
}
