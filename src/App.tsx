import { useState } from 'react'
import { Hero } from './components/Hero'
import { PhotoScrapbook } from './components/PhotoScrapbook'
import { MemoryModal } from './components/MemoryModal'
import { Timeline } from './components/Timeline'
import { VideoSection } from './components/VideoCard'
import { LettersSection } from './components/FriendMessage'
import { ReasonsSection } from './components/ReasonsSection'
import { Quiz } from './components/Quiz'
import { EasterEgg } from './components/EasterEgg'
import { PuzzleCorner } from './components/PuzzleCorner'
import { BirthdayEnding } from './components/BirthdayEnding'
import {
  crossword,
  easterEggs,
  friendMessages,
  loveReasons,
  archiveMemories,
  lettersVideo,
  memories,
  quizQuestions,
  quizResults,
  scrambleWords,
  timeline,
  videos,
} from './data/content'
import type { Memory } from './types'
import './styles/scrapbook.css'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null)

  const enterWorld = () => {
    setEntered(true)
    window.setTimeout(() => {
      document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  const dontClickEgg = easterEggs.find((e) => e.type === 'button')

  return (
    <div className={`app-shell${entered ? ' entered' : ' landing'}`}>
      <Hero onEnter={enterWorld} />

      <main className={`scrapbook-main${entered ? ' open' : ''}`}>
        <div className="page-turn" aria-hidden="true" />

        <PhotoScrapbook memories={archiveMemories} onOpen={setActiveMemory} />
        <Timeline years={timeline} memories={memories} onOpen={setActiveMemory} />
        <VideoSection videos={videos} />
        <LettersSection
          messages={friendMessages}
          videoUrl={lettersVideo.videoUrl}
          videoTitle={lettersVideo.title}
          videoCaption={lettersVideo.caption}
        />
        <ReasonsSection reasons={loveReasons} />
        <Quiz questions={quizQuestions} results={quizResults} />

        <section className="section egg-hint-section">
          <div className="egg-playground scrapbook-page">
            <p className="hand">explorers welcome</p>
            <p>There are secret bits tucked around this site. Some are obvious. Some are not.</p>
            <PuzzleCorner
              puzzle={crossword}
              words={scrambleWords}
              extra={dontClickEgg && <EasterEgg egg={dontClickEgg} />}
            />
          </div>
        </section>

        <BirthdayEnding />
      </main>

      <MemoryModal memory={activeMemory} onClose={() => setActiveMemory(null)} />
    </div>
  )
}
