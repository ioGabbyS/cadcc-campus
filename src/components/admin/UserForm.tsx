'use client'

import { Save, CheckCircle } from 'lucide-react'
import { useActionState } from 'react'
import { createUser } from '@/app/actions/users'

export function UserForm() {
  const [state, formAction, isPending] = useActionState(createUser, null)

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
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Nombre Completo</label>
          <input type="text" name="fullName" required placeholder="Ej: Lionel Messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Rol</label>
          <select name="role" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white text-sm">
            <option value="Jugador">Jugador</option>
            <option value="Entrenador">Entrenador</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Usuario</label>
          <input type="text" name="username" required placeholder="Ej: l.messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
          <input type="text" name="password" required placeholder="••••••••" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none text-sm" />
        </div>
        
        <div className="pt-4">
          <button type="submit" disabled={isPending} className="w-full bg-cadcc-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-bold shadow-md disabled:opacity-50 text-sm">
            <Save className="w-4 h-4" />
            {isPending ? 'Guardando...' : 'Crear Usuario'}
          </button>
        </div>
      </form>
    </div>
  )
}
