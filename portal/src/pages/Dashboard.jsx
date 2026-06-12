import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useProgress } from '../context/ProgressContext.jsx'
import { CORE_PRINCIPLE, getLessonById } from '../data/course'
import ProgressBar from '../components/ProgressBar.jsx'
import {
  STARTER_FULL_NAME,
  STARTER_TAGLINE,
  STARTER_KIT_ITEMS,
  STARTER_CORE_LESSON,
} from '../data/product'

export default function Dashboard() {
  const { user } = useAuth()
  const { lastLessonId, completedCount, percent, resumeLessonId } = useProgress()
  const hasStarted = lastLessonId || completedCount > 0
  const resumeLesson = getLessonById(resumeLessonId)

  return (
    <div className="container stack-lg">
      <section className="hero-card">
        <p className="hero-card__eyebrow">ערכת העבודה שלך</p>
        <h1 className="hero-card__title">
          ברוך הבא ל־<span className="gold">{STARTER_FULL_NAME}</span>
        </h1>
        <p className="hero-card__lead">{STARTER_TAGLINE}</p>
        <p className="hero-card__principle">&ldquo;{CORE_PRINCIPLE}&rdquo;</p>

        {hasStarted ? (
          <>
            <div className="hero-card__progress">
              <span className="muted">ההתקדמות שלך · {completedCount} מתוך 15 יחידות הושלמו</span>
              <ProgressBar percent={percent} />
            </div>
            <div className="lesson-actions">
              <Link to={`/lesson/${resumeLessonId}`} className="btn btn--gold">
                המשך מאיפה שעצרת — יחידה {resumeLesson?.number}: {resumeLesson?.title}
              </Link>
              <Link to="/course" className="btn btn--outline">
                לכל היחידות ←
              </Link>
            </div>
          </>
        ) : (
          <Link to={`/lesson/${STARTER_CORE_LESSON}`} className="btn btn--gold">
            התחל להבין מה קורה בשיחה
          </Link>
        )}
      </section>

      <section className="stack-sm">
        <div className="section-head">
          <h2 className="section-head__title">מה יש בערכה</h2>
        </div>

        <div className="grid grid--kit">
          {STARTER_KIT_ITEMS.map((item) => {
            const isSoon = item.status === 'soon'

            if (isSoon || !item.to) {
              return (
                <article key={item.id} className="kit-card kit-card--soon">
                  <span className="kit-card__icon" aria-hidden="true">{item.icon}</span>
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
                <span className="kit-card__icon" aria-hidden="true">{item.icon}</span>
                <div className="kit-card__body">
                  <h3 className="kit-card__title">{item.title}</h3>
                  <p className="kit-card__desc">{item.description}</p>
                </div>
                <span className="kit-card__cta" aria-hidden="true">←</span>
              </Link>
            )
          })}
        </div>
      </section>

      {user?.email && (
        <p className="muted dashboard__welcome">
          מחובר/ת כ־{user.email}
        </p>
      )}
    </div>
  )
}
