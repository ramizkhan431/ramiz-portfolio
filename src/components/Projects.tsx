import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with detailed forecasts, interactive maps, and personalized weather alerts for multiple locations.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media managers with detailed insights, automated reporting, and trend analysis capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and creativity
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative overflow-hidden rounded-2xl bg-slate-900 transform group-hover:-rotate-3 transition-transform duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    Featured Project
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold transition-all duration-300 hover:scale-105 group"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-slate-900/50 rounded-2xl overflow-hidden hover:bg-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-600 text-slate-400 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;