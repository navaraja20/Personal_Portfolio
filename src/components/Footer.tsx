'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-gaming font-bold text-gradient mb-4">
              NAVARAJA
            </h3>
            <p className="text-sm text-gray-400">
              ML Engineer | Data Engineer | Data Scientist
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Master's in Computer Science @ EPITA, France
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-gaming font-bold mb-4 text-neon-cyan">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-gaming font-bold mb-4 text-neon-cyan">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/navaraja20"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg hover:scale-110 hover:text-neon-cyan transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/navaraja-mannepalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg hover:scale-110 hover:text-neon-cyan transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nava-raja.mannepalli@epita.fr"
                className="p-3 glass-effect rounded-lg hover:scale-110 hover:text-neon-cyan transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Navaraja © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
