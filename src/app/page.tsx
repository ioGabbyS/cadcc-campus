import { PlayerCard } from "@/components/ui/PlayerCard"
import { supabase } from "@/lib/supabase/client"

// Datos simulados (Mocks) de fallback
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

export default async function Home() {
  let displayPlayers = FEATURED_PLAYERS
  
  try {
    const { data, error } = await supabase.from('featured_players').select('*')
    if (!error && data && data.length > 0) {
      displayPlayers = data.map((p: any) => ({
        id: p.id,
        name: p.player_name,
        category: p.category,
        recognitionType: p.recognition_type,
        imageUrl: p.image_url
      }))
    }
  } catch (err) {
    console.error("Supabase no está configurado aún o faltan tablas", err)
  }

  // Traer el último Banner Principal subido
  let bannerUrl = null
  try {
    const { data: bannerData, error: bannerError } = await supabase
      .from('site_images')
      .select('image_url')
      .eq('section_name', 'Banner Principal (Inicio)')
      .order('uploaded_at', { ascending: false })
      .limit(1)
      .single()
    
    if (bannerData && !bannerError) {
      bannerUrl = bannerData.image_url
    }
  } catch (err) {
    console.error("Error al traer el banner", err)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Banner Principal Dinámico */}
      {bannerUrl && (
        <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden shadow-2xl mb-16 relative border-4 border-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bannerUrl} alt="Banner Principal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}

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
          {displayPlayers.map((player: any) => (
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
