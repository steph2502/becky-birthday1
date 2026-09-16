import type { Memory } from '../types'
import { MemoryCard } from './MemoryCard'
import { EasterEgg } from './EasterEgg'
import { easterEggs } from '../data/content'

interface PhotoScrapbookProps {
  memories: Memory[]
  onOpen: (memory: Memory) => void
}

export function PhotoScrapbook({ memories, onOpen }: PhotoScrapbookProps) {
  return (
    <section className="section scrapbook-section" id="archives">
      <div className="section-heading">
        <p className="eyebrow hand">flip through gently</p>
        <h2 className="display">THE BECKY ARCHIVES</h2>
        <p className="section-sub">
          Scattered polaroids, uneven tape, and memories that refuse to sit in a neat grid —
          just like the real thing.
        </p>
      </div>

      <div className="scrapbook-spread">
        <div className="paper-grain" aria-hidden="true" />
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`scrap-item scrap-item-${index + 1}`}
            style={{ zIndex: index + 1 }}
          >
            <MemoryCard memory={memory} onOpen={onOpen} />
          </div>
        ))}

        <svg className="spread-doodles" viewBox="0 0 800 600" aria-hidden="true">
          <path
            d="M40 80 C 80 40, 120 120, 160 70"
            fill="none"
            stroke="var(--brown)"
            strokeWidth="2"
            opacity="0.35"
          />
          <path
            d="M620 90 L650 60 L680 95"
            fill="none"
            stroke="var(--soft-pink)"
            strokeWidth="2.5"
            opacity="0.7"
          />
          <circle cx="720" cy="420" r="6" fill="var(--butter)" />
          <path
            d="M100 480 Q 180 430 240 500"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>

        {easterEggs.slice(0, 2).map((egg) => (
          <EasterEgg key={egg.id} egg={egg} />
        ))}
      </div>
    </section>
  )
}
