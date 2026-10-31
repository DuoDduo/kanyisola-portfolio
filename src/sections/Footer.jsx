import { about, nav } from '../portfolio'

const Footer = () => (
  <footer className='footer'>
    <div>
      <p className='footer__name'>{about.name}</p>
      <p className='footer__copy'>© {new Date().getFullYear()} {about.name}</p>
    </div>
    <nav aria-label='Footer'>
      <ul className='footer__lists'>
        {nav.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        <li><a href={about.social.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        <li><a href={about.social.github} target='_blank' rel='noopener noreferrer'>GitHub</a></li>
        <li><a href={about.resume} download='Kanyisola_Fagbayi_CV.pdf'>CV</a></li>
      </ul>
    </nav>
    <a href='#home' className='link'>Back to top</a>
  </footer>
)

export default Footer
