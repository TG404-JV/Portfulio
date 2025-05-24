
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "TVM IT Solutions",
      period: "February 2025 – Present",
      description: "Led development of DoctorCubes app, connecting MBBS students with global admissions. Implemented Firebase integration, RESTful APIs, and user authentication systems.",
      achievements: [
        "Developed complete Android application with 1000+ downloads",
        "Integrated multiple third-party APIs for admission data",
        "Implemented real-time chat and notification systems",
        "Collaborated with cross-functional teams using Agile methodology"
      ],
      technologies: ["Java", "Firebase", "REST APIs", "Android SDK"],
      gradient: "from-blue-500 to-purple-600",
      status: "Current"
    },
    {
      title: "Part-Time Android Developer Intern",
      company: "AAYAAMAI",
      period: "April 2025 – Present", 
      description: "Built AI Quiz App integrating ChatGPT and Gemini APIs. Focused on prompt engineering and natural language processing for educational content generation.",
      achievements: [
        "Integrated OpenAI and Google AI APIs",
        "Implemented intelligent quiz generation algorithms", 
        "Designed user-friendly Material Design interface",
        "Optimized app performance for various Android devices"
      ],
      technologies: ["Android", "ChatGPT API", "Gemini API", "NLP"],
      gradient: "from-green-500 to-teal-600",
      status: "Current"
    },
    {
      title: "Android Developer Intern",
      company: "Staff Inn IT Solutions",
      period: "March 2024 – August 2024",
      description: "Developed CRM application for staff management with advanced data visualization and reporting features. Enhanced user experience through modern UI/UX design.",
      achievements: [
        "Built comprehensive CRM system from scratch",
        "Implemented data visualization with charts and graphs",
        "Created responsive UI following Material Design principles",
        "Delivered project 2 weeks ahead of schedule"
      ],
      technologies: ["Android", "Java", "SQLite", "Material Design"],
      gradient: "from-orange-500 to-red-600",
      status: "Completed"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through various internships and projects, building real-world Android applications and gaining valuable industry experience.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gray-800/50 flip-card perspective-1000"
            >
              {/* Front of card */}
              <div className="flip-card-front p-8 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-white mr-4">{exp.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`${exp.status === 'Current' ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'}`}
                        >
                          {exp.status}
                        </Badge>
                      </div>
                      <h4 className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</h4>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2 mt-1">✓</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-gray-600 text-gray-300 bg-gray-700/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Experience summary */}
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
                  <div className="text-3xl font-bold text-green-400">1.5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Apps Developed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-gray-400">Project Success Rate</div>
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
