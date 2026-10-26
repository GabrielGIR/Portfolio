import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/profile'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

const feedback = { idle: '', ok: 'Email copiado', error: 'No se pudo copiar' }

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [copy, setCopy] = useState<keyof typeof feedback>('idle')
  useReveal(ref)

  useEffect(() => {
    if (copy === 'idle') return
    const id = setTimeout(() => setCopy('idle'), 2500)
    return () => clearTimeout(id)
  }, [copy])

  const copyEmail = () =>
    navigator.clipboard
      .writeText(profile.email)
      .then(() => setCopy('ok'))
      .catch(() => setCopy('error'))

  return (
    <section ref={ref} id="contacto" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="contacto" title="Contacto" />
      <p data-reveal className={styles.lead}>
        ¿Tenés un proyecto o una propuesta? Escribime.
      </p>
      <a data-reveal className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div data-reveal className={styles.actions}>
        <button type="button" className={`${layout.button} ${layout.buttonPrimary}`} onClick={copyEmail}>
          Copiar email
        </button>
        <a className={layout.button} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <Icon name="arrow-out" className={layout.arrow} />
        </a>
        <a className={layout.button} href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
          <Icon name="arrow-out" className={layout.arrow} />
        </a>
        <span className={styles.status} role="status">
          {feedback[copy]}
        </span>
      </div>
    </section>
  )
}
