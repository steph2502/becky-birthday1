interface HeroProps {
  onEnter: () => void
}

export function Hero({ onEnter }: HeroProps) {
  return (
    <section className="hero" id="welcome">
      <div className="hero-floaters" aria-hidden="true">
        <span className="floater heart" />
        <span className="floater star" />
        <span className="floater scrap scrap-a" />
        <span className="floater scrap scrap-b" />
        <span className="floater doodle" />
        <span className="floater star late" />
        <span className="floater heart late" />
      </div>

      <div className="hero-book">
        <div className="book-edge" aria-hidden="true" />
        <div className="hero-content scrapbook-page">
          <p className="eyebrow hand">a handmade internet scrapbook</p>
          <h1 className="display hero-title">
            Welcome to Becky&apos;s little corner of the internet
          </h1>
          <p className="hand accent-mark" aria-hidden="true">
            <span className="inline-heart" />
          </p>
          <p className="hero-sub">
            A tiny collection of memories, laughter, chaos, and all the reasons you&apos;re so loved.
          </p>
          <button type="button" className="cta-button" onClick={onEnter}>
            Enter Becky&apos;s World
          </button>
          <p className="hand tip">tip: tap the tiny stars and doodles later</p>
        </div>
      </div>
    </section>
  )
}
