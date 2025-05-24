
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Globe } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate form submission
    toast.success('Thank you! Your message has been sent. I\'ll get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next Android project or explore collaboration opportunities? 
            I'd love to hear from you and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gray-800/50 border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-white py-3 text-lg"
              >
                Send Message 🚀
              </Button>
            </form>
          </Card>

          {/* Contact Info & 3D Globe */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href="mailto:cse.tejas@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      cse.tejas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-gray-300">Khupta, Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    🎓
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Education</div>
                    <div className="text-gray-300">B.Tech Computer Science & Engineering</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gradient">Connect on Social</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10 justify-start p-4"
                  onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
                >
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn Profile
                </Button>
                
                <Button
                  variant="outline"
                  className="border-gray-400 text-gray-400 hover:bg-gray-400/10 justify-start p-4"
                  onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
                >
                  <Github size={20} className="mr-3" />
                  GitHub Projects
                </Button>
              </div>
            </Card>

            {/* Interactive 3D Globe Placeholder */}
            <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
              <h3 className="text-xl font-bold mb-4 text-gradient">Global Reach</h3>
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-4xl floating">
                  🌍
                </div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 rounded-full pulse-glow"></div>
                <div className="mt-4 text-gray-400">
                  📍 Khupta, Maharashtra
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Open to remote opportunities worldwide
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need an Android app, AI integration, or want to discuss the latest in mobile technology, 
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3"
                onClick={() => window.open('https://www.linkedin.com/in/tejas-kale-65419a24b', '_blank')}
              >
                Let's Connect on LinkedIn
              </Button>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3"
                onClick={() => window.open('https://github.com/TG404-JV', '_blank')}
              >
                View My Code
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
