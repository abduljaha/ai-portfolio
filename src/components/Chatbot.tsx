import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { profile, skills } from '../data/profile';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

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

    const userMessage = input.trim().toLowerCase();
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Mock AI Logic
    setTimeout(() => {
      let botResponse = "I'm still learning! You can ask me about my 'experience', 'skills', 'projects', or 'contact' information.";
      
      if (userMessage.includes('skill') || userMessage.includes('tech')) {
        botResponse = `I am proficient in AI technologies like ${skills.ai.slice(0, 5).join(', ')}, and programming languages like ${skills.programming.join(', ')}.`;
      } else if (userMessage.includes('experience') || userMessage.includes('work') || userMessage.includes('intern')) {
        botResponse = `I recently worked as an AI & Gen AI Developer Intern at Talent Smart Soft Solutions and as a Python Developer Intern at The Developers Arena.`;
      } else if (userMessage.includes('project') || userMessage.includes('portfolio')) {
        botResponse = `Check out my Lumina-Ai-Agent-Chatbot! It's a full-stack AI chatbot with a LangGraph agent and real-time tool calling.`;
      } else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('hire')) {
        botResponse = `You can email me at ${profile.email} or call me at ${profile.phone}. I'm always open to discussing AI engineering roles!`;
      } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
        botResponse = "Hello there! How can I help you learn more about my background?";
      }

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
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary-blue hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] z-50 transition-colors"
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
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] glass-card border border-white/10 rounded-2xl flex flex-col z-50 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-dark-800/80 p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-cyan/20 flex items-center justify-center text-primary-cyan">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">AI Twin Assistant</h3>
                  <p className="text-xs text-primary-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-primary-blue/20 text-primary-blue' : 'bg-dark-800 text-gray-400'}`}>
                    {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${msg.sender === 'user' ? 'bg-primary-blue text-white rounded-tr-none' : 'bg-dark-800 text-gray-300 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-dark-800/50 border-t border-white/10">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-dark-900 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-blue"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors shrink-0"
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
