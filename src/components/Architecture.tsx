import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Brain, Globe, Bot, Layout, ArrowRight } from 'lucide-react';

const ArchitectureNode = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative group flex flex-col items-center text-center p-6 glass-card hover:border-primary-cyan/40 hover:-translate-y-1 transition-all z-10 w-48"
  >
    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-dark-900 border border-gray-300 dark:border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary-blue/10 group-hover:text-primary-cyan transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
    
    {/* Connection dot */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-dark-900 border-2 border-primary-blue hidden md:block"></div>
  </motion.div>
);

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">How I Build AI Systems</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My standard architecture for scalable, production-ready AI applications.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-cyan hidden md:block -translate-y-1/2 opacity-30"></div>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-4 lg:gap-8">
              <ArchitectureNode 
                icon={Globe} 
                title="User Interface" 
                description="React / Vite / Tailwind" 
                delay={0.1} 
              />
              <ArrowRight className="hidden md:block text-gray-600 animate-pulse" />
              <ArchitectureNode 
                icon={Server} 
                title="API Gateway" 
                description="FastAPI / Node.js" 
                delay={0.2} 
              />
              <ArrowRight className="hidden md:block text-gray-600 animate-pulse" />
              <ArchitectureNode 
                icon={Bot} 
                title="AI Orchestration" 
                description="LangChain / LangGraph" 
                delay={0.3} 
              />
              <ArrowRight className="hidden md:block text-gray-600 animate-pulse" />
              <ArchitectureNode 
                icon={Brain} 
                title="LLM Engine" 
                description="Claude / Gemini / OpenAI" 
                delay={0.4} 
              />
              <ArrowRight className="hidden md:block text-gray-600 animate-pulse" />
              <ArchitectureNode 
                icon={Database} 
                title="Vector DB / Data" 
                description="FAISS / Pinecone / MySQL" 
                delay={0.5} 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
