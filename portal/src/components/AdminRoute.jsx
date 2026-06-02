import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AdminRoute({ children }) {
  const { isAdmin, isAuthed, loading } = useAuth()

  if (loading) return null

  if (!isAuthed) return <Navigate to="/login" replace />

  if (!isAdmin) return <Navigate to="/dashboard" replace />

  return children
}
