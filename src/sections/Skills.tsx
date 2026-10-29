import { lazy, Suspense, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { token } from '../lib/motion'
import { skills } from '../data/skills'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './Skills.module.css'

// Carga aparte: el shader solo se descarga al llegar a la sección
const Rays = lazy(() => import('../components/SideRays'))

const total = skills.reduce((n, g) => n + g.items.length, 0)

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  // SideRays no entiende var(--token): se resuelven acá
  const [colors] = useState(() => ({ a: token('--primary-text'), b: token('--primary') }))

  return (
    <section ref={ref} id="skills" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="skills" title="Skills" meta={`${total} tecnologías en ${skills.length} áreas`} />
      <p data-reveal className={styles.lead}>
        Las tecnologías que uso para llevar una idea a producción.
      </p>
      <div className={styles.grid}>
        {skills.map((g) => (
          <article data-reveal key={g.category} className={styles.card}>
            <div className={styles.rays} aria-hidden="true">
              <Suspense fallback={null}>
                <Rays
                  rayColor1={colors.a}
                  rayColor2={colors.b}
                  origin="top-left"
                  speed={2.1}
                  intensity={1.6}
                  spread={2.05}
                  density={11.5}
                  blend={0.68}
                  sharpness={0.84}
                  tilt={-8}
                  falloff={1.95}
                  glow={3}
                  saturation={0.45}
                  dust={0.07}
                  followMouse={false}
                  mouseInfluence={0}
                  intro={false}
                  opacity={0.8}
                />
              </Suspense>
            </div>
            <header className={styles.head}>
              <span className={styles.orb}>
                <Icon name={g.icon} />
              </span>
              <h3 className={styles.category}>{g.category}</h3>
            </header>
            <ul className={styles.chips}>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
