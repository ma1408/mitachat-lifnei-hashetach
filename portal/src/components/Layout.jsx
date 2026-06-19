import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { COURSE_TITLE } from '../data/course'
import Icon from './Icon.jsx'
import BrandMark from './BrandMark.jsx'

// ניווט ערכת העבודה הדיגיטלית. תוכן נוסף ששמור בקוד אינו מוצג
// בניווט הראשי בתצוגה זו.
const studentNavItems = [
  { to: '/dashboard', label: 'הערכה', icon: 'home' },
  { to: '/guide',     label: 'המדריך', icon: 'compass' },
  { to: '/course',    label: 'היחידות', icon: 'list' },
  { to: '/cases',     label: 'תיקי שיחה', icon: 'folder' },
  { to: '/workbook',  label: 'מחברת העבודה', icon: 'pencil' },
  { to: '/glossary',  label: 'מילון', icon: 'book' },
]

export default function Layout() {
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  const navItems = isAdmin
    ? [...studentNavItems, { to: '/admin', label: 'Admin', icon: 'settings' }]
    : studentNavItems

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <NavLink to="/dashboard" className="brand" onClick={() => setMenuOpen(false)}>
            <BrandMark className="brand__mark" />
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
                  <Icon name={item.icon} />
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
        {user?.email && (
          <p className="footer__user">מחובר/ת כ־{user.email}</p>
        )}
      </footer>
    </div>
  )
}
