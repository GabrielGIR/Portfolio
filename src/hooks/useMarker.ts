import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ease, reducedMotion, seconds } from '../lib/motion'

/**
 * Cursor del XMB: desliza `marker` hasta el elemento elegido dentro de `track`
 * ([aria-current] o [aria-selected="true"]). El eje lo decide el CSS del marcador
 * con `--marker-axis: x | y`, así puede cambiar con el breakpoint.
 */
export function useMarker(
  track: RefObject<HTMLElement | null>,
  marker: RefObject<HTMLElement | null>,
  key: unknown,
) {
  useGSAP(
    () => {
      const t = track.current
      const m = marker.current
      if (!t || !m) return
      const place = (animate: boolean) => {
        const el = t.querySelector<HTMLElement>('[aria-current], [aria-selected="true"]')
        const axis = getComputedStyle(m).getPropertyValue('--marker-axis').trim() || 'x'
        const vars = el
          ? axis === 'y'
            ? { x: 0, y: el.offsetTop + el.offsetHeight / 2 - m.offsetHeight / 2, opacity: 1 }
            : { x: el.offsetLeft + el.offsetWidth / 2 - m.offsetWidth / 2, y: 0, opacity: 1 }
          : { opacity: 0 }
        if (animate && !reducedMotion())
          gsap.to(m, { ...vars, duration: seconds('--duration-base'), ease: ease('--ease-out') })
        else gsap.set(m, vars)
      }
      place(true)
      // Sora llega después del primer render y cambia el tamaño de las etiquetas
      document.fonts?.ready.then(() => place(false))
      const onResize = () => place(false)
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    },
    { dependencies: [key], scope: track },
  )
}
