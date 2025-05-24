
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Leadership = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Leadership <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Demonstrating leadership and organizational skills beyond technical development through academic and community responsibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Leadership Role Card */}
          <Card className="group relative overflow-hidden border-0 bg-gray-800/50 p-8 card-3d hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative text-center">
              {/* 3D Badge Animation */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-3xl font-bold text-white pulse-glow rotate-3d">
                🏆
              </div>

              <Badge variant="secondary" className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                Current Role • 2025
              </Badge>

              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                MHT-CET Exam Center Manager
              </h3>
              
              <h4 className="text-xl text-yellow-400 font-semibold mb-6">
                MGM University
              </h4>

              <p className="text-gray-300 leading-relaxed mb-8">
                Leading comprehensive exam operations for one of Maharashtra's most important entrance examinations, 
                ensuring compliance with government regulations and maintaining the highest standards of academic integrity.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-gray-400">Students Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">100%</div>
                  <div className="text-sm text-gray-400">Compliance Rate</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Responsibilities and Skills */}
          <div className="space-y-6">
            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h4 className="text-xl font-bold text-gradient mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {[
                  "Managed exam operations and logistics coordination",
                  "Ensured compliance with MHT-CET regulations",
                  "Led staff training and performance management",
                  "Coordinated with university administration",
                  "Maintained examination security protocols",
                  "Handled student inquiries and support"
                ].map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">▶</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h4 className="text-xl font-bold text-gradient mb-4">Leadership Skills Developed</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Team Management",
                  "Crisis Resolution", 
                  "Strategic Planning",
                  "Quality Assurance",
                  "Communication",
                  "Problem Solving"
                ].map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-orange-500/30 text-orange-300 bg-orange-500/10 p-2 text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gray-800/50 border-gray-700">
              <h4 className="text-xl font-bold text-gradient mb-4">Impact & Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Zero security incidents during tenure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Streamlined exam processes for efficiency</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Maintained 100% regulatory compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Positive feedback from university administration</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16">
          <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Leadership Philosophy</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "Leadership is not about being in charge. It's about taking care of those in your charge. 
              Whether managing exam operations or leading development teams, I believe in fostering environments 
              where everyone can succeed while maintaining the highest standards of integrity and excellence."
            </p>
            <div className="mt-6 flex justify-center">
              <Badge variant="secondary" className="bg-gradient-primary text-white px-6 py-2 text-lg">
                Leading by Example
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
