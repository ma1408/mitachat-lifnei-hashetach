import { createContext, useContext, useEffect, useState } from 'react'

// בקרת גישה ל-MVP בלבד. אין כאן אבטחה אמיתית:
// הזדהות נשמרת ב-localStorage ומשמשת רק כדי לחסום ויזואלית את האזור.
// הגנה אמיתית תופעל לאחר חיבור Supabase Auth.

const AuthContext = createContext(null)
const STORAGE_KEY = 'mitachat_auth'

function readAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readAuth())

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [user])

  // login של MVP: כל אימייל תקין + סיסמה לא ריקה מספיקים.
  // אין אימות מול שרת.
  function login(email) {
    const cleanEmail = (email || '').trim()
    setUser({ email: cleanEmail, loggedInAt: Date.now() })
    return true
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthed: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
