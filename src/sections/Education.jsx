// Education and training, from her CV.
import { education } from '../portfolio'
import Section from '../components/Section'

const Education = () => (
  <Section id='education' title='Education and training'>
    <ul className='education'>
      {education.map(({ when, title, org }) => (
        <li key={title} data-reveal>
          <p className='education__when'>{when}</p>
          <div>
            <h3 className='education__title'>{title}</h3>
            <p className='education__org'>{org}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
)

export default Education
