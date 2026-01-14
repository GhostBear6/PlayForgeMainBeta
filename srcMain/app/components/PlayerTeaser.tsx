import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Gift, Star, Zap, Award } from 'lucide-react';

interface PlayerTeaserProps {
  scrollY: number;
}

export function PlayerTeaser({ scrollY }: PlayerTeaserProps) {
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

  const stats = [
    { icon: Trophy, label: 'Total Rewards', value: '47', color: '#FFD700' },
    { icon: TrendingUp, label: 'Level', value: '12', color: '#00CCFF' },
    { icon: Zap, label: 'Streak', value: '8 days', color: '#FF6B9D' },
  ];

  const recentRewards = [
    { store: 'Fashion Hub', reward: '20% Off', icon: Gift, color: '#0066FF' },
    { store: 'Tech Store', reward: 'Free Shipping', icon: Award, color: '#00FF88' },
    { store: 'Home Decor', reward: '$10 Gift Card', icon: Star, color: '#FFD700' },
  ];

  return (
    <section
      id="player-teaser"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00FF88] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Level Up <span className="text-[#0066FF]">Everywhere</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Play games and earn rewards across all your favorite stores
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[900px] mx-auto"
        >
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-3xl p-8 shadow-2xl shadow-[#0066FF]/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#0066FF]/20">
              <div>
                <h3 className="text-2xl font-bold mb-1">Your Dashboard</h3>
                <p className="text-sm text-gray-400">Track progress across stores</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#00CCFF]">Level 12</div>
                <div className="text-xs text-gray-500">Master Player</div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-[#0a0a0f]/50 border rounded-xl p-6 hover:scale-105 transition-all cursor-pointer group"
                  style={{
                    borderColor: `${stat.color}30`,
                    boxShadow: `0 0 20px ${stat.color}20`,
                  }}
                >
                  <stat.icon
                    className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform"
                    style={{ color: stat.color }}
                  />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Recent rewards */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#0066FF]" />
                Recent Rewards
              </h4>
              <div className="space-y-3">
                {recentRewards.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between bg-[#0a0a0f]/50 border border-[#0066FF]/20 rounded-lg p-4 hover:border-[#0066FF]/60 transition-all hover:scale-102 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${reward.color}30, ${reward.color}10)`,
                        }}
                      >
                        <reward.icon className="w-5 h-5" style={{ color: reward.color }} />
                      </div>
                      <div>
                        <div className="font-semibold">{reward.reward}</div>
                        <div className="text-sm text-gray-400">{reward.store}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-[#0066FF] transition-colors">
                      Unlocked
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 pt-6 border-t border-[#0066FF]/20"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Progress to Level 13</span>
                <span className="text-sm font-semibold text-[#00CCFF]">75%</span>
              </div>
              <div className="h-3 bg-[#0a0a0f] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF]"
                  initial={{ width: '0%' }}
                  animate={isVisible ? { width: '75%' } : {}}
                  transition={{ duration: 1.5, delay: 1.3 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
