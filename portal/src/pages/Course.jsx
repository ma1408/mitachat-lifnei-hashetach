import { Link } from 'react-router-dom'
import { useProgress, STATUS_LABELS } from '../context/ProgressContext.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import { modules, lessons, TOTAL_LESSONS } from '../data/course'

export default function Course() {
  const { status, percent, completedCount } = useProgress()

  return (
    <div className="container stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">ספריית היחידות</p>
        <h1 className="page-head__title">5 מודולים · {TOTAL_LESSONS} יחידות</h1>
        <div className="page-head__progress">
          <ProgressBar percent={percent} />
          <span className="muted">
            {completedCount}/{TOTAL_LESSONS} הושלמו
          </span>
        </div>
      </header>

      <div className="stack-lg">
        {modules.map((m) => (
          <section key={m.id} className="module-block">
            <div className="module-block__head">
              <span className="module-block__num">מודול {m.number}</span>
              <h2 className="module-block__title">{m.title}</h2>
              <p className="module-block__summary">{m.summary}</p>
            </div>

            <ol className="lesson-list">
              {m.lessons.map((lessonId) => {
                const lesson = lessons[lessonId]
                const st = status(lessonId)
                return (
                  <li key={lessonId}>
                    <Link to={`/lesson/${lessonId}`} className="lesson-row">
                      <span className="lesson-row__num">{lesson.number}</span>
                      <span className="lesson-row__title">{lesson.title}</span>
                      <span className={`status-pill status-pill--${st}`}>
                        {STATUS_LABELS[st]}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
