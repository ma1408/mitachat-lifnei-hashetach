import { Link } from 'react-router-dom'
import { STARTER_CORE_LESSON } from '../data/product'

export default function Intro() {
  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">הערכה</p>
        <h1 className="page-head__title">איך להשתמש בערכה</h1>
        <p className="page-head__lead">
          ברוך הבא. הערכה הזו היא נקודת ההתחלה שלך לפענוח שפת גוף, סאבטקסט
          והתנהגות בשיחות אמיתיות — בלי לקרוא מחשבות, בלי לזהות שקרים, ובלי
          לאבחן אנשים.
        </p>
      </header>

      <section className="lesson-block lesson-block--goal">
        <h2 className="lesson-block__label">מה תמצא בערכה</h2>
        <ul className="intro-list">
          <li><strong>שיעור ליבה</strong> — ארבעת שלבי הפענוח, השיטה המרכזית בערכה.</li>
          <li><strong>Study Guide</strong> — סיכום מסודר, נקודות מפתח ושאלות חזרה.</li>
          <li><strong>תרגול עצמי</strong> — תרגיל מעשי ליישום מיידי בשיחה אמיתית.</li>
          <li><strong>מילון מושגים</strong> — כל מושג עם פירוש, דוגמה ושאלה חכמה.</li>
          <li><strong>צ׳ק ליסט לשיחה</strong> — ארבעת השלבים כרשימה שלוקחים לכל שיחה.</li>
        </ul>
      </section>

      <section className="lesson-block">
        <h2 className="lesson-block__label">סדר העבודה המומלץ</h2>
        <ol className="intro-steps">
          <li>התחל מ<strong>שיעור הליבה</strong> — צפה והבן את ארבעת השלבים.</li>
          <li>עבור על ה<strong>Study Guide</strong> כדי לחזק את מה שלמדת.</li>
          <li>בצע את ה<strong>תרגול העצמי</strong> על שיחה אחת אמיתית.</li>
          <li>שמור את ה<strong>צ׳ק ליסט</strong> בהישג יד לשיחות הבאות.</li>
          <li>חזור ל<strong>מילון</strong> בכל פעם שתיתקל במושג שלא ברור.</li>
        </ol>
      </section>

      <section className="lesson-block lesson-block--insight">
        <h2 className="lesson-block__label">העיקרון שמלווה את הכל</h2>
        <p>
          הגוף לא אומר לנו מה האמת — הוא מסמן לנו איפה לעצור, לשים לב, ולשאול
          שאלה טובה יותר. זה הלב של כל מה שתלמד כאן.
        </p>
      </section>

      <div className="lesson-actions">
        <Link to={`/lesson/${STARTER_CORE_LESSON}`} className="btn btn--gold">
          התחל בשיעור הליבה ←
        </Link>
        <Link to="/dashboard" className="btn btn--outline">
          חזרה לערכה
        </Link>
      </div>
    </div>
  )
}
