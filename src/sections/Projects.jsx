// Featured projects: an index of names. Choosing one opens the full case:
// the problem, her part in it, what was built and with what.
import { useState } from 'react'
import { projects } from '../portfolio'
import { ScrollTrigger } from '../motion'
import Section from '../components/Section'
import TechIcon from '../components/TechIcon'

const Project = ({ project, index, open, onToggle }) => {
  const { name, label, overview, problem, contribution, features, stack, image, live, repo } = project
  return (
    <li
      className='project'
      data-open={open || undefined}
      // The page height changed, so scroll positions need re-measuring
      onTransitionEnd={(e) => { if (e.propertyName === 'grid-template-rows') ScrollTrigger.refresh() }}
    >
      <h3>
        <button
          type='button'
          className='project__row'
          aria-expanded={open}
          aria-controls={`project-${index}`}
          onClick={onToggle}
        >
          <span className='project__name'>{name}</span>
          <span className='project__label'>{label}</span>
        </button>
      </h3>
      <div id={`project-${index}`} className='project__panel'>
        <div className='project__clip'>
          <div className='project__body'>
            <figure className='project__media'>
              <img src={image} alt='' width='640' height='360' loading='lazy' />
              <figcaption>How {name} works</figcaption>
            </figure>
            <div className='project__detail'>
              <p>{overview}</p>
              <dl className='project__facts'>
                <div><dt>The problem</dt><dd>{problem}</dd></div>
                <div><dt>My part</dt><dd>{contribution}</dd></div>
              </dl>
              <ul className='project__features'>
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <ul className='project__stack'>
                {stack.map((item) => <TechIcon key={item} name={item} />)}
              </ul>
              {(live || repo) && (
                <div className='project__links'>
                  {live && <a href={live} target='_blank' rel='noopener noreferrer' className='link'>Visit the live site</a>}
                  {repo && <a href={repo} target='_blank' rel='noopener noreferrer' className='link'>View the code on GitHub</a>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

const Projects = () => {
  const [open, setOpen] = useState(0)
  return (
    <Section id='projects' title='Featured projects' intro='AI systems, machine learning models and the platforms behind them.'>
      <ul data-reveal>
        {projects.map((project, i) => (
          <Project
            key={project.name}
            project={project}
            index={i}
            open={open === i}
            onToggle={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
