import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Gift, Percent, DollarSign, Truck, CreditCard, Package } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeroProps {
  scrollY: number;
}

export function Hero({ scrollY }: HeroProps) {
  const gameIcons = [
    { icon: Trophy, color: '#FFD700', delay: 0 },
    { icon: Sparkles, color: '#00CCFF', delay: 0.2 },
    { icon: Gift, color: '#FF6B9D', delay: 0.4 },
    { icon: Package, color: '#00FF88', delay: 0.6 },
  ];

  const rewardIcons = [
    { icon: Percent, label: '% Off', color: '#0066FF' },
    { icon: DollarSign, label: '$ Off', color: '#00CCFF' },
    { icon: Truck, label: 'Free Ship', color: '#00FF88' },
    { icon: CreditCard, label: 'Gift Card', color: '#FFD700' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden"
    >
      {/* Parallax background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00CCFF] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto text-center z-10">
        {/* Animated floating game icons */}
        <div className="absolute inset-0 pointer-events-none">
          {gameIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                y: [0, -20, 0],
                x: [0, Math.sin(index) * 10, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                delay: item.delay,
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${10 + (index % 2) * 70}%`,
              }}
            >
              <div
                className="p-4 rounded-xl backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                  boxShadow: `0 0 30px ${item.color}40`,
                }}
              >
                <item.icon className="w-8 h-8" style={{ color: item.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Forge Epic Shopping
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00CCFF] bg-clip-text text-transparent">
              Adventures
            </span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gamify Your Store with Endless Games
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-400 mb-12 max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Widget + merchant-set games/milestones + 4 reward types: % off, $ off, free shipping, gift
          cards, and free products
        </motion.p>

        {/* Animated widget preview */}
        <motion.div
          className="relative mx-auto mb-12 max-w-[600px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-[#0066FF]/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-400">Play & Earn Rewards</span>
              <Trophy className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {rewardIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 bg-[#0a0a0f]/50 rounded-lg border border-[#0066FF]/20 cursor-pointer hover:border-[#0066FF] transition-all hover:scale-105"
                  whileHover={{ y: -5 }}
                  style={{ boxShadow: `0 0 20px ${item.color}20` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  <span className="text-xs text-gray-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="h-2 bg-[#0a0a0f]/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF]"
                initial={{ width: '0%' }}
                animate={{ width: '60%' }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">60% to next reward</p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:shadow-2xl hover:shadow-[#0066FF]/40 transition-all hover:scale-105 text-white font-semibold px-8 py-6 text-lg">
            Start as Merchant
          </Button>
          <Button
            variant="outline"
            className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 hover:shadow-xl hover:shadow-[#0066FF]/20 transition-all hover:scale-105 px-8 py-6 text-lg"
          >
            Join as Game Dev
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#0066FF]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
