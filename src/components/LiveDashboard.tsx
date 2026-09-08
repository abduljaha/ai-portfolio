import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Cpu, Database } from 'lucide-react';

const LiveDashboard = () => {
  const [latency, setLatency] = useState(42);
  const [throughput, setThroughput] = useState(850);
  const [activeNodes, setActiveNodes] = useState(12);
  const [chartData, setChartData] = useState<number[]>(Array(20).fill(40));

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live metric updates
      const newLatency = Math.floor(Math.random() * 20) + 30; // 30-50ms
      setLatency(newLatency);
      
      setThroughput(prev => Math.floor(prev * 0.9 + (Math.random() * 400 + 700) * 0.1));
      
      if (Math.random() > 0.8) {
        setActiveNodes(prev => (prev === 12 ? 14 : 12));
      }

      setChartData(prev => {
        const newData = [...prev.slice(1), newLatency];
        return newData;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Live System Metrics</span>
          </h2>
          <p className="text-gray-400">Simulated real-time monitoring of AI production infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* RAG Latency */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={64} />
            </div>
            <div className="flex items-center gap-3 mb-2 text-primary-cyan">
              <Activity size={20} />
              <h3 className="font-medium">RAG Query Latency</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-6">
              {latency} <span className="text-lg text-gray-500 font-normal">ms</span>
            </div>
            
            {/* Mini Chart */}
            <div className="h-16 flex items-end gap-1">
              {chartData.map((val, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 bg-primary-cyan/40 rounded-t-sm"
                  initial={{ height: 0 }}
                  animate={{ height: ((val / 60) * 100) + "%" }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </motion.div>

          {/* LLM Throughput */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={64} />
            </div>
            <div className="flex items-center gap-3 mb-2 text-primary-purple">
              <Cpu size={20} />
              <h3 className="font-medium">LLM Token Throughput</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {throughput} <span className="text-lg text-gray-500 font-normal">t/s</span>
            </div>
            <p className="text-sm text-green-400 flex items-center gap-1 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Optimal Performance
            </p>
          </motion.div>

          {/* Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server size={64} />
            </div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <Database size={20} />
              <h3 className="font-medium">Vector DB Nodes</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {activeNodes} <span className="text-lg text-gray-500 font-normal">active</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Distributed across 3 regions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
