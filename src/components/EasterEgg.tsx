import { useState } from 'react'
import type { EasterEgg as EasterEggType } from '../types'

interface EasterEggProps {
  egg: EasterEggType
}

export function EasterEgg({ egg }: EasterEggProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`easter-egg type-${egg.type}`}
        style={egg.type === 'button' ? undefined : egg.position}
        onClick={() => setOpen(true)}
        aria-label={egg.label}
      >
        {egg.label}
      </button>

      {open && (
        <div className="modal-backdrop egg-backdrop" onClick={() => setOpen(false)} role="presentation">
          <div
            className="egg-modal scrapbook-page"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`egg-${egg.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close surprise"
            >
              close
            </button>
            <p className="eyebrow hand">you found something</p>
            <h3 id={`egg-${egg.id}`} className="display">
              {egg.revealTitle}
            </h3>
            {egg.revealImage && <img src={egg.revealImage} alt="" className="egg-image" />}
            <p>{egg.revealContent}</p>
          </div>
        </div>
      )}
    </>
  )
}
