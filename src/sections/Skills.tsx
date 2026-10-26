import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/skills'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './Skills.module.css'

const total = skills.reduce((n, g) => n + g.items.length, 0)

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="skills" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="skills" title="Skills" meta={`${total} tecnologías en ${skills.length} áreas`} />
      <div className={styles.rows}>
        {skills.map((g) => (
          <div data-reveal key={g.category} className={styles.row}>
            <h3 className={styles.category}>{g.category}</h3>
            <ul className={styles.items}>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
