// ============================================================
// ASSET MAP — קורס "מתחת לפני השטח"
// נוצר ב-2026-05-30 על ידי סריקת התיקייה המקומית:
// C:\Users\מאור\Desktop\שפת גוף
//
// מטרה: לתעד כל נכס קיים, לאיזה שיעור/מודול הוא שייך,
// ומה המצב שלו (קל להעתקה / כבד / חסר / לשימוש פנימי).
//
// STATUS LEGEND:
//   'ready'    — קל (< 1 MB), ניתן להעתיק ל-public/downloads/
//   'heavy'    — כבד (> 5 MB), לא מעתיקים בלי אישור
//   'missing'  — תיקיית שיעור קיימת אבל ריקה
//   'internal' — מסמך ייצור / עבודה פנימית, לא לתלמיד
// ============================================================

// ----------------------------------------------------------
// 1. חוברת תלמיד (Workbook)
// ----------------------------------------------------------
export const workbookAssets = [
  {
    id: 'workbook-premium-v2-pdf',
    fileName: 'Student_Workbook_Premium_v2_קורס_לקרוא_אנשים.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\05_Workbook\\Full_Course\\Student_Workbook_Premium_v2_קורס_לקרוא_אנשים.pdf',
    fileType: 'PDF',
    sizeMB: 0.36,
    lessonId: null,
    moduleId: null,
    scope: 'full-course',
    status: 'ready',
    recommendCopy: true,
    downloadId: 'workbook',
    targetFileName: 'workbook.pdf',
    note: 'החוברת הראשית — גרסה Premium v2, מכסה כל 15 שיעורים. מומלץ להעתיק כ-workbook.pdf ל-public/downloads/.',
  },
  {
    id: 'workbook-v1-pdf',
    fileName: 'Student_Workbook_v1_קורס_לקרוא_אנשים.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\05_Workbook\\Full_Course\\Student_Workbook_v1_קורס_לקרוא_אנשים.pdf',
    fileType: 'PDF',
    sizeMB: 0.13,
    scope: 'full-course',
    status: 'ready',
    recommendCopy: false,
    note: 'גרסה ישנה — v2 עדיפה.',
  },
  {
    id: 'workbook-lessons-pdf',
    fileName: 'Course_Lessons_01-15_קורס_לקרוא_אנשים.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\05_Workbook\\Full_Course\\Course_Lessons_01-15_קורס_לקרוא_אנשים.pdf',
    fileType: 'PDF',
    sizeMB: 0.30,
    scope: 'full-course',
    status: 'ready',
    recommendCopy: false,
    note: 'גרסה חלופית של תוכן השיעורים — v2 Premium עדיפה.',
  },
  {
    id: 'workbook-lessons-zip',
    fileName: 'Course_Lessons_All_DOCX_קורס_לקרוא_אנשים.zip',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\05_Workbook\\Individual_Lessons\\Course_Lessons_All_DOCX_קורס_לקרוא_אנשים.zip',
    fileType: 'ZIP',
    sizeMB: 0.65,
    scope: 'full-course',
    status: 'ready',
    recommendCopy: false,
    note: 'חבילת DOCX ל-15 שיעורים — לעורכים, לא לתלמידים.',
  },
]

