import type { CSSProperties } from 'react'
import type { Memory } from '../types'

interface MemoryCardProps {
  memory: Memory
  onOpen: (memory: Memory) => void
  compact?: boolean
}

export function MemoryCard({ memory, onOpen, compact }: MemoryCardProps) {
  const rotation = memory.rotation ?? 0
  const sizeClass = memory.size ?? 'md'

  return (
    <button
      type="button"
      className={`memory-card size-${sizeClass} tape-${memory.tapeColor ?? 'pink'}${compact ? ' compact' : ''}`}
      style={{ '--rot': `${rotation}deg` } as CSSProperties}
      onClick={() => onOpen(memory)}
      aria-label={`Open memory: ${memory.title}`}
    >
      <span className="tape" aria-hidden="true" />
      <div className="polaroid-frame">
        <img src={memory.image} alt={memory.title} loading="lazy" />
      </div>
      <div className="polaroid-caption">
        <p className="hand title">{memory.title}</p>
        <p className="meta">{memory.date}</p>
        {memory.people.length > 0 && (
          <p className="people">With: {memory.people.join(', ')}</p>
        )}
      </div>
      {memory.annotation && (
        <span className="annotation hand" aria-hidden="true">
          {memory.annotation}
        </span>
      )}
      {memory.doodle && <span className={`doodle doodle-${memory.doodle}`} aria-hidden="true" />}
    </button>
  )
}
