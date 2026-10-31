import { useState } from 'react'
import { experience } from '../portfolio'
import Section from '../components/Section'
import TechIcon from '../components/TechIcon'

const Experience = () => {
  const [open, setOpen] = useState(-1)
  return (
    <Section id='experience' title='Experience' sub='Where I have worked.'>
      <ol>
        {experience.map(({ when, title, org, points, tools }, i) => {
          const isOpen = open === i
          return (
            <li key={`${title}-${org}`} className='entry' data-open={isOpen || undefined}>
              <h3>
                <button type='button' className='entry__head' aria-expanded={isOpen} aria-controls={`role-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className='entry__title'>{title}</span>
                  <span className='entry__when'>{when}</span>
                  <span className='entry__org'>{org}</span>
                </button>
              </h3>
              <div id={`role-${i}`} className='fold'>
                <div className='fold__clip'>
                  <ul className='entry__points'>
                    {points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  {tools && (
                    <ul className='tags entry__tools'>
                      {tools.map((tool) => <TechIcon key={tool} name={tool} />)}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export default Experience
