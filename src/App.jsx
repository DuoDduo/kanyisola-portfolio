import { useMotion } from './motion'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Focus from './sections/Focus'
import Highlights from './sections/Highlights'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  useMotion()

  return (
    <>
      <a href='#main' className='skip'>Skip to content</a>
      {/* The faint warm light that moves through the black as the page scrolls */}
      <div className='flow' aria-hidden='true'>
        <i className='flow__pool flow__pool--chocolate' />
        <i className='flow__pool flow__pool--bronze' />
        <i className='flow__pool flow__pool--espresso' />
      </div>
      <Header />
      <main id='main'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Focus />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
