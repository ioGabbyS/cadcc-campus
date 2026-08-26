'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'
import { Lock } from 'lucide-react'

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => await login(formData), 
    null
  )

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-cadcc-black text-center py-6 border-b-4 border-cadcc-gold">
          <div className="w-16 h-16 bg-cadcc-bg rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Lock className="w-8 h-8 text-cadcc-gold" />
          </div>
          <h1 className="text-2xl font-bold text-white">Acceso Administrativo</h1>
        </div>
        
        <form action={formAction} className="p-8 space-y-6">
          {state?.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-semibold text-center border border-red-200">
              {state.error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Usuario</label>
            <input 
              type="text" 
              name="username" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold focus:border-transparent outline-none transition-all"
              placeholder="Ej: admin"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-cadcc-gold text-cadcc-black font-bold py-3 rounded-lg hover:brightness-110 transition-all shadow-md disabled:opacity-50"
          >
            {isPending ? 'Ingresando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  )
}
