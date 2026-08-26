import { supabase } from '@/lib/supabase/client'

export const revalidate = 0;

export default async function PlantelPublico() {
  const { data: players, error } = await supabase
    .from('roster_players')
    .select('*')
    .order('last_name', { ascending: true })

  // Agrupar por posición
  const groupedPlayers = {
    Arquero: players?.filter(p => p.position === 'Arquero') || [],
    Defensor: players?.filter(p => p.position === 'Defensor') || [],
    Mediocampista: players?.filter(p => p.position === 'Mediocampista') || [],
    Delantero: players?.filter(p => p.position === 'Delantero') || []
  }

  const renderPositionSection = (title: string, group: any[]) => {
    if (group.length === 0) return null;
    return (
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-red-600 mb-8 border-b-2 border-red-100 pb-2 inline-block">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {group.map(player => (
            <div key={player.id} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 rounded-b-xl">
              <div className="aspect-[3/4] bg-gray-100 w-full overflow-hidden relative">
                {player.image_url ? (
                  <img src={player.image_url} alt={player.last_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <span className="text-xs">Sin Foto</span>
                  </div>
                )}
                {/* Dorsal superpuesto */}
                {player.jersey_number && (
                  <div className="absolute bottom-2 left-2 text-red-600 font-extrabold text-3xl md:text-5xl italic opacity-90 drop-shadow-md">
                    {player.jersey_number}
                  </div>
                )}
              </div>
              <div className="bg-white p-3 text-center border-t-4 border-red-600">
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">{player.first_name}</div>
                <div className="text-lg md:text-xl font-extrabold text-cadcc-black leading-none uppercase">{player.last_name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h3 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-2">Fútbol Profesional</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B2C5C] uppercase tracking-tighter">
          Plantel
        </h1>
      </div>

      {error ? (
        <div className="text-red-500 font-bold">Error cargando el plantel (Falta correr el script SQL).</div>
      ) : players?.length === 0 ? (
        <div className="text-gray-500 text-lg">El plantel se está actualizando...</div>
      ) : (
        <>
          {renderPositionSection('Arqueros', groupedPlayers.Arquero)}
          {renderPositionSection('Defensores', groupedPlayers.Defensor)}
          {renderPositionSection('Mediocampistas', groupedPlayers.Mediocampista)}
          {renderPositionSection('Delanteros', groupedPlayers.Delantero)}
        </>
      )}
    </div>
  )
}
