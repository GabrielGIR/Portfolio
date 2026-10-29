import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/profile'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

const copyFeedback = { idle: '', ok: 'Email copiado', error: 'No se pudo copiar' }

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const fields: { name: Field; label: string; type?: string; autoComplete?: string }[] = [
  { name: 'name', label: 'Nombre', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'message', label: 'Mensaje' },
]

const sendFeedback = {
  idle: '',
  sending: 'Enviando…',
  ok: '¡Gracias! Te respondo pronto.',
  error: 'No se pudo enviar. Probá de nuevo o copiá mi email.',
}

function validate(data: FormData): Errors {
  const value = (f: Field) => String(data.get(f) ?? '').trim()
  const errors: Errors = {}
  if (!value('name')) errors.name = 'Escribí tu nombre.'
  if (!value('email')) errors.email = 'Escribí tu email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')))
    errors.email = 'Revisá el email (ejemplo: nombre@dominio.com).'
  if (!value('message')) errors.message = 'Escribí un mensaje.'
  return errors
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [copy, setCopy] = useState<keyof typeof copyFeedback>('idle')
  const [send, setSend] = useState<keyof typeof sendFeedback>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [shown, setShown] = useState(false)
  useReveal(ref)

  useEffect(() => {
    if (copy === 'idle') return
    const id = setTimeout(() => setCopy('idle'), 2500)
    return () => clearTimeout(id)
  }, [copy])

  const copyEmail = () =>
    navigator.clipboard
      .writeText(profile.email.join('@'))
      .then(() => setCopy('ok'))
      .catch(() => setCopy('error'))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    const first = fields.find((f) => found[f.name])
    if (first) {
      ;(form.elements.namedItem(first.name) as HTMLElement).focus()
      return
    }

    setSend('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        form.reset()
        setSend('ok')
        return
      }
      // Formspree responde { errors: [{ field?, message }] } cuando rechaza el envío
      const body = await res.json().catch(() => ({}))
      const server: Errors = {}
      for (const err of body.errors ?? [])
        if (fields.some((f) => f.name === err.field)) server[err.field as Field] = err.message
      setErrors(server)
      setSend('error')
    } catch {
      setSend('error')
    }
  }

  return (
    <section ref={ref} id="contacto" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="contacto" title="Contacto" />
      <p data-reveal className={styles.lead}>
        ¿Tenés un proyecto o una propuesta? Escribime.
      </p>
      <div className={styles.grid}>
        {profile.formspreeId && (
          <form data-reveal className={styles.form} onSubmit={onSubmit} noValidate>
            {fields.map((f) => {
              const errorId = `${f.name}-error`
              const props = {
                id: f.name,
                name: f.name,
                required: true,
                autoComplete: f.autoComplete,
                'aria-invalid': errors[f.name] ? true : undefined,
                'aria-describedby': errors[f.name] ? errorId : undefined,
                onChange: () => errors[f.name] && setErrors({ ...errors, [f.name]: undefined }),
                className: styles.input,
              }
              return (
                <div key={f.name} className={styles.field}>
                  <label htmlFor={f.name}>{f.label}</label>
                  {f.name === 'message' ? (
                    <textarea {...props} rows={6} maxLength={2000} />
                  ) : (
                    <input {...props} type={f.type ?? 'text'} />
                  )}
                  {errors[f.name] && (
                    <p id={errorId} className={styles.error}>
                      {errors[f.name]}
                    </p>
                  )}
                </div>
              )
            })}
            {/* Campo trampa: los bots lo completan y Formspree descarta el envío */}
            <input type="text" name="_gotcha" className={styles.trap} tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
            <div className={styles.submit}>
              <button
                type="submit"
                className={`${layout.button} ${layout.buttonPrimary}`}
                disabled={send === 'sending'}
              >
                Enviar mensaje
              </button>
              <span className={styles.status} role="status">
                {sendFeedback[send]}
              </span>
            </div>
            <p className={styles.privacy}>Solo uso tus datos para responderte.</p>
          </form>
        )}
        <div data-reveal className={styles.aside}>
          {/* El email real no está en el HTML hasta que la persona lo pide: un bot que solo lee la página no lo ve */}
          <p className={styles.email}>{shown ? profile.email.join('@') : '••••••••@••••••.com'}</p>
          <div className={styles.actions}>
            {!shown && (
              <button type="button" className={layout.button} onClick={() => setShown(true)}>
                Mostrar email
              </button>
            )}
            <button type="button" className={layout.button} onClick={copyEmail}>
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
              {copyFeedback[copy]}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
