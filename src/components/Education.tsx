import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/profile';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-primary-blue/10 rounded-xl text-primary-blue">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-blue/50 before:to-transparent">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 top-1.5 w-10 h-10 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-dark-900 border-2 border-primary-blue group-hover:bg-primary-blue group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all"></div>
                  </div>
                  
                  <div className="glass-card p-6 group-hover:border-primary-blue/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-primary-cyan text-sm font-mono bg-primary-cyan/10 px-2 py-1 rounded">{edu.duration}</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-gray-400 text-sm mb-4">CGPA: <span className="font-semibold text-white">{edu.gpa}</span></p>
                    )}
                    {edu.coursework && (
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-400 mb-2 font-semibold">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map(course => (
                            <span key={course} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-primary-purple/10 rounded-xl text-primary-purple">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-5 group flex flex-col h-full"
                >
                  <Award className="text-primary-purple mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" size={24} />
                  <h3 className="font-bold text-white mb-2 line-clamp-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                    <span className="text-primary-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
