import React from 'react';
import { BrainCircuit } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-dark-900 flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute inset-0 border-4 border-t-primary-blue border-r-primary-purple border-b-primary-cyan border-l-transparent rounded-full animate-spin w-24 h-24"></div>
        <BrainCircuit className="text-gray-900 dark:text-white animate-pulse" size={40} />
      </div>
      <div className="text-primary-blue font-mono text-sm tracking-widest uppercase animate-pulse">
        Initializing AI Engine...
      </div>
    </div>
  );
};

export default LoadingScreen;
