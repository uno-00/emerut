import { useEffect, useState } from 'react'
import './SplashScreen.css'

const WAIT_SECONDS = 5
const FADE_OUT_MS = 500

export default function SplashScreen({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const duration = WAIT_SECONDS * 1000
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(100, (elapsed / duration) * 100)
      setProgress(p)
      if (p < 100) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    const t = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, FADE_OUT_MS)
    }, duration)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`splash ${exiting ? 'splash--exiting' : ''}`}>
      <div className="splash-bg" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="splash-heart"
            style={{ '--splash-i': i }}
          >
            ♥
          </span>
        ))}
      </div>
      <div className="splash-content">
        <span className="splash-dot" aria-hidden="true">♥</span>
        <p className="splash-text">Something special for you</p>
        <div className="splash-bar-wrap">
          <div
            className="splash-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="splash-hint">Preparing my surprise...</p>
      </div>
    </div>
  )
}
