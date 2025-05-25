import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/20 border-b border-slate-700/50' 
        : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/30'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 group">
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-emerald-300 transition-all duration-300 cursor-pointer">
              Tejas Kale
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse" />
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 p-2"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`} />
                <span className={`bg-current block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`bg-current block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-b-2xl backdrop-blur-sm border-b border-slate-700/30">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 transform ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-gradient-to-r from-blue-400/10 to-purple-400/10 shadow-lg shadow-blue-400/10 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:translate-x-2'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="flex items-center">
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse" />
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;