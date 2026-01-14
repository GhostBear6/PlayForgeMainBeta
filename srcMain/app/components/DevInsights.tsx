import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Users, Store, Download, Eye, Zap, Award } from 'lucide-react';

interface DevInsightsProps {
  scrollY: number;
}

export function DevInsights({ scrollY }: DevInsightsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const keyMetrics = [
    { icon: Eye, label: 'Total Plays', value: '2.4M', change: '+18%', color: '#0066FF' },
    { icon: Store, label: 'Unique Stores', value: '1,247', change: '+24%', color: '#00CCFF' },
    { icon: Users, label: 'Active Players', value: '856K', change: '+12%', color: '#00FF88' },
    { icon: Zap, label: 'Engagement Rate', value: '94%', change: '+5%', color: '#FFD700' },
  ];

  const topStores = [
    { name: 'Fashion Central', plays: '142K', engagement: '96%', color: '#0066FF' },
    { name: 'Tech Haven', plays: '128K', engagement: '94%', color: '#00CCFF' },
    { name: 'Home & Living', plays: '115K', engagement: '92%', color: '#00FF88' },
    { name: 'Sports World', plays: '98K', engagement: '89%', color: '#FFD700' },
  ];

  const chartData = [
    { month: 'Jan', plays: 180 },
    { month: 'Feb', plays: 220 },
    { month: 'Mar', plays: 280 },
    { month: 'Apr', plays: 350 },
    { month: 'May', plays: 420 },
    { month: 'Jun', plays: 520 },
  ];

  return (
    <section
      id="dev-insights"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#00CCFF] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-[#0066FF]" />
            <span className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider">
              Developer Tools
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Track Your Impact in <span className="text-[#0066FF]">Real Time</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-[700px] mx-auto">
            Dev Insights Dashboard — See how your games perform across thousands of stores, all free
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/40 rounded-3xl p-8 shadow-2xl shadow-[#0066FF]/30"
        >
          {/* Dashboard header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-[#0066FF]/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">Dev Insights Dashboard</h3>
              <p className="text-sm text-gray-400">Real-time analytics for your games</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-lg text-sm hover:bg-[#0066FF]/30 transition-colors">
                Last 30 Days
              </button>
              <button className="px-4 py-2 bg-[#0066FF]/10 border border-[#0066FF]/30 rounded-lg text-sm hover:bg-[#0066FF]/20 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Key metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-[#0a0a0f]/50 border rounded-xl p-6 hover:scale-105 transition-all cursor-pointer group relative overflow-hidden"
                style={{
                  borderColor: `${metric.color}30`,
                  boxShadow: `0 0 20px ${metric.color}20`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                  style={{ background: metric.color }}
                />

                <div className="relative">
                  <metric.icon
                    className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform"
                    style={{ color: metric.color }}
                  />
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                  <div className="flex items-center gap-1 text-xs text-[#00FF88]">
                    <TrendingUp className="w-3 h-3" />
                    {metric.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Line chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-[#0a0a0f]/50 border border-[#0066FF]/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#0066FF]" />
                Plays Over Time
              </h4>
              <div className="relative h-48">
                {/* Simple bar chart visualization */}
                <div className="flex items-end justify-between h-full gap-2">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        className="w-full bg-gradient-to-t from-[#0066FF] to-[#00CCFF] rounded-t-lg relative group cursor-pointer"
                        initial={{ height: 0 }}
                        animate={isVisible ? { height: `${(data.plays / 600) * 100}%` } : {}}
                        transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {data.plays}K
                        </div>
                      </motion.div>
                      <span className="text-xs text-gray-500">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Top stores */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-[#0a0a0f]/50 border border-[#0066FF]/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFD700]" />
                Top Stores Breakdown
              </h4>
              <div className="space-y-4">
                {topStores.map((store, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium group-hover:text-[#0066FF] transition-colors">
                        {store.name}
                      </span>
                      <span className="text-sm text-gray-400">{store.plays} plays</span>
                    </div>
                    <div className="h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${store.color}, ${store.color}80)`,
                        }}
                        initial={{ width: '0%' }}
                        animate={isVisible ? { width: store.engagement } : {}}
                        transition={{ duration: 1, delay: 1.3 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-r from-[#0066FF]/10 to-[#00CCFF]/10 border border-[#0066FF]/30 rounded-xl p-6 text-center"
          >
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">
                Track your games' performance across thousands of stores
              </span>
              <br />
              <span className="text-gray-400">All insights, all free, all yours</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
