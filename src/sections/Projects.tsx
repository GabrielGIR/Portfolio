import { useRef, useState, type KeyboardEvent } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useMarker } from '../hooks/useMarker'
import { useReveal } from '../hooks/useReveal'
import { ease, reducedMotion, seconds } from '../lib/motion'
import SectionHeader from '../components/SectionHeader'
import layout from '../styles/layout.module.css'
import styles from './Projects.module.css'

const moves: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }

/** Columna del XMB: la lista se recorre con las flechas y el proyecto elegido se abre al lado. */
export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const listRef = useRef<HTMLDivElement>(null)
  const markerRef = useRef<HTMLSpanElement>(null)
  const hover = useRef(0)
  const shown = useRef(0)
  const [selected, setSelected] = useState(0)
  useReveal(ref)
  useMarker(listRef, markerRef, selected)

  // Al cambiar de proyecto el detalle entra de nuevo; en el primer render lo revela useReveal.
  useGSAP(
    () => {
      if (shown.current === selected) return
      shown.current = selected
      if (reducedMotion()) return
      gsap.from('article > *', {
        opacity: 0,
        y: 16,
        duration: seconds('--duration-base'),
        ease: ease('--ease-out'),
        stagger: seconds('--duration-fast') / 3,
      })
    },
    { dependencies: [selected], scope: panelRef, revertOnUpdate: true },
  )

  const select = (i: number) => {
    const next = (i + projects.length) % projects.length
    setSelected(next)
    tabs.current[next]?.focus()
  }

  // Con mouse, pasar por la lista ya elige (como mover el cursor del XMB); la pausa evita saltos al cruzarla.
  const onHover = (i: number) => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    clearTimeout(hover.current)
    hover.current = window.setTimeout(() => setSelected(i), seconds('--duration-fast') * 1000)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key in moves) select(selected + moves[e.key])
    else if (e.key === 'Home') select(0)
    else if (e.key === 'End') select(projects.length - 1)
    else return
    e.preventDefault()
  }

  const current = projects[selected]

  return (
    <section ref={ref} id="proyectos" className={`${layout.container} ${layout.section}`}>
      <SectionHeader icon="proyectos" title="Proyectos" meta={`${projects.length} proyectos`} />
      {current ? (
        <div className={styles.xmb}>
          <div
            ref={listRef}
            role="tablist"
            aria-label="Proyectos"
            className={styles.list}
            onKeyDown={onKeyDown}
            onPointerLeave={() => clearTimeout(hover.current)}
          >
            {projects.map((p, i) => (
              <button
                key={p.slug}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`tab-${p.slug}`}
                aria-selected={i === selected}
                aria-controls="proyecto-detalle"
                tabIndex={i === selected ? 0 : -1}
                className={styles.item}
                onClick={() => setSelected(i)}
                onPointerEnter={() => onHover(i)}
                data-reveal
              >
                <span className={styles.itemTitle}>{p.title}</span>
                <span className={styles.itemTags}>{p.tags.slice(0, 3).join(' · ')}</span>
              </button>
            ))}
            <span ref={markerRef} className={styles.marker} aria-hidden="true" />
          </div>
          <div
            ref={panelRef}
            role="tabpanel"
            id="proyecto-detalle"
            aria-labelledby={`tab-${current.slug}`}
            className={styles.panel}
            data-reveal
          >
            <ProjectCard project={current} />
          </div>
        </div>
      ) : (
        <p data-reveal className={styles.empty}>
          Pronto vas a encontrar acá los proyectos.
        </p>
      )}
    </section>
  )
}
