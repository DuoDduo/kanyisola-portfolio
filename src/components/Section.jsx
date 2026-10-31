// Shared wrapper: every section gets the same id, heading and spacing.
const Section = ({ id, title, intro, children }) => (
  <section id={id} className='section' aria-labelledby={`${id}-title`}>
    <header className='section__head' data-reveal>
      <h2 id={`${id}-title`} className='section__title'>{title}</h2>
      {intro && <p className='section__intro'>{intro}</p>}
    </header>
    {children}
  </section>
)

export default Section
