# תיקיית קבצים להורדה

כאן יש למקם את קבצי הקורס שיוצעו להורדה בפורטל.

## איך מחברים קובץ אמיתי

1. שים את הקובץ בתיקייה הזו, למשל `workbook.pdf`.
2. פתח את `portal/src/data/downloads.js`.
3. בפריט המתאים עדכן:
   - `file: 'downloads/workbook.pdf'`
   - `available: true`

## Asset Map — קבצים מצופים (placeholders כרגע)

| id              | קובץ מצופה            | מקור במחשב היוצר |
| --------------- | --------------------- | ----------------- |
| workbook        | workbook.pdf          | חוברת תלמיד |
| slides-m1..m5   | slides-mX.pdf         | מצגות 5 המודולים |
| watch-drills    | watch-drills.pdf      | תרגילי צפייה |
| smart-questions | smart-questions.pdf   | דף שאלות חכמות |

> הערה: קבצי וידאו (MP4) ו-ZIP כבדים **לא** הועתקו לפרויקט. מומלץ לארח
> וידאו בשירות חיצוני (YouTube פרטי / Vimeo / Bunny) ולעדכן את `videoUrl`
> בכל שיעור בקובץ `portal/src/data/course.js`, במקום להעלות קבצים כבדים ל-repo.
