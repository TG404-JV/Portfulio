
import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Smartphone, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Code, color: 'text-blue-400', delay: '0s' },
    { Icon: Smartphone, color: 'text-green-400', delay: '1s' },
    { Icon: Brain, color: 'text-purple-400', delay: '2s' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Dynamic background with mouse-reactive gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(147, 51, 234, 0.1) 25%, 
            rgba(20, 184, 166, 0.05) 50%, 
            transparent 70%)`
        }}
      />

      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-60 ${
              i % 3 === 0 ? 'w-1 h-1 bg-blue-400' : 
              i % 3 === 1 ? 'w-2 h-2 bg-purple-400' : 
              'w-1.5 h-1.5 bg-teal-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <div
            key={index}
            className={`absolute ${color} opacity-20 hover:opacity-40 transition-opacity duration-300`}
            style={{
              left: `${20 + index * 30}%`,
              top: `${15 + index * 25}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <Icon size={40} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Premium greeting badge */}
          <div className="inline-block mb-8 group">
            <div className="relative">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 text-white px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl shadow-2xl group-hover:scale-105 transition-all duration-300">
                <span className="mr-2">👋</span>
                Hey there! Welcome to my digital universe
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Enhanced main heading */}
          <h1 className="text-6xl lg:text-8xl font-black mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
              Tejas Kale
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-50 rounded-full -z-10"></div>
          </h1>

          {/* Animated role descriptions */}
          <div className="text-2xl lg:text-3xl text-gray-300 mb-8 space-y-3">
            <div className="relative inline-block group">
              <p className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Android Developer
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
            <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Crafting Innovative Apps with AI and Passion
            </p>
          </div>

          {/* Enhanced description */}
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            B.Tech CSE student specializing in Android development, AI integration, and user-centered design. 
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              {" "}Transforming ideas into impactful mobile experiences{" "}
            </span>
            that make a difference.
          </p>

          {/* Premium action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </Button>
            
            <Button
              variant="outline"
              className="group relative border-2 border-white/30 text-white hover:text-black hover:bg-white px-10 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
            >
              <span className="flex items-center">
                Connect on LinkedIn
                <div className="ml-2 w-2 h-2 bg-current rounded-full group-hover:animate-ping"></div>
              </span>
            </Button>
          </div>

          {/* Stats showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-blue-400 mb-2">3+</div>
              <div className="text-gray-300 font-medium">Years Learning</div>
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-green-400 mb-2">10+</div>
              <div className="text-gray-300 font-medium">Projects Built</div>
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-purple-400 mb-2">5</div>
              <div className="text-gray-300 font-medium">Certifications</div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={scrollToAbout}
            className="group text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10">
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                Scroll to explore
              </span>
              <div className="relative">
                <ArrowDown size={24} className="animate-bounce group-hover:text-blue-400 transition-colors" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
