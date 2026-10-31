// Areas of focus: where she can contribute, drawn from her CV.
import { focus } from '../portfolio'
import Section from '../components/Section'

const Focus = () => (
  <Section id='focus' title='Where I can help'>
    <ul className='focus'>
      {focus.map(({ title, text }) => (
        <li key={title} className='focus__item' data-reveal>
          <h3 className='focus__title'>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </Section>
)

export default Focus
