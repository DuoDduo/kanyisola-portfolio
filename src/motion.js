// All page motion lives here: the opening reveal, the warm light drifting
// through the black with the scroll, the About statement lighting up, and a
// quiet rise as blocks arrive. Everything is skipped under reduced motion.
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { ScrollTrigger }

const opening = () => {
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from('.flow', { opacity: 0, duration: 2, ease: 'power1.out' }, 0)
    .from('.hero__portrait', { opacity: 0, y: 40, duration: 1.4 }, 0.1)
    .from('.hero__name-line > span', { yPercent: 112, duration: 1.1, stagger: 0.12 }, 0.25)
    .from('.hero__role, .hero__intro, .hero__actions', { opacity: 0, y: 14, duration: 0.8, stagger: 0.08 }, 0.7)
}

// One timeline across the whole page: the shapes swap places and the band
// turns, so every section sits in different light
const flow = () => {
  gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { start: 0, end: 'max', scrub: 1.4 },
  })
    .to('.flow__pool--chocolate', { x: '-62vw', y: '46vh', scale: 1.25 }, 0)
    .to('.flow__pool--bronze', { x: '48vw', y: '64vh', rotation: 58, opacity: 0.3 }, 0)
    .to('.flow__pool--espresso', { x: '38vw', y: '-58vh', scale: 1.5 }, 0)
}

const heroDrift = () => {
  const scrollTrigger = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  gsap.to('.hero__portrait', { yPercent: 7, ease: 'none', scrollTrigger })
  gsap.to('.hero__name-line--first', { xPercent: -4, ease: 'none', scrollTrigger })
  gsap.to('.hero__name-line--last', { xPercent: 4, ease: 'none', scrollTrigger })
}

const litStatement = () => {
  gsap.fromTo('.about__lead span',
    { opacity: 0.22 },
    {
      opacity: 1,
      ease: 'none',
      stagger: 0.05,
      scrollTrigger: { trigger: '.about__lead', start: 'top 80%', end: 'bottom 55%', scrub: 0.5 },
    })
}

const arrivals = () => {
  gsap.set('[data-reveal]', { opacity: 0, y: 20 })
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 92%',
    once: true,
    onEnter: (batch) => gsap.to(batch, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.06, clearProps: 'transform,opacity',
    }),
  })
}

export const useMotion = () => {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      opening()
      flow()
      heroDrift()
      litStatement()
      arrivals()
    })
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [])
}
