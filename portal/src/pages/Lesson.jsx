import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import {
  getLessonById,
  getModuleById,
  getNextLessonId,
} from '../data/course'
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
    return <Navigate to="/course" replace />
  }

  const module = getModuleById(lesson.moduleId)
  const nextId = getNextLessonId(lesson.id)
  const completed = isCompleted(lesson.id)
  const lessonDownloads = (lesson.downloads || [])
    .map(getDownloadById)
    .filter(Boolean)

  return (
    <div className="container container--narrow stack-lg">
      <nav className="breadcrumbs">
        <Link to="/course" className="link-gold">
          הקורס
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

      {/* אזור וידאו */}
      <div className="video-frame">
        {lesson.videoUrl ? (
          <video controls src={lesson.videoUrl} className="video-frame__player" />
        ) : (
          <div className="video-frame__placeholder">
            <span className="video-frame__icon" aria-hidden="true">▶</span>
            <p>הווידאו של השיעור יתווסף כאן</p>
            <span className="muted">Placeholder · ממתין לקובץ וידאו</span>
          </div>
        )}
      </div>

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

      {lessonDownloads.length > 0 && (
        <section className="lesson-block">
          <h2 className="lesson-block__label">קבצים להורדה</h2>
          <ul className="mini-downloads">
            {lessonDownloads.map((d) => (
              <li key={d.id} className="mini-download">
                <span className="mini-download__icon">{d.icon}</span>
                <span className="mini-download__title">{d.title}</span>
                {d.available && d.file ? (
                  <a className="mini-download__btn" href={d.file} download>
                    הורדה
                  </a>
                ) : (
                  <span className="mini-download__soon">בקרוב</span>
                )}
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
          {completed ? '✓ הושלם · בטל סימון' : 'סמן שיעור כהושלם'}
        </button>

        {nextId ? (
          <Link to={`/lesson/${nextId}`} className="btn btn--outline">
            לשיעור הבא ←
          </Link>
        ) : (
          <Link to="/course" className="btn btn--outline">
            סיימת את הקורס · חזרה לתוכנית ←
          </Link>
        )}
      </div>
    </div>
  )
}
