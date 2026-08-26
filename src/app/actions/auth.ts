'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const user = formData.get('username')
  const pass = formData.get('password')
  
  if (user === 'admin' && pass === 'lisboa1145') {
    const cookieStore = await cookies()
    cookieStore.set('auth', 'admin-token', { path: '/' })
    redirect('/dashboard/admin')
  }
  return { error: 'Usuario o contraseña incorrectos' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth')
  redirect('/login')
}
