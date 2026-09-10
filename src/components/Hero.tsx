import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Mail, ArrowRight, BrainCircuit } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from './Icons';
import Scene from './3d/Scene';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none md:pointer-events-auto">
         <Scene />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary-cyan font-mono mb-4 tracking-wider">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {profile.name}
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
              {profile.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              I build intelligent AI systems, generative AI applications, RAG pipelines, 
              AI agents, and data-driven solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="px-8 py-3 rounded-full bg-primary-blue hover:bg-blue-600 text-gray-900 dark:text-white font-medium flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                View Projects <ArrowRight size={18} />
              </a>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))} className="px-8 py-3 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-gray-300 dark:bg-white/20 text-gray-900 dark:text-white font-medium flex items-center gap-2 backdrop-blur-sm border border-gray-300 dark:border-white/10 transition-all hover:scale-105 active:scale-95">
                Chat with AI Twin <BrainCircuit size={18} />
              </button>
            </div>
            
            <div className="flex items-center gap-6">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900 dark:text-white hover:scale-110 transition-all">
                <GithubIcon size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-blue dark:text-gray-400 dark:hover:text-primary-blue hover:scale-110 transition-all">
                <LinkedinIcon size={24} />
              </a>
              <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-blue dark:text-gray-400 dark:hover:text-primary-blue hover:scale-110 transition-all">
                <TelegramIcon size={24} />
              </a>
              <a href={profile.x} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900 dark:text-white hover:scale-110 transition-all">
                <XIcon size={24} />
              </a>
              <a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-primary-cyan dark:text-gray-400 dark:hover:text-primary-cyan hover:scale-110 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-500">
        <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
