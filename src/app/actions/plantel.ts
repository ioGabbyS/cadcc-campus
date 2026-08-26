'use server'

import { supabase } from '@/lib/supabase/client'
import { revalidatePath } from 'next/cache'

export async function addRosterPlayer(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const jerseyNumber = formData.get('jerseyNumber') as string
  const position = formData.get('position') as string
  const file = formData.get('image') as File

  if (!firstName || !lastName || !position) {
    return { error: 'Nombre, Apellido y Posición son obligatorios.' }
  }

  try {
    let imageUrl = null

    // Si subieron foto, la procesamos
    if (file && file.size > 0) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `roster/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('campus_images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('campus_images').getPublicUrl(filePath)
      imageUrl = data.publicUrl
    }

    const { error: dbError } = await supabase.from('roster_players').insert([
      { 
        first_name: firstName, 
        last_name: lastName, 
        jersey_number: jerseyNumber ? parseInt(jerseyNumber) : null,
        position: position,
        image_url: imageUrl
      }
    ])

    if (dbError) throw dbError

    revalidatePath('/plantel')
    revalidatePath('/dashboard/admin/plantel')
    
    return { success: '¡Jugador agregado al plantel exitosamente!' }
    
  } catch (err: any) {
    console.error(err)
    return { error: 'Error al guardar el jugador: ' + err.message }
  }
}
