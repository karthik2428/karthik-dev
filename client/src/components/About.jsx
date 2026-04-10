const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Get to know more about me and my journey in web development
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative card aspect-square flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/30">KS</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Karthik Santhosh</h3>
                <p className="text-primary">MERN Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Passionate about creating 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> modern web solutions</span>
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated MERN Stack Developer with a passion for building exceptional digital experiences. 
              Currently pursuing my Bachelor of Computer Applications (BCA) at Kristu Jyoti College of Management 
              and Technology in Changanassery, Kerala.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with HTML and CSS, and I've since progressed to mastering 
              the MERN stack (MongoDB, Express.js, React.js, Node.js) along with modern tools like TailwindCSS. 
              I'm constantly learning and staying updated with the latest technologies and best practices.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="card">
                <h4 className="text-xl font-bold text-primary mb-2">Education</h4>
                <p className="text-gray-300">Bachelor of Computer Application</p>
                <p className="text-gray-400 text-sm">2023 - 2026</p>
              </div>
              <div className="card">
                <h4 className="text-xl font-bold text-primary mb-2">Location</h4>
                <p className="text-gray-300">Thiruvalla, Pathanamthitta</p>
                <p className="text-gray-400 text-sm">Kerala, India</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Learning' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <h4 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
