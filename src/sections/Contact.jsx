// Contact: direct details on one side, the form on the other.
import { useEffect, useRef, useState } from 'react'
import { about, contact } from '../portfolio'
import { GITHUB_PROFILE, useGitHubStats } from '../hooks/useGitHubStats'
import ContactForm from './ContactForm'

const Contact = () => {
  const ref = useRef(null)
  const [near, setNear] = useState(false)

  // Fetch GitHub stats only when the section is about a screen away
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); io.disconnect() }
    }, { rootMargin: '100% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  const { data } = useGitHubStats(near)

  return (
    <section ref={ref} id='contact' className='section' aria-labelledby='contact-title'>
      <div className='contact__grid'>
        <div data-reveal>
          <h2 id='contact-title' className='section__title'>Let&apos;s talk</h2>
          <p className='section__intro'>Tell me about the role, the project or the problem you want to solve.</p>
          <a href={`mailto:${contact.email}`} className='contact__email'>{contact.email}</a>
          <ul className='contact__links'>
            <li><a href={about.social.linkedin} target='_blank' rel='noopener noreferrer' className='link'>LinkedIn</a></li>
            <li><a href={GITHUB_PROFILE} target='_blank' rel='noopener noreferrer' className='link'>GitHub</a></li>
          </ul>
          {data && <p className='contact__stats'>{data.repos} public repositories and {data.commits} public commits on GitHub.</p>}
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
