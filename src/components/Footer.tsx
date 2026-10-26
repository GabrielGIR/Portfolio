import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={`${layout.container} ${styles.footer}`}>
      <p className={styles.name} aria-hidden="true">
        {profile.name}
      </p>
      <div className={styles.bar}>
        <span>
          © {year} {profile.name}
        </span>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  )
}
