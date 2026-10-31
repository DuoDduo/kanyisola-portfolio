// Skills: the groups from her CV, AI engineering first.
import { skills } from '../portfolio'
import Section from '../components/Section'
import TechIcon from '../components/TechIcon'

const Skills = () => (
  <Section id='skills' title='Skills' sub='Tools and methods I use.'>
    <div className='skills'>
      {skills.map(({ title, items }) => (
        <div key={title}>
          <h3 className='skills__title'>{title}</h3>
          <ul className='tags'>
            {items.map((item) => <TechIcon key={item} name={item} />)}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Skills
