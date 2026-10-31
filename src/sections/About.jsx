// About: her story and a few facts.
import { about } from '../portfolio'
import Section from '../components/Section'

const About = () => (
  <Section id='about' title='About' sub='How I got here.'>
    <div className='about__story'>
      {about.story.map((p) => <p key={p}>{p}</p>)}
    </div>
    <dl className='about__facts'>
      {about.facts.map(({ label, value }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </Section>
)

export default About
