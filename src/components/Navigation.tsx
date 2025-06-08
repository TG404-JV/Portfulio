
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'leadership', label: 'Leadership', icon: '👑' },
    { id: 'contact', label: 'Contact', icon: '📧' }
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/30 border-b border-slate-700/60' 
        : 'bg-slate-900/85 backdrop-blur-lg border-b border-slate-800/40'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Enhanced Logo/Brand with Image */}
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all duration-500">
              <div className="relative">
                <img 
                  src="/img/public/img/ic_android.svg" 
                  alt="Tejas Kale" 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/20 transition-all duration-300 group-hover:shadow-blue-400/40"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
              </div>
              <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-emerald-300 transition-all duration-500">
                Tejas Kale
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 lg:space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 group flex items-center space-x-2 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-400/20 border border-blue-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl animate-pulse" />
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-300 p-3 rounded-xl"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-7 h-7 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-7 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`} />
                <span className={`bg-current block h-0.5 w-7 rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`bg-current block h-0.5 w-7 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-3 pt-4 pb-6 space-y-3 bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-b-3xl backdrop-blur-lg border-b border-slate-700/40 mx-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-6 py-4 rounded-2xl text-base font-medium w-full text-left transition-all duration-300 transform flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-400/15 to-purple-400/15 shadow-lg shadow-blue-400/10 scale-105 border border-blue-400/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:translate-x-3'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                }}
              >
                <span className="text-xl">{item.icon}</span>
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

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
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
