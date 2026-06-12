import { useRef, useEffect } from 'react'

// "דף" אחד בתיק השיחה. textarea שמרגיש כמו נייר —
// בלי מסגרת, רק קו תחתון. auto-grow לפי התוכן.
export default function WorkbookField({ page, value, checks, onChange, onChecksChange }) {
  const taRef = useRef(null)

  useEffect(() => {
    const el = taRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }, [value])

  const isLine = page.variant === 'line'

  return (
    <section className={`wb-page ${page.id === 'dontConclude' ? 'wb-page--insight' : ''}`}>
      <header className="wb-page__head">
        <span className="wb-page__num">{page.step}</span>
        <h2 className="wb-page__title">{page.title}</h2>
        {page.tag && <span className="wb-page__tag">{page.tag}</span>}
      </header>

      <p className="wb-page__prompt">{page.prompt}</p>

      <textarea
        ref={taRef}
        className={`wb-field ${isLine ? 'wb-field--line' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={page.placeholder}
        rows={isLine ? 1 : 2}
        dir="rtl"
      />

      {page.guidingQuestions && (
        <p className="wb-page__guides">
          {page.guidingQuestions.join(' · ')}
        </p>
      )}

      {page.variant === 'question-check' && (
        <div className="wb-checks">
          <div className="wb-checks__row">
            {page.checks.map((label, i) => (
              <button
                key={label}
                type="button"
                className={`wb-chip ${checks?.[i] ? 'wb-chip--on' : ''}`}
                aria-pressed={!!checks?.[i]}
                onClick={() => {
                  const next = [...(checks || [false, false, false])]
                  next[i] = !next[i]
                  onChecksChange(next)
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="wb-checks__hint">{page.checksHint}</p>
        </div>
      )}
    </section>
  )
}
