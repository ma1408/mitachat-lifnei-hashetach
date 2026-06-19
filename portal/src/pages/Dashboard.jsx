import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import { CORE_PRINCIPLE, getLessonById } from '../data/course'
import ProgressBar from '../components/ProgressBar.jsx'
import Icon from '../components/Icon.jsx'
import {
  STARTER_KIT_ITEMS,
  STARTER_CORE_LESSON,
} from '../data/product'

// כרטיסים ראשוניים לפי state — שאר הכלים דרך "כל כלי הערכה"
const NEW_CARDS    = ['intro']
const RETURN_CARDS = ['practice', 'workbook', 'checklist']

export default function Dashboard() {
  const { lastLessonId, completedCount, percent, resumeLessonId } = useProgress()
  const hasStarted  = lastLessonId !== null || completedCount > 0
  const resumeLesson = getLessonById(resumeLessonId)
  const [expanded, setExpanded] = useState(false)

  const primaryIds   = hasStarted ? RETURN_CARDS : NEW_CARDS
  const visibleCards = expanded
    ? STARTER_KIT_ITEMS
    : STARTER_KIT_ITEMS.filter(item => primaryIds.includes(item.id))

  return (
    <div className="container stack-lg">

      {/* ══ Hero ══ */}
      <section className="hero-card">
        <p className="hero-card__eyebrow">
          {hasStarted ? 'ברוך הבא בחזרה' : 'ערכת העבודה שלך'}
        </p>

        {hasStarted ? (
          /* ── Returning user ── */
          <>
            <h1
              className="hero-card__title"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
            >
              {resumeLesson?.title}
              <span
                className="muted"
                style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font)',
                  fontWeight: 400,
                  marginTop: '6px',
                }}
              >
                יחידה {resumeLesson?.number}
              </span>
            </h1>

            <div className="hero-card__progress">
              <span className="muted">
                ההתקדמות שלך · {completedCount} מתוך 15 יחידות הושלמו
              </span>
              <ProgressBar percent={percent} />
            </div>

            <div className="lesson-actions">
              <Link to={`/lesson/${resumeLessonId}`} className="btn btn--gold">
                המשך — {resumeLesson?.title}
              </Link>
              <Link to="/course" className="btn btn--outline">
                ראה את כל ההתקדמות ←
              </Link>
            </div>
          </>
        ) : (
          /* ── New user ── */
          <>
            <h1 className="hero-card__title">מתחת לפני השטח</h1>
            <p className="hero-card__lead">
              כשמשהו לא מסתדר בשיחה — ארבעה שלבים שהופכים תחושת בטן לשאלה חכמה.
            </p>
            <p className="hero-card__principle">&ldquo;{CORE_PRINCIPLE}&rdquo;</p>

            <Link
              to={`/lesson/${STARTER_CORE_LESSON}`}
              className="btn btn--gold btn--block"
            >
              להבין שיחה ב-4 שלבים ←
            </Link>
            <p
              className="muted"
              style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.82rem' }}
            >
              שיעור הפתיחה · כ-15 דקות קריאה
            </p>
          </>
        )}
      </section>

      {/* ══ Kit section ══ */}
      <section className="stack-sm">
        <div className="section-head">
          <h2 className="section-head__title">
            {hasStarted ? 'הכלים שלך' : 'מאיפה כדאי להתחיל'}
          </h2>
        </div>

        <div className="grid grid--kit">
          {visibleCards.map((item) => {
            const isSoon = item.status === 'soon'

            if (isSoon || !item.to) {
              return (
                <article key={item.id} className="kit-card kit-card--soon">
                  <span className="kit-card__icon" aria-hidden="true">
                    <Icon name={item.icon} />
                  </span>
                  <div className="kit-card__body">
                    <h3 className="kit-card__title">{item.title}</h3>
                    <p className="kit-card__desc">{item.description}</p>
                  </div>
                  <span className="kit-card__badge">ציר פיתוח</span>
                </article>
              )
            }

            return (
              <Link key={item.id} to={item.to} className="kit-card">
                <span className="kit-card__icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <div className="kit-card__body">
                  <h3 className="kit-card__title">{item.title}</h3>
                  <p className="kit-card__desc">{item.description}</p>
                </div>
                <span className="kit-card__cta" aria-hidden="true">←</span>
              </Link>
            )
          })}
        </div>

        {!expanded && (
          <button
            className="link-gold"
            style={{
              background: 'none',
              border: 'none',
              padding: '4px 0',
              cursor: 'pointer',
              fontFamily: 'var(--font)',
            }}
            onClick={() => setExpanded(true)}
          >
            כל כלי הערכה ←
          </button>
        )}
      </section>
    </div>
  )
}
