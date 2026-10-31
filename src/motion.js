import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const opening = () => {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero__orb', { opacity: 0, duration: 1.4 }, 0)
    .from('.hero__portrait', { opacity: 0, y: 24, duration: 1 }, 0.1)
    .from('.hero__intro > *, .hero__bio', { opacity: 0, y: 12, duration: 0.7, stagger: 0.07 }, 0.25)
}

const orbDrift = () => {
  gsap.to('.hero__orb', {
    yPercent: -38,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  })
}

const arrivals = () => {
  gsap.set('[data-reveal]', { opacity: 0, y: 16 })
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 92%',
    once: true,
    onEnter: (batch) => gsap.to(batch, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06, clearProps: 'transform,opacity',
    }),
  })
}

export const useMotion = () => {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      opening()
      orbDrift()
      arrivals()
    })
    return () => ctx.revert()
  }, [])
}
