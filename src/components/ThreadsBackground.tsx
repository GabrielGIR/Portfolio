import { lazy, Suspense, useRef, useState, type ComponentProps } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ease, reducedMotion, seconds } from '../lib/motion'
import styles from './ThreadsBackground.module.css'

const Threads = lazy(() => import('./Threads'))

// Threads no entiende var(--token): se resuelven acá y se pasan como string CSS.
const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

// Monta solo cuando el chunk de Threads llegó: las cintas aparecen de a poco, como al encender la PS3.
function Ribbons(props: ComponentProps<typeof Threads>) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (reducedMotion()) return
      gsap.from(ref.current, { opacity: 0, duration: seconds('--duration-slow') * 2, ease: ease('--ease-out') })
    },
    { scope: ref },
  )
  return (
    <div ref={ref} className={styles.fill}>
      <Threads {...props} />
    </div>
  )
}

export default function ThreadsBackground() {
  const [colors] = useState(() => ({
    color: token('--primary'),
    accentColor: token('--primary-text'),
  }))

  return (
    <div className={styles.root} aria-hidden="true">
      <Suspense fallback={null}>
        <Ribbons
          {...colors}
          brightness={0.6}
          opacity={0.5}
          speed={0.25}
          enableMouseInteraction={false}
        />
      </Suspense>
    </div>
  )
}
