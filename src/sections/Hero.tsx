import { useMemo, useRef } from 'react'
import SplitText from '../components/SplitText'
import { useReveal } from '../hooks/useReveal'
import { ease, seconds } from '../lib/motion'
import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  // Estable entre renders: SplitText reinicia su animación si cambia alguna prop.
  const motion = useMemo(
    () => ({
      duration: seconds('--duration-slow'),
      delay: seconds('--duration-fast') * 1000,
      ease: ease('--ease-out'),
    }),
    [],
  )

  return (
    <section ref={ref} id="inicio" className={`${layout.container} ${styles.hero}`}>
      <SplitText
        tag="h1"
        text={profile.name}
        className={styles.name}
        textAlign="left"
        splitType="words"
        effect="wave"
        trigger="load"
        {...motion}
      />
      <p data-reveal className={styles.role}>{profile.role}</p>
      <p data-reveal className={styles.tagline}>{profile.tagline}</p>
      <div data-reveal className={styles.actions}>
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
