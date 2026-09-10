import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/profile';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white dark:bg-dark-900 group-hover:border-primary-blue group-hover:bg-primary-blue/20 text-gray-600 dark:text-gray-400 group-hover:text-primary-blue shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10">
                  <Briefcase size={18} />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass-card hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-primary-blue/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{exp.role}</h3>
                    <time className="font-mono text-sm text-primary-cyan px-3 py-1 bg-primary-cyan/10 rounded-full w-fit">
                      {exp.duration}
                    </time>
                  </div>
                  <h4 className="text-lg text-primary-purple mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                        <span className="text-primary-blue mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-300 dark:border-white/10">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
