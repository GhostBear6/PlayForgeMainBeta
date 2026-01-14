import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code, Users, TrendingUp, Award, BarChart3, Eye } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface ForDevelopersProps {
  scrollY: number;
}

export function ForDevelopers({ scrollY }: ForDevelopersProps) {
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

  const benefits = [
    {
      icon: Users,
      title: 'Massive eCommerce Audience',
      description: 'Reach thousands of active shoppers across multiple platforms',
      color: '#0066FF',
    },
    {
      icon: Eye,
      title: 'Free Exposure',
      description: 'Get your games in front of engaged customers at no cost',
      color: '#00CCFF',
    },
    {
      icon: Award,
      title: 'Featured Credits',
      description: 'Your name & logo displayed with every game instance',
      color: '#FFD700',
    },
    {
      icon: BarChart3,
      title: 'Real Marketing Insights',
      description: 'Track plays, engagement, and reach across stores',
      color: '#00FF88',
    },
  ];

  return (
    <section
      id="for-developers"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0a0f]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00CCFF] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Split-screen layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-[#0066FF]" />
              <span className="text-sm font-semibold text-[#0066FF] uppercase tracking-wider">
                For Game Developers
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Free Exposure +<br />
              <span className="text-[#0066FF]">Real Marketing Insights</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8">
              Submit your games and tap into a thriving eCommerce ecosystem. No sales required—just
              pure exposure and valuable data.
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#0a0a0f]/50 border border-[#0066FF]/20 rounded-xl hover:border-[#0066FF]/60 transition-all hover:scale-102 cursor-pointer group"
                >
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.color}30, ${benefit.color}10)`,
                    }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Submit form teaser */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-3xl p-8 shadow-2xl shadow-[#0066FF]/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#00CCFF]" />
                <h3 className="text-2xl font-bold">Submit Your Game</h3>
              </div>

              <p className="text-gray-400 mb-6">
                Join our community of game developers and start tracking your impact today.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Game Name</label>
                  <Input
                    placeholder="Your awesome game"
                    className="bg-[#0a0a0f]/50 border-[#0066FF]/30 focus:border-[#0066FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                  <Input
                    type="email"
                    placeholder="developer@example.com"
                    className="bg-[#0a0a0f]/50 border-[#0066FF]/30 focus:border-[#0066FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Game Description</label>
                  <textarea
                    placeholder="Tell us about your game..."
                    rows={4}
                    className="w-full bg-[#0a0a0f]/50 border border-[#0066FF]/30 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:shadow-xl hover:shadow-[#0066FF]/30 transition-all hover:scale-105 text-white font-semibold py-6">
                  Unlock Your Dashboard Today
                </Button>
              </div>

              {/* Features list */}
              <div className="mt-6 pt-6 border-t border-[#0066FF]/20">
                <p className="text-xs text-gray-500 mb-3">What you get:</p>
                <div className="space-y-2">
                  {[
                    'Real-time analytics dashboard',
                    'Cross-store engagement metrics',
                    'Featured developer profile',
                    'Direct merchant connections',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
