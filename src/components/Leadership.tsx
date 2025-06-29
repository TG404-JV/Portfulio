
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Shield, TrendingUp, Target, CheckCircle } from 'lucide-react';

const Leadership = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Leadership <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Demonstrating leadership and organizational skills through both technical project management and academic administration responsibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Leadership Role Card */}
          <Card className="group relative overflow-hidden border-0 bg-gray-800/50 p-8 card-3d hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-3xl font-bold text-white pulse-glow rotate-3d">
                🏆
              </div>

              <Badge variant="secondary" className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                Current Role • 2025
              </Badge>

              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                Center Manager, MHT-CET Examination
              </h3>
              
              <h4 className="text-xl text-yellow-400 font-semibold mb-6">
                MGM University, Chh. Sambhajinagar
              </h4>

              <p className="text-gray-300 leading-relaxed mb-8">
                Successfully managed examination operations for one of Maharashtra's most important entrance examinations, 
                ensuring compliance with state regulations and maintaining the highest standards of academic integrity.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-gray-400">Candidates Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-400">Staff Members</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Leadership */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-blue-400 mr-3" />
              <h4 className="text-xl font-bold text-gradient">Technical Leadership</h4>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Cross-functional Team Lead</h5>
                <p className="text-gray-300 text-sm mb-2">Led Agile teams of 3-5 developers at TVM IT Solutions</p>
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  100% on-time delivery record across 4 major releases
                </div>
              </div>
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Architecture Leadership</h5>
                <p className="text-gray-300 text-sm mb-2">Architected scalable Android applications serving 100+ universities</p>
                <div className="flex items-center text-blue-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  45% improvement in data processing efficiency
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Key Responsibilities */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-green-400 mr-3" />
              <h4 className="text-xl font-bold text-gradient">Key Responsibilities</h4>
            </div>
            <ul className="space-y-3">
              {[
                "Successfully managed examination operations for 500+ candidates across 2 centers",
                "Coordinated and supervised 50+ staff members during examination periods",
                "Achieved 100% compliance with state examination protocols",
                "Maintained zero security incidents throughout tenure",
                "Implemented digital monitoring systems for operational efficiency",
                "Coordinated with university administration and government officials"
              ].map((responsibility, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span className="text-sm">{responsibility}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Leadership Skills */}
          <Card className="p-6 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-purple-400 mr-3" />
              <h4 className="text-xl font-bold text-gradient">Leadership Skills Developed</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Team Management",
                "Crisis Resolution", 
                "Strategic Planning",
                "Quality Assurance",
                "Stakeholder Communication",
                "Process Optimization",
                "Compliance Management",
                "Performance Monitoring"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 bg-purple-500/10 p-2 text-center text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Impact & Achievements */}
        <div className="mt-8">
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-blue-400 mr-3" />
              <h4 className="text-2xl font-bold text-gradient">Impact & Achievements</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Zero security incidents during examination management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">25% improvement in operational efficiency through digital systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">100% regulatory compliance with state examination protocols</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Successful coordination across 2 examination centers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Positive feedback from university administration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Seamless examination experience for all candidates</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16">
          <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Leadership Philosophy</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "Leadership is about creating an environment where everyone can perform at their best. 
              Whether managing examination operations or leading development teams, I believe in combining 
              strategic thinking with hands-on problem-solving to deliver exceptional results while 
              maintaining the highest standards of integrity and excellence."
            </p>
            <div className="mt-6 flex justify-center">
              <Badge variant="secondary" className="bg-gradient-primary text-white px-6 py-2 text-lg">
                Leading Through Innovation
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
