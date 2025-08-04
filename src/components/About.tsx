import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative bg-slate-700 rounded-2xl p-8 transform group-hover:-rotate-3 transition-transform duration-300">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/40">JD</div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Passionate about creating digital experiences
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building modern web applications. 
                I specialize in React, Node.js, and cloud technologies, with a keen eye for design and user experience.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 group-hover:text-orange-400 transition-all duration-300" />
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;