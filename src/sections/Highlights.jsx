// Highlights: milestones stated on her CV.
import { highlights } from '../portfolio'
import Section from '../components/Section'

const Highlights = () => (
  <Section id='highlights' title='Highlights' sub='A few milestones.'>
    <ul>
      {highlights.map(({ title, text }) => (
        <li key={title} className='plain'>
          <h3 className='plain__title'>{title}</h3>
          <p className='plain__text'>{text}</p>
        </li>
      ))}
    </ul>
  </Section>
)

export default Highlights
