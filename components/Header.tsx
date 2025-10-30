import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  currentView: string
  setCurrentView: (view: string) => void
}

export default function Header({ currentView, setCurrentView }: HeaderProps) {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-4 md:px-10 h-16 md:h-20 flex items-center shadow-lg border-b border-gray-200/20 dark:border-gray-700/20">
      <nav className="w-full flex items-center justify-between max-w-[1440px] mx-auto relative">
        <AnimatedLogo />
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-700 dark:text-white font-medium text-sm lg:text-[15px]">
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => setCurrentView('home')}
          >
            Início
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('explore')}
          >
            Explorar
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('training')}
          >
            Treinos
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('nutrition')}
          >
            Nutrição
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('community')}
          >
            Comunidade
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('plans')}
          >
            Premium
          </li>
          <li 
            className="hover:text-blue-500 transition-colors cursor-pointer hover:scale-105 transform duration-200"
            onClick={() => scrollToSection('roadmap')}
          >
            Roadmap
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-4">
          <ThemeToggle />
          <MobileMenu />
          <button 
            className="bg-blue-500 text-white font-semibold rounded-full px-4 md:px-6 py-2 shadow-sm hover:bg-blue-600 transition-all duration-300 text-sm md:text-[15px] hover:scale-105 transform"
            onClick={() => {
              const element = document.getElementById('plans');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <span className="hidden sm:inline">Solicitar acesso antecipado</span>
            <span className="sm:hidden">Acesso</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
