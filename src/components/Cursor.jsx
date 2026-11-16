import { useEffect, useRef } from 'react'

// The gold ring with a dot that follows the mouse (desktop only)
export default function Cursor() {
  const ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const move = e => { x = e.clientX; y = e.clientY }
    const loop = () => {
      rx += (x - rx) * 0.15
      ry += (y - ry) * 0.15
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    loop()
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div className="cursor" ref={ring}><i /></div>
}
