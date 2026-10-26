import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ease, seconds } from '../lib/motion'

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Revela los hijos con [data-reveal] al entrar en pantalla; los [data-reveal="title"]
 * suben detrás de una máscara (clip-path). El estado oculto se aplica acá (no en CSS):
 * si el script no corre, todo queda visible. Con prefers-reduced-motion no hace nada.
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
        const isTitle = (el: Element) => el.getAttribute('data-reveal') === 'title'

        const titles = items.filter(isTitle)
        const rest = items.filter((el) => !isTitle(el))
        if (titles.length) gsap.set(titles, { y: 48, clipPath: 'inset(0% 0% 100% 0%)' })
        if (rest.length) gsap.set(rest, { opacity: 0, y: 24 })
        ScrollTrigger.batch(items, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) => {
            const vars = { opacity: 1, y: 0, duration, ease: easing, stagger, overwrite: true }
            // El margen negativo de abajo deja ver los descendentes (la "y" de Proyectos)
            const titles = batch.filter(isTitle)
            const rest = batch.filter((el) => !isTitle(el))
            if (titles.length) gsap.to(titles, { ...vars, clipPath: 'inset(0% 0% -25% 0%)' })
            if (rest.length) gsap.to(rest, vars)
          },
        })
      })
    },
    { scope },
  )
}
