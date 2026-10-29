import { useMemo, useRef } from 'react'
import Icon from '../components/Icon'
import SplitText from '../components/SplitText'
import { useReveal } from '../hooks/useReveal'
import { ease, seconds } from '../lib/motion'
import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Hero.module.css'

// Parte la tagline en tramos; los que son palabras clave de `profile.keywords` van resaltados.
const keys = new RegExp(`(${profile.keywords.join('|')})`, 'i')
const taglineParts = profile.tagline.split(keys)
const year = new Date().getFullYear()

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  // Estable entre renders: SplitText reinicia su animación si cambia alguna prop.
  const motion = useMemo(
    () => ({
      duration: seconds('--duration-slow'),
      delay: seconds('--duration-fast') * 1000,
      ease: ease('--ease-out'),
      textAlign: 'left' as const,
      splitType: 'words' as const,
      effect: 'wave' as const,
      trigger: 'load' as const,
    }),
    [],
  )
  const primary = `${layout.button} ${layout.buttonPrimary}`

  return (
    <section ref={ref} id="inicio" className={`${layout.container} ${styles.hero}`}>
      <div className={styles.main}>
        <p data-reveal className={styles.label}>
          {profile.role} / {year}
        </p>
        <h1 className={styles.name}>
          <SplitText tag="span" text={profile.firstName} {...motion} />{' '}
          <SplitText tag="span" text={profile.lastName} className={styles.last} {...motion} />
        </h1>
        <p data-reveal className={styles.tagline}>
          {taglineParts.map((part, i) =>
            i % 2 ? <strong key={i}>{part}</strong> : part,
          )}{' '}
          <a href="#sobre-mi">Más sobre mí</a>
        </p>
        <p data-reveal className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {profile.availability}
        </p>
        <div data-reveal className={styles.actions}>
          {profile.cvUrl && (
            <a className={primary} href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="file" className={layout.arrow} />
              CV
            </a>
          )}
          <a className={profile.cvUrl ? layout.button : primary} href="#proyectos">
            <Icon name="proyectos" className={layout.arrow} />
            Ver proyectos
          </a>
          <a className={layout.button} href="#contacto">
            <Icon name="contacto" className={layout.arrow} />
            Contacto
          </a>
        </div>
      </div>
      <aside data-reveal className={styles.aside} aria-label="Qué hago">
        <p className={styles.label}>Qué hago</p>
        <p className={styles.asideTitle}>{profile.whatIDo.title}</p>
        <p className={styles.steps}>{profile.whatIDo.steps.join(' · ')}</p>
      </aside>
    </section>
  )
}
