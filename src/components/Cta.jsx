import { profile, socials } from '../data.js'
import { Arrow, Mail, socialIcons } from './Icons.jsx'

export default function Cta() {
  return (
    <section className="section alt center cta-band">
      <div className="wrap reveal">
        <h2 className="big">Have footage?<br />Let’s make something great.</h2>
        <p className="lead mid">Whether you’re building a brand, growing a channel or launching your next campaign, let’s turn your footage into something worth watching.</p>
        <div className="cta center-row">
          <a className="btn" href="#contact">Start a project <Arrow s={16} /></a>
          <a className="btn ghost" href={`mailto:${profile.email}`}><Mail s={16} /> Email me</a>
        </div>
        <div className="round-row">
          {Object.entries(socialIcons).map(([k, Icon]) => <a key={k} href={socials[k]} target="_blank" rel="noreferrer" aria-label={k}><Icon s={16} /></a>)}
        </div>
      </div>
    </section>
  )
}
