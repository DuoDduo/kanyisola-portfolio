// Highlights: milestones stated on her CV.
import { highlights } from '../portfolio'
import Section from '../components/Section'

const Highlights = () => (
  <Section id='highlights' title='Highlights'>
    <ul className='highlights'>
      {highlights.map(({ title, text }) => (
        <li key={title} className='highlight' data-reveal>
          <h3 className='highlight__title'>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </Section>
)

export default Highlights
