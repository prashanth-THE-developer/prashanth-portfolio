import { useEffect } from 'react'

// Popup that plays a YouTube video. vertical = true for Shorts/Reels (9:16)
export default function VideoModal({ video, vertical, onClose }) {
  useEffect(() => {
    const key = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="modal" onClick={onClose}>
      <div className={'box' + (vertical ? ' vertical' : '')} onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close video">×</button>
        {video === 'YOUTUBE_ID'
          ? <div className="msg">Add your YouTube video ID in src/data.js to play your video here.</div>
          : <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1&rel=0`} allow="autoplay; fullscreen" allowFullScreen title="Video player" />}
      </div>
    </div>
  )
}
