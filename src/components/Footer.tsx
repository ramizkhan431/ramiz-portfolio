import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Ramiz Khan
              </div>
              <p className="text-slate-400 leading-relaxed">
                Building digital experiences that make a difference. Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="space-y-2">
                <a
                  href="mailto:ramiz.dev01@gmail.com"
                  className="block text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  ramiz.dev01@gmail.com
                </a>
                <a
                  href="tel:+919932978825"
                  className="block text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +91 9932978825
                </a>
                <p className="text-slate-400">West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Ramiz Khan</span>
              <span>© {currentYear}</span>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:ramiz.dev01@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Back to top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;