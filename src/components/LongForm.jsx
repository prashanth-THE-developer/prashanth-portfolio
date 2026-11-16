import { useRef, useState } from 'react'
import { longform } from '../data.js'
import { Arrow, Left, Play } from './Icons.jsx'
import VideoModal from './VideoModal.jsx'

export default function LongForm() {
  const rail = useRef(null)
  const [open, setOpen] = useState(null)
  const slide = dir => rail.current.scrollBy({ left: dir * 450, behavior: 'smooth' })

  return (
    <section className="section alt" id="longform">
      <div className="wrap work-head reveal">
        <div>
          <p className="eyebrow">YouTube / Long-form</p>
          <h2>Long-form edits</h2>
          <p className="lead">YouTube videos, documentaries and brand stories with strong storytelling, clean pacing, sound design and retention-focused edits.</p>
        </div>
        {longform.length > 1 && (
          <div className="arrows">
            <button onClick={() => slide(-1)} aria-label="Previous"><Left s={16} /></button>
            <button onClick={() => slide(1)} aria-label="Next"><Arrow s={16} /></button>
          </div>
        )}
      </div>

      <div className="rail" ref={rail}>
        {longform.map(v => {
          const bg = v.thumb
            ? `url(${v.thumb}) center/cover`
            : v.video && v.video !== 'YOUTUBE_ID'
              ? `url(https://i.ytimg.com/vi/${v.video}/hqdefault.jpg) center/cover`
              : `linear-gradient(160deg, ${v.a}, ${v.b})`
          return (
            <article key={v.label} className="short long" style={{ background: bg }} onClick={() => setOpen(v)}>
              <div className="short-top"><span className="chip">{v.label}</span><span className="tag">{v.tag}</span></div>
              <h3>{v.caption}</h3>
              <span className="play"><Play s={18} /></span>
            </article>
          )
        })}
      </div>
      {open && <VideoModal video={open.video} file={open.file} onClose={() => setOpen(null)} />}
    </section>
  )
}