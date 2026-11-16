import { philosophy } from '../data.js'

export default function Philosophy() {
  return (
    <section className="section alt center">
      <div className="wrap reveal">
        <p className="eyebrow center">Philosophy</p>
        <h2>Every frame has a purpose.</h2>
        <div className="phil-grid">
          {philosophy.map((p, i) => (
            <div key={p.title} className="phil">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
