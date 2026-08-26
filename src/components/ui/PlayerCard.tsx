import { Trophy, Star } from 'lucide-react'

interface PlayerCardProps {
  name: string
  category: string
  imageUrl?: string
  recognitionType: 'Figura del Partido' | 'Figura de la Semana'
}

export function PlayerCard({ name, category, imageUrl, recognitionType }: PlayerCardProps) {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-2 border border-gray-200">
      {/* Etiqueta de reconocimiento (Dorado/Negro) */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-cadcc-black px-4 py-1.5 shadow-md border border-cadcc-gold">
        {recognitionType === 'Figura del Partido' ? (
          <Trophy className="h-4 w-4 text-cadcc-gold" />
        ) : (
          <Star className="h-4 w-4 text-cadcc-gold" />
        )}
        <span className="text-xs font-bold text-cadcc-gold uppercase tracking-wider">
          {recognitionType}
        </span>
      </div>

      {/* Imagen del jugador con overlay oscuro para contraste */}
      <div className="relative h-80 w-full bg-gray-200">
        {imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imageUrl} 
              alt={`Foto de ${name}`} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <span className="text-gray-400 font-medium">Sin foto</span>
          </div>
        )}
        {/* Gradiente para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-cadcc-black/90 via-cadcc-black/30 to-transparent" />
      </div>

      {/* Info del Jugador */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <p className="text-cadcc-gold text-sm font-bold mb-1 uppercase tracking-wide">{category}</p>
        <h3 className="text-2xl font-bold leading-tight drop-shadow-md">{name}</h3>
      </div>
      
      {/* Detalle visual inferior (borde de la tarjeta) */}
      <div className="h-2 w-full bg-cadcc-gold" />
    </div>
  )
}