// חוברות נפרדות לפי שיעור (DOCX בלבד, ב-individual_lessons)
export const workbookByLesson = [
  { lessonId: 'l1',  fileName: 'Lesson_01_MVP_לזהות_פער_בין_מילים_לגוף.docx',                              sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l2',  fileName: 'Lesson_02_MVP_לא_קוראים_סימן_קוראים_שינוי.docx',                           sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l3',  fileName: 'Lesson_03_MVP_ארבעת_שלבי_הפענוח_בייסליין_טריגר_דליפה_שאלה.docx',          sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l4',  fileName: 'Lesson_04_MVP_חיוך_מסכה_וחוסר_התאמה.docx',                                 sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l5',  fileName: 'Lesson_05_MVP_פה_שפתיים_ולסת.docx',                                        sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l6',  fileName: 'Lesson_06_MVP_עיניים_מצמוץ_ומבט.docx',                                     sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l7',  fileName: 'Lesson_07_MVP_ידיים_שמסבירות_מול_ידיים_שמרגיעות.docx',                     sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l8',  fileName: 'Lesson_08_MVP_צוואר_סנטר_ופנים_כמערכת_ויסות.docx',                        sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l9',  fileName: 'Lesson_09_MVP_כתפיים_חזה_וסגירה_גופנית.docx',                              sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l10', fileName: 'Lesson_10_MVP_מילים_שמקטינות_אחריות.docx',                                 sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l11', fileName: 'Lesson_11_MVP_טונציה_הגוף_של_המילים.docx',                                 sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l12', fileName: 'Lesson_12_MVP_סאבטקסט_מה_המשפט_מנסה_לעשות.docx',                          sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l13', fileName: 'Lesson_13_MVP_מכירות_מחיר_ומשא_ומתן_בלי_לחץ.docx',                        sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l14', fileName: 'Lesson_14_MVP_ניהול_משפחה_ושיחות_קשות.docx',                               sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  { lessonId: 'l15', fileName: 'Lesson_15_MVP_כריזמה_נוכחות_וקריאת_חדר.docx',                              sizeMB: 0.04, status: 'ready',  recommendCopy: false },
  // basePath: C:\Users\מאור\Desktop\שפת גוף\05_Workbook\Individual_Lessons\individual_lessons\
]

// ----------------------------------------------------------
// 2. מצגות שיעורים (Slides)
// ----------------------------------------------------------

// Canva Pack PDFs — קלים, מוכנים להעתקה
// basePath: C:\Users\מאור\Desktop\שפת גוף\→ 03_Slides_Canva\
export const canvasPackPDFs = [
  {
    id: 'slides-l3-canva-pdf',
    fileName: 'Lesson_03_Canva_Slide_Pack_ארבעת_שלבי_הפענוח.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\→ 03_Slides_Canva\\Lesson_03\\Lesson_03_Canva_Slide_Pack_ארבעת_שלבי_הפענוח.pdf',
    fileType: 'PDF',
    sizeMB: 0.14,
    lessonId: 'l3',
    moduleId: 'm1',
    status: 'ready',
    recommendCopy: true,
    note: 'Canva Pack PDF לשיעור 3. אין Canva Pack PDF לשיעורים 1 ו-2 — מצגת m1 תהיה חלקית.',
  },
  {
    id: 'slides-l4-canva-pdf',
    fileName: 'Lesson_04_Canva_Slide_Pack_חיוך_מסכה_וחוסר_התאמה.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\→ 03_Slides_Canva\\Lesson_04\\Lesson_04_Canva_Slide_Pack_חיוך_מסכה_וחוסר_התאמה.pdf',
    fileType: 'PDF',
    sizeMB: 0.11,
    lessonId: 'l4',
    moduleId: 'm2',
    status: 'ready',
    recommendCopy: true,
    note: 'Canva Pack PDF לשיעור 4.',
  },
  {
    id: 'slides-l5-canva-pdf',
    fileName: 'Lesson_05_Canva_Slide_Pack_פה_שפתיים_ולסת.pdf',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\→ 03_Slides_Canva\\Lesson_05\\Lesson_05_Canva_Slide_Pack_פה_שפתיים_ולסת.pdf',
    fileType: 'PDF',
    sizeMB: 0.09,
    lessonId: 'l5',
    moduleId: 'm2',
    status: 'ready',
    recommendCopy: true,
    note: 'Canva Pack PDF לשיעור 5.',
  },
]

// PPTX כבדים — לא להעתיק בלי אישור
// basePath: C:\Users\מאור\Desktop\שפת גוף\→ 03_Slides_Canva\
export const heavyPPTXSlides = [
  { lessonId: 'l3',  moduleId: 'm1', fileName: 'Lesson_03_מצגת_קורס_לקרוא_אנשים.pptx',                       sizeMB: 10.50,  status: 'heavy' },
  { lessonId: 'l3',  moduleId: 'm1', fileName: 'Lesson_03_מצגת_קורס_לקרוא_אנשים_תמונות_מלאות.pptx',          sizeMB: 10.34,  status: 'heavy' },
  { lessonId: 'l4',  moduleId: 'm2', fileName: 'Lesson_04_מצגת_קורס_לקרוא_אנשים_תמונות_מלאות.pptx',          sizeMB: 13.29,  status: 'heavy' },
  { lessonId: 'l5',  moduleId: 'm2', fileName: 'Lesson_05_מצגת_קורס_לקרוא_אנשים_תמונות_מלאות.pptx',          sizeMB: 13.13,  status: 'heavy' },
  { lessonId: 'l6',  moduleId: 'm2', fileName: 'Lesson_06_מצגת_קורס_לקרוא_אנשים.pptx',                       sizeMB: 15.82,  status: 'heavy', note: 'אין Canva Pack PDF לשיעור 6' },
  { lessonId: 'l7',  moduleId: 'm3', fileName: 'Lesson_07_מצגת_קורס_לקרוא_אנשים.pptx',                       sizeMB: 20.32,  status: 'heavy' },
  { lessonId: 'l8',  moduleId: 'm3', fileName: 'Lesson_08_מצגת_קורס_לקרוא_אנשים(1).pptx',                    sizeMB: 10.40,  status: 'heavy' },
  { lessonId: 'l9',  moduleId: 'm3', fileName: 'Lesson_09_מצגת_קורס_לקרוא_אנשים.pptx',                       sizeMB: 14.60,  status: 'heavy' },
  // שיעורים 10-15: תיקיות קיימות אבל ריקות → ❌ MISSING
]

// RTL Premium v2 — PPTX קטנים (תבניות), קיימים לכל 15 שיעורים
// basePath: C:\Users\מאור\Desktop\שפת גוף\→ 03_Slides_Canva\RTL_Premium_v2_All_Lessons\...
export const rtlPremiumV2Slides = [
  { lessonId: 'l1',  fileName: 'Lesson_01_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l2',  fileName: 'Lesson_02_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l3',  fileName: 'Lesson_03_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l4',  fileName: 'Lesson_04_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l5',  fileName: 'Lesson_05_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l6',  fileName: 'Lesson_06_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l7',  fileName: 'Lesson_07_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l8',  fileName: 'Lesson_08_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l9',  fileName: 'Lesson_09_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l10', fileName: 'Lesson_10_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l11', fileName: 'Lesson_11_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l12', fileName: 'Lesson_12_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l13', fileName: 'Lesson_13_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l14', fileName: 'Lesson_14_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  { lessonId: 'l15', fileName: 'Lesson_15_מצגת_RTL_Premium_v2_קורס_לקרוא_אנשים.pptx', sizeMB: 0.05, status: 'ready' },
  // basePath: C:\Users\מאור\Desktop\שפת גוף\→ 03_Slides_Canva\RTL_Premium_v2_All_Lessons\Course_Slides_01-15_RTL_Premium_v2_קורס_לקרוא_אנשים\
]

// חבילת ה-ZIP עם כל ה-RTL Premium v2 (כל 15 השיעורים יחד, קל)
export const rtlPremiumV2Bundle = {
  id: 'slides-rtl-v2-zip',
  fileName: 'Course_Slides_01-15_RTL_Premium_v2_קורס_לקרוא_אנשים.zip',
  localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\→ 03_Slides_Canva\\RTL_Premium_v2_All_Lessons\\Course_Slides_01-15_RTL_Premium_v2_קורס_לקרוא_אנשים.zip',
  fileType: 'ZIP',
  sizeMB: 0.57,
  scope: 'full-course',
  status: 'ready',
  recommendCopy: true,
  note: 'ZIP קל עם PPTX קטנים לכל 15 שיעורים (RTL Premium v2). כנראה תבניות. מומלץ להעתיק כ-slides-bundle.zip אם רוצים לאפשר הורדת כל המצגות.',
}

// ----------------------------------------------------------
// 3. סרטוני Demo — MP4 (קטנים, עשויים להיות preview clips)
// basePath: C:\Users\מאור\Desktop\שפת גוף\VIDEO_04\Exports\
// ----------------------------------------------------------
export const demoVideos = [
  {
    id: 'video-01-price-resistance',
    fileName: 'Video_01_v2_התנגדות_מחיר_פרימיום.mp4',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\VIDEO_04\\Exports\\Video_01_v2_התנגדות_מחיר_פרימיום.mp4',
    fileType: 'MP4',
    sizeMB: 2.04,
    relatedLesson: 'l13',
    relatedModule: 'm5',
    status: 'ready',
    recommendCopy: false,
    note: 'דמו: לקוח שומע מחיר — קשור לשיעור 13 (משא ומתן). ניתן לארח ב-YouTube/Vimeo ולעדכן videoUrl בשיעור.',
  },
  {
    id: 'video-02-body-closed',
    fileName: 'Video_02_v1_הכול_בסדר_אבל_הגוף_נסגר.mp4',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\VIDEO_04\\Exports\\Video_02_v1_הכול_בסדר_אבל_הגוף_נסגר.mp4',
    fileType: 'MP4',
    sizeMB: 1.97,
    relatedLesson: 'l9',
    relatedModule: 'm3',
    status: 'ready',
    recommendCopy: false,
    note: 'דמו: סגירה גופנית — קשור לשיעור 9 (כתפיים וסגירה). מומלץ להעלות לשירות וידאו חיצוני.',
  },
  {
    id: 'video-03-neck-touch',
    fileName: 'Video_03_v1_לא_קריטי_לי_אבל_הגוף_נוגע_בצוואר.mp4',
    localPath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\VIDEO_04\\Exports\\Video_03_v1_לא_קריטי_לי_אבל_הגוף_נוגע_בצוואר.mp4',
    fileType: 'MP4',
    sizeMB: 1.63,
    relatedLesson: 'l8',
    relatedModule: 'm3',
    status: 'ready',
    recommendCopy: false,
    note: 'דמו: נגיעה בצוואר — קשור לשיעור 8 (צוואר וסנטר). מומלץ להעלות לשירות וידאו חיצוני.',
  },
]

// ----------------------------------------------------------
// 4. Production Packs (לשימוש פנימי — לא לתלמיד)
// basePath: C:\Users\מאור\Desktop\שפת גוף\02_Production\Lesson_Production_Packs\PDF\
// ----------------------------------------------------------
export const productionPacks = [
  { lessonId: 'l1',  fileName: 'Lesson_01_Production_Pack_למה_הגוף_מדבר_לפני_האדם.pdf',                       sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l2',  fileName: 'Lesson_02_Production_Pack_לא_קוראים_סימן_קוראים_שינוי.pdf',                    sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l3',  fileName: 'Lesson_03_Production_Pack_ארבעת_שלבי_הפענוח.pdf',                              sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l4',  fileName: 'Lesson_04_Production_Pack_חיוך_מסכה_וחוסר_התאמה.pdf',                          sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l5',  fileName: 'Lesson_05_Production_Pack_פה_שפתיים_ולסת.pdf',                                 sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l6',  fileName: 'Lesson_06_Production_Pack_עיניים_מצמוץ_ומבט.pdf',                              sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l7',  fileName: 'Lesson_07_Production_Pack_ידיים_שמסבירות_מול_ידיים_שמרגיעות.pdf',              sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l8',  fileName: 'Lesson_08_Production_Pack_צוואר_סנטר_ופנים_כמערכת_ויסות.pdf',                 sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l9',  fileName: 'Lesson_09_Production_Pack_כתפיים_חזה_וסגירה_גופנית.pdf',                       sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l10', fileName: 'Lesson_10_Production_Pack_מילים_שמקטינות_אחריות.pdf',                          sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l11', fileName: 'Lesson_11_Production_Pack_טונציה_הגוף_של_המילים.pdf',                          sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l12', fileName: 'Lesson_12_Production_Pack_סאבטקסט_מה_המשפט_מנסה_לעשות.pdf',                   sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l13', fileName: 'Lesson_13_Production_Pack_יישום_בשיחות_יומיומיות_ומשא_ומתן.pdf',               sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l14', fileName: 'Lesson_14_Production_Pack_ניהול_שיחות_קשות_בלי_לתקוף.pdf',                     sizeMB: 0.08, status: 'internal' },
  { lessonId: 'l15', fileName: 'Lesson_15_Production_Pack_כריזמה_נוכחות_וסיכום_שיטת_הפענוח.pdf',               sizeMB: 0.08, status: 'internal' },
]

// ----------------------------------------------------------
// 5. מה חסר (Missing Assets)
// ----------------------------------------------------------
export const missingAssets = [
  {
    downloadId: 'slides-m1',
    what: 'מצגת מודול 1 (שיעורים 1-3)',
    note: 'יש Canva Pack PDF רק לשיעור 3. שיעורים 1-2 אין PDF מצגת — רק RTL Premium v2 PPTX קטן (0.05 MB) שכנראה תבנית.',
    suggestion: 'לייצא שיעורים 1-3 מ-Canva כ-PDF ולאחד לקובץ אחד slides-m1.pdf',
  },
  {
    downloadId: 'slides-m2',
    what: 'מצגת מודול 2 (שיעורים 4-6)',
    note: 'יש Canva Pack PDF לשיעורים 4+5. שיעור 6 קיים רק כ-PPTX כבד (15.82 MB).',
    suggestion: 'לייצא שיעור 6 מ-Canva כ-PDF ולאחד עם 4+5 לקובץ slides-m2.pdf',
  },
  {
    downloadId: 'slides-m3',
    what: 'מצגת מודול 3 (שיעורים 7-9)',
    note: 'שיעורים 7-9 קיימים רק כ-PPTX כבד (10-20 MB). אין Canva Pack PDF לאף אחד מהם.',
    suggestion: 'לייצא שיעורים 7-9 מ-Canva כ-PDF ולאחד לקובץ slides-m3.pdf',
  },
  {
    downloadId: 'slides-m4',
    what: 'מצגת מודול 4 (שיעורים 10-12)',
    note: 'תיקיות Lesson_10-12 ב-03_Slides_Canva קיימות אבל ריקות לחלוטין. אין PPTX ואין PDF.',
    suggestion: '⚠️ יש ליצור את המצגות לשיעורים 10-12 מאפס ב-Canva',
  },
  {
    downloadId: 'slides-m5',
    what: 'מצגת מודול 5 (שיעורים 13-15)',
    note: 'תיקיות Lesson_13-15 ב-03_Slides_Canva קיימות אבל ריקות לחלוטין. אין PPTX ואין PDF.',
    suggestion: '⚠️ יש ליצור את המצגות לשיעורים 13-15 מאפס ב-Canva',
  },
  {
    downloadId: 'watch-drills',
    what: 'תרגילי צפייה (Watch Drills PDF)',
    note: 'לא נמצא קובץ watch-drills בשום תיקייה.',
    suggestion: '⚠️ יש ליצור מסמך תרגילי צפייה מאפס',
  },
  {
    downloadId: 'smart-questions',
    what: 'דף שאלות חכמות (Smart Questions PDF)',
    note: 'לא נמצא קובץ smart-questions בשום תיקייה.',
    suggestion: '⚠️ יש ליצור מסמך שאלות חכמות מאפס',
  },
  {
    downloadId: null,
    what: 'וידאו שיעור — לכל 15 שיעורים',
    note: 'קיימים 3 סרטוני Demo קצרים (2-2 MB) — אינם וידאו שיעור מלא. videoUrl ב-course.js = null לכל השיעורים.',
    suggestion: 'לצלם וידאו שיעורים ולארח ב-YouTube/Vimeo. לעדכן videoUrl בכל שיעור ב-course.js.',
  },
]

// ----------------------------------------------------------
// 6. מיפוי מומלץ: download ID → קובץ מקומי מוכן להעתקה
// ----------------------------------------------------------
export const readyToActivate = [
  {
    downloadId: 'workbook',
    sourcePath: 'C:\\Users\\מאור\\Desktop\\שפת גוף\\05_Workbook\\Full_Course\\Student_Workbook_Premium_v2_קורס_לקרוא_אנשים.pdf',
    targetFile: 'downloads/workbook.pdf',
    sizeMB: 0.36,
    action: 'העתק קובץ → עדכן downloads.js: file: "downloads/workbook.pdf", available: true',
  },
]

// ----------------------------------------------------------
// 7. סיכום מצב Assets לפי מודול
// ----------------------------------------------------------
export const assetStatusByModule = [
  {
    moduleId: 'm1',
    moduleName: 'שיטת הפענוח',
    lessons: ['l1', 'l2', 'l3'],
    workbook: 'full-course-pdf-ready',
    slides: 'partial — only L3 Canva Pack PDF; L1+L2 no PDF',
    video: 'none — videoUrl = null',
    watchDrills: 'missing',
    smartQuestions: 'missing',
  },
  {
    moduleId: 'm2',
    moduleName: 'פנים',
    lessons: ['l4', 'l5', 'l6'],
    workbook: 'full-course-pdf-ready',
    slides: 'partial — L4+L5 Canva Pack PDFs ready; L6 only heavy PPTX',
    video: 'none — videoUrl = null',
    watchDrills: 'missing',
    smartQuestions: 'missing',
  },
  {
    moduleId: 'm3',
    moduleName: 'גוף וידיים',
    lessons: ['l7', 'l8', 'l9'],
    workbook: 'full-course-pdf-ready',
    slides: 'heavy-only — L7 (20.3 MB), L8 (10.4 MB), L9 (14.6 MB) PPTX. No PDFs.',
    video: 'demo clips available for L8+L9 (2 MB each) — not lesson videos',
    watchDrills: 'missing',
    smartQuestions: 'missing',
  },
  {
    moduleId: 'm4',
    moduleName: 'מילים, קול וסאבטקסט',
    lessons: ['l10', 'l11', 'l12'],
    workbook: 'full-course-pdf-ready',
    slides: '❌ MISSING — Lesson_10-12 slide folders are empty',
    video: 'none — videoUrl = null',
    watchDrills: 'missing',
    smartQuestions: 'missing',
  },
  {
    moduleId: 'm5',
    moduleName: 'יישום בעולם האמיתי',
    lessons: ['l13', 'l14', 'l15'],
    workbook: 'full-course-pdf-ready',
    slides: '❌ MISSING — Lesson_13-15 slide folders are empty',
    video: 'demo clip for L13 (2 MB) — not a full lesson video',
    watchDrills: 'missing',
    smartQuestions: 'missing',
  },
]
