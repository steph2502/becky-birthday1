export interface Memory {
  id: string
  image: string
  title: string
  date: string
  year: number
  location?: string
  people: string[]
  memory: string
  caption?: string
  video?: string
  annotation?: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg'
  tapeColor?: 'pink' | 'yellow' | 'sage' | 'blue' | 'peach' | 'brown'
  doodle?: 'heart' | 'star' | 'arrow' | 'squiggle' | 'sparkle'
  /** When false, memory appears in timeline only — not the main archives scrapbook */
  inArchives?: boolean
}

export interface VideoMemory {
  id: string
  title: string
  caption: string
  thumbnail: string
  videoUrl: string
  date?: string
  rotation?: number
}

export interface FriendMessage {
  id: string
  from: string
  message: string
  style: 'envelope' | 'note' | 'postcard' | 'sticky'
  rotation?: number
  color?: 'pink' | 'yellow' | 'sage' | 'blue' | 'peach' | 'cream'
}

export interface LoveReason {
  id: string
  text: string
  rotation?: number
  color?: 'pink' | 'yellow' | 'sage' | 'blue' | 'peach' | 'brown'
  shape?: 'sticker' | 'ticket' | 'blob' | 'tag'
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  funFact?: string
}

export interface QuizResult {
  minScore: number
  title: string
  message: string
}

export interface EasterEgg {
  id: string
  type: 'star' | 'doodle' | 'button' | 'secret'
  label: string
  revealTitle: string
  revealContent: string
  revealImage?: string
  position?: { top?: string; left?: string; right?: string; bottom?: string }
}

export interface CrosswordEntry {
  id: string
  number: number
  answer: string
  clue: string
  row: number
  col: number
  direction: 'across' | 'down'
}

export interface CrosswordPuzzle {
  rows: number
  cols: number
  entries: CrosswordEntry[]
}

export interface ScrambleWord {
  id: string
  scrambled: string
  answer: string
  hint: string
}

export interface TimelineYear {
  year: number
  label?: string
  story: string
  memoryIds: string[]
}
