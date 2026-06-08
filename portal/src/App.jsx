import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import Layout from './components/Layout.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Course from './pages/Course.jsx'
import Lesson from './pages/Lesson.jsx'
import Glossary from './pages/Glossary.jsx'
import Admin from './pages/Admin.jsx'
import Intro from './pages/Intro.jsx'
import StudyGuide from './pages/StudyGuide.jsx'
import Practice from './pages/Practice.jsx'
import Checklist from './pages/Checklist.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Admin — הגנה כפולה: מחובר + role=admin */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Layout />
          </AdminRoute>
        }
      >
        <Route index element={<Admin />} />
      </Route>

      {/* Student routes */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/intro"        element={<Intro />} />
        <Route path="/study-guide"  element={<StudyGuide />} />
        <Route path="/practice"     element={<Practice />} />
        <Route path="/checklist"    element={<Checklist />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/glossary"  element={<Glossary />} />
        {/* הקורס המלא (15 שיעורים) נשאר בקוד — מוסתר מהניווט במצב starter */}
        <Route path="/course"    element={<Course />} />
        <Route path="/downloads" element={<Navigate to="/glossary" replace />} />
      </Route>

      <Route path="/"  element={<Navigate to="/dashboard" replace />} />
      <Route path="*"  element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
