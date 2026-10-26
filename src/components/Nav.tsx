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
  return (
    <nav className={styles.nav} aria-label="Principal">
      <div className={`${layout.container} ${styles.inner}`}>
        <a className={styles.brand} href="#inicio">
          {profile.name}
        </a>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
