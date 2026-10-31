const Section = ({ id, title, sub, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} data-reveal>
    <h2 id={`${id}-title`} className='section__title'>{title}</h2>
    {sub && <p className='section__sub'>{sub}</p>}
    <div className='section__body'>{children}</div>
  </section>
)

export default Section
