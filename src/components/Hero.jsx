import { useEffect, useRef, useState } from 'react'
import { hero } from '../data.js'
import { Play, ArrowDown } from './Icons.jsx'
import VideoModal from './VideoModal.jsx'

export default function Hero() {
  const [reel, setReel] = useState(false)
  const [mp4Ok, setMp4Ok] = useState(true)
  const vid = useRef(null)
  const yt = hero.youtubeBg

  // Force the video to start (some browsers need this call)
  useEffect(() => {
    const v = vid.current
    if (v) {
      v.muted = true
      v.play().catch(err => console.warn('Video could not autoplay:', err))
    }
  }, [mp4Ok])

  return (
    <section className="hero" id="top">
      {/* Layer 1: fallback look, shows if no video is added yet */}
      <div className="hero-fallback" />
      {/* Layer 2: the background video */}
      {yt ? (
        <iframe className="hero-yt" title="Background video" tabIndex="-1"
          src={`https://www.youtube.com/embed/${yt}?autoplay=1&mute=1&loop=1&playlist=${yt}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`} />
      ) : mp4Ok && (
        <video
          ref={vid}
          className="hero-video"
          src={hero.mp4}
          autoPlay muted loop playsInline preload="auto"
          onError={e => {
            console.error('Hero video failed:', e.currentTarget.error?.message || 'file not found or unsupported codec, use H.264')
            setMp4Ok(false)
          }}
        />
      )}
      {/* Layer 3: dark overlay so the text is readable */}
      <div className="hero-shade" />

      <div className="wrap hero-content">
        <p className="eyebrow">Portfolio / Showreel</p>
        <h1>Video Editor</h1>
        <p className="hero-tag">I turn raw footage into stories people remember.</p>
        <p className="hero-sub">Video editor specializing in cinematic storytelling, social content, branded films, YouTube content, short-form videos, motion graphics, and high-retention edits. Based in Hyderabad, available worldwide.</p>
        <div className="cta">
          <button className="btn" onClick={() => setReel(true)}><Play /> Watch showreel</button>
          <a className="btn ghost" href="#work">View my work <ArrowDown s={15} /></a>
        </div>
      </div>
      {reel && <VideoModal video={hero.showreel} onClose={() => setReel(false)} />}
    </section>
  )
}