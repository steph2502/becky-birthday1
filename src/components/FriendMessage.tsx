import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { FriendMessage as FriendMessageType } from '../types'

interface ConfettiPiece {
  id: number
  left: string
  delay: string
  color: string
  drift: string
  size: string
}

const CONFETTI_COLORS = [
  '#f3c6c6',
  '#f3e2a0',
  '#b7c7b0',
  '#b9cfe0',
  '#f2c9a8',
  '#8b5e3c',
  '#c9c2db',
  '#fffaf3',
]

function burstConfetti(): ConfettiPiece[] {
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${8 + Math.random() * 84}%`,
    delay: `${Math.random() * 0.2}s`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    drift: `${(Math.random() - 0.5) * 120}px`,
    size: `${6 + Math.random() * 8}px`,
  }))
}

interface FriendMessageProps {
  message: FriendMessageType
}

export function FriendMessage({ message }: FriendMessageProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [popping, setPopping] = useState(false)

  useEffect(() => {
    if (!popping) return
    const timer = window.setTimeout(() => {
      setPopping(false)
      setPieces([])
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [popping])

  const pop = () => {
    setPieces(burstConfetti())
    setPopping(true)
  }

  return (
    <div
      className={`friend-message mini-envelope color-${message.color ?? 'cream'}${popping ? ' popping' : ''}`}
      style={{ '--rot': `${message.rotation ?? 0}deg` } as CSSProperties}
    >
      <button
        type="button"
        className="message-face"
        onClick={pop}
        aria-label={`Surprise envelope from ${message.from}`}
      >
        <span className="envelope-flap" aria-hidden="true" />
        <span className="envelope-body">
          <span className="hand to-line">To: Becky</span>
          <span className="from-line">from {message.from}</span>
        </span>
      </button>

      {popping && (
        <div className="confetti-layer" aria-hidden="true">
          {pieces.map((piece) => (
            <span
              key={piece.id}
              className="confetti-piece"
              style={
                {
                  left: piece.left,
                  background: piece.color,
                  width: piece.size,
                  height: piece.size,
                  animationDelay: piece.delay,
                  '--drift': piece.drift,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface LettersSectionProps {
  messages: FriendMessageType[]
  videoUrl: string
  videoTitle?: string
  videoCaption?: string
}

/** Returns the video id if the url is a YouTube link, otherwise null. */
function youTubeId(url: string) {
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function LettersSection({
  messages,
  videoUrl,
  videoTitle = 'Happy Birthday, Becky',
  videoCaption = '',
}: LettersSectionProps) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const embedId = youTubeId(videoUrl)

  return (
    <section className="section letters-section" id="letters">
      <div className="section-heading">
        <p className="eyebrow hand">open carefully</p>
        <h2 className="display">LETTERS TO BECKY</h2>
        <p className="section-sub">
          One big Polaroid of love — and tiny envelopes that explode into confetti.
        </p>
      </div>

      <div className="letters-stage">
        {messages.map((message, index) => (
          <div key={message.id} className={`envelope-slot envelope-slot-${(index % 15) + 1}`}>
            <FriendMessage message={message} />
          </div>
        ))}

        <div className="letters-hero-polaroid">
          <span className="tape tape-left" aria-hidden="true" />
          <span className="tape tape-right" aria-hidden="true" />
          <div className="letters-hero-media">
            {embedId ? (
              <iframe
                className="letters-embed"
                src={`https://www.youtube-nocookie.com/embed/${embedId}?rel=0&modestbranding=1&playsinline=1`}
                title={videoTitle}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : videoUrl ? (
              <>
                {/* #t=0.5 makes the browser show a real frame instead of black. */}
                <video
                  ref={videoRef}
                  src={`${videoUrl}#t=0.5`}
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />
                {!playing && (
                  <button
                    type="button"
                    className="letters-play hand"
                    onClick={() => videoRef.current?.play()}
                  >
                    press play
                  </button>
                )}
              </>
            ) : (
              <div className="letters-video-placeholder hand">
                Drop the birthday video here soon
              </div>
            )}
          </div>
          <div className="letters-hero-caption">
            <p className="hand title">{videoTitle}</p>
            {videoCaption ? <p className="caption">{videoCaption}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
