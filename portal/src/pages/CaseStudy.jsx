import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getCaseById } from '../data/cases'
import RevealSection from '../components/RevealSection.jsx'

export default function CaseStudy() {
  const { caseId } = useParams()
  const caseData = getCaseById(caseId)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setRevealed(false)
  }, [caseId])

  if (!caseData) {
    return <Navigate to="/cases" replace />
  }

  return (
    <div className="container container--narrow stack-lg">
      <nav className="breadcrumbs">
        <Link to="/cases" className="link-gold">
          תיקי הדגמה
        </Link>
        <span aria-hidden="true">·</span>
        <span className="muted">{caseData.arena}</span>
      </nav>

      <header className="page-head">
        <p className="page-head__eyebrow">תיק הדגמה · {caseData.arena}</p>
        <h1 className="page-head__title">{caseData.title}</h1>
      </header>

      <section className="lesson-block">
        <h2 className="lesson-block__label">הרקע</h2>
        {caseData.background.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">התמליל</h2>
        <div className="case-transcript">
          {caseData.transcript.map((line, i) => (
            <p
              key={i}
              className={`case-line ${revealed && line.shift ? 'case-line--shift' : ''}`}
            >
              <strong className="case-line__speaker">{line.speaker}:</strong>{' '}
              {line.text}
            </p>
          ))}
        </div>
      </section>

      <RevealSection onReveal={() => setRevealed(true)}>
        <>
          <section className="lesson-block">
            <h2 className="lesson-block__label">מה רואים</h2>
            <ul className="case-points">
              {caseData.whatYouSee.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>

          <section className="lesson-block lesson-block--insight">
            <h2 className="lesson-block__label">מה לא להסיק</h2>
            <p className="case-tempting">{caseData.dontConclude.tempting}</p>
            <p>{caseData.dontConclude.why}</p>
          </section>

          <section className="lesson-block">
            <h2 className="lesson-block__label">בדיקת הקשר — ההסברים התמימים</h2>
            <ul className="case-points">
              {caseData.contextCheck.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>

          <section className="lesson-block">
            <h2 className="lesson-block__label">השאלה</h2>
            <div className="case-questions">
              <div className="case-question case-question--bad">
                <span className="case-question__label">פחות טוב</span>
                <p>{caseData.betterQuestion.bad}</p>
              </div>
              <div className="case-question case-question--good">
                <span className="case-question__label">טוב יותר</span>
                <p>{caseData.betterQuestion.good}</p>
              </div>
            </div>
            <p className="case-why">{caseData.betterQuestion.whyGoodWorks}</p>
          </section>

          <section className="lesson-block lesson-block--goal">
            <h2 className="lesson-block__label">הלקח</h2>
            <p>{caseData.takeaway}</p>
          </section>

          <div className="lesson-actions">
            <Link to="/workbook/new" className="btn btn--gold">
              עכשיו על שיחה שלך — פתח תיק ←
            </Link>
            <Link to="/cases" className="btn btn--outline">
              לתיק הדגמה נוסף
            </Link>
          </div>
        </>
      </RevealSection>
    </div>
  )
}
