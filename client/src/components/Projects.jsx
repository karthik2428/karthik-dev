import finassist from "./images/finassist.png"
import trinitydecor from "./images/trinitydecor.png"


const Projects = () => {
  const projects = [
    {
      title: 'Trinity Decor – Premium Interior Solutions',
      description: 'A modern, responsive website built for a premium interior design client specializing in window furnishings and custom cabinetry. Features include filterable project gallery, service showcase, contact form with lead capture, and mobile-responsive navigation. Implemented smooth scroll functionality and interactive UI components to enhance user experience and client conversion.',
      technologies: ['React.js', 'TailwindCSS', 'Lucide React', 'JavaScript (ES6+)', 'REST APIs'],
      image: trinitydecor, // Using emoji until you add the actual image
      github: 'https://github.com/karthik2428/Trinity-Decor',
      live: 'https://trinity-decor.vercel.app/',
      featured: true
    },
    {
      title: 'FinAssist – Personal Financial Management System',
      description: 'A full-stack finance management system supporting income tracking, budgeting, and goal planning. Implemented role-based access control (RBAC) for multi-user environments, integrated Razorpay payment gateway and Brevo email services for automation, and designed a financial forecasting model using Weighted Moving Average.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'Brevo', 'PDFKit'],
      image: finassist,
      github: 'https://github.com/karthik2428/Finwiz',
      live: 'https://finwiz-black.vercel.app/',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays real-time weather data with beautiful visualizations and forecasts.',
      technologies: ['React', 'API Integration', 'CSS3', 'JavaScript'],
      image: '🌤️',
      github: 'https://github.com/karthik2428',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills and projects with smooth animations.',
      technologies: ['React', 'TailwindCSS', 'Vite', 'Framer Motion'],
      image: '💼',
      github: 'https://github.com/karthik2428',
      live: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A blogging platform with CRUD operations, user authentication, and rich text editing capabilities.',
      technologies: ['MERN Stack', 'JWT', 'Markdown', 'Cloudinary'],
      image: '📝',
      github: 'https://github.com/karthik2428',
      live: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, private messaging, and online status indicators.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: '💬',
      github: 'https://github.com/karthik2428',
      live: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a learning experience and showcases my skills.
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-yellow-500">⭐</span> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index}
                className="group card overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-gradient-to-br from-[#1B2A4A] to-[#2A3F6B]">
                  {typeof project.image === 'string' && (project.image.startsWith('http') || project.image === '🏠' || project.image === '🌤️' || project.image === '💼' || project.image === '📝' || project.image === '💬') ? (
                    <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                      {project.image}
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.435-.176-.765-.702-.765-.702-.627-.429.046-.42.046-.42.692.049 1.055.71 1.055.71.618 1.058 1.619.752 2.014.574.063-.448.241-.752.438-.924-1.946-.221-3.988-.972-3.988-.972-.332-.136-.693-.42-.693-.42-.566-.387.044-.38.044-.38.626.044.958.644.958.644.559.958 1.466.682 1.821.522.057-.406.219-.682.398-.838-1.533-.174-3.146-.766-3.146-.766-.315-.125-.633-.41-.633-.41-.516-.353.043-.346.043-.346.57.04.868.587.868.587.502.858 1.318.611 1.635.465.073-.528.285-.888.517-1.091-1.801-.205-3.697-.9-3.697-.9-.297-.118-.602-.394-.602-.394-.493-.337.042-.33.042-.33.543.038.823.56.823.56.479.818 1.259.58 1.559.439.068-.49.264-.82.48-1.017-1.619-.184-3.32-.815-3.32-.815-.28-.112-.574-.378-.574-.378-.468-.32.042-.313.042-.313.514.035.778.538.778.538.444.758 1.175.54 1.454.408.058-.417.226-.717.428-.905-1.37-.156-2.803-.685-2.803-.685-.25-.106-.552-.362-.552-.362-.448-.308.042-.301.042-.301.493.034.744.515.744.515.42.713 1.107.503 1.364.378.054-.39.212-.673.402-.85-1.297-.147-2.655-.65-2.655-.65-.235-.094-.496-.334-.496-.334-.406-.28.042-.274.042-.274.45.031.668.474.668.474.378.64.965.45 1.187.343.048-.373.198-.647.38-.817z"/>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={index}
                className="group card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.435-.176-.765-.702-.765-.702-.627-.429.046-.42.046-.42.692.049 1.055.71 1.055.71.618 1.058 1.619.752 2.014.574.063-.448.241-.752.438-.924-1.946-.221-3.988-.972-3.988-.972-.332-.136-.693-.42-.693-.42-.566-.387.044-.38.044-.38.626.044.958.644.958.644.559.958 1.466.682 1.821.522.057-.406.219-.682.398-.838-1.533-.174-3.146-.766-3.146-.766-.315-.125-.633-.41-.633-.41-.516-.353.043-.346.043-.346.57.04.868.587.868.587.502.858 1.318.611 1.635.465.073-.528.285-.888.517-1.091-1.801-.205-3.697-.9-3.697-.9-.297-.118-.602-.394-.602-.394-.493-.337.042-.33.042-.33.543.038.823.56.823.56.479.818 1.259.58 1.559.439.068-.49.264-.82.48-1.017-1.619-.184-3.32-.815-3.32-.815-.28-.112-.574-.378-.574-.378-.468-.32.042-.313.042-.313.514.035.778.538.778.538.444.758 1.175.54 1.454.408.058-.417.226-.717.428-.905-1.37-.156-2.803-.685-2.803-.685-.25-.106-.552-.362-.552-.362-.448-.308.042-.301.042-.301.493.034.744.515.744.515.42.713 1.107.503 1.364.378.054-.39.212-.673.402-.85-1.297-.147-2.655-.65-2.655-.65-.235-.094-.496-.334-.496-.334-.406-.28.042-.274.042-.274.45.031.668.474.668.474.378.64.965.45 1.187.343.048-.373.198-.647.38-.817z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/karthik2428"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.435-.176-.765-.702-.765-.702-.627-.429.046-.42.046-.42.692.049 1.055.71 1.055.71.618 1.058 1.619.752 2.014.574.063-.448.241-.752.438-.924-1.946-.221-3.988-.972-3.988-.972-.332-.136-.693-.42-.693-.42-.566-.387.044-.38.044-.38.626.044.958.644.958.644.559.958 1.466.682 1.821.522.057-.406.219-.682.398-.838-1.533-.174-3.146-.766-3.146-.766-.315-.125-.633-.41-.633-.41-.516-.353.043-.346.043-.346.57.04.868.587.868.587.502.858 1.318.611 1.635.465.073-.528.285-.888.517-1.091-1.801-.205-3.697-.9-3.697-.9-.297-.118-.602-.394-.602-.394-.493-.337.042-.33.042-.33.543.038.823.56.823.56.479.818 1.259.58 1.559.439.068-.49.264-.82.48-1.017-1.619-.184-3.32-.815-3.32-.815-.28-.112-.574-.378-.574-.378-.468-.32.042-.313.042-.313.514.035.778.538.778.538.444.758 1.175.54 1.454.408.058-.417.226-.717.428-.905-1.37-.156-2.803-.685-2.803-.685-.25-.106-.552-.362-.552-.362-.448-.308.042-.301.042-.301.493.034.744.515.744.515.42.713 1.107.503 1.364.378.054-.39.212-.673.402-.85-1.297-.147-2.655-.65-2.655-.65-.235-.094-.496-.334-.496-.334-.406-.28.042-.274.042-.274.45.031.668.474.668.474.378.64.965.45 1.187.343.048-.373.198-.647.38-.817z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects