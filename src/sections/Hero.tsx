import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={`${layout.container} ${styles.hero}`}>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>
      <p className={styles.tagline}>{profile.tagline}</p>
      <div className={styles.actions}>
        <a className={`${layout.button} ${layout.buttonPrimary}`} href="#proyectos">
          Ver proyectos
        </a>
        <a className={layout.button} href="#contacto">
          Contacto
        </a>
      </div>
    </section>
  )
}
