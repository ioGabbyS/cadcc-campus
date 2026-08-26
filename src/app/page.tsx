import { PlayerCard } from "@/components/ui/PlayerCard"

// Datos simulados (Mocks) que luego vendrán de Supabase `featured_players`
const FEATURED_PLAYERS = [
  {
    id: 1,
    name: "Lionel Garcia",
    category: "Primera División",
    recognitionType: "Figura del Partido" as const,
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Matias Fernandez",
    category: "Reserva",
    recognitionType: "Figura de la Semana" as const,
    imageUrl: "https://images.unsplash.com/photo-1518605363175-9c8e23508f75?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Tomás Almirón",
    category: "Sub-17",
    recognitionType: "Figura de la Semana" as const,
    // imageUrl simulado sin foto para probar estado empty
  }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-cadcc-black mb-4">Bienvenido al Campus Virtual</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La plataforma oficial del Club Atlético Defensores Central Córdoba para el desarrollo, 
          entrenamiento y reconocimiento de nuestros jugadores.
        </p>
      </section>

      {/* MÓDULO: Destacados CADCC */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-cadcc-gold rounded-full" />
          <h2 className="text-3xl font-bold text-cadcc-black uppercase tracking-tight">Destacados CADCC</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {FEATURED_PLAYERS.map(player => (
            <PlayerCard 
              key={player.id}
              name={player.name}
              category={player.category}
              recognitionType={player.recognitionType}
              imageUrl={player.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
