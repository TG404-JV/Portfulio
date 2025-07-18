
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Calendar, Award, Target, Github, Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced Android Developer with 8+ months of expertise in building scalable mobile applications
          </p>
        </div>

        {/* Contact & Links Section */}
        <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center text-primary">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+918788466016" className="hover:text-primary-foreground transition-colors">
                  +91 8788466016
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center text-accent">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:cse.tejas@gmail.com" className="hover:text-accent-foreground transition-colors">
                  cse.tejas@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Experienced Android Developer with 8+ months of expertise in building scalable mobile applications using Kotlin, 
              Java, and modern Android frameworks. Proven track record of implementing MVVM architecture, AI integrations, 
              and performance optimizations that increase user engagement by 35%.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong leader with experience managing Agile development teams and delivering projects on time.
            </p>
          </Card>

          {/* Education */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-secondary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-lg font-semibold mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-primary font-medium mb-1">
                  Dr. Babasaheb Ambedkar Technological University
                </p>
                <p className="text-muted-foreground text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nov 2021 – July 2025
                </p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="text-lg font-semibold mb-2">
                  Higher Secondary Certificate
                </h4>
                <p className="text-secondary font-medium mb-1">
                  Rajukunwar Jr College
                </p>
                <p className="text-muted-foreground text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  2021
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="p-8 mt-8 bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Android App Development for Beginners",
                provider: "Simplilearn",
                date: "Jun 2025"
              },
              {
                title: "Store Listing Certificate",
                provider: "Google Play Academy",
                date: "Jun 2025 – Jun 2028"
              },
              {
                title: "Introduction to Java Spring Framework",
                provider: "Simplilearn",
                date: "Jun 2025"
              },
              {
                title: "AMCAT Certified Software Developer (Java)",
                provider: "AMCAT – SHL",
                date: "Apr 2024"
              }
            ].map((cert, index) => (
              <div key={index} className="border-l-2 border-accent pl-4 py-2">
                <h4 className="font-semibold text-foreground">{cert.title}</h4>
                <p className="text-accent text-sm">{cert.provider}</p>
                <p className="text-muted-foreground text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Achievements */}
        <Card className="p-8 mt-8 bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Data Processing Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">On-time Delivery Record</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">35%</div>
              <div className="text-muted-foreground">User Engagement Enhancement</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
