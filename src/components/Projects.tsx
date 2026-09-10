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
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="group relative h-full"
              >
                {/* Gradient Border Container */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full flex flex-col bg-[#0f1115] rounded-3xl p-8 transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code size={120} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors">
                      {project.name}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors bg-gray-200/50 dark:bg-white/5 p-3 rounded-full hover:bg-gray-200 dark:bg-white/10" aria-label={`View ${project.name} on Code`}>
                      <GithubIcon size={20} />
                    </a>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed relative z-10">
                    {project.solution}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/5 flex items-center justify-between relative z-10">
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-teal-400 font-medium group/link hover:text-teal-300 transition-colors"
                    >
                      View Details 
                      <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                    </Link>
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
              className="px-8 py-4 rounded-full bg-gray-200/50 dark:bg-white/5 hover:bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white font-medium flex items-center gap-3 backdrop-blur-sm border border-gray-300 dark:border-white/10 transition-all hover:scale-105 active:scale-95 group"
            >
              <GithubIcon size={20} />
              Explore more on Github
              <ArrowRight size={18} className="text-primary-cyan group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
