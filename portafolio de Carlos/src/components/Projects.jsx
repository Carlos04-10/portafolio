import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, technologies, github, live, image }) => (
  <div className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    {/* Imagen del proyecto */}
    <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-5xl">
      {image}
    </div>

    {/* Contenido */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Enlaces */}
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
        >
          <FaGithub /> Código
        </a>
        {typeof live === 'string' ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            <FaExternalLinkAlt /> Ver vivo
          </a>
        ) : (
          live.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-sm"
            >
              <FaExternalLinkAlt /> {link.label}
            </a>
          ))
        )}
      </div>
    </div>
  </div>
)

export default function Projects() {
  const projects = [
    {
      title: "Auto Orange",
      description: "Proyecto frontend moderno con despliegue en producción. Maquetación responsiva y diseño contemporáneo.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Carlos04-10/auto-orange",
      live: "https://auto-orange.vercel.app",
      image: "🚗"
    },
    {
      title: "VALLENATO",
      description: "Aplicación moderna desarrollada con TypeScript. Demuestra manejo avanzado de tipos y arquitectura escalable.",
      technologies: ["TypeScript", "JavaScript"],
      github: "https://github.com/Carlos04-10/VALLENATO",
      live: "https://github.com/Carlos04-10/VALLENATO",
      image: "🎵"
    },
    {
      title: "Sistema de Citas Flutter",
      description: "Aplicación móvil multiplataforma para gestión de citas. Desarrollada con Flutter y C++.",
      technologies: ["Flutter", "C++", "Dart"],
      github: "https://github.com/Carlos04-10/citas_flutter",
      live: "https://github.com/Carlos04-10/citas_flutter",
      image: "📱"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Mis <span className="text-blue-400">Proyectos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Ver más */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Carlos04-10"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
