'use client'

import { UploadCloud, Image as ImageIcon, ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function ImagesManagement() {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const [section, setSection] = useState('Banner Principal (Inicio)')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setMessage(null)

    try {
      // 1. Crear nombre único y subir a Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `uploads/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('campus_images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // 2. Obtener la URL pública de la imagen subida
      const { data } = supabase.storage.from('campus_images').getPublicUrl(filePath)
      
      // 3. Guardar el registro en la base de datos (tabla site_images)
      const { error: dbError } = await supabase.from('site_images').insert([
        { section_name: section, image_url: data.publicUrl }
      ])

      if (dbError) throw dbError

      setMessage({ type: 'success', text: '¡Imagen subida y guardada con éxito!' })
    } catch (error: any) {
      console.error(error)
      setMessage({ type: 'error', text: 'Error al subir la imagen. Verifica que la política RLS del storage lo permita.' })
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/dashboard/admin" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cadcc-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver al Panel Admin
      </Link>

      <h1 className="text-2xl font-bold text-cadcc-black mb-8 border-l-4 border-cadcc-gold pl-4">
        Gestor de Imágenes de la Web
      </h1>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 border text-sm ${
            message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-600 border-red-200'
          }`}>
            {message.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
            <span className="font-bold">{message.text}</span>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">¿Para qué sección es la imagen?</label>
          <select 
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white"
          >
            <option>Banner Principal (Inicio)</option>
            <option>Foto para Figura del Partido</option>
            <option>Escudos y Logos (Footer/Header)</option>
          </select>
        </div>

        {/* Input de archivo oculto */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />

        <div 
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center transition-colors flex flex-col items-center justify-center group ${
            isUploading ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'bg-gray-50 hover:border-cadcc-gold cursor-pointer'
          }`}
        >
          <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
            {isUploading ? (
              <Loader2 className="w-8 h-8 text-cadcc-gold animate-spin" />
            ) : (
              <UploadCloud className="w-8 h-8 text-cadcc-gold" />
            )}
          </div>
          <p className="font-bold text-cadcc-black mb-1">
            {isUploading ? 'Subiendo imagen...' : 'Haz clic aquí para seleccionar tu imagen'}
          </p>
          <p className="text-sm text-gray-500 mb-4">Solo formatos PNG, JPG o WEBP</p>
          
          <button 
            type="button"
            disabled={isUploading}
            className="bg-cadcc-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-bold shadow-md disabled:opacity-50"
          >
            {isUploading ? 'Procesando...' : 'Examinar Archivos'}
          </button>
        </div>
      </div>
    </div>
  )
}
