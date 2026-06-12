import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWorkbook } from '../context/WorkbookContext.jsx'
import { WORKBOOK_PAGES } from '../data/workbookTemplate'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('he-IL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

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

function entryTitle(entry) {
  const ctx = (entry.fields.context || '').trim()
  if (!ctx) return 'תיק ללא כותרת'
  return ctx.length > 60 ? ctx.slice(0, 60) + '…' : ctx
}

function entryToText(entry) {
  const lines = [`תיק שיחה · ${formatDate(entry.createdAt)}`, '']
  for (const page of WORKBOOK_PAGES) {
    const val = (entry.fields[page.id] || '').trim()
    if (!val) continue
    lines.push(`${page.title}:`)
    lines.push(val)
    if (page.variant === 'question-check') {
      const marked = page.checks.filter((_, i) => entry.fields.checks?.[i])
      if (marked.length) lines.push(`(${marked.join(' · ')})`)
    }
    lines.push('')
  }
  return lines.join('\n')
}

function EntryRow({ entry, onDelete }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(entryToText(entry))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard חסום — אין קריסה */
    }
  }

  function handleDelete() {
    if (window.confirm('למחוק את התיק? אין דרך חזרה.')) {
      onDelete(entry.id)
    }
  }

  const filledPages = WORKBOOK_PAGES.filter(
    (p) => (entry.fields[p.id] || '').trim()
  )

  return (
    <li className="wb-entry">
      <button
        type="button"
        className="wb-entry__head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="wb-entry__title">{entryTitle(entry)}</span>
        <span className="wb-entry__date">{formatDate(entry.createdAt)}</span>
        <span className="wb-entry__arrow" aria-hidden="true">
          {open ? '▴' : '▾'}
        </span>
      </button>

      {open && (
        <div className="wb-entry__body">
          {filledPages.map((page) => (
            <div key={page.id} className="wb-entry__page">
              <h3 className="wb-entry__page-title">{page.title}</h3>
              <p className="wb-entry__page-text">{entry.fields[page.id]}</p>
              {page.variant === 'question-check' &&
                entry.fields.checks?.some(Boolean) && (
                  <p className="wb-entry__checks">
                    {page.checks
                      .filter((_, i) => entry.fields.checks[i])
                      .join(' · ')}
                  </p>
                )}
            </div>
          ))}
          <div className="wb-entry__actions">
            <button type="button" className="btn btn--outline btn--sm" onClick={handleCopy}>
              {copied ? 'הועתק ✓' : 'העתק כטקסט'}
            </button>
            <button type="button" className="btn btn--outline btn--sm" onClick={handleDelete}>
              מחק
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default function Workbook() {
  const { entries, deleteEntry, draft, storageBlocked } = useWorkbook()

  return (
    <div className="container container--narrow stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">מחברת העבודה</p>
        <h1 className="page-head__title">תיקי השיחה שלך</h1>
        <p className="page-head__lead">
          כל תיק הוא שיחה אחת אמיתית שעבדת עליה — הבייסליין, הרגע, ומה ששאלת.
        </p>
      </header>

      {storageBlocked && (
        <p className="wb-storage-warn">
          לא ניתן לשמור בדפדפן זה — תיקים חדשים לא יישמרו.
        </p>
      )}

      {draft?.fields && (
        <p className="wb-resume-row">
          תיק פתוח מ{formatDay(draft.updatedAt)} —{' '}
          <Link to="/workbook/new" className="link-gold">
            להמשיך ←
          </Link>
        </p>
      )}

      {entries.length === 0 ? (
        <section className="wb-empty">
          <h2 className="wb-empty__title">
            עוד אין תיקים — וזה בדיוק המקום להתחיל
          </h2>
          <p className="wb-empty__text">
            לוקח כ-10 דקות. אפשר גם פחות. הכול נשמר תוך כדי.
          </p>
          <Link to="/workbook/new" className="btn btn--gold">
            פתח תיק על שיחה ←
          </Link>
          <p className="wb-empty__note">
            התיקים נשמרים בדפדפן שלך בלבד — אף אחד אחר לא רואה.
          </p>
        </section>
      ) : (
        <>
          <div className="wb-archive-actions">
            <Link to="/workbook/new" className="btn btn--gold">
              פתח תיק חדש ←
            </Link>
          </div>
          <ul className="wb-entries">
            {entries.map((entry) => (
              <EntryRow key={entry.id} entry={entry} onDelete={deleteEntry} />
            ))}
          </ul>
          <p className="wb-empty__note">
            התיקים נשמרים בדפדפן שלך בלבד — אף אחד אחר לא רואה.
          </p>
        </>
      )}
    </div>
  )
}
