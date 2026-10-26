import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/profile'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './About.module.css'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="sobre-mi" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="sobre-mi" title="Sobre mí" />
      <div className={styles.grid}>
        <p data-reveal className={styles.text}>
          {profile.about}
        </p>
        <div data-reveal className={styles.card}>
          <dl className={styles.facts}>
            {profile.highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.links}>
            <a
              className={layout.button}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <Icon name="arrow-out" className={layout.arrow} />
            </a>
            <a
              className={layout.button}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <Icon name="arrow-out" className={layout.arrow} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
