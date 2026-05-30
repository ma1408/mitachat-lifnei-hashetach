# מתחת לפני השטח · פורטל תלמידים (MVP)

אזור התלמידים הסגור של הקורס **מתחת לפני השטח** — פענוח שפת גוף, סאבטקסט
והתנהגות בשיחות אמיתיות.

בנוי ב-React + Vite, RTL מלא, עברית בלבד, עיצוב כהה וקולנועי.

## הרצה מקומית

```bash
cd portal
npm install
npm run dev
```

ואז לפתוח את הכתובת שמודפסת (בדרך כלל `http://localhost:5173`).

### בנייה לפרודקשן

```bash
npm run build      # פלט לתיקיית dist/
npm run preview    # תצוגה מקדימה של ה-build
```

## עמודים

| נתיב               | תיאור |
| ------------------ | ----- |
| `/login`           | כניסה (placeholder, localStorage) |
| `/dashboard`       | בית: ברוך הבא, התקדמות, המשך מהשיעור האחרון, מודולים |
| `/course`          | 5 מודולים · 15 שיעורים · סטטוס לכל שיעור |
| `/lesson/:lessonId`| עמוד שיעור: מטרה, וידאו, סיכום, תובנה, תרגיל, הורדות |
| `/downloads`       | חוברת, מצגות, תרגילי צפייה, שאלות חכמות |

> הניווט מבוסס **HashRouter** כך שהפורטל עובד גם תחת תת-נתיב ב-GitHub Pages
> (למשל `/mitachat-lifnei-hashetach/portal/`) בלי הגדרות שרת.

## גישה — חשוב

> בשלב זה זו בקרת גישה לבדיקת MVP בלבד. הגנה אמיתית תופעל לאחר חיבור
> Supabase Auth.

הכניסה שומרת הזדהות ב-`localStorage` בלבד וחוסמת ויזואלית את האזור.
אין כאן אבטחה אמיתית, אין שרת, אין סליקה.

## מבנה

```
portal/
├─ index.html
├─ vite.config.js
├─ public/downloads/        # כאן ממקמים את קבצי ההורדה האמיתיים
└─ src/
   ├─ main.jsx              # entry + Providers + HashRouter
   ├─ App.jsx               # routing
   ├─ data/course.js        # 5 מודולים, 15 שיעורים, התוכן
   ├─ data/downloads.js     # Asset Map של הקבצים להורדה
   ├─ context/AuthContext.jsx      # login placeholder (localStorage)
   ├─ context/ProgressContext.jsx  # התקדמות (localStorage)
   ├─ components/           # Layout, ProtectedRoute, ProgressBar
   ├─ pages/                # Login, Dashboard, Course, Lesson, Downloads
   └─ styles/global.css     # מערכת העיצוב הכהה
```

## עדכון תוכן

- **שיעורים**: `src/data/course.js`
- **קבצי הורדה**: `src/data/downloads.js` + הקבצים ב-`public/downloads/`
- **וידאו**: עדכן `videoUrl` בכל שיעור (מומלץ אירוח חיצוני, לא קבצים כבדים ב-repo)
