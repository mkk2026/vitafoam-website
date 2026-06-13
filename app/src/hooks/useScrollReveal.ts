import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  x?: number
  scale?: number
  stagger?: number
  duration?: number
  delay?: number
  ease?: string
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  const {
    y = 60,
    x = 0,
    scale = 1,
    stagger = 0.12,
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 90%',
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.children.length > 1 ? el.children : [el]

    gsap.set(children, { opacity: 0, y, x, scale })

    const tl = gsap.to(children, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [y, x, scale, stagger, duration, delay, ease, start])

  return ref
}
