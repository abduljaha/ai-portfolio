import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, ExternalLink } from 'lucide-react';
import { projects } from '../data/profile';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-primary-blue hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{project.name}</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
            <Code size={20} /> Source Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-blue transition-colors border border-primary-blue/30">
            <ExternalLink size={20} /> Live Demo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">The Problem</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">The Solution</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">Architecture & Implementation</h2>
              <div className="glass-card p-6 border-l-4 border-l-primary-purple">
                <p className="font-mono text-sm text-gray-300 break-words">{project.architecture}</p>
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary-cyan mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map(highlight => (
                  <li key={highlight} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary-purple mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
