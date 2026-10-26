import { useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Icon from '../components/Icon'
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
  // Al bajar, el nombre y el resto se van a distinta velocidad (dos capas de profundidad).
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const scrollTrigger = { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.5 }
        gsap.to('h1', { yPercent: -30, opacity: 0.2, ease: 'none', scrollTrigger })
        gsap.to(`.${styles.meta}`, { yPercent: -60, opacity: 0, ease: 'none', scrollTrigger })
      })
    },
    { scope: ref },
  )
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
      <div className={styles.meta}>
        <p data-reveal className={styles.role}>
          {profile.role}
        </p>
        <p data-reveal className={styles.tagline}>
          {profile.tagline}
        </p>
        <div data-reveal className={styles.actions}>
          <a className={`${layout.button} ${layout.buttonPrimary}`} href="#proyectos">
            Ver proyectos
            <Icon name="arrow-down" className={layout.arrow} />
          </a>
          <a className={layout.button} href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
