import { profile, socials, } from '../data.js'
import { socialIcons } from './Icons.jsx'

const nav = ['Work', 'About', 'Services', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div><p className="logo">{profile.name}</p><p className="label">Video Editor</p><p className="motto">“{profile.tagline}”</p></div>
          <div><p className="label">Navigate</p>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</div>
          <div><p className="label">Social</p>{Object.entries(socials).map(([k, u]) => <a key={k} href={u} target="_blank" rel="noreferrer">{k}</a>)}</div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="mini">{Object.entries(socialIcons).map(([k, Icon]) => <a key={k} href={socials[k]} target="_blank" rel="noreferrer" aria-label={k}><Icon s={15} /></a>)}</span>
        </div>
      </div>
    </footer>
  )
}
