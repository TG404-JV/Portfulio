
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp, Users, Code, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Android Developer",
      company: "TVM IT Solutions",
      location: "Chh. Sambhajinagar, India",
      period: "Feb 2025 – Present",
      description: "Leading development of scalable Android applications with focus on performance optimization and AI integration.",
      achievements: [
        "Architected and developed DoctorCubes, a comprehensive medical education app serving 100+ universities using Kotlin and Java, improving data processing efficiency by 45%",
        "Designed and implemented secure RESTful APIs with integrated admin panel, resulting in 30% performance improvement",
        "Led cross-functional Agile teams of 3-5 developers, achieving 100% on-time delivery across 4 major product releases",
        "Integrated advanced AI features using custom prompt engineering techniques, increasing app personalization by 35%",
        "Implemented MVVM architecture with Jetpack libraries, maintaining 85%+ code coverage and ensuring scalable codebase"
      ],
      technologies: ["Kotlin", "Java", "MVVM", "Firebase", "RESTful APIs", "AI Integration"],
      gradient: "from-blue-500 to-purple-600", 
      status: "Current",
      icon: <Code className="w-6 h-6" />
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through various roles, building real-world Android applications and gaining valuable industry experience with leading companies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0 flex-1">
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center text-white mr-4 shadow-lg`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <h4 className="text-xl text-blue-400 font-semibold">{exp.company}</h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className={`${exp.status === 'Current' ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'} mb-4 lg:mb-0`}
                  >
                    {exp.status}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1 text-sm">▶</span>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-400" />
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-gray-600 text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Experience Highlights</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400">Companies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400">8+</div>
                  <div className="text-gray-400">Months Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-gray-400">Universities Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-400">95%</div>
                  <div className="text-gray-400">AI Content Accuracy</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
