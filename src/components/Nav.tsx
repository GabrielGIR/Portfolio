import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { profile } from '../data/profile'
import Icon, { type IconName } from './Icon'
import { useActiveSection } from '../hooks/useActiveSection'
import { useMarker } from '../hooks/useMarker'
import { ease, reducedMotion, seconds } from '../lib/motion'
import layout from '../styles/layout.module.css'
import styles from './Nav.module.css'

const links: { id: IconName; label: string }[] = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Nav() {
  // 'inicio' limpia el foco al volver arriba
  const active = useActiveSection(['inicio', ...links.map((l) => l.id)])
  const trackRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const navRef = useRef<HTMLElement>(null)
  useMarker(trackRef, dotRef, active)

  // Arranque: la barra baja desde arriba, como el XMB al encender la consola.
  useGSAP(
    () => {
      if (reducedMotion()) return
      gsap.from(navRef.current, { yPercent: -100, duration: seconds('--duration-slow'), ease: ease('--ease-out') })
    },
    { scope: navRef },
  )


  return (
    <>
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      <nav ref={navRef} className={styles.nav} aria-label="Principal">
        <div className={`${layout.container} ${styles.inner}`}>
          <a className={styles.brand} href="#inicio">
            {profile.name}
          </a>
          <div ref={trackRef} className={styles.track}>
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} aria-current={active === l.id ? 'location' : undefined}>
                    <Icon name={l.id} className={styles.icon} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <span ref={dotRef} className={styles.dot} aria-hidden="true" />
          </div>
        </div>
      </nav>
    </>
  )
}
