// Navigation: a rail on large screens, a top bar with a full-screen menu on
// small ones. The current section is marked as you scroll.
import { useEffect, useState } from 'react'
import { about, nav } from '../portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const IDS = nav.map((link) => link.id)

const Header = () => {
  const active = useActiveSection(IDS)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.toggleAttribute('data-menu-open', open)
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const wide = window.matchMedia('(min-width: 1100px)')
    const onWide = () => setOpen(false)
    window.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [open])

  return (
    <header className='header'>
      <a href='#home' className='brand' aria-label={`${about.name}, home`} onClick={() => setOpen(false)}>KF</a>
      <button
        type='button'
        className='menu-toggle'
        aria-expanded={open}
        aria-controls='site-nav'
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id='site-nav' className='nav' aria-label='Main' data-open={open || undefined}>
        <ul className='nav__links'>
          {nav.map(({ id, label }, i) => (
            <li key={id} style={{ '--i': i }}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href='#contact' className='btn btn--primary nav__cta' onClick={() => setOpen(false)}>Get in touch</a>
      </nav>
    </header>
  )
}

export default Header
