import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL", "HTML5", "CSS3", "JavaScript", "XML"],
      icon: "💻",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      glowColor: "blue"
    },
    {
      title: "Android Development", 
      skills: ["Android SDK", "Jetpack Compose", "Material Design", "Android Studio", "Gradle"],
      icon: "📱",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      glowColor: "green"
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "MySQL", "RESTful APIs", "PHP", "Node.js", "MongoDB"],
      icon: "🗄️",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      glowColor: "orange"
    },
    {
      title: "AI & Machine Learning",
      skills: ["ChatGPT API", "Gemini API", "TensorFlow", "NLP", "Prompt Engineering"],
      icon: "🤖",
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      glowColor: "purple"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "IntelliJ IDEA", "Figma", "Postman", "GitHub"],
      icon: "🛠️", 
      gradient: "from-indigo-500 via-blue-500 to-cyan-600",
      glowColor: "indigo"
    },
    {
      title: "Specializations",
      skills: ["CRM Systems", "Data Visualization", "Agile Methodology", "UI/UX Design"],
      icon: "⭐",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      glowColor: "yellow"
    }
  ];

  const rotatingSkills = [
    { name: "Java", color: "from-orange-500 to-red-500", shadow: "shadow-orange-500/30" },
    { name: "Android", color: "from-green-500 to-emerald-500", shadow: "shadow-green-500/30" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500", shadow: "shadow-yellow-500/30" },
    { name: "AI APIs", color: "from-purple-500 to-pink-500", shadow: "shadow-purple-500/30" },
    { name: "MySQL", color: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/30" },
    { name: "Git", color: "from-red-500 to-pink-500", shadow: "shadow-red-500/30" },
    { name: "React", color: "from-cyan-500 to-blue-500", shadow: "shadow-cyan-500/30" },
    { name: "Python", color: "from-emerald-500 to-teal-500", shadow: "shadow-emerald-500/30" }
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
      yellow: 'shadow-yellow-500/30'
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

      {/* Floating particles */}
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
              A comprehensive arsenal of cutting-edge technologies and frameworks that fuel innovation and excellence.
            </p>
          </div>

          {/* Premium animated skills orbit */}
          <div className="relative mb-24 flex justify-center">
            <div className="relative w-96 h-96">
              {/* Orbital rings */}
              <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-12 border border-purple-500/20 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-16 border border-pink-500/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
              
              {/* Center photo with enhanced styling */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-xl">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src="/lovable-uploads/7eded82c-0810-4710-b39e-e5a3ede4215d.png" 
                    alt="Tejas Kale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full"></div>
              </div>
              
              {/* Enhanced rotating skill badges */}
              {rotatingSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white text-xs font-bold border border-white/20 ${skill.shadow} shadow-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${index * -2.5}s`,
                    transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateX(140px) rotate(${-index * 45}deg)`
                  }}
                >
                  <span className="text-center leading-tight">{skill.name}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium skill cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getGlowClass(category.glowColor)} hover:shadow-2xl cursor-pointer`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0px)',
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl`} />
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center text-3xl mr-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/20">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-white/10 text-gray-200 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-xs p-3 rounded-xl font-medium backdrop-blur-sm hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
              </Card>
            ))}
          </div>

          {/* Premium stats section */}
          <Card className="relative p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Continuous Learning Journey
                </span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">3+</div>
                  <div className="text-gray-200 font-semibold text-lg">Years of Learning</div>
                  <div className="absolute inset-0 bg-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </div>
                
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-gray-200 font-semibold text-lg">Projects Completed</div>
                  <div className="absolute inset-0 bg-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </div>
                
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-400/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform">5</div>
                  <div className="text-gray-200 font-semibold text-lg">Certifications Earned</div>
                  <div className="absolute inset-0 bg-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </div>
              </div>
              
              <div className="text-center relative">
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Ready to build the next big thing together! 🚀
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;