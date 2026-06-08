import { Link } from 'react-router-dom'
import { STARTER_CORE_LESSON } from '../data/product'

// תוכן ה-Study Guide לשיעור 3 — כ-JSX ישיר (ללא ספריית Markdown).
// מבוסס על docs/student-assets/Lesson_03_Study_Guide.md

const KEY_POINTS = [
  ['בייסליין (Baseline)', 'נקודת המוצא היא המצב הטבעי של האדם. חשוב להבין איך הוא נראה ומתנהג (קול, מבט, תנועה) כשהכול רגיל — כדי שנוכל לזהות שינויים בהמשך.'],
  ['שינוי במקום פרשנות', 'שפת גוף מקצועית לא מסתמכת על "מילון סימנים". המשמעות נוצרת רק כשמזהים שינוי ביחס לאדם, להקשר ולרגע שבו הוא הופיע.'],
  ['הקשר (Context)', 'שינוי גופני מקבל משמעות רק כשהוא מצטלב עם תוכן השיחה. מה נאמר או קרה בדיוק לפני שהגוף השתנה?'],
  ['שאלה טובה יותר', 'התוצאה אינה מסקנה נחרצת אלא שאלה חכמה — שפותחת את הנושא בכבוד ומאפשרת לצד השני להסביר את עצמו.'],
  ['שינוי הוא רמז, לא פסק דין', 'המודל הוא פילטר שמגן עלינו מפני פרשנות יתר. המטרה היא להבין טוב יותר את השיחה, לא להשתמש בסימנים כהוכחות.'],
]

const REVIEW_QUESTIONS = [
  'מדוע הסתמכות על סימן בודד נחשבת לטעות?',
  'אילו מרכיבים חשוב לבדוק כדי להגדיר בייסליין של אדם (למשל קצב דיבור, קשר עין)?',
  'מהי השאלה המנחה שצריך לשאול כדי לזהות את רגע השינוי בשיחה?',
  'כיצד ההקשר משפיע על ההבנה של תנועה גופנית מסוימת?',
  'מה ההבדל בין שאלה ש"סוגרת שיחה" לבין שאלה ש"פותחת שיחה"?',
]

export default function StudyGuide() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">ערכת ההתחלה · Study Guide</p>
        <h1 className="page-head__title">ארבעת שלבי הפענוח</h1>
        <p className="page-head__lead">
          מדריך לימוד מסודר לשיעור הליבה — לחזרה לפני ואחרי הצפייה.
        </p>
      </header>

      <section className="lesson-block">
        <h2 className="lesson-block__label">סיכום קצר</h2>
        <p>
          השיעור מציג את שיטת העבודה המרכזית של הקורס, שמעבירה אותנו משימוש
          בתחושות בטן לתהליך בדיקה מסודר. המטרה אינה לנחש מה אדם חושב או לקבוע
          עובדות, אלא להבין היכן השיחה זקוקה לשאלה טובה יותר. סימן בודד אינו אומר
          דבר בפני עצמו; המשמעות מתחילה רק כשמזהים שינוי שמופיע בתוך הקשר מסוים.
        </p>
      </section>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">חמש נקודות מפתח</h2>
        <ul className="study-points">
          {KEY_POINTS.map(([title, text]) => (
            <li key={title}>
              <strong>{title}:</strong> {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">חמש שאלות חזרה</h2>
        <ol className="study-questions">
          {REVIEW_QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </section>

      <section className="lesson-block lesson-block--exercise">
        <h2 className="lesson-block__label">תרגול — יישום המודל</h2>
        <p className="study-scene">
          <strong>הסצנה:</strong> חבר אומר שהוא "זורם" עם התוכנית שלכם לסוף השבוע.
          ברגע שאתה מציע שעה מסוימת ליציאה, הוא משפשף את העורף, מחייך חיוך קטן
          ומסיט את המבט הצידה.
        </p>
        <ul className="study-task">
          <li><strong>בייסליין:</strong> איך החבר התנהג לפני הצעת השעה?</li>
          <li><strong>שינוי:</strong> מהו השינוי ההתנהגותי שהופיע ברגע ההצעה?</li>
          <li><strong>הקשר:</strong> מה קרה בשיחה רגע לפני השינוי?</li>
          <li><strong>שאלה טובה יותר:</strong> נסח שאלה שלא תוקפת אלא מזמינה להבהיר — למשל: "השעה הזאת פחות נוחה לך, או שיש משהו אחר שחשוב לקחת בחשבון?"</li>
        </ul>
      </section>

      <section className="lesson-block lesson-block--goal">
        <h2 className="lesson-block__label">לפני הצפייה בשיעור</h2>
        <p>
          בשיעור תלמד את מודל העבודה שילווה אותך לאורך כל הקורס. במקום לנחש מה הצד
          השני חושב, תשתמש בפילטר של ארבעה שלבים: בייסליין, שינוי, הקשר ושאלה טובה
          יותר — כדי להפוך תחושת בטן מעורפלת לכלי עבודה בשיחה.
        </p>
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">אחרי הצפייה בשיעור</h2>
        <p>
          שפת גוף אינה מילון של סימנים אלא השוואה מתמדת בין המצב הרגיל לשינוי
          שמופיע בתוך הקשר. בכל פעם שאתה מזהה שמשהו לא מסתדר בשיחה — אל תקפוץ
          למסקנה. חזור לבייסליין, זהה את רגע השינוי בהקשר שבו קרה, וסיים בשאלה
          מכבדת שפותחת את הנושא במקום לסגור אותו.
        </p>
      </section>

      <div className="lesson-actions">
        <Link to={`/lesson/${STARTER_CORE_LESSON}`} className="btn btn--gold">
          לשיעור הליבה ←
        </Link>
        <Link to="/practice" className="btn btn--outline">
          לתרגול העצמי
        </Link>
      </div>
    </div>
  )
}
