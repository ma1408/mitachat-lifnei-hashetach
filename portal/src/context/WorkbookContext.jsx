import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { EMPTY_FIELDS } from '../data/workbookTemplate'

// תיקי השיחה של התלמיד — נשמרים בדפדפן בלבד.
// שני מפתחות נפרדים: הארכיון והטיוטה הפתוחה.
// לא נוגעים ב-mitachat_progress.
const ENTRIES_KEY = 'mitachat_workbook'
const DRAFT_KEY = 'mitachat_workbook_draft'
const DEBOUNCE_MS = 800

function safeRead(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    /* storage חסום — אין מה לעשות */
  }
}

const WorkbookContext = createContext(null)

export function WorkbookProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    const data = safeRead(ENTRIES_KEY)
    return Array.isArray(data?.entries) ? data.entries : []
  })
  const [draft, setDraft] = useState(() => {
    const data = safeRead(DRAFT_KEY)
    return data?.fields ? data : null
  })
  const [storageBlocked, setStorageBlocked] = useState(() => {
    try {
      const probe = '__wb_probe__'
      localStorage.setItem(probe, '1')
      localStorage.removeItem(probe)
      return false
    } catch {
      return true
    }
  })

  const debounceRef = useRef(null)
  const pendingDraftRef = useRef(null)

  const flushDraft = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
    if (pendingDraftRef.current) {
      const ok = safeWrite(DRAFT_KEY, pendingDraftRef.current)
      if (!ok) setStorageBlocked(true)
      pendingDraftRef.current = null
    }
  }, [])

  const updateDraft = useCallback((fields) => {
    const next = { fields, updatedAt: new Date().toISOString() }
    setDraft(next)
    pendingDraftRef.current = next
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      debounceRef.current = null
      if (pendingDraftRef.current) {
        const ok = safeWrite(DRAFT_KEY, pendingDraftRef.current)
        if (!ok) setStorageBlocked(true)
        pendingDraftRef.current = null
      }
    }, DEBOUNCE_MS)
  }, [])

  const clearDraft = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
      debounceRef.current = null
    }
    pendingDraftRef.current = null
    setDraft(null)
    safeRemove(DRAFT_KEY)
  }, [])

  const saveEntry = useCallback((fields) => {
    const entry = {
      id: 'wb_' + Date.now(),
      createdAt: new Date().toISOString(),
      fields: { ...EMPTY_FIELDS, ...fields },
    }
    setEntries((prev) => {
      const next = [entry, ...prev]
      const ok = safeWrite(ENTRIES_KEY, { version: 1, entries: next })
      if (!ok) setStorageBlocked(true)
      return next
    })
    return entry
  }, [])

  const deleteEntry = useCallback((id) => {
    setEntries((prev) => {
      const next = prev.filter((e) => e.id !== id)
      const ok = safeWrite(ENTRIES_KEY, { version: 1, entries: next })
      if (!ok) setStorageBlocked(true)
      return next
    })
  }, [])

  // flush טיוטה ממתינה כשעוזבים את העמוד / סוגרים טאב
  useEffect(() => {
    window.addEventListener('beforeunload', flushDraft)
    return () => {
      window.removeEventListener('beforeunload', flushDraft)
      flushDraft()
    }
  }, [flushDraft])

  const value = {
    entries,
    saveEntry,
    deleteEntry,
    draft,
    updateDraft,
    flushDraft,
    clearDraft,
    storageBlocked,
  }

  return (
    <WorkbookContext.Provider value={value}>
      {children}
    </WorkbookContext.Provider>
  )
}

export function useWorkbook() {
  const ctx = useContext(WorkbookContext)
  if (!ctx) throw new Error('useWorkbook must be used within WorkbookProvider')
  return ctx
}
