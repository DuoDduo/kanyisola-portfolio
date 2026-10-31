// Navigation: a floating pill with her name, the main action and a menu that
// drops down below it. The current section is marked as you scroll.
import { useEffect, useRef, useState } from 'react'
import { nav, about } from '../portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const IDS = nav.map((link) => link.id)

const Header = () => {
  const active = useActiveSection(IDS)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onPointer = (e) => { if (!ref.current.contains(e.target)) setOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header ref={ref} className='pill'>
      <div className='pill__bar'>
        <a href='#home' className='pill__brand' aria-label={`${about.name}, home`} onClick={close}>kanyisola.</a>
        <a href='#contact' className='btn pill__cta' onClick={close}>Let&apos;s talk</a>
        <button
          type='button'
          className='pill__toggle'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='site-menu'
          onClick={() => setOpen((v) => !v)}
        >
          <div><span /><span /></div>
        </button>
      </div>
      <nav id='site-menu' className='pill__menu' aria-label='Main' data-open={open || undefined}>
        <ul>
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <ul className='pill__social'>
          <li><a href={about.social.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
          <li><a href={about.social.github} target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          <li><a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf'>CV</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
