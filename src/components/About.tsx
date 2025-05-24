
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Android Developer crafting innovative mobile experiences with AI integration and user-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo and Quick Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/7eded82c-0810-4710-b39e-e5a3ede4215d.png" 
                  alt="Tejas Kale - Android Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl animate-pulse">
                👨‍💻
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for opportunities</span>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  📍 Khupta, Maharashtra
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  🎓 B.Tech CSE
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  📱 Android Developer
                </Badge>
              </div>
            </div>
          </div>

          {/* Right side - Bio and Details */}
          <div className="space-y-8">
            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  👋 Hey there! I'm Tejas Kale, an Android Developer from Khupta, Maharashtra, 
                  pursuing a B.Tech in Computer Science and Engineering. I specialize in building 
                  user-friendly apps with Java, integrating AI APIs like ChatGPT and Gemini, and 
                  leading projects with Agile methodologies.
                </p>
                <p>
                  My projects, like the DoctorCubes app and AI Quiz App, blend innovation and impact. 
                  I'm passionate about open-source development and community building, holding 
                  certifications like Google Android Developer and AMCAT Advanced Java.
                </p>
                <p>
                  When not coding, I'm exploring the latest tech trends, contributing to open-source 
                  projects, or pondering the universe's mysteries. I believe in creating technology 
                  that makes a meaningful difference in people's lives.
                </p>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gradient">Recent Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">2025</div>
                    <div className="text-white font-medium">MHT-CET Manager</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    📜
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">2024</div>
                    <div className="text-white font-medium">Google Certified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    🎨
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">2024</div>
                    <div className="text-white font-medium">ColorOS Designer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                    ☕
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">2024</div>
                    <div className="text-white font-medium">Java Advanced</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-primary hover:opacity-90 text-white flex-1"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 flex-1"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
