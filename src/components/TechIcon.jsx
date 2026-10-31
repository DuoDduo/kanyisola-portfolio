// A technology name with its logo, when a logo exists.
import {
  SiDocker, SiFastapi, SiGithub, SiGooglecloud, SiGooglegemini, SiLanggraph, SiNextdotjs,
  SiNumpy, SiPandas, SiPostgresql, SiPython, SiR, SiScikitlearn, SiSupabase,
} from 'react-icons/si'

const ICONS = {
  Python: SiPython,
  pandas: SiPandas,
  NumPy: SiNumpy,
  'scikit-learn': SiScikitlearn,
  R: SiR,
  LangGraph: SiLanggraph,
  'Gemini API': SiGooglegemini,
  FastAPI: SiFastapi,
  'Next.js': SiNextdotjs,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Docker: SiDocker,
  'Google Cloud': SiGooglecloud,
  'Git / GitHub': SiGithub,
}

const TechIcon = ({ name }) => {
  const Icon = ICONS[name]
  return (
    <li className='skill'>
      {Icon && <Icon aria-hidden='true' />}
      {name}
    </li>
  )
}

export default TechIcon
