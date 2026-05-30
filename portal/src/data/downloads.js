// מפת הקבצים להורדה (Asset Map).
//
// חשוב: נכסי הקורס (חוברת תלמיד, מצגות, תרגילי צפייה) נמצאים בתיקייה
// המקומית של היוצר (C:\Users\מאור\Desktop\שפת גוף) ולא הועתקו לפרויקט.
// כל הקבצים כאן מסומנים כ-placeholder (available: false) עד שיועלו קבצים
// אמיתיים לתיקייה portal/public/downloads/ והנתיב יעודכן.
//
// כדי להפעיל קובץ: שים את הקובץ ב-public/downloads/, עדכן את `file`
// לנתיב היחסי (למשל 'downloads/workbook.pdf') וקבע available: true.

export const downloads = [
  {
    id: 'workbook',
    title: 'חוברת תלמיד',
    description: 'המדריך המרכזי שמלווה את כל חמשת המודולים - הדפסה ומילוי תוך כדי.',
    type: 'PDF',
    icon: '📘',
    file: null,
    available: false,
  },
  {
    id: 'slides-m1',
    title: 'מצגת מודול 1 · שיטת הפענוח',
    description: 'שקפי השיעורים של מודול הבסיס.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    id: 'slides-m2',
    title: 'מצגת מודול 2 · פנים',
    description: 'שקפי השיעורים על חיוך, פה ועיניים.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    id: 'slides-m3',
    title: 'מצגת מודול 3 · גוף וידיים',
    description: 'שקפי השיעורים על ידיים, צוואר וכתפיים.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    id: 'slides-m4',
    title: 'מצגת מודול 4 · מילים, קול וסאבטקסט',
    description: 'שקפי השיעורים על ניסוח, טונציה וסאבטקסט.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    id: 'slides-m5',
    title: 'מצגת מודול 5 · יישום בעולם האמיתי',
    description: 'שקפי השיעורים על משא ומתן, ניהול וכריזמה.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    id: 'watch-drills',
    title: 'תרגילי צפייה',
    description: 'אוסף תרגילים לצפייה מודרכת בקטעי וידאו - לתרגול הקריאה בשטח.',
    type: 'PDF',
    icon: '🎥',
    file: null,
    available: false,
  },
  {
    id: 'smart-questions',
    title: 'דף שאלות חכמות',
    description: 'מאגר שאלות פתוחות ורכות שמתרגמות סימן שזיהית לשאלה טובה יותר.',
    type: 'PDF',
    icon: '❓',
    file: null,
    available: false,
  },
]

const downloadsById = downloads.reduce((acc, d) => {
  acc[d.id] = d
  return acc
}, {})

export function getDownloadById(id) {
  return downloadsById[id] || null
}
