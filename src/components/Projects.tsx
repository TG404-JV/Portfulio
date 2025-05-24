
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DoctorCubes Android App",
      description: "Led development of an app and website connecting MBBS students with global admissions. Built with Java, XML, Firebase, and RESTful APIs.",
      technologies: ["Java", "XML", "Firebase", "REST APIs", "Android SDK"],
      gradient: "from-blue-500 to-purple-600",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tvm.doctorcube",
      status: "Live on Play Store"
    },
    {
      title: "AI Quiz App",
      description: "Developed an Android app generating quizzes with ChatGPT and Gemini APIs, using prompt engineering for accurate content generation.",
      technologies: ["Android", "ChatGPT API", "Gemini API", "Prompt Engineering", "Java"],
      gradient: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/TG404-JV",
      status: "Open Source"
    },
    {
      title: "Car Rental Website",
      description: "Created a full-stack platform with HTML5, CSS3, PHP, and MySQL for booking and user management with responsive design.",
      technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript"],
      gradient: "from-orange-500 to-red-600",
      githubUrl: "https://github.com/TG404-JV",
      status: "Completed"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Built an Android chatbot with NLP and TensorFlow for context-aware interactions and intelligent conversation flow.",
      technologies: ["Android", "TensorFlow", "NLP", "Machine Learning", "Java"],
      gradient: "from-purple-500 to-pink-600",
      githubUrl: "https://github.com/TG404-JV",
      status: "In Development"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my Android development expertise, AI integration skills, and passion for creating impactful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-gray-800/50 card-3d hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-gray-600 text-gray-300 bg-gray-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {project.playStoreUrl && (
                      <Button 
                        className="bg-gradient-primary hover:opacity-90 text-white flex-1"
                        onClick={() => window.open(project.playStoreUrl, '_blank')}
                      >
                        <Globe size={16} className="mr-2" />
                        Play Store
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8"
            onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
