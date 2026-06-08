import { Link } from 'react-router-dom'
import { STARTER_CORE_LESSON } from '../data/product'

const STEPS = [
  ['בייסליין', 'תאר במשפט אחד איך האדם נראה והתנהג כשהשיחה הייתה רגילה — קצב דיבור, מבט, תנוחה.'],
  ['שינוי', 'מה השתנה? סמן את הרגע שבו האדם יצא מהבייסליין שלו.'],
  ['הקשר', 'מה נאמר או קרה בשיחה ממש לפני השינוי?'],
  ['שאלה טובה יותר', 'נסח שאלה אחת רכה שמזמינה להבהיר — לא מאשימה ולא קובעת מסקנה.'],
]

export default function Practice() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">ערכת ההתחלה · תרגול עצמי</p>
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
          {STEPS.map(([title, prompt], i) => (
            <li key={title} className="practice-step">
              <span className="practice-step__num">{i + 1}</span>
              <div>
                <strong className="practice-step__title">{title}</strong>
                <p className="practice-step__prompt">{prompt}</p>
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
        <Link to="/checklist" className="btn btn--gold">
          לצ׳ק ליסט לשיחה ←
        </Link>
        <Link to={`/lesson/${STARTER_CORE_LESSON}`} className="btn btn--outline">
          חזרה לשיעור הליבה
        </Link>
      </div>
    </div>
  )
}
