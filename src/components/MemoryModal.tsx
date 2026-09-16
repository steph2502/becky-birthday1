import { useEffect } from 'react'
import type { Memory } from '../types'

interface MemoryModalProps {
  memory: Memory | null
  onClose: () => void
}

export function MemoryModal({ memory, onClose }: MemoryModalProps) {
  useEffect(() => {
    if (!memory) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [memory, onClose])

  if (!memory) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <article
        className="memory-modal scrapbook-page"
        role="dialog"
        aria-modal="true"
        aria-labelledby="memory-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close memory">
          close
        </button>
        <div className="memory-modal-media">
          <img src={memory.image} alt={memory.title} />
        </div>
        <div className="memory-modal-body">
          <p className="hand date-line">{memory.date}</p>
          <h3 id="memory-modal-title" className="display">
            {memory.title}
          </h3>
          {memory.location && <p className="detail">Somewhere: {memory.location}</p>}
          {memory.people.length > 0 && (
            <p className="detail">With: {memory.people.join(', ')}</p>
          )}
          <p className="story">{memory.memory}</p>
          {memory.caption && <p className="hand funny-caption">"{memory.caption}"</p>}
          {memory.video && (
            <video controls playsInline className="memory-video">
              <source src={memory.video} />
            </video>
          )}
        </div>
      </article>
    </div>
  )
}
