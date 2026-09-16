import type { CSSProperties } from 'react'
import type { LoveReason } from '../types'

interface ReasonsSectionProps {
  reasons: LoveReason[]
}

export function ReasonsSection({ reasons }: ReasonsSectionProps) {
  return (
    <section className="section reasons-section" id="reasons">
      <div className="section-heading">
        <p className="eyebrow hand">a non-exhaustive list</p>
        <h2 className="display">REASONS WE LOVE BECKY</h2>
        <p className="section-sub">Tiny stickers for a very big heart.</p>
      </div>
      <div className="reasons-scatter">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className={`reason-sticker shape-${reason.shape ?? 'sticker'} color-${reason.color ?? 'pink'}`}
            style={{ '--rot': `${reason.rotation ?? 0}deg` } as CSSProperties}
          >
            <span className="hand">{reason.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
