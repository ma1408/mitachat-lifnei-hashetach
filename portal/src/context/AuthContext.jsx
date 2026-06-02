import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession]   = useState(undefined) // undefined = טוען
  const [profile, setProfile]   = useState(null)

  // האזנה לשינויי session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session ?? null)
    )
    return () => subscription.unsubscribe()
  }, [])

  // טעינת פרופיל כשיש session
  useEffect(() => {
    if (!session?.user) {
      setProfile(null)
      return
    }
    supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => setProfile(data ?? null))
  }, [session])

  async function login(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error ?? null
  }

  async function logout() {
    await supabase.auth.signOut()
  }

  // שליחת קישור כניסה לתלמיד חדש (ללא service_role)
  async function inviteStudent(email) {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.href.split('#')[0],
      },
    })
    return error ?? null
  }

  const loading   = session === undefined
  const isAuthed  = !!session && !!profile && profile.active === true
  const isAdmin   = isAuthed && profile?.role === 'admin'
  const isSuspended = !!session && !!profile && profile.active === false

  return (
    <AuthContext.Provider value={{
      user: session?.user ?? null,
      profile,
      isAuthed,
      isAdmin,
      isSuspended,
      loading,
      login,
      logout,
      inviteStudent,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
