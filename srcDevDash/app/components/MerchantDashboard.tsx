import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, Users, TrendingUp, DollarSign, Gamepad2, Target, Award } from 'lucide-react';

interface MerchantDashboardProps {
  scrollY: number;
}

export function MerchantDashboard({ scrollY }: MerchantDashboardProps) {
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

  const dashboardMetrics = [
    { icon: Gamepad2, label: 'Games Active', value: '12', color: '#0066FF' },
    { icon: Users, label: 'Players Today', value: '2,847', color: '#00CCFF' },
    { icon: Award, label: 'Rewards Claimed', value: '1,523', color: '#FFD700' },
    { icon: TrendingUp, label: 'Conversion Lift', value: '+34%', color: '#00FF88' },
  ];

  const recentActivity = [
    { user: 'Sarah M.', action: 'Claimed 20% off', game: 'Spin to Win', time: '2m ago' },
    { user: 'John D.', action: 'Earned free shipping', game: 'Quiz Master', time: '5m ago' },
    { user: 'Emma L.', action: 'Won $10 gift card', game: 'Memory Match', time: '8m ago' },
  ];

  const topGames = [
    { name: 'Spin to Win', plays: 1247, conversion: '28%', bar: 95 },
    { name: 'Quiz Master', plays: 986, conversion: '24%', bar: 75 },
    { name: 'Memory Match', plays: 614, conversion: '19%', bar: 50 },
  ];

  return (
    <section
      id="merchant-dashboard"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Merchant <span className="text-[#0066FF]">Dashboard</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Track engagement, monitor performance, and optimize your gamification strategy
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/40 rounded-3xl p-8 shadow-2xl shadow-[#0066FF]/30"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-[#0066FF]/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">Analytics Overview</h3>
              <p className="text-sm text-gray-400">Real-time gamification performance</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-lg text-sm hover:bg-[#0066FF]/30 transition-colors">
                Today
              </button>
              <button className="px-4 py-2 bg-[#0066FF]/10 border border-[#0066FF]/30 rounded-lg text-sm hover:bg-[#0066FF]/20 transition-colors">
                This Week
              </button>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-[#0a0a0f]/50 border rounded-xl p-6 hover:scale-105 transition-all cursor-pointer group"
                style={{
                  borderColor: `${metric.color}30`,
                  boxShadow: `0 0 20px ${metric.color}20`,
                }}
              >
                <metric.icon
                  className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: metric.color }}
                />
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Top performing games */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-[#0a0a0f]/50 border border-[#0066FF]/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0066FF]" />
                Top Performing Games
              </h4>
              <div className="space-y-6">
                {topGames.map((game, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium group-hover:text-[#0066FF] transition-colors">
                        {game.name}
                      </span>
                      <span className="text-sm text-gray-400">{game.plays} plays</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-full"
                          initial={{ width: '0%' }}
                          animate={isVisible ? { width: `${game.bar}%` } : {}}
                          transition={{ duration: 1, delay: 1.1 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-[#00FF88]">
                        {game.conversion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent activity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-[#0a0a0f]/50 border border-[#0066FF]/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00CCFF]" />
                Recent Activity
              </h4>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex items-start gap-3 pb-4 border-b border-[#0066FF]/10 last:border-0 last:pb-0 hover:bg-[#0066FF]/5 p-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF]/30 to-[#00CCFF]/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.user}</p>
                      <p className="text-sm text-gray-400">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.game} • {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Revenue impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-6 bg-gradient-to-r from-[#0066FF]/10 to-[#00CCFF]/10 border border-[#0066FF]/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-1 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#00FF88]" />
                  Estimated Revenue Impact
                </h4>
                <p className="text-sm text-gray-400">Based on conversion lift and AOV</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#00FF88]">+$12,847</div>
                <div className="text-sm text-gray-400">This month</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
