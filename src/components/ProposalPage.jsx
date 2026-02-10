import { useState } from 'react'
import './ProposalPage.css'

export default function ProposalPage({ onYes }) {
  const [hovered, setHovered] = useState(null)
  const [celebrating, setCelebrating] = useState(false)

  const handleYes = () => {
    setCelebrating(true)
    setTimeout(() => onYes(), 1400)
  }

  return (
    <div className={`proposal-page ${celebrating ? 'proposal-page--celebrating' : ''}`}>
      <div className="hearts-bg" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="heart-float"
            style={{
              '--i': i,
              '--size': 0.7 + (i % 3) * 0.35,
              '--left': (i * 5.5) % 100,
              '--top': (i * 13 + 20) % 100,
              '--delay': (i % 5) * -1.2,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {celebrating && (
        <div className="heart-burst" aria-hidden="true">
          {[...Array(16)].map((_, i) => {
            const angle = (i / 16) * 2 * Math.PI
            const dist = 90
            const x = Math.cos(angle) * dist
            const y = Math.sin(angle) * dist
            return (
              <span
                key={i}
                className="heart-burst-item"
                style={{
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                }}
              >
                ♥
              </span>
            )
          })}
        </div>
      )}

      <main className="proposal-content">
        <div className="proposal-glass">
          <p className="proposal-prefix">So…</p>
          <h1 className="proposal-title">
            Will you be my <span className="highlight">Valentine&apos;s date</span>?
          </h1>
          <p className="proposal-sub">(Yes or yes – your call 🙂)</p>

          <div className="buttons-wrap">
          <button
            type="button"
            className={`btn-yes ${hovered === 1 ? 'btn-yes--hover' : ''}`}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            onClick={handleYes}
          >
            Yes
          </button>
          <span className="or-text">or</span>
          <button
            type="button"
            className={`btn-yes btn-yes-2 ${hovered === 2 ? 'btn-yes--hover' : ''}`}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            onClick={handleYes}
          >
            Yes
          </button>
          </div>
        </div>
      </main>
    </div>
  )
}
