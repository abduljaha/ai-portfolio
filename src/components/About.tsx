import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Database, BrainCircuit, Code2, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Career Objective</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {profile.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-primary-blue/40 transition-all duration-300 group cursor-default">
                  <BrainCircuit className="text-primary-blue group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{profile.stats.aiProjects}+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">AI Projects</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary-purple/40 transition-all duration-300 group cursor-default">
                  <Code2 className="text-primary-purple group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{profile.stats.technologies}+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Technologies</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-primary-cyan/40 transition-all duration-300 group cursor-default">
                  <Award className="text-primary-cyan group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{profile.stats.certifications}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Certifications</span>
                </div>
                <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-primary-blue/40 transition-all duration-300 group cursor-default">
                  <Database className="text-primary-blue group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{profile.stats.githubProjects}+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">GitHub Repos</span>
                </div>
              </div>
            </div>
            
            <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-primary-purple/20 rounded-2xl animate-pulse-glow"></div>
              <div className="absolute inset-4 glass-card overflow-hidden group border border-gray-300 dark:border-white/10 p-2">
                 <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/5">
                   <img 
                      src="/ai_abstract_visualization.jpg" 
                      alt="AI abstract visualization" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/10 to-transparent pointer-events-none mix-blend-multiply opacity-50"></div>
                   <div className="absolute inset-0 bg-primary-blue/10 mix-blend-overlay pointer-events-none"></div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
