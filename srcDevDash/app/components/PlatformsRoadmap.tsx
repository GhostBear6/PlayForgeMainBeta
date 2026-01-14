import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Sparkles } from 'lucide-react';

interface PlatformsRoadmapProps {
  scrollY: number;
}

interface Platform {
  name: string;
  status: 'live' | 'coming-soon';
  color: string;
  description: string;
}

export function PlatformsRoadmap({ scrollY }: PlatformsRoadmapProps) {
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

  const platforms: Platform[] = [
    {
      name: 'Shopify',
      status: 'live',
      color: '#95BF47',
      description: 'One-click integration available now',
    },
    {
      name: 'WooCommerce',
      status: 'coming-soon',
      color: '#96588A',
      description: 'Q2 2026',
    },
    {
      name: 'Wix',
      status: 'coming-soon',
      color: '#0C6EFC',
      description: 'Q3 2026',
    },
    {
      name: 'BigCommerce',
      status: 'coming-soon',
      color: '#121118',
      description: 'Q3 2026',
    },
  ];

  return (
    <section
      id="platforms"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0a0f]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00CCFF] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Platforms & <span className="text-[#0066FF]">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            One API integration → endless platforms
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] via-[#00CCFF] to-gray-600 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Status indicator */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative w-20 h-20 rounded-2xl flex items-center justify-center border-4 transition-all hover:scale-110 cursor-pointer ${
                      platform.status === 'live'
                        ? 'bg-[#00FF88] border-[#00FF88] shadow-lg shadow-[#00FF88]/50'
                        : 'bg-[#1a1a2e] border-gray-600'
                    }`}
                  >
                    {platform.status === 'live' ? (
                      <Check className="w-10 h-10 text-[#0a0a0f]" strokeWidth={3} />
                    ) : (
                      <Clock className="w-10 h-10 text-gray-400" />
                    )}

                    {/* Pulse animation for live */}
                    {platform.status === 'live' && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-[#00FF88]"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Platform info */}
                <div className="text-center">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 border"
                    style={{
                      borderColor: platform.status === 'live' ? '#00FF88' : '#0066FF30',
                      background:
                        platform.status === 'live'
                          ? 'linear-gradient(135deg, #00FF8820, #00FF8810)'
                          : 'linear-gradient(135deg, #0066FF20, #0066FF10)',
                    }}
                  >
                    <h3 className="text-lg font-semibold">{platform.name}</h3>
                    {platform.status === 'live' && (
                      <Sparkles className="w-4 h-4 text-[#00FF88]" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{platform.description}</p>

                  {platform.status === 'live' && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#0066FF]/30 transition-all hover:scale-105"
                    >
                      Install Now
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-2xl p-8 max-w-[700px] mx-auto">
            <h4 className="text-xl font-semibold mb-3">Seamless Integration</h4>
            <p className="text-gray-400 mb-4">
              Our unified API makes it easy to deploy gamification across any platform. Start with
              Shopify today and expand as we add more integrations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-lg text-sm">
                5-minute setup
              </div>
              <div className="px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-lg text-sm">
                No coding required
              </div>
              <div className="px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/40 rounded-lg text-sm">
                Full documentation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
