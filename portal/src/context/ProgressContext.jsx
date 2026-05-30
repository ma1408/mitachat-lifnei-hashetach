import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { lessonOrder, TOTAL_LESSONS } from '../data/course'

// מערכת התקדמות בסיסית מבוססת localStorage.
// שומרים: אילו שיעורים הושלמו, ומהו השיעור האחרון שנצפה.

const ProgressContext = createContext(null)
const STORAGE_KEY = 'mitachat_progress'

function readProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return {
      completed: parsed?.completed ?? {},
      lastLessonId: parsed?.lastLessonId ?? null,
    }
  } catch {
    return { completed: {}, lastLessonId: null }
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(() => readProgress())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  function markCompleted(lessonId) {
    setState((s) => ({
      ...s,
      completed: { ...s.completed, [lessonId]: true },
    }))
  }

  function markIncomplete(lessonId) {
    setState((s) => {
      const next = { ...s.completed }
      delete next[lessonId]
      return { ...s, completed: next }
    })
  }

  function toggleCompleted(lessonId) {
    setState((s) => {
      const next = { ...s.completed }
      if (next[lessonId]) delete next[lessonId]
      else next[lessonId] = true
      return { ...s, completed: next }
    })
  }

  // נקרא בכניסה לעמוד שיעור, כדי לאפשר "המשך מהשיעור האחרון"
  function setLastLesson(lessonId) {
    setState((s) =>
      s.lastLessonId === lessonId ? s : { ...s, lastLessonId: lessonId }
    )
  }

  const derived = useMemo(() => {
    const completedCount = lessonOrder.filter(
      (id) => state.completed[id]
    ).length
    const percent = Math.round((completedCount / TOTAL_LESSONS) * 100)

    // השיעור להמשך: השיעור האחרון שנצפה, או הראשון שלא הושלם, או הראשון
    let resumeLessonId =
      state.lastLessonId ||
      lessonOrder.find((id) => !state.completed[id]) ||
      lessonOrder[0]

    return { completedCount, percent, resumeLessonId }
  }, [state])

  function status(lessonId) {
    if (state.completed[lessonId]) return 'completed'
    if (state.lastLessonId === lessonId) return 'in-progress'
    return 'not-started'
  }

  return (
    <ProgressContext.Provider
      value={{
        completed: state.completed,
        lastLessonId: state.lastLessonId,
        ...derived,
        isCompleted: (id) => !!state.completed[id],
        status,
        markCompleted,
        markIncomplete,
        toggleCompleted,
        setLastLesson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}

export const STATUS_LABELS = {
  'not-started': 'לא התחיל',
  'in-progress': 'בתהליך',
  completed: 'הושלם',
}
