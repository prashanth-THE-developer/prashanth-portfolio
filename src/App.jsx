import { useEffect } from 'react'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import LongForm from './components/LongForm.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Philosophy from './components/Philosophy.jsx'
import Skills from './components/Skills.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Cta from './components/Cta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Fade each section in when it scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
       <Hero /><Work /><LongForm /><Services /><About /><Philosophy /><Skills /><Process /><Testimonials /><Cta /><Contact />
      </main>
      <Footer />
    </>
  )
}
