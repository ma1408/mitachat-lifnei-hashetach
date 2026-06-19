import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { COURSE_TITLE } from '../data/course'
import BrandMark from '../components/BrandMark.jsx'

export default function ResetPassword() {
  const { isRecovery, loading } = useAuth()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirm,  setConfirm]  = useState('')
  const [error,    setError]    = useState('')
  const [done,     setDone]     = useState(false)
  const [busy,     setBusy]     = useState(false)

  // אם אין recovery session פעיל (ולא בסיום מוצלח) — שלח ל-login
  useEffect(() => {
    if (!loading && !isRecovery && !done) {
      navigate('/login', { replace: true })
    }
  }, [loading, isRecovery, done])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('הסיסמה חייבת להכיל לפחות 6 תווים.')
      return
    }
    if (password !== confirm) {
      setError('הסיסמאות אינן תואמות.')
      return
    }

    setBusy(true)
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setBusy(false)

    if (updateError) {
      setError(updateError.message)
      return
    }

    setDone(true)
    await supabase.auth.signOut()
    setTimeout(() => navigate('/login', { replace: true }), 2500)
  }

  if (loading) {
    return (
      <div className="auth-loading">
        <span className="auth-loading__dot" />
        <span className="auth-loading__dot" />
        <span className="auth-loading__dot" />
      </div>
    )
  }

  if (done) {
    return (
      <div className="login">
        <div className="login__aura" aria-hidden="true" />
        <div className="login__card">
          <div className="login__brand">
            <BrandMark className="login__mark" />
            <h1 className="login__title">{COURSE_TITLE}</h1>
          </div>
          <p style={{ color: 'var(--ok)', textAlign: 'center', fontSize: '1rem', marginTop: '1.5rem' }}>
            ✓ הסיסמה עודכנה בהצלחה. מועבר לכניסה...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="login">
      <div className="login__aura" aria-hidden="true" />
      <div className="login__card">
        <div className="login__brand">
          <BrandMark className="login__mark" />
          <h1 className="login__title">{COURSE_TITLE}</h1>
        </div>

        <h2 className="login__heading">הגדרת סיסמה חדשה</h2>

        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="field__label">סיסמה חדשה</span>
            <input
              type="password"
              className="field__input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="לפחות 6 תווים"
              dir="ltr"
              autoComplete="new-password"
              disabled={busy}
            />
          </label>

          <label className="field">
            <span className="field__label">אימות סיסמה</span>
            <input
              type="password"
              className="field__input"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="הזן שוב את הסיסמה"
              dir="ltr"
              autoComplete="new-password"
              disabled={busy}
            />
          </label>

          {error && <p className="login__error" role="alert">{error}</p>}

          <button
            type="submit"
            className="btn btn--gold btn--block"
            disabled={busy}
          >
            {busy ? 'מעדכן...' : 'עדכן סיסמה'}
          </button>
        </form>
      </div>
    </div>
  )
}
