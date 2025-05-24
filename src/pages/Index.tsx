
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <Navigation activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="projects" className="py-20 bg-gray-900/50">
        <Projects />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="experience" className="py-20 bg-gray-900/50">
        <Experience />
      </section>

      <section id="leadership" className="py-20">
        <Leadership />
      </section>

      <section id="contact" className="py-20 bg-gray-900/50">
        <Contact />
      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Tejas Kale. Crafted with passion and code.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/TG404-JV" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tejas-kale-65419a24b" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
