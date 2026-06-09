import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    if (formData.name && formData.email && formData.message) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Ponte en <span className="text-blue-400">Contacto</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              <p className="text-gray-400 mb-8">
                ¿Tienes un proyecto en mente? Me encantaría colaborar contigo. Siéntete libre de contactarme.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-blue-400 mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:carlosalbertolopez726@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    carlosalbertolopez726@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-blue-400 mt-1">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/573006235265" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +57 3006235265
                  </a>
                  <p className="text-gray-500 text-sm mt-1">o +57 3185933203</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-blue-400 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-gray-400">Valledupar, Cesar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary rounded-lg p-8">
            {submitted && (
              <div className="p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-400">
                ¡Mensaje enviado correctamente! Me pondré en contacto pronto.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 bg-primary rounded-lg border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 bg-primary rounded-lg border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                className="w-full px-4 py-2 bg-primary rounded-lg border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje..."
                rows="5"
                className="w-full px-4 py-2 bg-primary rounded-lg border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
