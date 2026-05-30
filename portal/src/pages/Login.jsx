import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { COURSE_TITLE, COURSE_SUBTITLE } from '../data/course'

export default function Login() {
  const { isAuthed, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // אם כבר מחוברים - לא נשארים במסך הכניסה
  if (isAuthed) {
    return <Navigate to="/dashboard" replace />
  }

  function handleSubmit(e) {
    e.preventDefault()
    const cleanEmail = email.trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)

    if (!validEmail) {
      setError('נא להזין כתובת אימייל תקינה')
      return
    }
    if (!password) {
      setError('נא להזין סיסמה')
      return
    }

    setError('')
    login(cleanEmail)
    // ניווט מפורש ל-dashboard אחרי שמירת ההזדהות
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="login">
      <div className="login__aura" aria-hidden="true" />
      <div className="login__card">
        <div className="login__brand">
          <span className="login__mark" aria-hidden="true" />
          <h1 className="login__title">{COURSE_TITLE}</h1>
          <p className="login__subtitle">{COURSE_SUBTITLE}</p>
        </div>

        <h2 className="login__heading">כניסה לאזור התלמידים</h2>

        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="field__label">אימייל</span>
            <input
              type="email"
              className="field__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              dir="ltr"
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span className="field__label">סיסמה</span>
            <input
              type="password"
              className="field__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              dir="ltr"
              autoComplete="current-password"
            />
          </label>

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="btn btn--gold btn--block">
            כניסה לאזור התלמידים
          </button>

          <p className="login__hint">
            הגישה מיועדת לתלמידים שרכשו את הקורס.
          </p>
        </form>

        <p className="login__disclaimer">
          בשלב זה זו בקרת גישה לבדיקת MVP בלבד. הגנה אמיתית תופעל לאחר חיבור
          Supabase Auth.
        </p>
      </div>
    </div>
  )
}
