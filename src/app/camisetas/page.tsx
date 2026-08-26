import { supabase } from '@/lib/supabase/client'

export const revalidate = 0;

export default async function CamisetasHistory() {
  let camisetas = []
  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('image_url')
      .eq('section_name', 'Camiseta Histórica')
      .order('uploaded_at', { ascending: true })
    
    if (!error && data) {
      camisetas = data.map(d => d.image_url)
    }
  } catch (err) {
    console.error(err)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-2 h-12 bg-cadcc-gold"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-cadcc-black uppercase tracking-tighter">
          Nuestras Camisetas
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
        <h2 className="text-2xl font-bold text-cadcc-black mb-4">Historia de los Colores</h2>
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            Los colores de Defensores Central Córdoba representan el alma y la pasión de nuestra gente. 
            El negro profundo simboliza la fuerza, la elegancia y la determinación que caracteriza a nuestros equipos 
            cuando entran a la cancha. Acompañado de destellos dorados que evocan la gloria, el triunfo y el valor 
            histórico de nuestro club.
          </p>
          <p>
            Con el paso de las décadas, distintas marcas han dejado su huella en nuestra indumentaria, pero el 
            espíritu siempre se ha mantenido intacto. Desde los primeros modelos clásicos y minimalistas hasta las 
            modernas tecnologías textiles de hoy en día, cada camiseta guarda en su tela momentos inolvidables, 
            ascensos memorables y el aliento incondicional de la hinchada.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-cadcc-black mb-8 border-b-2 border-cadcc-gold inline-block pb-2">
        Galería Histórica
      </h2>

      {camisetas.length === 0 ? (
        <div className="text-center text-gray-500 py-12 bg-white rounded-2xl border border-dashed border-gray-300">
          Aún no se han subido fotos de camisetas históricas.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {camisetas.map((url, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group flex items-center justify-center border border-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={url} 
                alt={`Camiseta ${i + 1}`} 
                className="w-full h-auto max-h-64 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
