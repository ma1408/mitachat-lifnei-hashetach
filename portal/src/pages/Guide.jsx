import { Link } from 'react-router-dom'
import { GUIDE_SECTIONS, WEEK_PLAN } from '../data/guide'

export default function Guide() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">המדריך</p>
        <h1 className="page-head__title">איך עובדים עם הערכה</h1>
        <p className="page-head__lead">
          חמש דקות קריאה שיחסכו לך שעות — איך הערכה בנויה, איך לא להשתמש בה,
          ומסלול מסודר לשבוע הראשון.
        </p>
      </header>

      {GUIDE_SECTIONS.map((section) => (
        <section
          key={section.id}
          className={`lesson-block ${
            section.id === 'not-this' ? 'lesson-block--insight' : ''
          }`}
        >
          <h2 className="lesson-block__label">{section.label}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {section.id === 'week' && (
            <ol className="day-plan">
              {WEEK_PLAN.map((day) => (
                <li key={day.day} className="day-plan__item">
                  <span className="day-plan__num">יום {day.day}</span>
                  <div className="day-plan__body">
                    <p className="day-plan__title">{day.title}</p>
                    <p className="day-plan__links">
                      {day.links.map((link, i) => (
                        <span key={link.to + i}>
                          {i > 0 && ' · '}
                          <Link to={link.to} className="link-gold">
                            {link.label}
                          </Link>
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}

      <div className="lesson-actions">
        <Link to="/lesson/l3" className="btn btn--gold">
          התחל מיחידת הליבה ←
        </Link>
        <Link to="/workbook/new" className="btn btn--outline">
          או ישר לתיק ראשון
        </Link>
      </div>
    </div>
  )
}
