import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import {
  getLessonById,
  getModuleById,
  getNextLessonId,
} from '../data/course'
import { getTermsByLesson } from '../data/glossary'
import { getDownloadById } from '../data/downloads'

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLessonById(lessonId)
  const { isCompleted, toggleCompleted, setLastLesson } = useProgress()

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
  const lessonDownloads = (lesson.downloads || [])
    .map(id => getDownloadById(id))
    .filter(d => d && d.available)

  const hasStations = Array.isArray(lesson.stations) && lesson.stations.length > 0

  return (
    <div className="container container--narrow stack-lg">
      <nav className="breadcrumbs">
        <Link to="/dashboard" className="link-gold">
          הערכה
        </Link>
        <span aria-hidden="true">·</span>
        <Link to="/course" className="muted">מודול {module.number} · {module.title}</Link>
      </nav>

      <header className="lesson-head">
        <span className="lesson-head__module">{module.title}</span>
        <h1 className="lesson-head__title">
          <span className="lesson-head__num">יחידה {lesson.number}</span>
          {lesson.title}
        </h1>
      </header>

      {hasStations ? (
        <>
          {/* פתיח */}
          {lesson.preamble?.length > 0 && (
            <div className="lesson-preamble">
              {lesson.preamble.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}

          {/* תחנות */}
          {lesson.stations.map((station, idx) => (
            <div key={station.id} className="stack-lg">
              <section className="lesson-station">
                <div className="lesson-station__header">
                  <span className="lesson-station__number">{station.number}</span>
                  <h2 className="lesson-station__title">{station.title}</h2>
                </div>

                {station.paragraphs?.length > 0 && (
                  <div className="lesson-station__paragraphs">
                    {station.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                )}

                {station.examples?.map((ex, i) => (
                  <div key={i} className="lesson-example">
                    <span className="lesson-example__label">{ex.label}</span>
                    <p className="lesson-example__body">{ex.body}</p>
                  </div>
                ))}

                {station.extraParagraphs?.map((p, i) => (
                  <p key={i} className="lesson-station__extra">{p}</p>
                ))}

                {station.templates?.length > 0 && (
                  <div className="lesson-templates">
                    {station.templates.map((t) => (
                      <div key={t.num} className="lesson-template-item">
                        <span className="lesson-template-item__num">{t.num}</span>
                        <span className="lesson-template-item__text">{t.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {station.aha && (
                  <blockquote className="lesson-station__aha">{station.aha}</blockquote>
                )}

                {station.transition && (
                  <p className="lesson-station__transition">{station.transition}</p>
                )}
              </section>

              {idx < lesson.stations.length - 1 && (
                <div className="lesson-station-divider" aria-hidden="true" />
              )}
            </div>
          ))}

          {/* תרגיל סיום */}
          {lesson.stationsExercise && (
            <section className="lesson-block lesson-block--exercise">
              <h2 className="lesson-block__label">תרגיל</h2>
              <p>{lesson.stationsExercise.prompt}</p>
              {lesson.stationsExercise.items?.length > 0 && (
                <ol className="lesson-exercise-items">
                  {lesson.stationsExercise.items.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              )}
              {lesson.stationsExercise.note && (
                <p className="lesson-exercise-note">{lesson.stationsExercise.note}</p>
              )}
            </section>
          )}

          {/* סגירה */}
          {lesson.stationsClosing && (
            <div className="lesson-stations-closing">
              <p className="lesson-stations-closing__flow">{lesson.stationsClosing.flow}</p>
              <p className="lesson-stations-closing__body">{lesson.stationsClosing.body}</p>
              <p className="lesson-stations-closing__cta">{lesson.stationsClosing.cta}</p>
            </div>
          )}
        </>
      ) : (
        <>
          <section className="lesson-block lesson-block--insight">
            <h2 className="lesson-block__label">יחידת עבודה כתובה</h2>
            <p>
              כאן מתחילה שיטת העבודה. קרא, עצור ויישם — כדי להבין טוב יותר מה קורה
              מתחת לפני השטח בשיחות אמיתיות.
            </p>
          </section>

          <section className="lesson-block lesson-block--goal">
            <h2 className="lesson-block__label">מטרת היחידה</h2>
            <p>{lesson.goal}</p>
          </section>

          <section className="lesson-block">
            <h2 className="lesson-block__label">סיכום היחידה</h2>
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
        </>
      )}

      {lessonTerms.length > 0 && (
        <section className="lesson-block">
          <h2 className="lesson-block__label">מושגים מתוך היחידה</h2>
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

      {lessonDownloads.length > 0 && (
        <section className="lesson-block">
          <h2 className="lesson-block__label">חומרים להורדה</h2>
          <ul className="download-list">
            {lessonDownloads.map(d => (
              <li key={d.id} className="download-item">
                <a
                  href={d.file}
                  download
                  className="download-link"
                  aria-label={`הורד ${d.title}`}
                >
                  <span className="download-icon" aria-hidden="true">{d.icon}</span>
                  <div className="download-info">
                    <span className="download-title">{d.title}</span>
                    <span className="download-desc">{d.description}</span>
                  </div>
                  <span className="download-badge">{d.type}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="lesson-actions">
        <button
          className={`btn ${completed ? 'btn--ghost' : 'btn--gold'}`}
          onClick={() => toggleCompleted(lesson.id)}
        >
          {completed ? '✓ הושלם · בטל סימון' : 'סמן יחידה כהושלמה'}
        </button>

        {nextId ? (
          <Link to={`/lesson/${nextId}`} className="btn btn--outline">
            ליחידה הבאה ←
          </Link>
        ) : (
          <Link to="/dashboard" className="btn btn--outline">
            סיימת את יחידת הליבה · חזרה לערכה ←
          </Link>
        )}
      </div>
    </div>
  )
}
