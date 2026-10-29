import { useEffect } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ThreadsBackground from './components/ThreadsBackground'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  // El navegador busca el ancla antes de que React dibuje las secciones: se repite al montar.
  useEffect(() => {
    document
      .getElementById(location.hash.slice(1))
      ?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <ThreadsBackground />
      <Nav />
      <main id="contenido">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
