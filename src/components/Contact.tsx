import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Globe, Mail, MapPin, GraduationCap, Send, Star, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const FloatingParticle = ({ delay = 0, size = 4 }) => (
    <div 
      className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} size={Math.random() * 6 + 2} />
        ))}
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none opacity-20 blur-sm transition-all duration-300 ease-out z-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Let's Build Together</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Let's <span className="relative">
                Connect
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 animate-pulse" />
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next Android project or explore collaboration opportunities? 
              I'd love to hear from you and bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <Card className="relative p-8 bg-gray-900/80 backdrop-blur-xl border-gray-700/50 rounded-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Send a Message
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-400" />
                      Your Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-400" />
                      Email Address
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-400" />
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 resize-none rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <Button 
                    type="button"
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <Card className="relative p-8 bg-gray-900/80 backdrop-blur-xl border-gray-700/50 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-medium">Email</div>
                        <a href="mailto:cse.tejas@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                          cse.tejas@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-medium">Location</div>
                        <div className="text-gray-300 font-semibold">Khupta, Maharashtra, India</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 font-medium">Education</div>
                        <div className="text-gray-300 font-semibold">B.Tech Computer Science & Engineering</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Enhanced Social Links */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <Card className="relative p-8 bg-gray-900/80 backdrop-blur-xl border-gray-700/50 rounded-2xl">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Connect on Social
                  </h3>
                  
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 justify-start p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 bg-blue-500/5"
                      onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
                    >
                      <Linkedin size={20} className="mr-3" />
                      LinkedIn Profile
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full border-gray-400/50 text-gray-400 hover:bg-gray-400/10 hover:border-gray-400 justify-start p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 bg-gray-500/5"
                      onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
                    >
                      <Github size={20} className="mr-3" />
                      GitHub Projects
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Enhanced Interactive Globe */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <Card className="relative p-8 bg-gray-900/80 backdrop-blur-xl border-gray-700/50 rounded-2xl text-center">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                    Global Reach
                  </h3>
                  <div className="relative">
                    <div className="w-36 h-36 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-5xl shadow-2xl hover:transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full" />
                      <Globe className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '20s' }} />
                    </div>
                    <div className="absolute top-4 right-4 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg animate-pulse" />
                    <div className="absolute top-12 left-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-300 font-semibold">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      Khupta, Maharashtra
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 font-medium">
                    Open to remote opportunities worldwide 🌍
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
              <Card className="relative p-12 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ready to Build Something Amazing?
                  </h3>
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Whether you need an Android app, AI integration, or want to discuss the latest in mobile technology, 
                  I'm here to help turn your vision into reality with innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Let's Connect on LinkedIn
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 bg-blue-500/5"
                    onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View My Code
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;