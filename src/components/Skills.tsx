
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Android SDK", "Android NDK", "Kotlin", "Java", "Material Design 3", "Jetpack Compose"],
      icon: "📱",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      glowColor: "green"
    },
    {
      title: "Architecture & Patterns", 
      skills: ["MVVM", "MVP", "Clean Architecture", "Repository Pattern", "Dependency Injection", "Hilt/Dagger"],
      icon: "🏗️",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      glowColor: "blue"
    },
    {
      title: "Android Libraries",
      skills: ["Jetpack Libraries", "Navigation", "Room", "LiveData", "ViewModel", "Retrofit", "Glide", "RecyclerView"],
      icon: "📚",
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      glowColor: "purple"
    },
    {
      title: "Backend & APIs",
      skills: ["Firebase", "RESTful APIs", "GraphQL", "MySQL", "SQLite", "JSON"],
      icon: "🗄️",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      glowColor: "orange"
    },
    {
      title: "AI/ML Integration",
      skills: ["OpenAI API", "ChatGPT API", "Gemini API", "Machine Learning Kit", "Custom AI Prompt Engineering", "NLP"],
      icon: "🤖",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      glowColor: "indigo"
    },
    {
      title: "Development Tools",
      skills: ["Android Studio", "IntelliJ IDEA", "Git", "Gradle", "Proguard", "Firebase Console"],
      icon: "🛠️", 
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      glowColor: "yellow"
    },
    {
      title: "Testing & Debugging",
      skills: ["Unit Testing", "JUnit", "Mockito", "UI Testing", "Espresso", "Performance Profiling"],
      icon: "🧪",
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      glowColor: "teal"
    },
    {
      title: "Other Technologies",
      skills: ["JavaScript", "HTML5", "CSS3", "PHP", "Spring Framework", "Agile/Scrum"],
      icon: "⚡",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald"
    }
  ];

  const rotatingSkills = [
    { name: "Kotlin", color: "from-purple-500 to-pink-500", shadow: "shadow-purple-500/30" },
    { name: "Android", color: "from-green-500 to-emerald-500", shadow: "shadow-green-500/30" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500", shadow: "shadow-yellow-500/30" },
    { name: "AI APIs", color: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/30" },
    { name: "MVVM", color: "from-indigo-500 to-purple-500", shadow: "shadow-indigo-500/30" },
    { name: "Jetpack", color: "from-teal-500 to-cyan-500", shadow: "shadow-teal-500/30" },
    { name: "Java", color: "from-orange-500 to-red-500", shadow: "shadow-orange-500/30" },
    { name: "SQLite", color: "from-cyan-500 to-blue-500", shadow: "shadow-cyan-500/30" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getGlowClass = (color) => {
    const glowMap = {
      blue: 'shadow-blue-500/30',
      green: 'shadow-green-500/30',
      orange: 'shadow-orange-500/30',
      purple: 'shadow-purple-500/30',
      indigo: 'shadow-indigo-500/30',
      yellow: 'shadow-yellow-500/30',
      teal: 'shadow-teal-500/30',
      emerald: 'shadow-emerald-500/30'
    };
    return glowMap[color] || 'shadow-blue-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto py-20">
          {/* Enhanced header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Technical
              </span>
              <span className="ml-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Skills
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive arsenal of modern Android development technologies, AI integration capabilities, and software engineering best practices.
            </p>
          </div>

          {/* Enhanced rotating skills orbit with your photo */}
          <div className="relative mb-24 flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-12 border border-purple-500/20 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-16 border border-pink-500/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-xl">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src="/img/profile.png" 
                    alt="Tejas Kale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full"></div>
              </div>
              
              {rotatingSkills.map((skill, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white text-xs font-bold border border-white/20 ${skill.shadow} shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300 animate-skill-orbit`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      animationDelay: `${index * -2.5}s`,
                      animationDuration: '20s'
                    }}
                  >
                    <span className="text-center leading-tight">{skill.name}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Premium skill cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-6 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getGlowClass(category.glowColor)} hover:shadow-2xl cursor-pointer`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0px)',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl`} />
                
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center text-2xl mr-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/20">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-white/10 text-gray-200 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-xs p-2 rounded-lg font-medium backdrop-blur-sm hover:scale-105 mr-1 mb-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
              </Card>
            ))}
          </div>

          {/* Professional achievement showcase */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 border border-white/20">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-4xl font-black mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Ready to Build Amazing Apps
                    </span>
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Let's collaborate and create innovative Android applications together
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-10">
                  <div className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                        <span className="text-blue-400 text-xl">📱</span>
                      </div>
                      <div className="text-3xl font-black text-blue-400 mb-2">8+</div>
                      <div className="text-gray-300 text-sm font-medium">Months Experience</div>
                    </div>
                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
                  </div>
                  
                  <div className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                        <span className="text-green-400 text-xl">🏢</span>
                      </div>
                      <div className="text-3xl font-black text-green-400 mb-2">100+</div>
                      <div className="text-gray-300 text-sm font-medium">Universities Served</div>
                    </div>
                    <div className="absolute inset-0 bg-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
                  </div>
                  
                  <div className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                        <span className="text-purple-400 text-xl">🏆</span>
                      </div>
                      <div className="text-3xl font-black text-purple-400 mb-2">95%</div>
                      <div className="text-gray-300 text-sm font-medium">AI Content Accuracy</div>
                    </div>
                    <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
                  </div>
                  
                  <div className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-400/30">
                        <span className="text-orange-400 text-xl">⚡</span>
                      </div>
                      <div className="text-3xl font-black text-orange-400 mb-2">45%</div>
                      <div className="text-gray-300 text-sm font-medium">Performance Boost</div>
                    </div>
                    <div className="absolute inset-0 bg-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
                  </div>
                </div>
                
                <div className="text-center relative">
                  <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <p className="text-xl font-semibold text-white mb-4 leading-relaxed">
                      Passionate about Android development and AI integration
                    </p>
                    <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
                      Every project is an opportunity to push the boundaries of what's possible in mobile development. I combine technical expertise with innovative thinking to create applications that make a real difference.
                    </p>
                    <div className="flex justify-center mt-6">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skill-orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
        
        .animate-skill-orbit {
          animation: skill-orbit 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
