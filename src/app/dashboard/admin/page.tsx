import Link from 'next/link'
import { Users, Image as ImageIcon, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold text-cadcc-black border-l-4 border-cadcc-gold pl-4">
          Panel de Administración
        </h1>
        <Link href="/login" className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-red-100">
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card: Gestión de Usuarios */}
        <Link href="/dashboard/admin/users" className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-cadcc-gold hover:shadow-lg transition-all flex items-start gap-4">
          <div className="bg-cadcc-black p-4 rounded-xl group-hover:scale-110 transition-transform">
            <Users className="w-8 h-8 text-cadcc-gold" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-cadcc-black mb-1">Crear Usuarios</h2>
            <p className="text-sm text-gray-500">Asigna usuarios y contraseñas a entrenadores y jugadores.</p>
          </div>
        </Link>

        {/* Card: Gestión de Plantel */}
        <Link href="/dashboard/admin/plantel" className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-cadcc-gold hover:shadow-lg transition-all flex items-start gap-4">
          <div className="bg-cadcc-black p-4 rounded-xl group-hover:scale-110 transition-transform">
            <Users className="w-8 h-8 text-cadcc-gold" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-cadcc-black mb-1">Armar Plantel</h2>
            <p className="text-sm text-gray-500">Sube fotos, nombres y dorsales de los jugadores del plantel oficial.</p>
          </div>
        </Link>

        {/* Card: Gestión de Imágenes */}
        <Link href="/dashboard/admin/images" className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-cadcc-gold hover:shadow-lg transition-all flex items-start gap-4">
          <div className="bg-cadcc-black p-4 rounded-xl group-hover:scale-110 transition-transform">
            <ImageIcon className="w-8 h-8 text-cadcc-gold" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-cadcc-black mb-1">Subir Imágenes</h2>
            <p className="text-sm text-gray-500">Gestiona banners, escudos y fotos de las figuras del club para la página principal.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
