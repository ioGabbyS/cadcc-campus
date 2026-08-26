'use server'

import { supabase } from '@/lib/supabase/client'
import { revalidatePath } from 'next/cache'

export async function createUser(prevState: any, formData: FormData) {
  const fullName = formData.get('fullName') as string
  const role = formData.get('role') as string
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!fullName || !role || !username || !password) {
    return { error: 'Por favor completa todos los campos.' }
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([
        { 
          full_name: fullName, 
          role: role, 
          username: username, 
          password: password 
        }
      ])

    if (error) {
      if (error.code === '23505') { // Código de error para unique violation en PostgreSQL
        return { error: 'Ese nombre de usuario ya existe. Por favor elige otro.' }
      }
      return { error: 'Error de base de datos: ' + error.message }
    }

    revalidatePath('/dashboard/admin/users')
    return { success: '¡Usuario creado exitosamente!' }
    
  } catch (err: any) {
    return { error: 'Ocurrió un error inesperado.' }
  }
}
