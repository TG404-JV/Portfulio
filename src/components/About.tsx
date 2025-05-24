
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const certifications = [
    "Google Android Developer (2024)",
    "AMCAT Advanced Java (2024)", 
    "Infosys Springboard Python (2024)",
    "IBM Skillbuild Professional (2022)",
    "ColorOS Theme Designer (2024)"
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative Android applications that blend cutting-edge technology with exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image placeholder and info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-6xl font-bold text-white">
                TK
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Tejas Kale</h3>
              <p className="text-gray-400">📍 Khupta, Maharashtra</p>
              <p className="text-gray-400">🎓 B.Tech Computer Science & Engineering</p>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  onClick={() => window.open('mailto:cse.tejas@gmail.com')}
                >
                  📧 Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10"
                >
                  📄 Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Bio and certifications */}
          <div className="space-y-8">
            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Tejas Kale, an Android Developer from Khupta, Maharashtra, pursuing a B.Tech in Computer Science and Engineering. 
                  I specialize in building user-friendly apps with Java, integrating AI APIs like ChatGPT and Gemini, and leading projects with Agile methodologies.
                </p>
                <p>
                  My projects, like the DoctorCubes app and AI Quiz App, blend innovation and impact. I'm passionate about open-source development and 
                  community contribution, constantly exploring new technologies and best practices.
                </p>
                <p>
                  When not coding, I'm exploring tech trends, contributing to open-source projects, or pondering the universe's mysteries. 
                  I believe technology should make life better, and I strive to create applications that truly matter.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gradient">Certifications & Achievements</h3>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30 p-3 text-sm"
                  >
                    🏆 {cert}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
