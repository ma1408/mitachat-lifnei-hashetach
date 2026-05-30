import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { COURSE_TITLE } from '../data/course'

const navItems = [
  { to: '/dashboard', label: 'בית', icon: '⌂' },
  { to: '/course', label: 'הקורס', icon: '☰' },
  { to: '/glossary', label: 'מילון', icon: '◎' },
]

export default function Layout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <NavLink to="/dashboard" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">{COURSE_TITLE}</span>
          </NavLink>

          <nav className={`mainnav ${menuOpen ? 'mainnav--open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `mainnav__link ${isActive ? 'is-active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className="mainnav__icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
            <button className="mainnav__logout" onClick={handleLogout}>
              יציאה
            </button>
          </nav>

          <button
            className="hamburger"
            aria-label="תפריט"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer__note">
          בשלב זה זו בקרת גישה לבדיקת MVP בלבד. הגנה אמיתית תופעל לאחר חיבור
          Supabase Auth.
        </p>
        {user?.email && (
          <p className="footer__user">מחובר/ת כ־{user.email}</p>
        )}
      </footer>
    </div>
  )
}
