const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Karthik Santhosh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/karthik2428" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.435-.176-.765-.702-.765-.702-.627-.429.046-.42.046-.42.692.049 1.055.71 1.055.71.618 1.058 1.619.752 2.014.574.063-.448.241-.752.438-.924-1.946-.221-3.988-.972-3.988-.972-.332-.136-.693-.42-.693-.42-.566-.387.044-.38.044-.38.626.044.958.644.958.644.559.958 1.466.682 1.821.522.057-.406.219-.682.398-.838-1.533-.174-3.146-.766-3.146-.766-.315-.125-.633-.41-.633-.41-.516-.353.043-.346.043-.346.57.04.868.587.868.587.502.858 1.318.611 1.635.465.073-.528.285-.888.517-1.091-1.801-.205-3.697-.9-3.697-.9-.297-.118-.602-.394-.602-.394-.493-.337.042-.33.042-.33.543.038.823.56.823.56.479.818 1.259.58 1.559.439.068-.49.264-.82.48-1.017-1.619-.184-3.32-.815-3.32-.815-.28-.112-.574-.378-.574-.378-.468-.32.042-.313.042-.313.514.035.778.538.778.538.444.758 1.175.54 1.454.408.058-.417.226-.717.428-.905-1.37-.156-2.803-.685-2.803-.685-.25-.106-.552-.362-.552-.362-.448-.308.042-.301.042-.301.493.034.744.515.744.515.42.713 1.107.503 1.364.378.054-.39.212-.673.402-.85-1.297-.147-2.655-.65-2.655-.65-.235-.094-.496-.334-.496-.334-.406-.28.042-.274.042-.274.45.031.668.474.668.474.378.64.965.45 1.187.343.048-.373.198-.647.38-.817z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/karthik-santhosh-a52068288/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/_ka.rthi.k._/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Built with ❤️ using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
