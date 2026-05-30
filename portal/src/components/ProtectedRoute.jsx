import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// הגנה ויזואלית בלבד (MVP). מפנה ל-/login אם אין הזדהות שמורה.
// שומר את היעד המבוקש כדי לחזור אליו אחרי כניסה.
export default function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth()
  const location = useLocation()

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
