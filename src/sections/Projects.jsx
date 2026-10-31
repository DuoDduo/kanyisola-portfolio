import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../portfolio'
import Section from '../components/Section'
import TechIcon from '../components/TechIcon'

const Project = ({ project, index, open, onToggle }) => {
  const { name, overview, label, problem, contribution, features, stack, image, live, repo } = project
  return (
    <li className='card' data-open={open || undefined}>
      <h3>
        <button type='button' className='card__head' aria-expanded={open} aria-controls={`project-${index}`} onClick={onToggle}>
          <span className='card__name'>{name}</span>
          <span className='card__line'>{overview}</span>
          <FiArrowUpRight className='card__arrow' aria-hidden='true' />
        </button>
      </h3>
      <div id={`project-${index}`} className='fold'>
        <div className='fold__clip'>
          <div className='card__body'>
            {image && <img src={image} alt='' width='640' height='360' loading='lazy' />}
            <dl className='card__facts'>
              <div><dt>Context</dt><dd>{label}</dd></div>
              <div><dt>The problem</dt><dd>{problem}</dd></div>
              <div><dt>My part</dt><dd>{contribution}</dd></div>
            </dl>
            <ul className='card__features'>
              {features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <ul className='tags'>
              {stack.map((item) => <TechIcon key={item} name={item} />)}
            </ul>
            {(live || repo) && (
              <div className='card__links'>
                {live && <a href={live} target='_blank' rel='noopener noreferrer' className='link'>Visit the live site</a>}
                {repo && <a href={repo} target='_blank' rel='noopener noreferrer' className='link'>View the code on GitHub</a>}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

const Projects = () => {
  const [open, setOpen] = useState(-1)
  return (
    <Section id='projects' title='Projects' sub='A few things I have built.'>
      <ul className='cards'>
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
