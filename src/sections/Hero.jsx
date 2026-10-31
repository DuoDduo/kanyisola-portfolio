import { FaFileAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { about } from '../portfolio'
import portrait from '../assets/portrait.webp'

const Hero = () => {
  const [first, last] = about.name.split(' ')
  return (
    <section id='home' className='hero' aria-labelledby='hero-name'>
      <div className='hero__inner'>
        <ul className='hero__socials'>
          <li><a href={about.social.linkedin} target='_blank' rel='noopener noreferrer'><FaLinkedinIn aria-hidden='true' />LinkedIn</a></li>
          <li><a href={about.social.github} target='_blank' rel='noopener noreferrer'><FaGithub aria-hidden='true' />GitHub</a></li>
          <li><a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf'><FaFileAlt aria-hidden='true' />CV</a></li>
        </ul>

        <div className='hero__intro'>
          <h1 id='hero-name' className='hero__name'>
            <span className='hero__first'>{first}</span>
            <span className='hero__last'>{last}</span>
          </h1>
          <p className='hero__role'>{about.role}</p>
          <div className='hero__marker' aria-hidden='true' />
          <div className='hero__actions'>
            <a href='#projects' className='btn btn--solid'>View projects</a>
            <a href='#contact' className='btn'>Get in touch</a>
          </div>
        </div>

        <div className='hero__stage'>
          <div className='hero__orb' aria-hidden='true' />
          <img src={portrait} alt={`Portrait of ${about.name}`} width='1100' height='1375' fetchpriority='high' className='hero__portrait' />
        </div>

        <div className='hero__bio'>
          {about.bio.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Hero
