import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { isAuthed, isSuspended, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="auth-loading">
        <span className="auth-loading__dot" />
        <span className="auth-loading__dot" />
        <span className="auth-loading__dot" />
      </div>
    )
  }

  if (isSuspended) {
    return (
      <div className="auth-suspended">
        <div className="auth-suspended__card">
          <p className="auth-suspended__title">הגישה הושהתה</p>
          <p className="auth-suspended__text">
            הגישה שלך לערכה הושהתה זמנית. לפרטים ולחידוש הגישה פנה לבעל הערכה.
          </p>
        </div>
      </div>
    )
  }

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
