import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { profile, skills, projects, experience, education, certifications } from '../data/profile';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const getKnowledgeBase = () => {
  const base = [
    {
      intent: 'skills',
      keywords: ['skill', 'tech', 'stack', 'programming', 'language', 'tool', 'framework', 'learn', 'know', 'expert'],
      answer: `I am proficient in AI technologies like ${skills.ai.slice(0, 5).join(', ')}, and programming languages like ${skills.programming.join(', ')}.`
    },
    {
      intent: 'certifications',
      keywords: ['certification', 'certificate', 'certified', 'course'],
      answer: `I hold several certifications including: ${certifications.map(c => c.name).join(', ')}.`
    },
    {
      intent: 'education',
      keywords: ['education', 'degree', 'university', 'college', 'study', 'studied', 'graduated', 'school', 'btech'],
      answer: `I graduated with a ${education[0].degree} from ${education[0].institution} with a GPA of ${education[0].gpa}.`
    },
    {
      intent: 'experience',
      keywords: ['experience', 'work', 'job', 'intern', 'internship', 'role', 'history', 'company', 'employment'],
      answer: `I recently worked as an ${experience[0].role} at ${experience[0].company} and as a ${experience[1].role} at ${experience[1].company}.`
    },
    {
      intent: 'projects',
      keywords: ['project', 'portfolio', 'build', 'create', 'made', 'app', 'system'],
      answer: `I've built several projects including: ${projects.map(p => p.name).join(', ')}. You can ask me about a specific one!`
    },
    {
      intent: 'contact',
      keywords: ['contact', 'email', 'hire', 'phone', 'call', 'reach', 'message', 'connect'],
      answer: `You can email me at ${profile.email} or call me at ${profile.phone}. I'm always open to discussing AI engineering roles!`
    },
    {
      intent: 'greeting',
      keywords: ['hello', 'hi', 'hey', 'greetings', 'morning'],
      answer: "Hello there! How can I help you learn more about my background?"
    }
  ];

  // Add individual projects to the knowledge base so the bot can answer about specific ones
  projects.forEach(p => {
    base.push({
      intent: `project_${p.id}`,
      // Extract keywords from the project name
      keywords: p.name.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2),
      answer: `My project "${p.name}" solves this problem: ${p.problem} Solution: ${p.solution} Technologies used: ${p.technologies.join(', ')}.`
    });
  });

  return base;
};

const findBestMatch = (query: string) => {
  let bestScore = 0;
  let bestAnswer = null;
  const qWords = query.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 0);
  const kb = getKnowledgeBase();
  
  for (const item of kb) {
    let score = 0;
    for (const kw of item.keywords) {
      // Handle simple plurals (e.g. skill vs skills)
      if (qWords.some(w => w === kw || w === kw + 's' || w === kw + 'es' || w + 's' === kw)) {
        score += 1;
      }
    }
    // Boost score if the query specifically asks about a project and matches its keywords
    if (item.intent.startsWith('project_')) {
      score *= 1.5; 
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  }
  return bestScore > 0 ? bestAnswer : null;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: `Hi! I'm ${profile.name.split(' ')[0]}'s AI Twin. I can answer questions about his experience, skills, or projects. Try asking "What are your skills?" or "How can I contact you?"` }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Clear memory when opened
  useEffect(() => {
    if (isOpen) {
      setMessages([
        { id: Date.now().toString(), sender: 'bot', text: `Hi! I'm ${profile.name.split(' ')[0]}'s AI Twin. I can answer questions about his experience, skills, or projects. Try asking "What are your skills?" or "How can I contact you?"` }
      ]);
      setInput('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpen);
    return () => window.removeEventListener('open-chatbot', handleOpen);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulated Semantic Search Logic
    setTimeout(() => {
      const match = findBestMatch(userMessage);
      const botResponse = match 
        ? match 
        : "I can only answer questions related to my portfolio, skills, experience, and contact details. Please ask me about those!";

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary-blue hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-900 dark:text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] z-50 transition-colors"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col z-50 overflow-hidden shadow-2xl transition-colors duration-300"
          >
            {/* Header */}
            <div className="bg-gray-100 dark:bg-dark-900 p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-cyan/10 dark:bg-primary-cyan/20 flex items-center justify-center text-primary-cyan">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-medium text-sm transition-colors duration-300">AI Twin Assistant</h3>
                  <p className="text-xs text-primary-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900 dark:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-primary-blue/20 text-primary-blue' : 'bg-gray-100 dark:bg-dark-900 text-gray-500 dark:text-gray-400'}`}>
                    {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${msg.sender === 'user' ? 'bg-primary-blue text-gray-900 dark:text-white rounded-tr-none' : 'bg-gray-100 dark:bg-dark-900 text-gray-800 dark:text-gray-300 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-gray-50 dark:bg-dark-900/50 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white dark:bg-dark-900 border border-gray-300 dark:border-white/10 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-primary-blue transition-colors duration-300"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors shrink-0"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
