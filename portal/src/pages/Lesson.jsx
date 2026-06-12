import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import {
  getLessonById,
  getModuleById,
  getNextLessonId,
} from '../data/course'
import { getTermsByLesson } from '../data/glossary'

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLessonById(lessonId)
  const { isCompleted, toggleCompleted, setLastLesson } = useProgress()

  // עדכון "השיעור האחרון" בכל כניסה לשיעור תקין
  useEffect(() => {
    if (lesson) {
      setLastLesson(lesson.id)
      window.scrollTo(0, 0)
    }
  }, [lesson, setLastLesson])

  if (!lesson) {
    return <Navigate to="/dashboard" replace />
  }

  const module = getModuleById(lesson.moduleId)
  const nextId = getNextLessonId(lesson.id)
  const completed = isCompleted(lesson.id)
  const lessonTerms = getTermsByLesson(lesson.id).slice(0, 4)

  return (
    <div className="container container--narrow stack-lg">
      <nav className="breadcrumbs">
        <Link to="/dashboard" className="link-gold">
          הערכה
        </Link>
        <span aria-hidden="true">·</span>
        <span className="muted">מודול {module.number} · {module.title}</span>
      </nav>

      <header className="lesson-head">
        <span className="lesson-head__module">{module.title}</span>
        <h1 className="lesson-head__title">
          <span className="lesson-head__num">שיעור {lesson.number}</span>
          {lesson.title}
        </h1>
      </header>

      {/* פתיח יחידת העבודה — תוכן כתוב, ללא וידאו */}
      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">יחידת עבודה כתובה</h2>
        <p>
          כאן מתחילה שיטת העבודה. קרא, עצור ויישם — כדי להבין טוב יותר מה קורה
          מתחת לפני השטח בשיחות אמיתיות.
        </p>
      </section>

      <section className="lesson-block lesson-block--goal">
        <h2 className="lesson-block__label">מטרת השיעור</h2>
        <p>{lesson.goal}</p>
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">סיכום השיעור</h2>
        <p>{lesson.summary}</p>
      </section>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">התובנה המרכזית</h2>
        <p>{lesson.insight}</p>
      </section>

      <section className="lesson-block lesson-block--exercise">
        <h2 className="lesson-block__label">תרגיל</h2>
        <p>{lesson.exercise}</p>
      </section>

      {lessonTerms.length > 0 && (
        <section className="lesson-block">
          <h2 className="lesson-block__label">מושגים מתוך השיעור</h2>
          <ul className="lesson-terms">
            {lessonTerms.map((t) => (
              <li key={t.id} className="lesson-term">
                <div className="lesson-term__head">
                  <span className="lesson-term__name">{t.term}</span>
                  <span className="lesson-term__cat">{t.category}</span>
                </div>
                <p className="lesson-term__def">{t.shortDefinition}</p>
                <Link
                  to={`/glossary?q=${encodeURIComponent(t.term)}`}
                  className="lesson-term__link link-gold"
                >
                  פירוש מלא במילון ←
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/glossary" className="lesson-terms__more link-gold">
            לכל המושגים במילון ←
          </Link>
        </section>
      )}

      <div className="lesson-actions">
        <button
          className={`btn ${completed ? 'btn--ghost' : 'btn--gold'}`}
          onClick={() => toggleCompleted(lesson.id)}
        >
          {completed ? '✓ הושלם · בטל סימון' : 'סמן שיעור כהושלם'}
        </button>

        {nextId ? (
          <Link to={`/lesson/${nextId}`} className="btn btn--outline">
            לשיעור הבא ←
          </Link>
        ) : (
          <Link to="/dashboard" className="btn btn--outline">
            סיימת את שיעור הליבה · חזרה לערכה ←
          </Link>
        )}
      </div>
    </div>
  )
}
