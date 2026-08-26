import { UploadCloud, Image as ImageIcon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ImagesManagement() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/dashboard/admin" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cadcc-gold transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Volver al Panel Admin
      </Link>

      <h1 className="text-2xl font-bold text-cadcc-black mb-8 border-l-4 border-cadcc-gold pl-4">
        Gestor de Imágenes de la Web
      </h1>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">¿Para qué sección es la imagen?</label>
          <select className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cadcc-gold outline-none bg-white">
            <option>Banner Principal (Inicio)</option>
            <option>Foto para Figura del Partido</option>
            <option>Escudos y Logos (Footer/Header)</option>
          </select>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-cadcc-gold transition-colors bg-gray-50 flex flex-col items-center justify-center cursor-pointer group">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8 text-cadcc-gold" />
          </div>
          <p className="font-bold text-cadcc-black mb-1">Arrastra y suelta tu imagen aquí</p>
          <p className="text-sm text-gray-500 mb-4">o haz clic para buscar en tu computadora (PNG, JPG)</p>
          
          <button className="bg-cadcc-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-bold shadow-md">
            Examinar Archivos
          </button>
        </div>
      </div>
    </div>
  )
}
