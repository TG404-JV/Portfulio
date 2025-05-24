
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL", "HTML5", "CSS3", "JavaScript", "XML"],
      icon: "💻",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Android Development", 
      skills: ["Android SDK", "Jetpack Compose", "Material Design", "Android Studio", "Gradle"],
      icon: "📱",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "MySQL", "RESTful APIs", "PHP", "Node.js", "MongoDB"],
      icon: "🗄️",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "AI & Machine Learning",
      skills: ["ChatGPT API", "Gemini API", "TensorFlow", "NLP", "Prompt Engineering"],
      icon: "🤖",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "IntelliJ IDEA", "Figma", "Postman", "GitHub"],
      icon: "🛠️", 
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Specializations",
      skills: ["CRM Systems", "Data Visualization", "Agile Methodology", "UI/UX Design"],
      icon: "⭐",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const rotatingSkills = [
    { name: "Java", color: "bg-orange-500" },
    { name: "Android", color: "bg-green-500" },
    { name: "Firebase", color: "bg-yellow-500" },
    { name: "AI APIs", color: "bg-purple-500" },
    { name: "MySQL", color: "bg-blue-500" },
    { name: "Git", color: "bg-red-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Python", color: "bg-emerald-500" }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that power my development journey.
          </p>
        </div>

        {/* Animated skills orbit with photo in center */}
        <div className="relative mb-16">
          <div className="w-40 h-40 mx-auto bg-gradient-primary rounded-full flex items-center justify-center relative overflow-hidden border-4 border-blue-400/50 shadow-2xl">
            <img 
              src="/lovable-uploads/7eded82c-0810-4710-b39e-e5a3ede4215d.png" 
              alt="Tejas Kale" 
              className="w-full h-full object-cover rounded-full"
            />
            
            {/* Rotating skill badges */}
            {rotatingSkills.map((skill, index) => (
              <div
                key={index}
                className={`absolute w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg orbit-skill`}
                style={{
                  animationDelay: `${index * -1.25}s`,
                  animationDuration: '10s'
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gray-800/50 p-6 card-3d hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-gray-600/50 transition-colors text-xs p-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skill progression */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Continuous Learning Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-gray-200 font-medium">Years of Learning</div>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="text-3xl font-bold text-green-400">10+</div>
                <div className="text-gray-200 font-medium">Projects Completed</div>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">5</div>
                <div className="text-gray-200 font-medium">Certifications Earned</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to build the next big thing together! 🚀
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
