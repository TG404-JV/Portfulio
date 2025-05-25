import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, GraduationCap, Smartphone, Award, Calendar, ExternalLink } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      year: '2025',
      title: 'MHT-CET Manager',
      description: 'Developed comprehensive exam management system',
      icon: '🏆',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      year: '2024',
      title: 'Google Android Certified',
      description: 'Professional Android Development certification',
      icon: '📜',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      year: '2024',
      title: 'ColorOS Designer',
      description: 'UI/UX design certification for mobile platforms',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      year: '2024',
      title: 'Java Advanced Certified',
      description: 'AMCAT Advanced Java Programming certification',
      icon: '☕',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '3+', icon: '📅', color: 'text-blue-400' },
    { label: 'Projects Completed', value: '10+', icon: '💼', color: 'text-green-400' },
    { label: 'Technologies', value: '15+', icon: '⚡', color: 'text-purple-400' },
    { label: 'Certifications', value: '5', icon: '🏅', color: 'text-orange-400' }
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About
              </span>
              <span className="ml-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-50 rounded-full -z-10"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate Android Developer crafting innovative mobile experiences with AI integration and user-centered design.
            </p>
          </div>

          {/* Stats section */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <Card key={index} className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-black ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Enhanced Photo and Info */}
            <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative inline-block mb-8 group">
                {/* Photo container with premium effects */}
                <div className="relative w-96 h-96 mx-auto">
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin" style={{animationDuration: '8s'}}>
                    <div className="w-full h-full rounded-3xl bg-gray-900"></div>
                  </div>
                  
                  {/* Photo */}
                  <div className="absolute inset-2 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/25">
                    <img 
                      src="/lovable-uploads/7eded82c-0810-4710-b39e-e5a3ede4215d.png" 
                      alt="Tejas Kale - Android Developer" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating emoji */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl animate-bounce border border-white/20">
                    👨‍💻
                  </div>
                  
                  {/* Orbital elements */}
                  <div className="absolute top-10 -left-10 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-pulse">
                    📱
                  </div>
                  <div className="absolute -top-6 right-10 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-xl shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                    🚀
                  </div>
                </div>
              </div>

              {/* Status and badges */}
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-green-500/20">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-gray-200 font-medium">Available for exciting opportunities</span>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-xl hover:scale-105 transition-transform">
                    <MapPin size={14} className="mr-2" />
                    Khupta, Maharashtra
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-4 py-2 rounded-xl hover:scale-105 transition-transform">
                    <GraduationCap size={14} className="mr-2" />
                    B.Tech CSE
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-xl hover:scale-105 transition-transform">
                    <Smartphone size={14} className="mr-2" />
                    Android Developer
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              
              {/* Tab navigation */}
              <div className="flex space-x-1 p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                {[
                  { id: 'journey', label: 'My Journey', icon: '🚀' },
                  { id: 'achievements', label: 'Achievements', icon: '🏆' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Journey content */}
              {activeTab === 'journey' && (
                <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    My Development Journey
                  </h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <p className="text-lg">
                        👋 Hey there! I'm <span className="font-semibold text-white">Tejas Kale</span>, an Android Developer from Khupta, Maharashtra, 
                        pursuing a B.Tech in Computer Science and Engineering. I specialize in building 
                        user-friendly apps with Java, integrating AI APIs like ChatGPT and Gemini, and 
                        leading projects with Agile methodologies.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
                      <p className="text-lg">
                        My projects, like the <span className="font-semibold text-green-400">DoctorCubes app</span> and <span className="font-semibold text-green-400">AI Quiz App</span>, blend innovation and impact. 
                        I'm passionate about open-source development and community building, holding 
                        certifications like Google Android Developer and AMCAT Advanced Java.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <p className="text-lg">
                        When not coding, I'm exploring the latest tech trends, contributing to open-source 
                        projects, or pondering the universe's mysteries. I believe in creating technology 
                        that <span className="font-semibold text-purple-400">makes a meaningful difference</span> in people's lives.
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Achievements content */}
              {activeTab === 'achievements' && (
                <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Recent Achievements
                  </h3>
                  <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${achievement.bgColor} border-white/10 hover:border-white/20`}
                        onMouseEnter={() => setHoveredAchievement(index)}
                        onMouseLeave={() => setHoveredAchievement(null)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar size={16} className="text-gray-400" />
                              <span className="text-sm text-gray-400 font-medium">{achievement.year}</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                              {achievement.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                          <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Enhanced Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white flex-1 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-white/20"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10">Let's Connect & Collaborate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </Button>
                
                <a
  href="/pdf/resume.pdf"
  download="Tejas-Kale-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    className="group relative border-2 border-white/30 text-white hover:text-black hover:bg-white flex-1 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl bg-white/5 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
  >
    <Download size={18} className="mr-2 group-hover:animate-bounce" />
    Download Resume
  </Button>
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;