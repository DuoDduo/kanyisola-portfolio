// Hero: her portrait stands out of the black at the right, cut from the studio
// backdrop, with her name, role and next steps beside it.
import { about } from '../portfolio'
import portrait from '../assets/portrait.webp'

const Hero = () => {
  const [first, last] = about.name.split(' ')
  return (
    <section id='home' className='hero' aria-labelledby='hero-name'>
      <div className='hero__portrait'>
        <img src={portrait} alt={`Portrait of ${about.name}`} width='1100' height='1375' fetchpriority='high' />
      </div>
      <h1 id='hero-name' className='hero__name' aria-label={about.name}>
        <span className='hero__name-line hero__name-line--first' aria-hidden='true'><span>{first}</span></span>
        <span className='hero__name-line hero__name-line--last' aria-hidden='true'><span>{last}</span></span>
      </h1>
      <p className='hero__role'>{about.role}</p>
      <p className='hero__intro'>{about.intro}</p>
      <div className='hero__actions'>
        <a href='#projects' className='btn btn--primary'>View projects</a>
        <a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf' className='btn btn--secondary'>Download CV</a>
      </div>
    </section>
  )
}

export default Hero
