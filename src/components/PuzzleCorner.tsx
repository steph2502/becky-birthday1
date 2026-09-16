import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CrosswordPuzzle, ScrambleWord } from '../types'

interface Cell {
  key: string
  row: number
  col: number
  letter: string
  number?: number
}

function buildCells(puzzle: CrosswordPuzzle) {
  const cells = new Map<string, Cell>()

  for (const entry of puzzle.entries) {
    const letters = entry.answer.split('')
    letters.forEach((letter, i) => {
      const row = entry.direction === 'down' ? entry.row + i : entry.row
      const col = entry.direction === 'across' ? entry.col + i : entry.col
      const key = `${row}-${col}`
      const existing = cells.get(key)
      cells.set(key, {
        key,
        row,
        col,
        letter,
        number: i === 0 ? entry.number : existing?.number,
      })
    })
  }

  return cells
}

function Crossword({ puzzle }: { puzzle: CrosswordPuzzle }) {
  const cells = useMemo(() => buildCells(puzzle), [puzzle])
  const [values, setValues] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const solved = useMemo(
    () => [...cells.values()].every((cell) => values[cell.key]?.toUpperCase() === cell.letter),
    [cells, values],
  )

  const setLetter = (key: string, raw: string) => {
    const letter = raw.replace(/[^a-zA-Z]/g, '').slice(-1).toUpperCase()
    setValues((prev) => ({ ...prev, [key]: letter }))
    setChecked(false)
  }

  return (
    <div className="puzzle-body">
      <div
        className="crossword-grid"
        style={{ gridTemplateColumns: `repeat(${puzzle.cols}, 1fr)` }}
      >
        {Array.from({ length: puzzle.rows * puzzle.cols }, (_, i) => {
          const row = Math.floor(i / puzzle.cols)
          const col = i % puzzle.cols
          const cell = cells.get(`${row}-${col}`)

          if (!cell) return <span key={`${row}-${col}`} className="crossword-blank" />

          const value = values[cell.key] ?? ''
          let state = ''
          if (checked && value) state = value.toUpperCase() === cell.letter ? ' right' : ' wrong'

          return (
            <label key={cell.key} className={`crossword-cell${state}`}>
              {cell.number && <span className="crossword-number">{cell.number}</span>}
              <input
                value={value}
                onChange={(e) => setLetter(cell.key, e.target.value)}
                inputMode="text"
                autoComplete="off"
                aria-label={`Row ${cell.row + 1} column ${cell.col + 1}`}
              />
            </label>
          )
        })}
      </div>

      <div className="crossword-side">
        <ul className="crossword-clues">
          {puzzle.entries.map((entry) => (
            <li key={entry.id}>
              <strong>
                {entry.number} {entry.direction === 'across' ? 'across' : 'down'}
              </strong>{' '}
              {entry.clue}
            </li>
          ))}
        </ul>

        <div className="puzzle-actions">
          <button type="button" className="puzzle-check hand" onClick={() => setChecked(true)}>
            check
          </button>
          <button
            type="button"
            className="puzzle-reset hand"
            onClick={() => {
              setValues({})
              setChecked(false)
            }}
          >
            clear
          </button>
        </div>

        {solved && <p className="hand puzzle-win">solved it. certified Becky scholar.</p>}
        {checked && !solved && <p className="hand puzzle-nudge">green ones are right, keep going.</p>}
      </div>
    </div>
  )
}

function Scramble({ words }: { words: ScrambleWord[] }) {
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [status, setStatus] = useState<'idle' | 'right' | 'wrong'>('idle')
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const word = words[index]

  const submit = () => {
    if (!word || status === 'right') return
    if (guess.trim().toUpperCase() === word.answer) {
      setStatus('right')
      setScore((s) => s + 1)
    } else {
      setStatus('wrong')
    }
  }

  const next = () => {
    if (index >= words.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setGuess('')
    setStatus('idle')
  }

  const restart = () => {
    setIndex(0)
    setGuess('')
    setStatus('idle')
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="puzzle-body scramble-done">
        <p className="hand puzzle-win">
          {score}/{words.length} unscrambled.
        </p>
        <button type="button" className="puzzle-check hand" onClick={restart}>
          play again
        </button>
      </div>
    )
  }

  if (!word) return null

  return (
    <div className="puzzle-body scramble-body">
      <p className="scramble-word hand">{word.scrambled}</p>
      <p className="scramble-hint">{word.hint}</p>

      <div className="scramble-row">
        <input
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value)
            setStatus('idle')
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit()
          }}
          placeholder="your guess"
          aria-label="Your guess"
          autoComplete="off"
        />
        {status === 'right' ? (
          <button type="button" className="puzzle-check hand" onClick={next}>
            {index >= words.length - 1 ? 'finish' : 'next'}
          </button>
        ) : (
          <button type="button" className="puzzle-check hand" onClick={submit}>
            check
          </button>
        )}
      </div>

      {status === 'right' && <p className="hand puzzle-win">yes! {word.answer}.</p>}
      {status === 'wrong' && <p className="hand puzzle-nudge">not quite — try again.</p>}

      <p className="scramble-progress">
        {index + 1} of {words.length}
      </p>
    </div>
  )
}

interface PuzzleCornerProps {
  puzzle: CrosswordPuzzle
  words: ScrambleWord[]
  /** Rendered alongside the game pills, so extras sit on the same row. */
  extra?: ReactNode
}

export function PuzzleCorner({ puzzle, words, extra }: PuzzleCornerProps) {
  const [active, setActive] = useState<'crossword' | 'scramble' | null>(null)

  const toggle = (game: 'crossword' | 'scramble') =>
    setActive((current) => (current === game ? null : game))

  return (
    <div className="puzzle-corner">
      <div className="puzzle-tabs">
        <button
          type="button"
          className={`puzzle-tab hand${active === 'crossword' ? ' on' : ''}`}
          onClick={() => toggle('crossword')}
        >
          mini crossword
        </button>
        <button
          type="button"
          className={`puzzle-tab hand${active === 'scramble' ? ' on' : ''}`}
          onClick={() => toggle('scramble')}
        >
          word scramble
        </button>
        {extra}
      </div>

      {active === 'crossword' && <Crossword puzzle={puzzle} />}
      {active === 'scramble' && <Scramble words={words} />}
    </div>
  )
}
