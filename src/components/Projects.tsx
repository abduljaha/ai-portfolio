import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile, projects } from '../data/profile';
import { ArrowRight, Code } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work in AI, Machine Learning, and Data Engineering.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* 3D Tilt Effect Container */}
                <div className="glass-card h-full overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)] hover:border-primary-blue/30 relative">
                  
                  {/* Decorative glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-20 blur transition duration-500 rounded-2xl pointer-events-none"></div>
                  
                  <div className="p-8 flex flex-col h-full relative z-10 bg-dark-800/90 rounded-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors">
                        {project.name}
                      </h3>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors z-20" aria-label={`View ${project.name} on Code`}>
                        <Code size={24} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-6 flex-grow line-clamp-3">
                      {project.solution}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-white font-medium group/link"
                      >
                        View Details 
                        <ArrowRight size={18} className="text-primary-purple group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <a 
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-3 backdrop-blur-sm border border-white/10 transition-all hover:scale-105 active:scale-95 group"
            >
              <GithubIcon size={20} />
              Explore more projects on Github
              <ArrowRight size={18} className="text-primary-cyan group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
