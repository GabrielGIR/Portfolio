import Footer from './components/Footer'
import Nav from './components/Nav'
import ThreadsBackground from './components/ThreadsBackground'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  return (
    <>
      <ThreadsBackground />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
