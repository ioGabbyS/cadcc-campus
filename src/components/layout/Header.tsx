import Link from 'next/link'

export function Header() {
  return (
    <header className="diagonal-band-container h-48 sm:h-56 flex flex-col justify-center px-6 sm:px-12 w-full">
      <div className="diagonal-content flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Escudo CADCC */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cadcc-bg rounded-full border-[3px] border-cadcc-gold flex items-center justify-center shadow-xl overflow-hidden p-1">
            <img src="/images/cadcc_shield.png" alt="Escudo CADCC" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">Campus Virtual</h1>
            <p className="text-cadcc-gold font-semibold tracking-wide text-sm sm:text-base mt-1">Club Atlético Defensores Central Córdoba</p>
          </div>
        </div>
        <nav className="flex gap-6 mt-4 sm:mt-0 bg-cadcc-black/50 sm:bg-transparent p-3 sm:p-0 rounded-lg backdrop-blur-sm sm:backdrop-blur-none">
          <Link href="/" className="text-white hover:text-cadcc-gold transition-colors font-medium">Inicio</Link>
          <Link href="/dashboard/player" className="text-white hover:text-cadcc-gold transition-colors font-medium">Panel Jugador</Link>
          <Link href="/dashboard/coach" className="text-white hover:text-cadcc-gold transition-colors font-medium">Panel Entrenador</Link>
        </nav>
      </div>
    </header>
  )
}
