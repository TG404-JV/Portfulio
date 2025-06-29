
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe, ExternalLink, Star, Code, Zap, Brain, Smartphone, Database, Sparkles, ArrowRight, Eye, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "DoctorCubes - Medical Education Platform",
      description: "Led development of scalable medical education app serving 100+ universities. Implemented advanced search algorithms, interactive learning modules, and progress tracking systems with offline content caching and collaborative learning tools.",
      technologies: ["Kotlin", "Java", "MVVM", "Firebase", "RESTful APIs", "Android SDK"],
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      accentColor: "blue",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tvm.doctorcube",
      status: "Live on Play Store",
      icon: <Smartphone className="w-6 h-6" />,
      metrics: { universities: "100+", efficiency: "45%" },
      category: "Medical Education",
      year: "2025"
    },
    {
      title: "AI-Powered Quiz Application",
      description: "Developing AI-powered Quiz Application integrating ChatGPT and Gemini APIs with comprehensive testing framework. Features 95% content accuracy with Material Design 3 components and robust error handling.",
      technologies: ["Android", "ChatGPT API", "Gemini API", "Material Design 3", "MVVM"],
      gradient: "from-green-500 via-teal-500 to-emerald-600",
      accentColor: "green",
      githubUrl: "https://github.com/TG404-JV",
      status: "In Development",
      icon: <Brain className="w-6 h-6" />,
      metrics: { accuracy: "95%", cost_reduction: "25%" },
      category: "AI Integration",
      year: "2025"
    },
    {
      title: "AI-Powered Conversational Chatbot",
      description: "Developed intelligent Android chatbot leveraging Gemini API with advanced NLP capabilities. Features real-time conversation management, context awareness, voice-to-text integration, and adaptive learning algorithms.",
      technologies: ["Android", "Gemini API", "NLP", "Voice-to-Text", "Machine Learning"],
      gradient: "from-purple-500 via-violet-500 to-pink-600",
      accentColor: "purple",
      githubUrl: "https://github.com/TG404-JV",
      status: "Completed",
      icon: <Zap className="w-6 h-6" />,
      metrics: { response_time: "< 2s", accuracy: "90%" },
      category: "AI Chatbot",
      year: "2024"
    },
    {
      title: "Agricultural Finance Manager",
      description: "Created comprehensive expense tracking solution for farmers featuring Firebase real-time synchronization, offline-first architecture with SQLite, and intuitive dashboard analytics with multi-language support.",
      technologies: ["Android", "Firebase", "SQLite", "Analytics", "Multi-language"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      accentColor: "orange",
      githubUrl: "https://github.com/TG404-JV",
      status: "Completed",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: { transparency: "40%", users: "500+" },
      category: "FinTech",
      year: "2024"
    }
  ];

  const getAccentClasses = (color) => {
    const colors = {
      blue: { border: "border-blue-400/50", text: "text-blue-400", bg: "bg-blue-500/10", hover: "hover:bg-blue-400/20" },
      green: { border: "border-green-400/50", text: "text-green-400", bg: "bg-green-500/10", hover: "hover:bg-green-400/20" },
      orange: { border: "border-orange-400/50", text: "text-orange-400", bg: "bg-orange-500/10", hover: "hover:bg-orange-400/20" },
      purple: { border: "border-purple-400/50", text: "text-purple-400", bg: "bg-purple-500/10", hover: "hover:bg-purple-400/20" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['</>', '{}', '[]', '()', '&&', '||', '=>', '++'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div 
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full pointer-events-none blur-sm transition-all duration-300 ease-out z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Featured Projects</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              My <span className="relative">
                Projects
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 animate-pulse" />
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of my Android development expertise, AI integration skills, and passion for creating 
              <span className="text-blue-400 font-semibold"> impactful applications</span> that solve real-world problems.
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const accentStyles = getAccentClasses(project.accentColor);
              
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`} />
                  
                  <Card className="relative overflow-hidden border-0 bg-gray-900/80 backdrop-blur-xl rounded-3xl h-full transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Header Section */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${accentStyles.bg} rounded-2xl flex items-center justify-center ${accentStyles.text} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-sm text-gray-400 font-medium">{project.category}</p>
                              <Badge variant="outline" className="text-xs border-gray-600 text-gray-500">
                                {project.year}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`${accentStyles.bg} ${accentStyles.text} border ${accentStyles.border} font-semibold px-3 py-1`}
                          >
                            {project.status}
                          </Badge>
                          {hoveredProject === index && (
                            <div className="flex gap-1 animate-fadeIn">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <Badge key={key} variant="outline" className="text-xs border-gray-600 text-gray-400">
                                  {value}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-8 flex-grow leading-relaxed text-base">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Database className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-400">Technologies Used</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="border-gray-600/50 text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.playStoreUrl && (
                          <Button 
                            className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                            onClick={() => window.open(project.playStoreUrl, '_blank')}
                          >
                            <Globe size={18} className="mr-2" />
                            Play Store
                            <ExternalLink size={14} className="ml-2" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button 
                            variant="outline"
                            className={`${accentStyles.border} ${accentStyles.text} ${accentStyles.hover} flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${accentStyles.bg}`}
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github size={18} className="mr-2" />
                            {project.playStoreUrl ? 'Code' : 'GitHub'}
                            <ExternalLink size={14} className="ml-2" />
                          </Button>
                        )}
                      </div>

                      {hoveredProject === index && (
                        <div className="absolute top-4 right-4 text-gray-400 animate-bounce">
                          <Eye className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
              <Card className="relative p-8 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Explore More Projects
                    </h3>
                    <Star className="w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  <p className="text-gray-300 text-center max-w-2xl">
                    Discover additional projects, experiments, and open-source contributions on my GitHub profile. 
                    Each repository tells a story of innovation and continuous learning.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
                    >
                      <Github size={20} className="mr-3" />
                      View All Projects
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-teal-500/5"
                      onClick={() => window.open('https://github.com/TG404-JV?tab=repositories', '_blank')}
                    >
                      <Code size={20} className="mr-3" />
                      Browse Code
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;
