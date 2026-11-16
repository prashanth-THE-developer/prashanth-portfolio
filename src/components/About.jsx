import { aboutStats } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about reveal">
        <figure className="portrait">
          <img src="/images/prashanth.jpg" alt="Pothula Prashanth, video editor, at his editing desk" />
          <figcaption>Pothula Prashanth / Video Editor</figcaption>
        </figure>
        <div>
          <p className="eyebrow">About</p>
          <h2>The editor behind the cut.</h2>
          <p className="about-lead">I’m Pothula Prashanth, a video editor focused on turning footage into clear, engaging and emotionally effective stories.</p>
          <p className="about-text">I care about the details that make an edit feel intentional — the cut that lands at exactly the right moment, the sound that creates tension, the frame that holds attention, and the pacing that keeps viewers watching.</p>
          <div className="about-stats">
            {aboutStats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}