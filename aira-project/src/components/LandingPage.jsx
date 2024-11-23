import React from 'react';
import { ArrowRight, Briefcase, CheckCircle, MailIcon, Phone, Users } from 'lucide-react';

const LandingPage = () => {
  const projects = [
    {
      title: "AI Integration Platform",
      description: "Seamlessly integrate AI solutions into your existing workflow",
      status: "Completed"
    },
    {
      title: "Smart Analytics Suite",
      description: "Intelligent data analysis and reporting platform",
      status: "In Progress"
    },
    {
      title: "Innovation Hub",
      description: "Collaborative platform for next-gen project development",
      status: "Upcoming"
    }
  ];

  const features = [
    "Innovative Solutions",
    "AI-Powered Development",
    "24/7 Expert Support",
    "Future-Ready Architecture"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Aira
              </div>
            </div>
            <div className="space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Innovate
            </span> with Aira
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming visionary ideas into groundbreaking solutions. Where innovation meets excellence.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            Start Your Journey <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Aira</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="text-blue-600 mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <Briefcase className="text-blue-600 mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="text-sm font-medium px-4 py-1 rounded-full bg-blue-100 text-blue-600">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Connect with Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center">
                <MailIcon className="text-blue-600 mr-4" size={24} />
                <span>contact@aira.tech</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                Aira
              </h3>
              <p className="text-gray-400">
                Pioneering the future of digital innovation
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;