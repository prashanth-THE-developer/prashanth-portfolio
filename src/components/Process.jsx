import { process } from '../data.js'

export default function Process() {
  return (
    <section className="section alt" id="process">
      <div className="wrap reveal">
        <p className="eyebrow">Process</p>
        <h2>How it works</h2>
        <div className="steps">
          {process.map((p, i) => (
            <div key={p.title} className="step">
              <i className="dot" />
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
