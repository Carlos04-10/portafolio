import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
            <img 
              src="/img/profile.jpg" 
              alt="Carlos" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4">
          Hola, soy <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Carlos</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Desarrollador Full Stack | Especializado en React y Node.js
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Creo aplicaciones web modernas y escalables. Me apasiona resolver problemas complejos con código limpio y eficiente.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver mis proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contáctame
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/Carlos04-10" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="mailto:carlos@email.com" className="hover:text-blue-400 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}
