import { UserPlus, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function UsersManagement() {
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
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
              <input type="text" placeholder="Ej: Lionel Messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Rol</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white">
                <option>Jugador</option>
                <option>Entrenador</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de Usuario asignado</label>
              <input type="text" placeholder="Ej: l.messi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña asignada</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none" />
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <button type="button" className="bg-cadcc-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-bold shadow-md">
              <Save className="w-4 h-4" />
              Guardar Usuario en Base de Datos
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
