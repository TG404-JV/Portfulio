
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
              👋 Hey there! Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Tejas Kale</span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-gray-300 mb-8 space-y-2">
            <p>Android Developer</p>
            <p className="text-lg text-blue-400">Crafting Innovative Apps with AI and Passion</p>
          </div>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            B.Tech CSE student specializing in Android development, AI integration, and user-centered design. 
            Transforming ideas into impactful mobile experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToAbout}
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 text-lg"
              onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
