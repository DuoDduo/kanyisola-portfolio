// About: her opening statement lights up word by word as it scrolls past
// (motion.js), followed by her story and a few facts.
import { about } from '../portfolio'

const About = () => (
  <section id='about' className='section' aria-labelledby='about-title'>
    <h2 id='about-title' className='sr-only'>About</h2>
    <p className='about__lead' aria-label={about.lead}>
      {about.lead.split(' ').map((word, i) => (
        <span key={i} aria-hidden='true'>{word} </span>
      ))}
    </p>
    <div className='about__grid'>
      <div className='about__story' data-reveal>
        {about.story.map((p) => <p key={p}>{p}</p>)}
      </div>
      <dl className='about__facts' data-reveal>
        {about.facts.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default About
