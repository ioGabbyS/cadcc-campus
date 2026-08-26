import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { RosterForm } from '@/components/admin/RosterForm'

export const revalidate = 0; 

export default async function RosterManagement() {
  const { data: players, error } = await supabase
    .from('roster_players')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link href="/dashboard/admin" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cadcc-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver al Panel Admin
      </Link>

      <h1 className="text-2xl font-bold text-cadcc-black mb-8 border-l-4 border-cadcc-gold pl-4">
        Gestión del Plantel
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cadcc-black">
            <Users className="w-5 h-5 text-cadcc-gold"/> Cargar Jugador
          </h2>
          <RosterForm />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cadcc-black">
            <Users className="w-5 h-5 text-cadcc-gold"/> Jugadores Cargados
          </h2>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs">Foto</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs">Jugador</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs">Posición</th>
                    <th className="px-6 py-4 font-bold text-gray-600 uppercase text-xs text-center">Dorsal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {error && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-red-500 font-bold">
                        Error: La tabla roster_players no existe. Falta correr el SQL.
                      </td>
                    </tr>
                  )}
                  {players && players.map(player => (
                    <tr key={player.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                          {player.image_url ? (
                            <img src={player.image_url} alt="foto" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">N/A</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-3 font-bold text-gray-800">
                        {player.last_name}, {player.first_name}
                      </td>
                      <td className="px-6 py-3">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-bold border border-blue-200">
                          {player.position}
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono font-bold text-cadcc-black text-center text-lg">
                        {player.jersey_number || '-'}
                      </td>
                    </tr>
                  ))}
                  {(!players || players.length === 0) && !error && (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No hay jugadores en el plantel aún.</td>
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
