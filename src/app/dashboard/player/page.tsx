import { Trophy, CheckCircle, Upload } from "lucide-react"

export default function PlayerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header del Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-cadcc-black">Mi Panel de Entrenamiento</h1>
          <p className="text-gray-600 mt-1">Categoría: Sub-17 | Jugador: Juan Perez</p>
        </div>
        <div className="bg-cadcc-gold text-cadcc-black px-4 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Nivel: Avanzado
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Principal: Desafíos */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-cadcc-black border-b-2 border-cadcc-gold pb-2 inline-block">
            Desafíos Técnicos (Espacios Reducidos)
          </h2>
          
          {/* Card de Desafío */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-cadcc-black text-white px-6 py-4">
              <h3 className="font-bold text-lg text-cadcc-gold">Semana 1: Control Orientado</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700">
                Graba un video realizando 10 pases contra la pared con control orientado hacia la pierna inhábil en un espacio no mayor a 2x2 metros.
              </p>
              
              <div className="bg-cadcc-bg p-4 rounded-lg border border-gray-200">
                <label className="block text-sm font-semibold text-cadcc-black mb-2">
                  Subir tu video (URL de YouTube / Drive)
                </label>
                <div className="flex gap-2">
                  <input 
                    type="url" 
                    placeholder="https://..." 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cadcc-gold"
                  />
                  <button className="bg-cadcc-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium">
                    <Upload className="w-4 h-4" />
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Secundaria: Muro de Honor */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-cadcc-black border-b-2 border-cadcc-gold pb-2 inline-block">
            Muro de Honor
          </h2>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <p className="text-sm text-gray-500 mb-4">
              Jugadores que completaron todos los desafíos de la semana.
            </p>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-center gap-3 p-3 bg-cadcc-bg rounded-lg">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                  <div>
                    <p className="font-bold text-cadcc-black text-sm">Jugador {i}</p>
                    <p className="text-xs text-gray-500">Sub-17</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
