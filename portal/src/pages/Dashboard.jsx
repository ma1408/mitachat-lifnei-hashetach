import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useProgress } from '../context/ProgressContext.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import {
  COURSE_TITLE,
  CORE_PRINCIPLE,
  modules,
  lessons,
  getLessonById,
  TOTAL_LESSONS,
} from '../data/course'

export default function Dashboard() {
  const { user } = useAuth()
  const { percent, completedCount, resumeLessonId } = useProgress()
  const resumeLesson = getLessonById(resumeLessonId)
  const firstName = (user?.email || '').split('@')[0]

  return (
    <div className="container stack-lg">
      <section className="hero-card">
        <p className="hero-card__eyebrow">אזור התלמידים</p>
        <h1 className="hero-card__title">
          ברוך הבא ל־<span className="gold">{COURSE_TITLE}</span>
        </h1>
        <p className="hero-card__principle">“{CORE_PRINCIPLE}”</p>

        <div className="hero-card__progress">
          <div className="hero-card__progress-head">
            <span>ההתקדמות שלך בקורס</span>
            <span className="muted">
              {completedCount} מתוך {TOTAL_LESSONS} שיעורים
            </span>
          </div>
          <ProgressBar percent={percent} />
        </div>

        {resumeLesson && (
          <Link to={`/lesson/${resumeLesson.id}`} className="btn btn--gold">
            המשך מהשיעור האחרון · שיעור {resumeLesson.number}
          </Link>
        )}
      </section>

      <section className="stack-sm">
        <div className="section-head">
          <h2 className="section-head__title">המודולים שלך</h2>
          <Link to="/course" className="link-gold">
            לכל הקורס ←
          </Link>
        </div>

        <div className="grid grid--modules">
          {modules.map((m) => {
            const total = m.lessons.length
            return (
              <Link key={m.id} to="/course" className="module-card">
                <span className="module-card__num">מודול {m.number}</span>
                <h3 className="module-card__title">{m.title}</h3>
                <p className="module-card__summary">{m.summary}</p>
                <span className="module-card__meta">{total} שיעורים</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="grid grid--two">
        <Link to="/glossary" className="action-card">
          <span className="action-card__icon">◎</span>
          <div>
            <h3 className="action-card__title">מילון ואוצר מילים</h3>
            <p className="action-card__text">
              חזור לכל מושגי הקורס, פירושים, דוגמאות ושאלות חכמות לשיחה.
            </p>
          </div>
          <span className="action-card__cta">פתח את המילון ←</span>
        </Link>

        <Link to="/course" className="action-card">
          <span className="action-card__icon">☰</span>
          <div>
            <h3 className="action-card__title">תוכנית הקורס</h3>
            <p className="action-card__text">
              15 שיעורים ב-5 מודולים — הכל ממקום אחד.
            </p>
          </div>
          <span className="action-card__cta">לתוכנית ←</span>
        </Link>
      </section>
    </div>
  )
}
