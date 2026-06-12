import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWorkbook } from '../context/WorkbookContext.jsx'
import { WORKBOOK_PAGES, EMPTY_FIELDS } from '../data/workbookTemplate'
import WorkbookField from '../components/WorkbookField.jsx'

function formatDay(iso) {
  try {
    return new Date(iso).toLocaleDateString('he-IL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
  } catch {
    return ''
  }
}

export default function WorkbookNew() {
  const navigate = useNavigate()
  const {
    draft,
    updateDraft,
    flushDraft,
    clearDraft,
    saveEntry,
    storageBlocked,
  } = useWorkbook()

  // טיוטה קיימת נטענת אוטומטית; "להתחיל מחדש" מנקה אותה
  const [fields, setFields] = useState(() =>
    draft?.fields ? { ...EMPTY_FIELDS, ...draft.fields } : { ...EMPTY_FIELDS }
  )
  const [resumedFrom] = useState(() => draft?.updatedAt || null)
  const [touched, setTouched] = useState(false)

  const todayLabel = useMemo(
    () =>
      new Date().toLocaleDateString('he-IL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    []
  )

  function setField(id, value) {
    const next = { ...fields, [id]: value }
    setFields(next)
    setTouched(true)
    updateDraft(next)
  }

  function handleRestart() {
    clearDraft()
    setFields({ ...EMPTY_FIELDS })
    setTouched(false)
  }

  const canSave = fields.baseline.trim().length > 0

  function handleSave() {
    if (!canSave) return
    flushDraft()
    saveEntry(fields)
    clearDraft()
    navigate('/workbook')
  }

  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">תיק שיחה · {todayLabel}</p>
        <h1 className="page-head__title">תיק חדש</h1>
        <p className="page-head__lead">
          אין תשובות נכונות כאן. אתה מתעד כדי להבין — לא נבחן.
        </p>
      </header>

      {storageBlocked && (
        <p className="wb-storage-warn">
          לא ניתן לשמור בדפדפן זה — מה שתכתוב לא יישמר אחרי יציאה מהעמוד.
        </p>
      )}

      {resumedFrom && !touched && (
        <p className="wb-resume-row">
          תיק פתוח מ{formatDay(resumedFrom)} —{' '}
          <span className="wb-resume-row__hint">אפשר להמשיך לכתוב, או</span>{' '}
          <button type="button" className="wb-resume-row__restart" onClick={handleRestart}>
            להתחיל מחדש
          </button>
        </p>
      )}

      <div className="wb-pages">
        {WORKBOOK_PAGES.map((page) => (
          <WorkbookField
            key={page.id}
            page={page}
            value={fields[page.id] ?? ''}
            checks={page.variant === 'question-check' ? fields.checks : undefined}
            onChange={(v) => setField(page.id, v)}
            onChecksChange={(v) => setField('checks', v)}
          />
        ))}
      </div>

      <div className="wb-save-bar">
        <p className="wb-save-bar__status">
          {storageBlocked ? '' : touched ? 'נשמר ✓' : ''}
        </p>
        <button
          type="button"
          className="btn btn--gold"
          onClick={handleSave}
          disabled={!canSave}
        >
          סגור ושמור את התיק
        </button>
        <p className="wb-save-bar__note">
          מילאת מה שמילאת? זה מספיק. תיק לא חייב להיות מלא.
          {!canSave && ' כדי לסגור תיק צריך רק את דף "הרגיל".'}
        </p>
      </div>
    </div>
  )
}
