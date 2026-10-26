import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(CustomEase, useGSAP)

const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

// Duración y easing salen de tokens.css (--duration-*, --ease-*); GSAP no entiende var().
export const seconds = (name: string) => {
  const v = token(name)
  return v.endsWith('ms') ? parseFloat(v) / 1000 : parseFloat(v)
}

export const ease = (name: string) =>
  CustomEase.create(name, token(name).replace(/^cubic-bezier\(|\)$/g, ''))

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches
