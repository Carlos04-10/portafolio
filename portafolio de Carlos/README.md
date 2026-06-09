# Portafolio Personal - Carlos

Un portafolio web moderno y responsive construido con **React**, **Vite** y **Tailwind CSS**. Diseñado con un enfoque minimalista y profesional.

## ✨ Características

- 📱 **Diseño Responsive** - Se adapta perfectamente a todos los dispositivos
- ⚡ **Rendimiento Rápido** - Construido con Vite para máxima velocidad
- 🎨 **Diseño Moderno** - Interfaz minimalista con Tailwind CSS
- 🎯 **Componentes Reutilizables** - Código limpio y mantenible
- 📬 **Formulario de Contacto** - Sección interactiva para recibir mensajes
- 🔗 **Smooth Scrolling** - Navegación suave entre secciones
- 📊 **Showcase de Proyectos** - Galería de trabajos realizados
- 🏆 **Certificaciones** - Muestra tus logros y certificados

## 📁 Estructura del Proyecto

```
portafolio-carlos/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── About.jsx           # Sobre mí
│   │   ├── Projects.jsx        # Proyectos
│   │   ├── Skills.jsx          # Habilidades
│   │   ├── Contact.jsx         # Contacto
│   │   └── Footer.jsx          # Pie de página
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html                  # HTML principal
├── package.json                # Dependencias
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
└── postcss.config.js           # Configuración de PostCSS
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El portafolio se abrirá automáticamente en `http://localhost:3000`

### 3. Construir para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## ✏️ Personalización

### Modificar información personal

**Hero.jsx** - Actualiza tu nombre, descripción y enlaces sociales
```javascript
<h1>Hola, soy <span>Tu Nombre</span></h1>
<p>Tu descripción profesional aquí</p>
```

### Agregar tus proyectos

**Projects.jsx** - Edita el array `projects`:
```javascript
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción...",
    technologies: ["React", "Node.js"],
    github: "https://github.com/tu-repo",
    live: "https://tu-proyecto.com",
    image: "🚀"
  }
]
```

### Actualizar habilidades

**Skills.jsx** - Modifica el array `skillsData`:
```javascript
const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "TypeScript"]
  }
]
```

### Información de contacto

**Contact.jsx** - Actualiza tus datos:
- Email: `carlos@email.com`
- Teléfono: `+1 (234) 567-890`
- Ubicación: `Tu ciudad, Tu país`

## 🎨 Personalizar Colores

En `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Color de fondo principal
      secondary: '#1e293b',    // Color secundario
      accent: '#3b82f6',       // Color de acento (azul)
    }
  },
}
```

## 📦 Dependencias principales

- **React 18** - Librería de UI
- **Vite** - Build tool moderno
- **Tailwind CSS** - Framework de utilidades CSS
- **React Icons** - Iconos vectoriales
- **PostCSS** - Procesador CSS

## 🔧 Configuración Recomendada

Para mejor experiencia de desarrollo, se recomienda:

1. **Extensión ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier** (formateador de código)

## 📱 Secciones

### Hero
- Presentación principal con foto de perfil
- Descripción profesional
- Botones de llamada a la acción
- Enlaces a redes sociales

### About
- Biografía profesional
- Estadísticas clave (proyectos, clientes, experiencia)
- Información personal

### Projects
- Galería de proyectos
- Descripción, tecnologías usadas
- Enlaces a código y versión en vivo
- Efecto hover interactivo

### Skills
- Habilidades organizadas por categoría
- Certificaciones
- Soft skills

### Contact
- Formulario funcional
- Información de contacto
- Validación de formulario
- Mensaje de confirmación

## 🌐 Despliegue

El proyecto se puede desplegar en:

- **Vercel**: Conecta tu repo de GitHub
- **Netlify**: Arrastra y suelta la carpeta `dist/`
- **GitHub Pages**: Configura el workflow de CI/CD
- **Firebase Hosting**: Sigue la documentación oficial

## 📝 Notas

- Reemplaza los placeholders (enlaces sociales, email, teléfono) con tu información real
- Las imágenes de los proyectos usan emojis; puedes reemplazarlos con imágenes reales
- El formulario de contacto es funcional pero necesita backend para enviar emails
- Los enlaces de "Ver vivo" y "GitHub" en los proyectos actualmente apuntan a ejemplos

## 🤝 Contribuciones

Este es tu portafolio personal. Siéntete libre de modificarlo y personalizarlo según tus necesidades.

## 📄 Licencia

Este proyecto es de uso personal.

---

**Hecho con ❤️ usando React y Tailwind CSS**
