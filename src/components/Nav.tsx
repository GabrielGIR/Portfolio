import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Nav.module.css'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  const active = useActiveSection(['inicio', ...links.map((l) => l.href.slice(1))]) // 'inicio' limpia el foco al volver arriba

  return (
    <>
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      <nav className={styles.nav} aria-label="Principal">
        <div className={`${layout.container} ${styles.inner}`}>
          <a className={styles.brand} href="#inicio">
            {profile.name}
          </a>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={active === l.href.slice(1) ? 'location' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
