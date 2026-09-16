import { useMemo, useState } from 'react'
import type { QuizQuestion, QuizResult } from '../types'

interface QuizProps {
  questions: QuizQuestion[]
  results: QuizResult[]
}

export function Quiz({ questions, results }: QuizProps) {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const question = questions[index]
  const result = useMemo(() => {
    const sorted = [...results].sort((a, b) => b.minScore - a.minScore)
    return sorted.find((r) => score >= r.minScore) ?? results[0]
  }, [results, score])

  const choose = (optionIndex: number) => {
    if (selected !== null || !question) return
    setSelected(optionIndex)
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1)
    }
  }

  const next = () => {
    if (index >= questions.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  const restart = () => {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setDone(false)
  }

  return (
    <section className="section quiz-section" id="quiz">
      <div className="section-heading">
        <p className="eyebrow hand">no pressure (okay a little pressure)</p>
        <h2 className="display">HOW WELL DO YOU KNOW BECKY?</h2>
        <p className="section-sub">A tiny quiz. Update the questions anytime in the data file.</p>
      </div>

      <div className="quiz-card scrapbook-page">
        {!done && question && (
          <>
            <p className="hand progress">
              Question {index + 1} of {questions.length}
            </p>
            <h3 className="quiz-question">{question.question}</h3>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => {
                const isCorrect = optionIndex === question.correctIndex
                const isChosen = selected === optionIndex
                let state = ''
                if (selected !== null) {
                  if (isCorrect) state = 'correct'
                  else if (isChosen) state = 'wrong'
                }
                return (
                  <button
                    key={option}
                    type="button"
                    className={`quiz-option ${state}`}
                    onClick={() => choose(optionIndex)}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            {selected !== null && (
              <div className="quiz-feedback">
                {question.funFact && <p className="hand">{question.funFact}</p>}
                <button type="button" className="cta-button small" onClick={next}>
                  {index >= questions.length - 1 ? 'See results' : 'Next question'}
                </button>
              </div>
            )}
          </>
        )}

        {done && result && (
          <div className="quiz-result">
            <p className="hand">You scored {score}/{questions.length}</p>
            <h3 className="display">{result.title}</h3>
            <p>{result.message}</p>
            <button type="button" className="cta-button small" onClick={restart}>
              Try again
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
