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
      <Header />
      <main id='main'>
        <Hero />
        <div className='rows'>
          <div className='row'>
            <Projects />
            <div className='stack'>
              <Experience />
              <Education />
            </div>
          </div>
          <div className='row'>
            <About />
            <Skills />
          </div>
          <div className='row'>
            <Focus />
            <Highlights />
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
