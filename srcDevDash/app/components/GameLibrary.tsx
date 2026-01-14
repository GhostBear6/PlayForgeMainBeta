import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Sparkles, Target, Zap, Crown, Star, Lock, User } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

interface GameLibraryProps {
  scrollY: number;
}

interface Game {
  id: number;
  title: string;
  icon: any;
  description: string;
  type: 'in-house' | 'community';
  tier: 'free' | 'pro' | 'enterprise';
  developer?: string;
  plays: string;
  color: string;
}

export function GameLibrary({ scrollY }: GameLibraryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

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

  const games: Game[] = [
    {
      id: 1,
      title: 'Treasure Hunt',
      icon: Trophy,
      description: 'Find hidden rewards throughout the store',
      type: 'in-house',
      tier: 'free',
      plays: '1.2M',
      color: '#FFD700',
    },
    {
      id: 2,
      title: 'Spin to Win',
      icon: Sparkles,
      description: 'Daily wheel of fortune for instant rewards',
      type: 'in-house',
      tier: 'free',
      plays: '2.5M',
      color: '#00CCFF',
    },
    {
      id: 3,
      title: 'Quiz Master',
      icon: Target,
      description: 'Answer product questions to earn points',
      type: 'community',
      tier: 'pro',
      developer: 'GameDev Studios',
      plays: '856K',
      color: '#FF6B9D',
    },
    {
      id: 4,
      title: 'Speed Click',
      icon: Zap,
      description: 'Fast-paced clicking challenge for rewards',
      type: 'community',
      tier: 'free',
      developer: 'Click Masters',
      plays: '643K',
      color: '#0066FF',
    },
    {
      id: 5,
      title: 'Memory Match',
      icon: Star,
      description: 'Match product cards to unlock discounts',
      type: 'in-house',
      tier: 'pro',
      plays: '1.8M',
      color: '#00FF88',
    },
    {
      id: 6,
      title: 'Loyalty Quest',
      icon: Crown,
      description: 'Complete challenges for exclusive rewards',
      type: 'community',
      tier: 'enterprise',
      developer: 'Quest Games Inc',
      plays: '412K',
      color: '#9D4EDD',
    },
  ];

  return (
    <section
      id="game-library"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent to-[#0a0a0f]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF6B9D] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Game <span className="text-[#0066FF]">Library</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Curated collection of in-house & community-developed games
          </p>
        </motion.div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              className="relative group cursor-pointer"
            >
              <div
                className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border rounded-2xl p-6 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: hoveredGame === game.id ? `${game.color}80` : '#0066FF30',
                  boxShadow:
                    hoveredGame === game.id
                      ? `0 0 40px ${game.color}40`
                      : '0 0 20px rgba(0, 102, 255, 0.1)',
                }}
              >
                {/* Tier lock indicator */}
                {game.tier !== 'free' && (
                  <div className="absolute top-4 right-4">
                    <Lock className="w-4 h-4 text-gray-500" />
                  </div>
                )}

                {/* Game icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="p-6 rounded-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${game.color}30, ${game.color}10)`,
                      transform: hoveredGame === game.id ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                    }}
                  >
                    <game.icon
                      className="w-10 h-10 transition-transform duration-300"
                      style={{
                        color: game.color,
                        transform: hoveredGame === game.id ? 'rotate(-5deg)' : 'rotate(0)',
                      }}
                    />
                  </div>
                </div>

                {/* Game info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{game.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={
                        game.type === 'in-house'
                          ? 'border-[#0066FF] text-[#0066FF]'
                          : 'border-[#00CCFF] text-[#00CCFF]'
                      }
                    >
                      {game.type === 'in-house' ? 'In-House' : 'Community'}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-500 text-gray-400 capitalize"
                    >
                      {game.tier}
                    </Badge>
                  </div>

                  {/* Developer credit */}
                  {game.developer && (
                    <div
                      className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <User className="w-3 h-3" />
                      <span>{game.developer}</span>
                    </div>
                  )}

                  {/* Plays count */}
                  <div className="text-xs text-gray-500">{game.plays} plays</div>
                </div>

                {/* Mini gameplay preview on hover */}
                {hoveredGame === game.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 to-[#1a1a2e]/95 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <game.icon className="w-16 h-16 mx-auto mb-4" style={{ color: game.color }} />
                      </motion.div>
                      <p className="text-sm text-gray-300">Click to preview gameplay</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all games CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-xl font-semibold hover:shadow-xl hover:shadow-[#0066FF]/30 transition-all hover:scale-105">
            Explore Full Library
          </button>
        </motion.div>
      </div>
    </section>
  );
}
