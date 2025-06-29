
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Calendar, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Android Developer with expertise in modern mobile technologies and AI integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Professional Summary */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gradient">Professional Summary</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experienced Android developer with 8+ months of hands-on experience in developing scalable mobile applications using Kotlin, Java, and modern Android technologies. Proven track record of delivering production-ready apps with clean architecture patterns (MVVM), AI integrations, and performance optimizations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Skilled in leading development teams and implementing cutting-edge features that enhance user engagement by 35%.
            </p>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gradient">Contact Information</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">Khupta, Maharashtra 431132</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <a href="mailto:cse.tejas@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  cse.tejas@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <a href="tel:+918788466016" className="text-green-400 hover:text-green-300 transition-colors">
                  +91 8788466016
                </a>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gradient">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-blue-400 font-medium mb-1">
                  Dr. Babasaheb Ambedkar Technological University
                </p>
                <p className="text-gray-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nov 2021 – May 2025
                </p>
                <p className="text-gray-500 text-sm mt-1">Lonere, Maharashtra</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Higher Secondary Certificate (Science Stream)
                </h4>
                <p className="text-green-400 font-medium mb-1">
                  Rajukunwar Jr College Dhawda
                </p>
                <p className="text-gray-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  2021
                </p>
                <p className="text-gray-500 text-sm mt-1">Maharashtra</p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-gradient">Certifications</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Android App Development for Beginners",
                  provider: "Simplilearn",
                  date: "Jun 2025",
                  id: "8485123"
                },
                {
                  title: "Google Play Academy - Store Listing Certificate",
                  provider: "Google Play Academy",
                  date: "Jun 2025 – Jun 2028",
                  id: "146729204"
                },
                {
                  title: "Introduction to Java Spring Framework",
                  provider: "Simplilearn",
                  date: "Jun 2025",
                  id: "8485311"
                },
                {
                  title: "AMCAT Certified Software Developer (Java)",
                  provider: "AMCAT — SHL",
                  date: "Apr 2024",
                  id: "418060420470589"
                }
              ].map((cert, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="text-blue-400 text-sm">{cert.provider}</p>
                  <p className="text-gray-400 text-xs">{cert.date}</p>
                  <Badge variant="outline" className="text-xs mt-1 border-gray-600 text-gray-400">
                    ID: {cert.id}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Achievements */}
        <div className="mt-16">
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                <div className="text-gray-400">Data Processing Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">On-time Delivery Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
                <div className="text-gray-400">User Engagement Enhancement</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
