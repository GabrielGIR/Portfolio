import { profile } from '../data/profile'
import layout from '../styles/layout.module.css'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={`${layout.container} ${styles.footer}`}>
      <span>
        © {year} {profile.name}. All rights reserved.
      </span>
      <a href="#inicio">Volver arriba</a>
    </footer>
  )
}
