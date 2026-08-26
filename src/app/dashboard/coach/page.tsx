import { CheckCircle, Clock, MessageSquare, Play } from "lucide-react"

export default function CoachDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-cadcc-black">Panel del Entrenador</h1>
        <p className="text-gray-600 mt-1">Gestión de alumnos y corrección de desafíos</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-cadcc-black px-6 py-4 flex justify-between items-center">
          <h2 className="text-cadcc-gold font-bold text-lg">Entregas Pendientes (Sub-17)</h2>
          <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:outline-none focus:border-cadcc-gold">
            <option>Todas las categorías</option>
            <option>Primera</option>
            <option>Reserva</option>
            <option>Sub-17</option>
          </select>
        </div>
        
        <div className="divide-y divide-gray-100">
          {/* Fila de alumno (Mock) */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-cadcc-bg transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  J{i}
                </div>
                <div>
                  <h3 className="font-bold text-cadcc-black">Juan Perez {i}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Semana 1: Control Orientado
                  </p>
                </div>
              </div>
              
              <div className="flex flex-1 sm:justify-end gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 text-cadcc-black px-4 py-2 rounded-md hover:bg-gray-200 font-medium text-sm transition-colors border border-gray-300">
                  <Play className="w-4 h-4" />
                  Ver Video
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-cadcc-gold text-cadcc-black px-4 py-2 rounded-md hover:brightness-110 font-bold text-sm transition-all shadow-sm">
                  <MessageSquare className="w-4 h-4" />
                  Evaluar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
