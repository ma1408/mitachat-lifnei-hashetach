// מפת הקבצים להורדה (Asset Map).
//
// ============================================================
// מצב נכסים — עודכן 2026-05-30 לאחר סריקת:
// C:\Users\מאור\Desktop\שפת גוף
// ============================================================
//
// WORKBOOK:
//   ✅ קיים — Student_Workbook_Premium_v2_קורס_לקרוא_אנשים.pdf (0.36 MB)
//   מיקום: 05_Workbook\Full_Course\
//   כדי להפעיל: העתק ל-public/downloads/workbook.pdf ועדכן available: true
//
// SLIDES M1 (שיעורים 1-3):
//   ⚠️ חלקי — יש רק Canva Pack PDF לשיעור 3 (0.14 MB)
//   שיעורים 1-2 אין PDF מצגת. לייצא מ-Canva ולאחד לקובץ slides-m1.pdf
//
// SLIDES M2 (שיעורים 4-6):
//   ⚠️ חלקי — יש Canva Pack PDFs לשיעורים 4 (0.11 MB) ו-5 (0.09 MB)
//   שיעור 6 קיים רק כ-PPTX כבד (15.82 MB). לייצא מ-Canva ולאחד.
//
// SLIDES M3 (שיעורים 7-9):
//   ❌ כבד בלבד — PPTX כבדים: L7=20.3 MB, L8=10.4 MB, L9=14.6 MB
//   אין PDF. לייצא מ-Canva כ-PDF ולאחד לקובץ slides-m3.pdf
//
// SLIDES M4 (שיעורים 10-12):
//   ❌ חסר לגמרי — תיקיות Lesson_10-12 ב-03_Slides_Canva ריקות
//   יש ליצור מצגות מאפס ב-Canva
//
// SLIDES M5 (שיעורים 13-15):
//   ❌ חסר לגמרי — תיקיות Lesson_13-15 ב-03_Slides_Canva ריקות
//   יש ליצור מצגות מאפס ב-Canva
//
// WATCH-DRILLS:
//   ❌ לא נמצא — יש ליצור מסמך מאפס
//
// SMART-QUESTIONS:
//   ❌ לא נמצא — יש ליצור מסמך מאפס
//
// VIDEOS (videoUrl ב-course.js):
//   קיימים 3 קטעי Demo בלבד (VIDEO_04\Exports\, 1.6-2 MB כל אחד):
//   • Video_01 → קשור לשיעור 13 (משא ומתן)
//   • Video_02 → קשור לשיעור 9 (סגירה גופנית)
//   • Video_03 → קשור לשיעור 8 (נגיעה בצוואר)
//   אלו קטעי Demo, לא וידאו שיעור מלא. מומלץ לארח ב-YouTube/Vimeo.
//
// ============================================================
// כדי להפעיל קובץ: שים את הקובץ ב-public/downloads/, עדכן את `file`
// לנתיב היחסי (למשל 'downloads/workbook.pdf') וקבע available: true.
// ============================================================

export const downloads = [
  {
    // ✅ פעיל: הועתק מ-05_Workbook\Full_Course\Student_Workbook_Premium_v2_קורס_לקרוא_אנשים.pdf
    id: 'workbook',
    title: 'חוברת תלמיד',
    description: 'המדריך המרכזי שמלווה את כל חמשת המודולים - הדפסה ומילוי תוך כדי.',
    type: 'PDF',
    icon: '📘',
    file: 'downloads/workbook.pdf',
    available: true,
  },
  {
    // ✅ פעיל: Canva Slide Pack לשיעור 3
    id: 'canva-l3',
    title: 'שקפי שיעור 3 · ארבעת שלבי הפענוח',
    description: 'חבילת שקפים של שיעור 3 — בייסליין, טריגר, דליפה ושאלה.',
    type: 'PDF',
    icon: '🎞️',
    file: 'downloads/lesson-03-canva-pack.pdf',
    available: true,
  },
  {
    // ✅ פעיל: Canva Slide Pack לשיעור 4
    id: 'canva-l4',
    title: 'שקפי שיעור 4 · חיוך, מסכה וחוסר התאמה',
    description: 'חבילת שקפים של שיעור 4 — קריאת חיוכים והתאמת פנים.',
    type: 'PDF',
    icon: '🎞️',
    file: 'downloads/lesson-04-canva-pack.pdf',
    available: true,
  },
  {
    // ✅ פעיל: Canva Slide Pack לשיעור 5
    id: 'canva-l5',
    title: 'שקפי שיעור 5 · פה, שפתיים ולסת',
    description: 'חבילת שקפים של שיעור 5 — ויסות באזור הפה.',
    type: 'PDF',
    icon: '🎞️',
    file: 'downloads/lesson-05-canva-pack.pdf',
    available: true,
  },
  {
    // ⚠️ חלקי: יש Canva Pack PDF לשיעור 3 בלבד. שיעורים 1-2 אין PDF מצגת.
    // פעולה: לייצא L1+L2 מ-Canva, לאחד עם L3 Canva Pack לקובץ slides-m1.pdf
    id: 'slides-m1',
    title: 'מצגת מודול 1 · שיטת הפענוח',
    description: 'שקפי השיעורים של מודול הבסיס.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    // ⚠️ חלקי: Canva Pack PDFs קיימים לשיעורים 4+5. שיעור 6 — PPTX כבד בלבד (15.82 MB).
    // פעולה: לייצא L6 מ-Canva, לאחד עם L4+L5 לקובץ slides-m2.pdf
    id: 'slides-m2',
    title: 'מצגת מודול 2 · פנים',
    description: 'שקפי השיעורים על חיוך, פה ועיניים.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    // ❌ כבד בלבד: L7=20.3 MB, L8=10.4 MB, L9=14.6 MB PPTX. אין PDF מוכן.
    // פעולה: לייצא L7-L9 מ-Canva כ-PDF ולאחד לקובץ slides-m3.pdf
    id: 'slides-m3',
    title: 'מצגת מודול 3 · גוף וידיים',
    description: 'שקפי השיעורים על ידיים, צוואר וכתפיים.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    // ❌ חסר לגמרי: תיקיות Lesson_10-12 ב-03_Slides_Canva ריקות.
    // פעולה: ⚠️ יש ליצור מצגות לשיעורים 10-12 מאפס ב-Canva
    id: 'slides-m4',
    title: 'מצגת מודול 4 · מילים, קול וסאבטקסט',
    description: 'שקפי השיעורים על ניסוח, טונציה וסאבטקסט.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    // ❌ חסר לגמרי: תיקיות Lesson_13-15 ב-03_Slides_Canva ריקות.
    // פעולה: ⚠️ יש ליצור מצגות לשיעורים 13-15 מאפס ב-Canva
    id: 'slides-m5',
    title: 'מצגת מודול 5 · יישום בעולם האמיתי',
    description: 'שקפי השיעורים על משא ומתן, ניהול וכריזמה.',
    type: 'PDF',
    icon: '🎞️',
    file: null,
    available: false,
  },
  {
    // ❌ לא נמצא בשום תיקייה. יש ליצור מסמך מאפס.
    id: 'watch-drills',
    title: 'תרגילי צפייה',
    description: 'אוסף תרגילים לצפייה מודרכת בקטעי וידאו - לתרגול הקריאה בשטח.',
    type: 'PDF',
    icon: '🎥',
    file: null,
    available: false,
  },
  {
    // ❌ לא נמצא בשום תיקייה. יש ליצור מסמך מאפס.
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
