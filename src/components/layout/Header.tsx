import Link from 'next/link'

export function Header() {
  return (
    <>
      {/* Barra de Navegación Estática Superior */}
      <nav className="bg-cadcc-black text-white px-6 py-3 border-b border-cadcc-gold sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-bold text-cadcc-gold tracking-widest text-sm hidden sm:block">CADCC CAMPUS</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-semibold tracking-wide">
            <Link href="/" className="hover:text-cadcc-gold transition-colors">INICIO</Link>
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
            <img src="/images/cadcc_shield.png" alt="Escudo CADCC" className="w-full h-full object-contain drop-shadow-md" />
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
