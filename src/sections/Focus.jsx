import { focus } from '../portfolio'
import Section from '../components/Section'

const Focus = () => (
  <Section id='focus' title='Where I can help' sub='What I work on.'>
    <ul className='focus'>
      {focus.map(({ title, text }) => (
        <li key={title} className='card card__head'>
          <h3 className='card__name'>{title}</h3>
          <p className='card__line'>{text}</p>
        </li>
      ))}
    </ul>
  </Section>
)

export default Focus
