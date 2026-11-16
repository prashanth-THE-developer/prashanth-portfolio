import { useState } from 'react'
import { profile, socials, projectTypes, budgets } from '../data.js'
import { Mail, Phone, Pin, Send, socialIcons } from './Icons.jsx'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', type: '', budget: '', msg: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })

  // Opens the visitor's email app with everything filled in
  const submit = e => {
    e.preventDefault()
    const body = `Name: ${f.name}\nEmail: ${f.email}\nProject type: ${f.type}\nBudget: ${f.budget}\n\n${f.msg}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Project inquiry from ' + f.name)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section" id="contact">
      <div className="wrap reveal">
        <p className="eyebrow">Contact</p>
        <h2>Let’s talk.</h2>
        <div className="contact">
          <form onSubmit={submit}>
            <label>Name<input placeholder="Your name" value={f.name} onChange={set('name')} required /></label>
            <label>Email<input type="email" placeholder="you@email.com" value={f.email} onChange={set('email')} required /></label>
            <label>Project type
              <select value={f.type} onChange={set('type')} required>
                <option value="" disabled>Select a type</option>
                {projectTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>Budget range
              <select value={f.budget} onChange={set('budget')} required>
                <option value="" disabled>Select a range</option>
                {budgets.map(b => <option key={b}>{b}</option>)}
              </select>
            </label>
            <label className="full">Project details
              <textarea rows="3" placeholder="Tell me about your project, timeline, and what you’re looking for." value={f.msg} onChange={set('msg')} required />
            </label>
            <button className="btn full-btn" type="submit">Send project inquiry <Send s={15} /></button>
          </form>

          <aside>
            <p className="label">Email</p><p className="info"><Mail s={16} /> {profile.email}</p>
            <p className="label">Phone</p><p className="info"><Phone s={16} /> {profile.phone}</p>
            <p className="label">Location</p><p className="info"><Pin s={16} /> {profile.location}</p>
            <p className="label">Availability</p><p className="info"><i className="live" /> Available</p>
            <hr />
            <p className="label">Social</p>
            <div className="round-row left">
              {Object.entries(socialIcons).map(([k, Icon]) => <a key={k} href={socials[k]} target="_blank" rel="noreferrer" aria-label={k}><Icon s={16} /></a>)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
