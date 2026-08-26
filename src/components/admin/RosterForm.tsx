'use client'

import { Save, CheckCircle, UploadCloud, Loader2 } from 'lucide-react'
import { useActionState, useState, useRef } from 'react'
import { addRosterPlayer } from '@/app/actions/plantel'

export function RosterForm() {
  const [state, formAction, isPending] = useActionState(addRosterPlayer, null)
  const [fileName, setFileName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      {state?.success && (
        <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-3 border border-green-200 text-sm">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="font-bold">{state.success}</span>
        </div>
      )}

      {state?.error && (
        <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 border border-red-200 text-sm">
          <span className="font-bold">{state.error}</span>
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Nombre</label>
            <input type="text" name="firstName" required placeholder="Ej: Lionel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Apellido</label>
            <input type="text" name="lastName" required placeholder="Ej: Garcia" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Posición</label>
            <select name="position" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white text-sm">
              <option value="Arquero">Arquero</option>
              <option value="Defensor">Defensor</option>
              <option value="Mediocampista">Mediocampista</option>
              <option value="Delantero">Delantero</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Dorsal (N°)</label>
            <input type="number" name="jerseyNumber" placeholder="Ej: 10" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Foto del Jugador</label>
          <input 
            type="file" 
            name="image" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-cadcc-gold transition-colors bg-gray-50 flex items-center justify-center gap-3"
          >
            <UploadCloud className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-semibold text-gray-600">
              {fileName ? fileName : 'Subir foto (PNG/JPG)'}
            </span>
          </div>
        </div>
        
        <div className="pt-4">
          <button type="submit" disabled={isPending} className="w-full bg-cadcc-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-bold shadow-md disabled:opacity-50 text-sm">
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isPending ? 'Guardando...' : 'Agregar al Plantel'}
          </button>
        </div>
      </form>
    </div>
  )
}
