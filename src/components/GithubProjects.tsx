import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, ExternalLink, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const GithubLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Extract username from github URL
    const username = profile.github.split('/').pop() || 'abduljaha';
    
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        // Filter out forks if preferred, or keep them. We'll keep non-forks.
        const nonForks = data.filter((repo: any) => !repo.fork);
        setRepos(nonForks);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600 dark:text-gray-400">
        <div className="w-8 h-8 border-2 border-primary-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        Loading GitHub Projects...
      </div>
    );
  }

  if (error || repos.length === 0) {
    return null; // Graceful fallback: hide section if API fails or no repos
  }

  return (
    <section id="github-projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4 text-primary-cyan">
              <div className="p-4 rounded-full bg-primary-cyan/10">
                <GithubLogo />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">All GitHub Repositories</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A complete collection of my projects fetched directly from GitHub.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                className="glass-card p-6 flex flex-col h-full hover:border-primary-cyan/40 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <BookOpen size={20} className="text-primary-blue" />
                    <h3 className="font-bold text-lg group-hover:text-primary-cyan transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                  </div>
                  <div className="flex gap-2 text-gray-600 dark:text-gray-400">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {repo.description || 'No description provided.'}
                </p>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map(topic => (
                      <span key={topic} className="text-[10px] px-2 py-1 rounded-full bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-4 border-t border-gray-200 dark:border-white/5">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-blue"></div>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 hover:text-primary-purple transition-colors">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-primary-cyan transition-colors">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-200/50 dark:bg-white/5 hover:bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white transition-all hover:scale-105 active:scale-95"
            >
              <GithubLogo /> View Full Profile on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubProjects;
