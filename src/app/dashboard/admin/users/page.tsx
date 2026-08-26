'use client'

import { UserPlus, Save, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'
import { createUser } from '@/app/actions/users'

export default function UsersManagement() {
  const [state, formAction, isPending] = useActionState(createUser, null)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/dashboard/admin" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cadcc-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver al Panel Admin
      </Link>

      <h1 className="text-2xl font-bold text-cadcc-black mb-8 border-l-4 border-cadcc-gold pl-4">
        Crear Nuevo Usuario
      </h1>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        {state?.success && (
          <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-3 border border-green-200">
            <CheckCircle className="w-5 h-5" />
            <span className="font-bold">{state.success}</span>
          </div>
        )}

        {state?.error && (
          <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 border border-red-200">
            <span className="font-bold">{state.error}</span>
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
              <input type="text" name="fullName" required placeholder="Ej: Lionel Messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Rol</label>
              <select name="role" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white">
                <option value="Jugador">Jugador</option>
                <option value="Entrenador">Entrenador</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de Usuario asignado</label>
              <input type="text" name="username" required placeholder="Ej: l.messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña asignada</label>
              <input type="password" name="password" required placeholder="••••••••" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button type="submit" disabled={isPending} className="bg-cadcc-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-bold shadow-md disabled:opacity-50">
              <Save className="w-4 h-4" />
              {isPending ? 'Guardando...' : 'Guardar Usuario en Base de Datos'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
