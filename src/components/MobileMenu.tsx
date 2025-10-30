import React, { useState } from 'react'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('explore')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Explorar
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Treinos
            </button>
            <button
              onClick={() => scrollToSection('nutrition')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Nutrição
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Comunidade
            </button>
            <button
              onClick={() => scrollToSection('plans')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Premium
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-500 transition-colors"
            >
              Roadmap
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
