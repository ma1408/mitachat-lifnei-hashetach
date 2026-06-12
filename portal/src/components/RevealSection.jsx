import { useState } from 'react'

// חשיפה הדרגתית בתיקי ההדגמה: התלמיד מסמן לעצמו את רגע השינוי
// לפני שהפענוח נחשף. useState מקומי בלבד — רענון מאפס בכוונה.
export default function RevealSection({ onReveal, children }) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) return children

  return (
    <section className="lesson-block reveal-gate">
      <h2 className="lesson-block__label">רגע, לפני שממשיכים</h2>
      <p>איפה לדעתך רגע השינוי בתמליל? סמן לעצמך — ואז נשווה.</p>
      <button
        type="button"
        className="btn btn--gold"
        onClick={() => {
          setRevealed(true)
          if (onReveal) onReveal()
        }}
      >
        סימנתי לעצמי — הראה לי
      </button>
    </section>
  )
}
