
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ProjectCube = () => {
  const [currentFace, setCurrentFace] = useState(0);

  const projects = [
    {
      title: "AI Quiz App",
      description: "ChatGPT & Gemini Integration",
      tech: "Android • AI APIs • NLP",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Car Rental",
      description: "Full-Stack Web Platform",
      tech: "PHP • MySQL • HTML5",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "AI Chatbot",
      description: "TensorFlow Powered",
      tech: "Android • TensorFlow • NLP",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="perspective-1000 w-80 h-80">
      <div className="relative w-full h-full preserve-3d">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient} p-6 text-white border-0 transition-all duration-1000 preserve-3d ${
              index === currentFace ? 'rotate-y-0' : 'rotate-y-90'
            }`}
            style={{
              transform: `rotateY(${index * 120}deg) translateZ(200px)`,
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg opacity-90 mb-4">{project.description}</p>
              <div className="bg-black/20 px-4 py-2 rounded-full">
                <span className="text-sm">{project.tech}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Cube indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFace(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentFace ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCube;
