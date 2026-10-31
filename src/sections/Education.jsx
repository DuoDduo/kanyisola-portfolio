import { education } from '../portfolio'
import Section from '../components/Section'

const Education = () => (
  <Section id='education' title='Education' sub='Degrees and training.'>
    <ul>
      {education.map(({ when, title, org }) => (
        <li key={title} className='plain'>
          <h3 className='plain__title'>{title}</h3>
          <p className='plain__text'>{org}</p>
          <p className='plain__when'>{when}</p>
        </li>
      ))}
    </ul>
  </Section>
)

export default Education
