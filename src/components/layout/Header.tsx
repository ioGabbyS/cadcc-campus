import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'

export async function Header() {
  // Fetch sponsors
  let sponsors = []
  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('image_url')
      .eq('section_name', 'Sponsor')
      .order('uploaded_at', { ascending: false })
    
    if (!error && data) {
      sponsors = data.map(d => d.image_url)
    }
  } catch (err) {
    console.error("Error fetching sponsors:", err)
  }

  return (
    <>
      {/* Franja de Sponsors Estilo River */}
      {sponsors.length > 0 && (
        <div className="bg-red-600 text-white py-2 px-6 border-b border-red-700">
          <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 text-xs font-bold tracking-widest">
            <span className="opacity-90">SPONSORS |</span>
            <div className="flex gap-4 items-center">
              {sponsors.map((url, i) => (
                <img key={i} src={url} alt="Sponsor" className="h-6 object-contain" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Barra de Navegación Estática Superior */}
      <nav className="bg-cadcc-black text-white px-6 py-3 border-b border-cadcc-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-bold text-cadcc-gold tracking-widest text-sm hidden sm:block">CADCC CAMPUS</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-semibold tracking-wide">
            <Link href="/" className="hover:text-cadcc-gold transition-colors">INICIO</Link>
            <Link href="/plantel" className="hover:text-cadcc-gold transition-colors">PLANTEL</Link>
            <Link href="/camisetas" className="hover:text-cadcc-gold transition-colors">CAMISETAS</Link>
            <Link href="/dashboard/player" className="hover:text-cadcc-gold transition-colors">PANEL JUGADOR</Link>
            <Link href="/dashboard/coach" className="hover:text-cadcc-gold transition-colors">PANEL ENTRENADOR</Link>
            <Link href="/login" className="hover:text-cadcc-gold transition-colors ml-4 border border-cadcc-gold px-3 py-1 rounded-full text-xs">ACCESO ADMIN</Link>
          </div>
        </div>
      </nav>

      {/* Hero Header con la Banda Diagonal Mejorada */}
      <header className="relative w-full h-48 sm:h-64 bg-cadcc-bg overflow-hidden shadow-sm">
        {/* Fondo Diagonal Negro */}
        <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[150%] bg-cadcc-black transform -rotate-3 sm:-rotate-6 origin-top-left border-b-[6px] border-cadcc-gold shadow-2xl"></div>
        
        {/* Contenido del Header */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center gap-4 sm:gap-8">
          {/* Escudo CADCC */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full border-[4px] border-cadcc-gold flex items-center justify-center shadow-xl overflow-hidden p-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/central-cordoba.jpg" alt="Escudo CADCC" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">Campus Virtual</h1>
            <p className="text-cadcc-gold font-bold tracking-wide text-sm sm:text-lg mt-1 sm:mt-2 drop-shadow-md">
              Club Atlético Defensores Central Córdoba
            </p>
          </div>
        </div>
      </header>
    </>
  )
}
