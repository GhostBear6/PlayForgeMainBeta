import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Trophy, Star, TrendingUp } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';

interface FeaturedDevelopersProps {
  scrollY: number;
}

interface Developer {
  id: number;
  name: string;
  initials: string;
  games: number;
  totalPlays: string;
  featured: string;
  color: string;
  badges: string[];
}

export function FeaturedDevelopers({ scrollY }: FeaturedDevelopersProps) {
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

  const developers: Developer[] = [
    {
      id: 1,
      name: 'GameDev Studios',
      initials: 'GS',
      games: 8,
      totalPlays: '3.2M+',
      featured: 'Quiz Master',
      color: '#0066FF',
      badges: ['Top Creator', 'Verified'],
    },
    {
      id: 2,
      name: 'Click Masters',
      initials: 'CM',
      games: 5,
      totalPlays: '1.8M+',
      featured: 'Speed Click',
      color: '#00CCFF',
      badges: ['Rising Star'],
    },
    {
      id: 3,
      name: 'Quest Games Inc',
      initials: 'QG',
      games: 12,
      totalPlays: '5.1M+',
      featured: 'Loyalty Quest',
      color: '#9D4EDD',
      badges: ['Top Creator', 'Pioneer'],
    },
    {
      id: 4,
      name: 'Pixel Forge',
      initials: 'PF',
      games: 6,
      totalPlays: '2.4M+',
      featured: 'Treasure Hunter',
      color: '#FFD700',
      badges: ['Verified'],
    },
    {
      id: 5,
      name: 'Arcade Labs',
      initials: 'AL',
      games: 9,
      totalPlays: '3.8M+',
      featured: 'Match Mania',
      color: '#00FF88',
      badges: ['Top Creator', 'Innovator'],
    },
    {
      id: 6,
      name: 'Fun Factory',
      initials: 'FF',
      games: 7,
      totalPlays: '2.9M+',
      featured: 'Spin Arena',
      color: '#FF6B9D',
      badges: ['Rising Star', 'Verified'],
    },
  ];

  return (
    <section
      id="featured-developers"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0a0f]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#FF6B9D] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#0066FF]">Developers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Meet the creative minds building engaging experiences for shoppers worldwide
          </p>
        </motion.div>

        {/* Developer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#0066FF]/30 rounded-2xl p-6 hover:border-[#0066FF]/60 hover:scale-105 transition-all cursor-pointer group"
              style={{
                boxShadow: `0 0 20px ${dev.color}20`,
              }}
            >
              {/* Avatar and info */}
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="w-16 h-16 border-2" style={{ borderColor: dev.color }}>
                  <AvatarFallback
                    className="text-lg font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${dev.color}40, ${dev.color}20)`,
                      color: dev.color,
                    }}
                  >
                    {dev.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-[#0066FF] transition-colors">
                    {dev.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {dev.badges.map((badge, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-[#0066FF]/40 text-[#0066FF]"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: dev.color }}>
                    {dev.games}
                  </div>
                  <div className="text-xs text-gray-400">Games</div>
                </div>
                <div className="text-center border-x border-[#0066FF]/20">
                  <div className="text-2xl font-bold text-[#00CCFF]">{dev.totalPlays}</div>
                  <div className="text-xs text-gray-400">Plays</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                    <span className="text-2xl font-bold text-[#FFD700]">4.8</span>
                  </div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
              </div>

              {/* Featured game */}
              <div className="bg-[#0a0a0f]/50 border border-[#0066FF]/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-xs text-gray-400">Featured Game</span>
                </div>
                <div className="font-semibold text-sm">{dev.featured}</div>
              </div>

              {/* Hover effect - animated badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isVisible
                    ? {
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1.2, 1, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: 0.8 + index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className="absolute top-4 right-4"
              >
                <TrendingUp className="w-5 h-5" style={{ color: dev.color }} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-xl font-semibold hover:shadow-xl hover:shadow-[#0066FF]/30 transition-all hover:scale-105">
            Become a Featured Developer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
