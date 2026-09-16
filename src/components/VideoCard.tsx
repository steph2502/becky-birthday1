import { useEffect, useState, type CSSProperties } from 'react'
import type { VideoMemory } from '../types'

interface VideoCardProps {
  video: VideoMemory
  onOpen: (video: VideoMemory) => void
}

export function VideoCard({ video, onOpen }: VideoCardProps) {
  return (
    <button
      type="button"
      className="video-card"
      style={{ '--rot': `${video.rotation ?? 0}deg` } as CSSProperties}
      onClick={() => onOpen(video)}
      aria-label={`Play video: ${video.title}`}
    >
      <span className="tape tape-left" aria-hidden="true" />
      <span className="tape tape-right" aria-hidden="true" />
      <div className="video-thumb">
        {video.videoUrl.startsWith('/') ? (
          <video
            src={video.videoUrl}
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            aria-hidden="true"
          />
        ) : (
          <img src={video.thumbnail} alt="" loading="lazy" />
        )}
        <span className="play-badge" aria-hidden="true">
          ▶
        </span>
      </div>
      <div className="video-meta">
        <p className="hand title">{video.title}</p>
        <p className="caption">{video.caption}</p>
        {video.date && <p className="meta">{video.date}</p>}
      </div>
    </button>
  )
}

interface VideoModalProps {
  video: VideoMemory | null
  onClose: () => void
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!video) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [video, onClose])

  if (!video) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close video">
          close
        </button>
        <h3 className="hand">{video.title}</h3>
        <video controls autoPlay playsInline>
          <source src={video.videoUrl} />
        </video>
        <p className="caption">{video.caption}</p>
      </div>
    </div>
  )
}

interface VideoSectionProps {
  videos: VideoMemory[]
}

export function VideoSection({ videos }: VideoSectionProps) {
  const [active, setActive] = useState<VideoMemory | null>(null)

  return (
    <section className="section video-section" id="elements">
      <div className="section-heading">
        <p className="eyebrow hand">press play if you dare</p>
        <h2 className="display">BECKY IN HER ELEMENTS {'\u2728'}</h2>
        <p className="section-sub">Where the influence shows, the conversations start, and she makes it look easy.</p>
      </div>
      <div className="video-row">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onOpen={setActive} />
        ))}
      </div>
      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  )
}
