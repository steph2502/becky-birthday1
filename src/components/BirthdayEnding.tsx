import { birthdayMessage } from '../data/content'
import { EasterEgg } from './EasterEgg'
import { easterEggs } from '../data/content'

export function BirthdayEnding() {
  const secretEgg = easterEggs.find((e) => e.type === 'secret')

  return (
    <section className="section ending-section" id="ending">
      <div className="ending-inner">
        <div className="ending-photo">
          <img src={birthdayMessage.photo} alt="Becky" />
          <span className="tape" aria-hidden="true" />
        </div>

        <div className="ending-message">
          {birthdayMessage.lines.map((line, index) => (
            <p
              key={line}
              className={index === 0 || index === birthdayMessage.lines.length - 2 ? 'hand lead' : ''}
            >
              {line}
            </p>
          ))}
          <p className="closing display">{birthdayMessage.closing}</p>
          <p className="hand forever">with so much love</p>
        </div>

        {secretEgg && <EasterEgg egg={secretEgg} />}
      </div>
    </section>
  )
}
