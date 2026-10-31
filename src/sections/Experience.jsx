// Experience: each role is a chapter. The dates stay pinned at the side while
// the detail scrolls past them on large screens.
import { experience } from '../portfolio'
import Section from '../components/Section'
import TechIcon from '../components/TechIcon'

const Experience = () => (
  <Section id='experience' title='Experience'>
    <ol>
      {experience.map(({ when, title, org, points, tools }) => (
        <li key={`${title}-${org}`} className='chapter' data-reveal>
          <p className='chapter__when'>{when}</p>
          <div className='chapter__body'>
            <h3 className='chapter__title'>{title}</h3>
            <p className='chapter__org'>{org}</p>
            <ul className='chapter__points'>
              {points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            {tools && (
              <ul className='chapter__tools'>
                {tools.map((tool) => <TechIcon key={tool} name={tool} />)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  </Section>
)

export default Experience
