import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from './Icons';

const Footer = ({ profile }: { profile: any }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-900/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-2">{profile.name}</h2>
            <p className="text-gray-400 text-sm">{profile.role}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-blue transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-blue transition-colors">
              <TelegramIcon size={20} />
            </a>
            <a href={profile.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <XIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-primary-cyan transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind & Three.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
