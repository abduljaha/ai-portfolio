import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/profile';

const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-6 h-full hover:border-primary-blue/30 transition-colors"
  >
    <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map(skill => (
        <span 
          key={skill} 
          className="px-3 py-1.5 bg-dark-700/50 hover:bg-primary-blue/20 border border-white/5 hover:border-primary-blue/30 rounded-md text-sm text-gray-300 hover:text-white transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="Programming" items={skills.programming} delay={0.1} />
            <SkillCategory title="AI / Machine Learning" items={skills.ai} delay={0.2} />
            <SkillCategory title="Data Engineering" items={skills.data} delay={0.3} />
            <SkillCategory title="Backend" items={skills.backend} delay={0.4} />
            <SkillCategory title="Developer Tools" items={skills.tools} delay={0.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
