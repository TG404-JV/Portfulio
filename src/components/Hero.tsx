
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
      {/* Enhanced dynamic background with improved mouse-reactive gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.25) 0%, 
            rgba(147, 51, 234, 0.15) 25%, 
            rgba(20, 184, 166, 0.1) 50%, 
            transparent 70%)`
        }}
      />

      {/* Enhanced animated mesh gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500/25 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500/25 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-3000"></div>
      </div>

      {/* Enhanced floating particles with improved animations */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-70 ${
              i % 4 === 0 ? 'w-1 h-1 bg-blue-400' : 
              i % 4 === 1 ? 'w-2 h-2 bg-purple-400' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-teal-400' :
              'w-0.5 h-0.5 bg-pink-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite, glow ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating tech icons with better positioning */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <div
            key={index}
            className={`absolute ${color} opacity-30 hover:opacity-60 transition-all duration-500 cursor-pointer`}
            style={{
              left: `${15 + index * 25}%`,
              top: `${10 + index * 30}%`,
              animation: `float 8s ease-in-out infinite, pulse 4s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <Icon size={48} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-6xl mx-auto transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Enhanced premium greeting badge */}
          <div className="inline-block mb-10 group">
            <div className="relative">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-teal-500/25 text-white px-8 py-4 rounded-full border border-white/30 backdrop-blur-xl shadow-2xl group-hover:scale-110 transition-all duration-500">
                <span className="mr-3 text-lg">👋</span>
                Hey there! Welcome to my digital universe
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Enhanced main heading with better gradients */}
          <h1 className="text-7xl lg:text-9xl font-black mb-10 relative">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-700">
              Tejas Kale
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-60 rounded-full -z-10"></div>
          </h1>

          {/* Enhanced animated role descriptions */}
          <div className="text-2xl lg:text-4xl text-gray-300 mb-10 space-y-4">
            <div className="relative inline-block group">
              <p className="font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                Android Developer
              </p>
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
            <p className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Crafting Innovative Apps with AI and Passion
            </p>
          </div>

          {/* Enhanced description with better typography */}
          <p className="text-gray-300 mb-14 max-w-4xl mx-auto text-xl lg:text-2xl leading-relaxed font-light">
            B.Tech CSE student specializing in Android development, AI integration, and user-centered design. 
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {" "}Transforming ideas into impactful mobile experiences{" "}
            </span>
            that make a difference.
          </p>

          {/* Enhanced premium action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white px-12 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-110 border border-white/20"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ArrowDown className="ml-3 group-hover:translate-y-2 transition-transform duration-500" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </Button>
            
            <Button
              variant="outline"
              className="group relative border-2 border-white/40 text-white hover:text-black hover:bg-white px-12 py-5 text-xl font-semibold rounded-2xl backdrop-blur-xl bg-white/10 hover:bg-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/30"
              onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
            >
              <span className="flex items-center">
                Connect on LinkedIn
                <div className="ml-3 w-3 h-3 bg-current rounded-full group-hover:animate-ping"></div>
              </span>
            </Button>
          </div>

          {/* Enhanced stats showcase with better animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="group p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-blue-400/60 transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-black text-blue-400 mb-3">3+</div>
              <div className="text-gray-200 font-medium text-lg">Years Learning</div>
            </div>
            <div className="group p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-green-400/60 transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-black text-green-400 mb-3">10+</div>
              <div className="text-gray-200 font-medium text-lg">Projects Built</div>
            </div>
            <div className="group p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-black text-purple-400 mb-3">5</div>
              <div className="text-gray-200 font-medium text-lg">Certifications</div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator with better design */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={scrollToAbout}
            className="group text-gray-300 hover:text-white transition-all duration-500 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500">
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                Scroll to explore
              </span>
              <div className="relative">
                <ArrowDown size={28} className="animate-bounce group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        @keyframes glow {
          0% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.2); }
          66% { transform: translate(-30px, 30px) scale(0.8); }
        }
        
        .animate-blob {
          animation: blob 8s infinite;
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
