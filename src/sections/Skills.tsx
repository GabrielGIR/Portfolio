import { skills } from '../data/skills'
import layout from '../styles/layout.module.css'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={`${layout.container} ${layout.section}`}>
      <h2 className={layout.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((g) => (
          <div key={g.category}>
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
