import { useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { COURSE_TITLE } from '../data/course'
import BrandMark from '../components/BrandMark.jsx'
import Icon from '../components/Icon.jsx'

const ERROR_MESSAGES = {
  'Invalid login credentials': 'אימייל או סיסמה שגויים.',
  'Email not confirmed':       'האימייל טרם אומת. בדוק את תיבת הדואר שלך.',
  'Too many requests':         'יותר מדי ניסיונות. נסה שוב מאוחר יותר.',
}

function translateError(msg = '') {
  for (const [key, heb] of Object.entries(ERROR_MESSAGES)) {
    if (msg.includes(key)) return heb
  }
  return 'שגיאה בהתחברות. בדוק את הפרטים ונסה שוב.'
}

export default function Login() {
  const { isAuthed, login, isRecovery } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()
  const from      = location.state?.from || '/dashboard'

  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [error,    setError]    = useState('')
  const [busy,     setBusy]     = useState(false)

  if (isRecovery) return <Navigate to="/reset-password" replace />
  if (isAuthed) return <Navigate to={from} replace />

  async function handleSubmit(e) {
    e.preventDefault()
    const cleanEmail = email.trim()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError('נא להזין כתובת אימייל תקינה.')
      return
    }
    if (!password) {
      setError('נא להזין סיסמה.')
      return
    }

    setBusy(true)
    setError('')
    const err = await login(cleanEmail, password)
    setBusy(false)

    if (err) {
      setError(translateError(err.message))
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <div className="login">
      <div className="login__aura" aria-hidden="true" />
      <div className="login__card">
        <div className="login__brand">
          <BrandMark className="login__mark" />
          <h1 className="login__title">{COURSE_TITLE}</h1>
          <p className="login__subtitle">
            להבין מה קורה מתחת לפני השטח בשיחות אמיתיות — לזהות פערים,
            ולשאול שאלה טובה יותר.
          </p>
        </div>

        <ul className="login__trust">
          <li className="login__trust-item">
            <Icon name="layers" className="login__trust-icon" />
            יחידת ליבה: להבין שיחה ב-4 שלבים
          </li>
          <li className="login__trust-item">
            <Icon name="pencil" className="login__trust-icon" />
            מחברת עבודה + תיקי הדגמה
          </li>
          <li className="login__trust-item">
            <Icon name="book" className="login__trust-icon" />
            מדריך · מילון · צ׳ק ליסט
          </li>
        </ul>

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
              disabled={busy}
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
              disabled={busy}
            />
          </label>

          {error && <p className="login__error" role="alert">{error}</p>}

          <button
            type="submit"
            className="btn btn--gold btn--block"
            disabled={busy}
          >
            {busy ? 'מתחבר...' : 'כניסה לערכת העבודה'}
          </button>

          <p className="login__hint">
            הגישה מיועדת למי שרכש את הערכה.
            <br />
            קיבלת קישור כניסה? לחץ עליו ישירות מהמייל.
          </p>

          <p className="login__disclaimer">
            הערכה אינה מיועדת לזיהוי שקרים, קריאת מחשבות או אבחון אנשים.
          </p>
        </form>
      </div>
    </div>
  )
}
