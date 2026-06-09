const SkillCard = ({ category, skills }) => (
  <div className="bg-secondary rounded-lg p-6 hover:bg-opacity-80 transition-colors">
    <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-primary rounded-full text-sm font-semibold hover:bg-blue-600/50 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST API"]
    },
    {
      category: "Herramientas",
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Docker"]
    },
    {
      category: "Soft Skills",
      skills: ["Comunicación", "Trabajo en equipo", "Resolución de problemas", "Pensamiento crítico"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Mis <span className="text-blue-400">Habilidades</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <SkillCard key={index} {...skillGroup} />
          ))}
        </div>

        {/* Certificaciones */}
        <div className="mt-12 bg-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Certificaciones</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="p-4 border-2 border-blue-600 rounded-lg">
              <p className="text-lg font-semibold">Certificación en React</p>
              <p className="text-gray-400 text-sm">Udemy - 2023</p>
            </div>
            <div className="p-4 border-2 border-blue-600 rounded-lg">
              <p className="text-lg font-semibold">Full Stack Development</p>
              <p className="text-gray-400 text-sm">FreeCodeCamp - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
