import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import { Mail, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from './Icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      if (serviceId === 'YOUR_SERVICE_ID') {
        throw new Error('EmailJS is not configured yet. Please add your credentials.');
      }

      const templateParams = {
        name: formData.name,
        from_name: formData.name, // Keep for fallback
        to_name: profile.name,
        email: formData.email,
        from_email: formData.email, // Keep for fallback
        subject: formData.subject || 'New Portfolio Contact Message!',
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error: any) {
      console.error('EmailJS submission error:', error);
      setStatus('error');
      const errText = error?.text || error?.message || 'Failed to send message. Please check your credentials and try again.';
      setErrorMessage(`Error: ${errText}`);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Build Something Intelligent</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing AI engineering roles, generative AI projects, or data-driven opportunities.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 flex flex-col items-center text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">Reach out to me directly, and I'll get back to you as soon as possible.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input 
                    id="name" required type="text" placeholder="Your Name" 
                    className="peer w-full bg-white dark:bg-dark-900/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-all shadow-inner"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-xs text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-cyan transition-all pointer-events-none">Your Name</label>
                </div>
                <div className="relative">
                  <input 
                    id="email" required type="email" placeholder="Your Email" 
                    className="peer w-full bg-white dark:bg-dark-900/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-all shadow-inner"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-xs text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-cyan transition-all pointer-events-none">Your Email</label>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  id="subject" required type="text" placeholder="Subject" 
                  className="peer w-full bg-white dark:bg-dark-900/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-all shadow-inner"
                  value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                <label htmlFor="subject" className="absolute left-4 top-2 text-xs text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-cyan transition-all pointer-events-none">Subject</label>
              </div>

              <div className="relative">
                <textarea 
                  id="message" required rows={5} placeholder="Your Message" 
                  className="peer w-full bg-white dark:bg-dark-900/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 pt-6 pb-2 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-all shadow-inner resize-none"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <label htmlFor="message" className="absolute left-4 top-2 text-xs text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-cyan transition-all pointer-events-none">Your Message</label>
              </div>

              <button 
                disabled={status === 'submitting'}
                className="relative w-full overflow-hidden rounded-xl p-[1px] group disabled:opacity-50 mt-4"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple opacity-70 group-hover:opacity-100 transition-opacity"></span>
                <div className="relative bg-white dark:bg-dark-900 px-6 py-4 rounded-xl flex items-center justify-center gap-3 group-hover:bg-white dark:bg-dark-900/80 transition-colors">
                  <span className="font-bold text-gray-900 dark:text-white tracking-wide">
                    {status === 'submitting' ? 'Sending Transmission...' : 'Send Message'}
                  </span>
                  {status !== 'submitting' && <Send size={18} className="text-primary-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </div>
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="text-green-400 flex items-center justify-center gap-2 bg-green-400/10 py-3 rounded-xl border border-green-400/20">
                    <CheckCircle size={18}/> Message successfully sent!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="text-red-400 flex items-center justify-center gap-2 bg-red-400/10 py-3 rounded-xl border border-red-400/20 text-sm px-4">
                    <AlertCircle size={18} className="shrink-0"/> {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full justify-center items-center border-t border-gray-300 dark:border-white/10 pt-8">
              <a href={`mailto:${profile.email}`} className="flex flex-col items-center gap-3 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white group">
                <div className="w-14 h-14 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-blue/20 group-hover:text-primary-blue transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </a>

              <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="flex flex-col items-center gap-3 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white group">
                <div className="w-14 h-14 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-blue/20 group-hover:text-primary-blue transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
              </a>
            </div>
            
            <div className="flex gap-6 pt-6">
                <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-blue hover:bg-primary-blue/20 transition-all">
                  <TelegramIcon size={24} />
                </a>
                <a href={profile.x} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-blue hover:bg-primary-blue/20 transition-all">
                  <XIcon size={24} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-blue hover:bg-primary-blue/20 transition-all">
                  <LinkedinIcon size={24} />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200/50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white hover:bg-gray-300 dark:bg-white/20 transition-all">
                  <GithubIcon size={24} />
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
