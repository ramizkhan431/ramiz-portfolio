import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, category: 'Frontend', color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 85, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, category: 'Backend', color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL', level: 85, category: 'Database', color: 'from-indigo-500 to-purple-500' },
    { name: 'AWS', level: 75, category: 'Cloud', color: 'from-orange-500 to-red-500' },
    { name: 'Docker', level: 80, category: 'DevOps', color: 'from-cyan-500 to-blue-500' },
    { name: 'GraphQL', level: 70, category: 'API', color: 'from-pink-500 to-rose-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <div
                key={category}
                className="text-center p-6 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-102"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-slate-400 text-sm">{skill.category}</span>
                </div>
                
                <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="mt-2 text-right">
                  <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;