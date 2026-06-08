// ============================================================
// הגדרת המוצר הנמכר בפורטל.
//
// PRODUCT_MODE שולט בחוויית התלמיד:
//   'starter' — "ערכת התחלה" (מוצר כניסה, 194 ₪)
//   'full'    — הקורס המלא (15 שיעורים) — לעתיד
//
// כל 15 השיעורים, המודולים והמושגים נשארים בקוד בכל מצב.
// מעבר בין מצבים = שינוי הערך כאן בלבד. אין מחיקת תוכן.
// ============================================================

export const PRODUCT_MODE = 'starter'

export const STARTER_TITLE = 'ערכת התחלה'
export const STARTER_FULL_NAME = 'מתחת לפני השטח — ערכת התחלה'
export const STARTER_TAGLINE =
  'ערכת התחלה דיגיטלית לפענוח שפת גוף, סאבטקסט והתנהגות בשיחות אמיתיות.'

// שיעור הליבה של הערכה
export const STARTER_CORE_LESSON = 'l3'

// 7 פריטי ערכת ההתחלה — מוצגים בדשבורד לפי הסדר.
// status: 'ready' = פעיל | 'soon' = בקרוב (לא לחיץ)
export const STARTER_KIT_ITEMS = [
  {
    id: 'intro',
    icon: '✦',
    title: 'איך להשתמש בערכה',
    description: 'פתיחה קצרה — מה יש בערכה ואיך להפיק ממנה את המרב.',
    to: '/intro',
    status: 'ready',
  },
  {
    id: 'core-lesson',
    icon: '◆',
    title: 'שיעור ליבה — ארבעת שלבי הפענוח',
    description: 'השיעור המרכזי: בייסליין, שינוי, הקשר ושאלה טובה יותר.',
    to: `/lesson/${STARTER_CORE_LESSON}`,
    status: 'ready',
  },
  {
    id: 'study-guide',
    icon: '◈',
    title: 'Study Guide לשיעור הליבה',
    description: 'סיכום, נקודות מפתח, שאלות חזרה ותרגול לשיעור 3.',
    to: '/study-guide',
    status: 'ready',
  },
  {
    id: 'practice',
    icon: '◎',
    title: 'תרגול עצמי',
    description: 'תרגיל מודרך ליישום ארבעת השלבים בשיחה אמיתית.',
    to: '/practice',
    status: 'ready',
  },
  {
    id: 'glossary',
    icon: '❋',
    title: 'מילון מושגים בסיסי',
    description: 'כל מושגי הקורס — פירוש, דוגמה ושאלה חכמה לכל מושג.',
    to: '/glossary',
    status: 'ready',
  },
  {
    id: 'checklist',
    icon: '✓',
    title: 'צ׳ק ליסט לשיחה',
    description: 'ארבעת השלבים כרשימה מעשית שאפשר לקחת לכל שיחה.',
    to: '/checklist',
    status: 'ready',
  },
  {
    id: 'full-course',
    icon: '➜',
    title: 'הרחבה לקורס המלא',
    description: 'העמקה בכל ערוצי התקשורת — פנים, גוף, קול וסאבטקסט. בקרוב.',
    to: null,
    status: 'soon',
  },
]
