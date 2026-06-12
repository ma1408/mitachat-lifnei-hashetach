import { Link } from 'react-router-dom'
import { cases } from '../data/cases'

export default function Cases() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">תיקי הדגמה</p>
        <h1 className="page-head__title">לראות את השיטה על שיחה שלמה</h1>
        <p className="page-head__lead">
          שתי שיחות אמיתיות מהחיים, מפורקות צעד-צעד: קודם תקרא את התמליל ותסמן
          לעצמך איפה משהו השתנה — ורק אז תראה את הפענוח.
        </p>
      </header>

      <div className="cases-list">
        {cases.map((c) => (
          <Link key={c.id} to={`/cases/${c.id}`} className="case-card">
            <span className="case-card__arena">{c.arena}</span>
            <h2 className="case-card__title">{c.title}</h2>
            <p className="case-card__teaser">{c.teaser}</p>
            <span className="case-card__cta link-gold">לפתוח את התיק ←</span>
          </Link>
        ))}
      </div>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">ואחרי שראית</h2>
        <p>
          תיקי ההדגמה הם החימום. העבודה האמיתית קורית כשפותחים תיק על שיחה שלך —{' '}
          <Link to="/workbook/new" className="link-gold">
            פתח תיק במחברת העבודה ←
          </Link>
        </p>
      </section>
    </div>
  )
}
