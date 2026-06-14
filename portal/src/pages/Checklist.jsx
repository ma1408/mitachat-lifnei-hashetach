import { Link } from 'react-router-dom'

const CHECKLIST = [
  ['מזהים בייסליין', 'איך האדם נראה כשהכול רגיל? מה הקצב, המבט והתנוחה הטבעיים שלו בשיחה הזאת?'],
  ['שמים לב לשינוי', 'מה השתנה ביחס לבייסליין — ולא "למה". רק לזהות את הרגע. שני שינויים בו-זמנית = שווה שאלה.'],
  ['בודקים הקשר', 'מה נאמר ברגע לפני השינוי — ברזולוציה של משפט, לא של נושא. מה המילה, השאלה, או ההצעה הספציפית שקדמה?'],
  ['שואלים שאלה טובה יותר', 'שאלה רכה שפותחת — לא מאשימה ולא סוגרת. ודא + פתח / הפחת לחץ / ישיר + רך.'],
]

const REMINDERS = [
  'סימן בודד אינו ראיה — חפש שינוי בתוך הקשר.',
  'לא קוראים מחשבות, לא מזהים שקרים, לא מאבחנים.',
  'המטרה היא להבין טוב יותר ולשאול — לא "לתפוס".',
  'אחרי ששאלת — בדוק אם התשובה פתחה את הגוף (לכו הלאה), אישרה שיש נושא (שיחה נפתחת), או הגוף נשאר סגור (לא לוחצים).',
]

export default function Checklist() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">הערכה · צ׳ק ליסט</p>
        <h1 className="page-head__title">צ׳ק ליסט לשיחה</h1>
        <p className="page-head__lead">
          ארבעת השלבים כרשימה מעשית — קצרה מספיק כדי לקחת לכל שיחה.
        </p>
      </header>

      <section className="lesson-block">
        <h2 className="lesson-block__label">ארבעת השלבים</h2>
        <ul className="checklist">
          {CHECKLIST.map(([title, text], i) => (
            <li key={title} className="checklist__item">
              <span className="checklist__mark" aria-hidden="true">{i + 1}</span>
              <div>
                <strong className="checklist__title">{title}</strong>
                <p className="checklist__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">לזכור תמיד</h2>
        <ul className="checklist-reminders">
          {REMINDERS.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <div className="lesson-actions">
        <Link to="/dashboard" className="btn btn--gold">
          חזרה לערכה
        </Link>
        <Link to="/glossary" className="btn btn--outline">
          למילון המושגים
        </Link>
      </div>
    </div>
  )
}
