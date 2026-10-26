import { lazy, Suspense, useState } from 'react'
import styles from './ThreadsBackground.module.css'

const Threads = lazy(() => import('./Threads'))

// Threads no entiende var(--token): se resuelven acá y se pasan como string CSS.
const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

export default function ThreadsBackground() {
  const [colors] = useState(() => ({
    color: token('--primary'),
    accentColor: token('--primary-text'),
  }))

  return (
    <div className={styles.root} aria-hidden="true">
      <Suspense fallback={null}>
        <Threads
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
