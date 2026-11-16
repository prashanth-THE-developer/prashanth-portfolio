import { useRef, useState } from 'react'
import { shorts } from '../data.js'
import { Arrow, Left, Play } from './Icons.jsx'
import VideoModal from './VideoModal.jsx'

export default function Work() {
  const rail = useRef(null)
  const [open, setOpen] = useState(null)
  const slide = dir => rail.current.scrollBy({ left: dir * 300, behavior: 'smooth' })

  return (
    <section className="section" id="work">
      <div className="wrap work-head reveal">
        <div>
          <p className="eyebrow">Shorts / Reels</p>
          <h2>Short-form content</h2>
          <p className="lead">YouTube Shorts, Reels & TikTok edits with kinetic typography, text animations, and retention-first pacing.</p>
        </div>
        <div className="arrows">
          <button onClick={() => slide(-1)} aria-label="Previous"><Left s={16} /></button>
          <button onClick={() => slide(1)} aria-label="Next"><Arrow s={16} /></button>
        </div>
      </div>

      <div className="rail" ref={rail}>
        {shorts.map(s => {
          const thumb = s.video !== 'YOUTUBE_ID' ? `url(https://i.ytimg.com/vi/${s.video}/hqdefault.jpg) center/cover` : `linear-gradient(160deg, ${s.a}, ${s.b})`
          return (
            <article key={s.label} className="short" style={{ background: thumb }} onClick={() => setOpen(s)}>
              <div className="short-top"><span className="chip">{s.label}</span><span className="tag">{s.tag}</span></div>
              <h3>{s.caption}</h3>
              <span className="play"><Play s={18} /></span>
            </article>
          )
        })}
      </div>
      {open && <VideoModal video={open.video} vertical onClose={() => setOpen(null)} />}
    </section>
  )
}
