import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/skills'
import layout from '../styles/layout.module.css'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section ref={ref} id="skills" className={`${layout.container} ${layout.section}`}>
      <h2 data-reveal className={layout.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((g) => (
          <div data-reveal key={g.category}>
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
