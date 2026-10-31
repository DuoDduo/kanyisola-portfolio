import { about, nav } from '../portfolio'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__top'>
      <div>
        <p className='footer__name'>{about.name}</p>
        <p className='footer__role'>{about.role}</p>
      </div>
      <nav className='footer__lists' aria-label='Footer'>
        <ul>
          {nav.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ul>
        <ul>
          <li><a href={about.social.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
          <li><a href={about.social.github} target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          <li><a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf'>Download CV</a></li>
        </ul>
      </nav>
    </div>
    <div className='footer__bottom'>
      <p>© {new Date().getFullYear()} {about.name}</p>
      <a href='#home' className='link'>Back to top</a>
    </div>
  </footer>
)

export default Footer
