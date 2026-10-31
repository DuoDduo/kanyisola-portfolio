// Contact: direct ways to reach her.
import { useEffect, useRef, useState } from 'react'
import { about, contact } from '../portfolio'
import { GITHUB_PROFILE, useGitHubStats } from '../hooks/useGitHubStats'

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
    <section ref={ref} id='contact' className='row' aria-labelledby='contact-title'>
      <div data-reveal>
        <h2 id='contact-title' className='section__title'>Let&apos;s talk</h2>
        <p className='section__sub'>Tell me about the role, the project or the problem you want to solve.</p>
        {data && <p className='contact__stats'>{data.repos} public repositories and {data.commits} public commits on GitHub.</p>}
      </div>
      <div data-reveal>
        <a href={`mailto:${contact.email}`} className='link contact__email'>{contact.email}</a>
        <div className='contact__actions'>
          <a href={`mailto:${contact.email}`} className='btn btn--solid'>Email me</a>
          <a href={about.social.linkedin} target='_blank' rel='noopener noreferrer' className='btn'>LinkedIn</a>
          <a href={GITHUB_PROFILE} target='_blank' rel='noopener noreferrer' className='btn'>GitHub</a>
          <a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf' className='btn'>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
