import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'MERN Stack Developer'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      
      {/* ========== PREMIUM MOBILE BACKGROUND ========== */}
      <div className="absolute inset-0 md:hidden">
        {/* Animated gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900 to-secondary/20 animate-gradient-shift"></div>
        
        {/* Animated mesh grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
        
        {/* Floating glowing orbs */}
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-primary/40 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-secondary/40 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 bg-secondary/30 rounded-full blur-lg animate-bounce-slow"></div>
        
        {/* Sparkle particles simulation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent"></div>
      </div>

      {/* ========== DESKTOP BACKGROUND (unchanged + enhanced) ========== */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Hello badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm text-primary font-medium">Available for work</span>
            </div>
            
            <h2 className="text-lg md:text-xl text-primary font-semibold mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Hello, I'm
            </h2>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Karthik Santhosh
              </span>
            </h1>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 md:mb-6 h-8 sm:h-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {text}<span className="animate-pulse text-primary font-bold">|</span>
            </h3>
            
            <p className="text-gray-400 text-base sm:text-lg mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I build exceptional digital experiences with modern web technologies. 
              Specializing in the <span className="text-primary font-medium">MERN stack</span> and creating responsive, user-friendly applications.
            </p>
            
            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a 
                href="#projects" 
                className="btn-primary group relative px-6 py-3 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              
              <a 
                href="#contact" 
                className="btn-secondary group relative px-6 py-3 rounded-xl font-medium overflow-hidden border border-gray-600 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Me
                  <span className="group-hover:animate-bounce">👋</span>
                </span>
              </a>
            </div>
            
            {/* Social Links - FIXED WITH COMPLETE SVGs */}
            <div className="flex gap-4 md:gap-5 mt-6 md:mt-8 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              
              {/* GitHub */}
              <a 
                href="https://github.com/karthik2428" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.435-.176-.765-.702-.765-.702-.627-.429.046-.42.046-.42.692.049 1.055.71 1.055.71.618 1.058 1.619.752 2.014.574.063-.448.241-.752.438-.924-1.946-.221-3.988-.972-3.988-.972-.332-.136-.693-.42-.693-.42-.566-.387.044-.38.044-.38.626.044.958.644.958.644.559.958 1.466.682 1.821.522.057-.406.219-.682.398-.838-1.533-.174-3.146-.766-3.146-.766-.315-.125-.633-.41-.633-.41-.516-.353.043-.346.043-.346.57.04.868.587.868.587.502.858 1.318.611 1.635.465.063-.448.241-.752.438-.924-1.619-.184-3.32-.815-3.32-.815-.297-.118-.602-.394-.602-.394-.493-.337.042-.33.042-.33.543.038.823.56.823.56.479.818 1.259.54 1.559.439.068-.49.264-.82.48-1.017-1.45-.165-2.97-.73-2.97-.73-.265-.106-.552-.362-.552-.362-.448-.308.042-.301.042-.301.493.034.744.515.744.515.42.713 1.107.503 1.364.378.054-.39.212-.673.402-.85-1.37-.156-2.803-.685-2.803-.685-.235-.094-.496-.334-.496-.334-.406-.28.042-.274.042-.274.47.031.668.474.668.474.378.64.965.45 1.187.343.048-.373.198-.647.38-.817z"/>
                </svg>
                <span className="absolute -inset-1 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/karthik-santhosh-a52068288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="absolute -inset-1 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/_ka.rthi.k._/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="absolute -inset-1 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>
              </a>
              
            </div>
          </div>

          {/* Visual Element - Enhanced for Both Mobile & Desktop */}
          <div className="relative order-1 md:order-2 flex justify-center">
            
            {/* Mobile Visual */}
            <div className="md:hidden relative">
              <div className="relative w-40 h-40 animate-float">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-2xl animate-pulse-slow"></div>
                
                {/* Main badge */}
                <div className="relative w-full h-full rounded-2xl border-2 border-primary/40 overflow-hidden bg-gray-900/60 backdrop-blur-sm shadow-2xl shadow-primary/10">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient-rotate"></div>
                  
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  
                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KS</span>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-primary/60 rounded-tl"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-secondary/60 rounded-br"></div>
                </div>
                
                {/* Floating tech badges */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-800/90 rounded-xl flex items-center justify-center animate-bounce-slow border border-primary/40 shadow-lg">
                  <span className="text-base">⚛️</span>
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gray-800/90 rounded-xl flex items-center justify-center animate-bounce-slow border border-secondary/40 shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <span className="text-base">🟢</span>
                </div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gray-800/90 rounded-lg flex items-center justify-center animate-pulse-slow border border-primary/30">
                  <span className="text-xs">🔥</span>
                </div>
              </div>
              
              {/* Decorative code brackets */}
              <div className="absolute -top-4 -left-4 text-primary/30 text-2xl font-mono animate-fade-in">{'{'}</div>
              <div className="absolute -bottom-6 -right-4 text-secondary/30 text-2xl font-mono animate-fade-in" style={{ animationDelay: '0.3s' }}>{'}'}</div>
            </div>

            {/* Desktop Visual (original + subtle enhancements) */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-80 h-80 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-primary/30 overflow-hidden bg-gray-900/30 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-white/20">KS</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements - Desktop */}
                <div className="absolute top-10 right-10 card p-4 animate-bounce bg-gray-800/80 rounded-xl border border-primary/30" style={{ animationDuration: '3s' }}>
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute bottom-20 left-0 card p-4 animate-bounce bg-gray-800/80 rounded-xl border border-secondary/30" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <span className="text-2xl">🟢</span>
                </div>
                <div className="absolute top-1/2 right-0 card p-4 animate-bounce bg-gray-800/80 rounded-xl border border-primary/30" style={{ animationDuration: '5s', animationDelay: '2s' }}>
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== GLOBAL ANIMATIONS ========== */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) translateY(0); }
          50% { opacity: 1; transform: scale(1) translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 10s ease infinite;
          background-size: 200% 200%;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% auto;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3.5s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2.5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 25s linear infinite;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  )
}

export default Hero
