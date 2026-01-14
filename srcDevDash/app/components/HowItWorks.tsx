import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Plug, Gamepad2, Target, Users, BarChart3 } from 'lucide-react';

interface HowItWorksProps {
  scrollY: number;
}

interface Step {
  icon: any;
  title: string;
  description: string;
  color: string;
}

export function HowItWorks({ scrollY }: HowItWorksProps) {
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

  const merchantSteps: Step[] = [
    {
      icon: Plug,
      title: '1. Install via API',
      description: 'One-click integration with your Shopify store',
      color: '#0066FF',
    },
    {
      icon: Gamepad2,
      title: '2. Select Games',
      description: 'Choose from tiered in-house & community games',
      color: '#00CCFF',
    },
    {
      icon: Target,
      title: '3. Set Milestones',
      description: 'Configure rewards: %, $, shipping, gift cards, products',
      color: '#00FF88',
    },
    {
      icon: Users,
      title: '4. Customers Play',
      description: 'Shoppers engage and earn rewards across your store',
      color: '#FFD700',
    },
    {
      icon: BarChart3,
      title: '5. Track Dashboard',
      description: 'Monitor engagement, conversions & gameplay analytics',
      color: '#FF6B9D',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00CCFF] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-[#0066FF]">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Simple setup for merchants, endless fun for customers
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066FF] via-[#00CCFF] to-[#FF6B9D]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {merchantSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative p-6 rounded-2xl backdrop-blur-sm border transition-all hover:scale-110 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                      borderColor: `${step.color}40`,
                      boxShadow: `0 0 30px ${step.color}30`,
                    }}
                  >
                    <step.icon
                      className="w-8 h-8 transition-transform group-hover:rotate-12"
                      style={{ color: step.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                      style={{ background: step.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Split view section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mt-24"
        >
          {/* Merchant Analytics */}
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-2xl p-8 hover:border-[#0066FF]/60 transition-all hover:shadow-xl hover:shadow-[#0066FF]/20">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#0066FF]" />
              Merchant Analytics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Games Played Today</span>
                <span className="text-2xl font-bold text-[#00CCFF]">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Rewards Claimed</span>
                <span className="text-2xl font-bold text-[#00FF88]">1,523</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Conversion Lift</span>
                <span className="text-2xl font-bold text-[#FFD700]">+34%</span>
              </div>
            </div>
          </div>

          {/* Player Fun */}
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#2e1a1a] border border-[#FF6B9D]/30 rounded-2xl p-8 hover:border-[#FF6B9D]/60 transition-all hover:shadow-xl hover:shadow-[#FF6B9D]/20">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#FF6B9D]" />
              Player Experience
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF6B9D]/20 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-[#FF6B9D]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Unlock exclusive rewards</p>
                  <p className="text-xs text-gray-400">Play across stores</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Track your progress</p>
                  <p className="text-xs text-gray-400">Level up everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
