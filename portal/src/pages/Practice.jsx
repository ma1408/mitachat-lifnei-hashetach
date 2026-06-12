import { useState } from 'react'
import { Link } from 'react-router-dom'
import { STARTER_CORE_LESSON } from '../data/product'
import { Textarea } from '../components/ui/textarea'

const STEPS = [
  {
    key: 'baseline',
    title: 'בייסליין',
    prompt: 'תאר במשפט אחד איך האדם נראה והתנהג כשהשיחה הייתה רגילה — קצב דיבור, מבט, תנוחה.',
    placeholder: 'למשל: דיבר בקצב רגוע, שמר על קשר עין, ישב זקוף...',
  },
  {
    key: 'change',
    title: 'שינוי',
    prompt: 'מה השתנה? סמן את הרגע שבו האדם יצא מהבייסליין שלו.',
    placeholder: 'למשל: פתאום הסיט את המבט, דיבור הואט, ידיים נגעו בצוואר...',
  },
  {
    key: 'context',
    title: 'הקשר',
    prompt: 'מה נאמר או קרה בשיחה ממש לפני השינוי?',
    placeholder: 'למשל: שאלתי על הלוח זמנים, ציינתי את המחיר, הצעתי תאריך...',
  },
  {
    key: 'question',
    title: 'שאלה טובה יותר',
    prompt: 'נסח שאלה אחת רכה שמזמינה להבהיר — לא מאשימה ולא קובעת מסקנה.',
    placeholder: 'למשל: "יש משהו בתאריך הזה שפחות עובד לך?"',
  },
]

const EMPTY_ANSWERS = { baseline: '', change: '', context: '', question: '' }

export default function Practice() {
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('practice-answers')) || EMPTY_ANSWERS
    } catch {
      return EMPTY_ANSWERS
    }
  })
  const [saved, setSaved] = useState(false)

  function handleChange(key, value) {
    setAnswers(prev => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  function handleSave() {
    localStorage.setItem('practice-answers', JSON.stringify(answers))
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const filled = Object.values(answers).filter(Boolean).length

  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">הערכה · תרגול עצמי</p>
        <h1 className="page-head__title">תרגול: ארבעת השלבים בשיחה אמיתית</h1>
        <p className="page-head__lead">
          התרגיל הזה הופך את השיטה מידע לכלי. בחר שיחה אחת אמיתית מהשבוע האחרון —
          בעבודה, בבית, עם לקוח — והרץ עליה את ארבעת השלבים בכתב.
        </p>
      </header>

      <section className="lesson-block lesson-block--goal">
        <h2 className="lesson-block__label">לפני שמתחילים</h2>
        <p>
          אל תפרש ואל תסיק. המטרה היא לתעד מה ראית ולנסח שאלה — לא להחליט מה האדם
          חשב או הרגיש. אם אין לך שיחה ספציפית בראש, אפשר לתרגל על ריאיון, פאנל
          או סצנה מסרט.
        </p>
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">ארבעת השלבים — מלא לעצמך</h2>
        <ol className="practice-steps">
          {STEPS.map(({ key, title, prompt, placeholder }, i) => (
            <li key={key} className="practice-step">
              <span className="practice-step__num">{i + 1}</span>
              <div style={{ flex: 1 }}>
                <strong className="practice-step__title">{title}</strong>
                <p className="practice-step__prompt">{prompt}</p>
                <Textarea
                  value={answers[key]}
                  onChange={e => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  rows={3}
                  className="mt-2"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">טיפ לתרגול</h2>
        <p>
          ככל שתחזור על התרגיל הזה על יותר שיחות, כך תזהה שינויים מהר יותר ובאופן
          טבעי יותר — עד שזה יקרה כמעט מעצמו בזמן אמת.
        </p>
      </section>

      <div className="lesson-actions">
        <button
          onClick={handleSave}
          className="btn btn--gold"
          disabled={filled === 0}
        >
          {saved ? '✓ נשמר' : 'שמור תרגיל'}
        </button>
        <Link to="/checklist" className="btn btn--outline">
          לצ׳ק ליסט לשיחה
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '-0.5rem' }}>
        <Link
          to={`/lesson/${STARTER_CORE_LESSON}`}
          style={{ fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'underline' }}
        >
          חזרה לשיעור הליבה
        </Link>
      </div>
    </div>
  )
}
