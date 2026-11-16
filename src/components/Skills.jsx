import { software, skills } from '../data.js'

export default function Skills() {
  return (
    <section className="section">
      <div className="wrap reveal">
        <p className="eyebrow">Tools & Skills</p>
        <h2>Software & skills</h2>
        <div className="skills">
          <div>
            <p className="label">Software</p>
            <div className="soft">
              {software.map(s => <div key={s.code} className="tile"><b>{s.code}</b><span>{s.name}</span></div>)}
            </div>
          </div>
          <div>
            <p className="label">Skills</p>
            <div className="pills">{skills.map(s => <span key={s}>{s}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
