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
            <div className="lesson-preamble card">
              {lesson.preamble.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}

          {/* תחנות */}
          {lesson.stations.map((station, idx) => (
            <div key={station.id} className="stack-lg">
              <section className="card lesson-station">
                {/* כותרת תחנה */}
                <div className="lesson-station__header">
                  <span className="lesson-station__number">{station.number}</span>
                  <h2 className="lesson-station__title">{station.title}</h2>
                </div>

                {/* פסקאות פתיחה */}
                {station.paragraphs?.length > 0 && (
                  <div className="lesson-station__paragraphs">
                    {station.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                )}

                {/* דוגמאות */}
                {station.examples?.map((ex, i) => (
                  <div key={i} className="lesson-example">
                    <span className="lesson-example__label">{ex.label}</span>
                    <p className="lesson-example__body">{ex.body}</p>
                  </div>
                ))}

                {/* פסקאות נוספות אחרי דוגמאות */}
                {station.extraParagraphs?.map((p, i) => (
                  <p key={i} style={{ color: 'var(--text-soft)', lineHeight: 1.75 }}>{p}</p>
                ))}

                {/* טבלת ניגוד (תחנה 4) */}
                {station.contrast?.length > 0 && (
                  <div className="lesson-contrast">
                    <div className="lesson-contrast__head">
                      <div className="lesson-contrast__head-good">פותחת</div>
                      <div className="lesson-contrast__head-bad">סוגרת</div>
                    </div>
                    {station.contrast.map((row, i) => (
                      <div key={i} className="lesson-contrast__row">
                        <div className="lesson-contrast__good">{row.good}</div>
                        <div className="lesson-contrast__bad">{row.bad}</div>
                      </div>
                    ))}
                    {station.contrastNote && (
                      <div className="lesson-contrast__note">{station.contrastNote}</div>
                    )}
                  </div>
                )}

                {/* תבניות שאלה (תחנה 4) */}
                {station.templates?.length > 0 && (
                  <div className="lesson-templates">
                    {station.templates.map((t) => (
                      <div key={t.num} className="lesson-template-item">
                        <span className="lesson-template-item__num">{t.num}</span>
                        <span className="lesson-template-item__text">{t.text}</span>
                      </div>
                    ))}
                    {station.templatesNote && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontStyle: 'italic' }}>
                        {station.templatesNote}
                      </p>
                    )}
                  </div>
                )}

                {/* תגובות (תחנה 5) */}
                {station.responses?.length > 0 && (
                  <div className="lesson-responses">
                    {station.responses.map((r, i) => (
                      <div key={i} className="lesson-response">
                        <span className="lesson-response__title">{r.title}</span>
                        <p className="lesson-response__body">{r.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* תרגיל */}
                {station.exercise && (
                  <div className="lesson-exercise">
                    <span className="lesson-exercise__label">{station.exercise.label}</span>
                    <p className="lesson-exercise__prompt">{station.exercise.prompt}</p>
                    {station.exercise.items?.length > 0 && (
                      <ul className="lesson-exercise__items">
                        {station.exercise.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )}
                    {station.exercise.note && (
                      <p className="lesson-exercise__note">{station.exercise.note}</p>
                    )}
                  </div>
                )}

                {/* רגע אהה */}
                {station.aha && (
                  <blockquote className="lesson-station__aha">{station.aha}</blockquote>
                )}

                {/* מעבר */}
                {station.transition && (
                  <p className="lesson-station__transition">{station.transition}</p>
                )}
              </section>

              {/* מפריד בין תחנות (לא אחרי האחרונה) */}
              {idx < lesson.stations.length - 1 && (
                <div className="lesson-station-divider" aria-hidden="true" />
              )}
            </div>
          ))}

          {/* סגירה */}
          {lesson.stationsClosing && (
            <div className="lesson-stations-closing">
              <div className="lesson-stations-closing__done" aria-hidden="true">✓</div>
              <p className="lesson-stations-closing__flow">{lesson.stationsClosing.flow}</p>
              <p className="lesson-stations-closing__body">{lesson.stationsClosing.body}</p>
              <p className="lesson-stations-closing__cta">{lesson.stationsClosing.cta}</p>
            </div>
          )}
        </>
      ) : (
        <>
          {/* פתיח יחידת העבודה — תוכן כתוב, ללא וידאו */}
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
