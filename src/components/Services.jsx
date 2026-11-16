import { services } from '../data.js'

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="wrap reveal">
        <p className="eyebrow">Services</p>
        <h2>What I edit</h2>
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={s.title} className="svc">
              <div className="svc-top"><span className="num">{String(i + 1).padStart(2, '0')}</span><i /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
