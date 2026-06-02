import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../lib/supabase.js'

export default function Admin() {
  const { profile, inviteStudent } = useAuth()

  const [students,     setStudents]     = useState([])
  const [loadingList,  setLoadingList]  = useState(true)
  const [inviteEmail,  setInviteEmail]  = useState('')
  const [inviteStatus, setInviteStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [inviteMsg,    setInviteMsg]    = useState('')
  const [toggleBusy,   setToggleBusy]  = useState(null) // id of row being toggled

  const fetchStudents = useCallback(async () => {
    setLoadingList(true)
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('joined_at', { ascending: false })
    setLoadingList(false)
    if (!error) setStudents(data ?? [])
  }, [])

  useEffect(() => { fetchStudents() }, [fetchStudents])

  async function handleToggleActive(student) {
    setToggleBusy(student.id)
    const { error } = await supabase
      .from('profiles')
      .update({ active: !student.active })
      .eq('id', student.id)
    setToggleBusy(null)
    if (!error) {
      setStudents(prev =>
        prev.map(s => s.id === student.id ? { ...s, active: !student.active } : s)
      )
    }
  }

  async function handleInvite(e) {
    e.preventDefault()
    const email = inviteEmail.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setInviteStatus('error')
      setInviteMsg('כתובת אימייל לא תקינה.')
      return
    }
    setInviteStatus('sending')
    setInviteMsg('')
    const err = await inviteStudent(email)
    if (err) {
      setInviteStatus('error')
      setInviteMsg('שגיאה בשליחה: ' + err.message)
    } else {
      setInviteStatus('sent')
      setInviteMsg(`קישור כניסה נשלח ל-${email}`)
      setInviteEmail('')
    }
  }

  const formatDate = (iso) =>
    iso ? new Date(iso).toLocaleDateString('he-IL') : '—'

  const studentCount = students.filter(s => s.role === 'student').length
  const activeCount  = students.filter(s => s.role === 'student' && s.active).length

  return (
    <div className="container stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">ניהול</p>
        <h1 className="page-head__title">Admin Dashboard</h1>
        <p className="page-head__lead">
          מחובר כ-Admin · {profile?.email}
        </p>
      </header>

      {/* ─── Stats ─── */}
      <div className="admin-stats">
        <div className="admin-stat">
          <span className="admin-stat__num">{studentCount}</span>
          <span className="admin-stat__label">תלמידים רשומים</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat__num">{activeCount}</span>
          <span className="admin-stat__label">פעילים</span>
        </div>
        <div className="admin-stat">
          <span className="admin-stat__num">{studentCount - activeCount}</span>
          <span className="admin-stat__label">מושהים</span>
        </div>
      </div>

      {/* ─── Invite ─── */}
      <section className="admin-section">
        <h2 className="admin-section__title">הוסף תלמיד</h2>
        <p className="admin-section__desc">
          הזן אימייל של תלמיד — הוא יקבל קישור כניסה ויוכל להגדיר סיסמה.
        </p>
        <form className="admin-invite" onSubmit={handleInvite}>
          <input
            type="email"
            className="field__input"
            placeholder="student@example.com"
            dir="ltr"
            value={inviteEmail}
            onChange={e => { setInviteEmail(e.target.value); setInviteStatus(null) }}
            disabled={inviteStatus === 'sending'}
          />
          <button
            type="submit"
            className="btn btn--gold btn--sm"
            disabled={inviteStatus === 'sending'}
          >
            {inviteStatus === 'sending' ? 'שולח...' : 'שלח קישור כניסה'}
          </button>
        </form>
        {inviteStatus === 'sent' &&
          <p className="admin-invite__ok">✓ {inviteMsg}</p>}
        {inviteStatus === 'error' &&
          <p className="admin-invite__err">✗ {inviteMsg}</p>}
      </section>

      {/* ─── Students list ─── */}
      <section className="admin-section">
        <div className="admin-section__head">
          <h2 className="admin-section__title">רשימת תלמידים</h2>
          <button className="btn btn--outline btn--sm" onClick={fetchStudents}>
            רענן
          </button>
        </div>

        {loadingList ? (
          <p className="muted">טוען...</p>
        ) : students.filter(s => s.role === 'student').length === 0 ? (
          <p className="muted">אין תלמידים עדיין. שלח קישור כניסה לתלמיד הראשון.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>שם</th>
                  <th>אימייל</th>
                  <th>הצטרף</th>
                  <th>סטטוס</th>
                  <th>פעולה</th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter(s => s.role === 'student')
                  .map(s => (
                    <tr key={s.id} className={!s.active ? 'admin-table__row--inactive' : ''}>
                      <td>{s.name || '—'}</td>
                      <td dir="ltr">{s.email || '—'}</td>
                      <td>{formatDate(s.joined_at)}</td>
                      <td>
                        <span className={`admin-badge ${s.active ? 'admin-badge--active' : 'admin-badge--suspended'}`}>
                          {s.active ? 'פעיל' : 'מושהה'}
                        </span>
                      </td>
                      <td>
                        <button
                          className={`btn btn--sm ${s.active ? 'btn--ghost' : 'btn--outline'}`}
                          onClick={() => handleToggleActive(s)}
                          disabled={toggleBusy === s.id}
                        >
                          {toggleBusy === s.id
                            ? '...'
                            : s.active ? 'השהה גישה' : 'החזר גישה'}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
