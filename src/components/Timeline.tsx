import { useMemo } from 'react'
import type { Memory, TimelineYear } from '../types'
import { MemoryCard } from './MemoryCard'

interface TimelineProps {
  years: TimelineYear[]
  memories: Memory[]
  onOpen: (memory: Memory) => void
}

export function Timeline({ years, memories, onOpen }: TimelineProps) {
  const chapter = years[0]

  const dayOneMemories = useMemo(() => {
    if (!chapter) return []
    return chapter.memoryIds
      .map((id) => memories.find((m) => m.id === id))
      .filter((m): m is Memory => Boolean(m))
  }, [chapter, memories])

  if (!chapter) return null

  return (
    <section className="section timeline-section" id="timeline">
      <div className="section-heading">
        <p className="eyebrow hand">from the very first page</p>
        <h2 className="display">Becky, Back Then {'\uD83D\uDDBC\uFE0F'}</h2>
        <p className="section-sub">{chapter.story}</p>
      </div>

      <div className="timeline-panel scrapbook-page day-one-panel">
        <div className="timeline-photos">
          {dayOneMemories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} onOpen={onOpen} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
