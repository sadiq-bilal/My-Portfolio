import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Journey from './sections/Journey.jsx'
// import Products from './sections/Products.jsx'
// import Freelance from './sections/Freelance.jsx'
import Contact from './sections/Contact.jsx'
import { useTheme } from './hooks/useTheme.js'
import { siteConfig } from './config/siteConfig.js'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        {/* <Products /> */}
        {/* {siteConfig.showFreelance && <Freelance />} */}
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}