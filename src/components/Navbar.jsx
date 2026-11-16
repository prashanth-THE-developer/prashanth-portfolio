import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = ['Work', 'About', 'Services', 'Process', 'Contact']

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={'nav' + (solid ? ' solid' : '')}>
      <a href="#top" className="logo">{profile.name}</a>
      <nav>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="navlink">{l}</a>)}
        <a href="#contact" className="btn small">Let’s work together</a>
      </nav>
    </header>
  )
}
