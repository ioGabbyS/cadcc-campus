import { ArrowLeft, Users, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { UserForm } from '@/components/admin/UserForm'

export const revalidate = 0; // Forzar que siempre traiga los datos más frescos

export default async function UsersManagement() {
  // Traer los usuarios desde la base de datos
  const { data: users, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link href="/dashboard/admin" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cadcc-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver al Panel Admin
      </Link>

      <h1 className="text-2xl font-bold text-cadcc-black mb-8 border-l-4 border-cadcc-gold pl-4">
        Gestión de Usuarios
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario a la izquierda */}
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cadcc-black">
            <Users className="w-5 h-5 text-cadcc-gold"/> Crear Nuevo
          </h2>
          <UserForm />
        </div>

        {/* Tabla a la derecha */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2 text-cadcc-black">
              <Users className="w-5 h-5 text-cadcc-gold"/> Usuarios Registrados
            </h2>
            <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold flex items-center gap-1 border border-red-200">
              <ShieldAlert className="w-3 h-3" /> Solo visible para Administradores
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs tracking-wider">Nombre</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs tracking-wider">Rol</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs tracking-wider">Usuario</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs tracking-wider">Contraseña</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {error && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-red-500 font-bold">
                        Error al cargar los usuarios. Verifica que la tabla exista.
                      </td>
                    </tr>
                  )}
                  {users && users.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-800">{user.full_name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold border ${
                          user.role === 'Administrador' ? 'bg-red-50 text-red-700 border-red-200' :
                          user.role === 'Entrenador' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          'bg-gray-100 text-gray-700 border-gray-200'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-gray-600 bg-gray-50/50">{user.username}</td>
                      <td className="px-6 py-4 font-mono text-gray-600">{user.password}</td>
                    </tr>
                  ))}
                  {(!users || users.length === 0) && !error && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No hay usuarios registrados aún.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
