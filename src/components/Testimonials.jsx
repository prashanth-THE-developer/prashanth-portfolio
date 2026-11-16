import { useState } from 'react'
import { testimonials } from '../data.js'
import { Left, Arrow } from './Icons.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const t = testimonials[i]
  return (
    <section className="section center">
      <div className="wrap reveal">
        <p className="eyebrow center">Testimonials</p>
        <div className="testi">
          <span className="qmark">”</span>
          <p className="quote">{t.quote}</p>
          <p className="t-name">{t.name}</p>
          <p className="t-role">{t.role}</p>
          <p className="t-type">{t.type}</p>
          <div className="t-ctrl">
            <button onClick={() => setI((i + n - 1) % n)} aria-label="Previous testimonial"><Left s={15} /></button>
            <div className="dots">{testimonials.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div>
            <button onClick={() => setI((i + 1) % n)} aria-label="Next testimonial"><Arrow s={15} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
