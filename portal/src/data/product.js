// ============================================================
// הגדרת המוצר הנמכר בפורטל.
//
// PRODUCT_MODE שולט בחוויית התלמיד:
//   'starter' — ערכת העבודה הדיגיטלית (המוצר הנמכר כיום)
//
// תוכן נוסף ששמור בקוד (מודולים ושיעורים) אינו מוצג בתצוגה זו.
// שינוי התצוגה = שינוי הערך כאן בלבד. אין מחיקת תוכן.
// ============================================================

export const PRODUCT_MODE = 'starter'

export const STARTER_TITLE = 'ערכת עבודה'
export const STARTER_FULL_NAME = 'מתחת לפני השטח — ערכת עבודה דיגיטלית'
export const STARTER_TAGLINE =
  'ערכת עבודה דיגיטלית — כלים קצרים ומעשיים לשיחות אמיתיות.'

// שיעור הליבה של הערכה
export const STARTER_CORE_LESSON = 'l3'

// 7 פריטי הערכה — מוצגים בדשבורד לפי הסדר.
// status: 'ready' = פעיל | 'soon' = ציר פיתוח (לא לחיץ)
export const STARTER_KIT_ITEMS = [
  {
    id: 'intro',
    icon: 'compass',
    title: 'איך עובדים עם הערכה',
    description: 'המדריך: שיטת העבודה, הגבולות, ומסלול 7 ימים להתחלה.',
    to: '/guide',
    status: 'ready',
  },
  {
    id: 'core-lesson',
    icon: 'layers',
    title: 'להבין שיחה ב-4 שלבים',
    description: 'יחידת העבודה המרכזית: בייסליין, שינוי, הקשר ושאלה טובה יותר — כדי להבין מה קרה בשיחה.',
    to: `/lesson/${STARTER_CORE_LESSON}`,
    status: 'ready',
  },
  {
    id: 'lesson-map',
    icon: 'list',
    title: 'ספריית היחידות',
    description: 'כל 15 היחידות הכתובות במקום אחד — איפה אתה, מה הושלם ומה נשאר.',
    to: '/course',
    status: 'ready',
  },
  {
    id: 'study-guide',
    icon: 'file',
    title: 'מדריך עבודה',
    description: 'סיכום, נקודות מפתח וצעדים מעשיים לעבודה עם יחידת הליבה.',
    to: '/study-guide',
    status: 'ready',
  },
  {
    id: 'practice',
    icon: 'target',
    title: 'יישום בשיחה אמיתית',
    description: 'תרגיל מודרך ליישום ארבעת השלבים בשיחה אמיתית.',
    to: '/practice',
    status: 'ready',
  },
  {
    id: 'glossary',
    icon: 'book',
    title: 'מילון השיחה',
    description: 'מושגי השיחה — פירוש, דוגמה ושאלה חכמה לכל מושג.',
    to: '/glossary',
    status: 'ready',
  },
  {
    id: 'checklist',
    icon: 'check',
    title: 'צ׳ק ליסט לשיחה',
    description: 'ארבעת השלבים כרשימה מעשית שאפשר לקחת לכל שיחה.',
    to: '/checklist',
    status: 'ready',
  },
  {
    id: 'workbook',
    icon: 'pencil',
    title: 'מחברת העבודה',
    description: 'תיקי שיחה על השיחות האמיתיות שלך — כאן נוצר הערך של הערכה.',
    to: '/workbook',
    status: 'ready',
  },
  {
    id: 'cases',
    icon: 'folder',
    title: 'תיקי הדגמה',
    description: 'שתי שיחות אמיתיות מפורקות צעד-צעד — לראות את השיטה לפני שעובדים.',
    to: '/cases',
    status: 'ready',
  },
]
