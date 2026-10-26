import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ease, seconds } from '../lib/motion'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Revela los hijos con [data-reveal] al entrar en pantalla. El estado oculto se
 * aplica acá (no en CSS): si el script no corre, todo queda visible. Con
 * prefers-reduced-motion no hace nada.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', scope.current)
        const duration = seconds('--duration-slow')
        const stagger = seconds('--duration-fast') / 2
        const easing = ease('--ease-out')

        gsap.set(items, { opacity: 0, y: 24 })
        ScrollTrigger.batch(items, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration, ease: easing, stagger, overwrite: true }),
        })
      })
    },
    { scope },
  )
}
