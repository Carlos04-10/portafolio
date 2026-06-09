export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-blue-400">mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador passionate con más de X años de experiencia en desarrollo web. Mi especialidad es crear interfaces intuitivas y código backend robusto.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Me encanta aprender nuevas tecnologías y estar al día con las últimas tendencias del desarrollo. Cuando no estoy codificando, me encontrarás [aquí va tu hobby].
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Mis fortalezas incluyen la resolución de problemas, trabajo en equipo y comunicación clara. Busco proyectos desafiantes donde pueda crecer como desarrollador.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary rounded-lg p-6 text-center hover:bg-opacity-80 transition-colors">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-gray-400">Proyectos completados</p>
            </div>
            <div className="bg-primary rounded-lg p-6 text-center hover:bg-opacity-80 transition-colors">
              <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
              <p className="text-gray-400">Clientes satisfechos</p>
            </div>
            <div className="bg-primary rounded-lg p-6 text-center hover:bg-opacity-80 transition-colors">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <p className="text-gray-400">Años de experiencia</p>
            </div>
            <div className="bg-primary rounded-lg p-6 text-center hover:bg-opacity-80 transition-colors">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">Dedicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
