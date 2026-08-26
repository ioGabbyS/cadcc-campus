import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cadcc-black text-white py-8 border-t-[3px] border-cadcc-gold">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Enlace al Dashboard */}
        <Link href="/dashboard/player" className="flex items-center gap-2 text-sm text-gray-300 hover:text-cadcc-gold transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          <span className="font-bold tracking-widest">DASHBOARD</span>
        </Link>

        {/* Firma / Seño de Gabby's Dev Innovations */}
        <div className="flex flex-col items-center gap-4">
          <Link 
            href="/images/gabbys_dev.png" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-gray-400 hover:text-cadcc-gold transition-colors tracking-widest"
            title="Ver imagen de Gabby's Dev Innovations"
          >
            © 2026 GABBY'S DEV INNOVATIONS
          </Link>
          
          {/* Redes Sociales */}
          <div className="flex gap-6 text-xs font-bold text-gray-400">
            <Link href="#" className="hover:text-cadcc-gold transition-colors tracking-wider">INSTAGRAM</Link>
            <Link href="#" className="hover:text-cadcc-gold transition-colors tracking-wider">TIKTOK</Link>
            <Link href="#" className="hover:text-cadcc-gold transition-colors tracking-wider">FACEBOOK</Link>
            <Link href="#" className="hover:text-cadcc-gold transition-colors tracking-wider">WHATSAPP</Link>
          </div>
        </div>
        
        {/* Espacio vacío para balancear en desktop (flex-between) */}
        <div className="hidden md:block w-[120px]"></div>
      </div>
    </footer>
  );
}
