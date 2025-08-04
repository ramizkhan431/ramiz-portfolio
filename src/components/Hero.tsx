import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse ${
              i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-60" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Animated rings around photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
              
              {/* Photo container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-900 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                <img
                  src="https://avatars.githubusercontent.com/u/45427874?v=4"
                  alt="Ramiz Khan - Full Stack Developer"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-4 w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            Ramiz Khan
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up animation-delay-300">
            <span className="typing-animation">Full Stack Developer</span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-600">
            Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-900">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up animation-delay-1200">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                aria-label={label}
              >
                <Icon size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={32} className="text-white/60" />
      </button>
    </section>
  );
};

export default Hero;