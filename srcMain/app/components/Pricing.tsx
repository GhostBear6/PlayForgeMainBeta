import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface PricingProps {
  scrollY: number;
}

interface PricingTier {
  name: string;
  icon: any;
  price: string;
  period: string;
  description: string;
  features: string[];
  color: string;
  popular?: boolean;
}

export function Pricing({ scrollY }: PricingProps) {
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

  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$49',
      period: '/month',
      description: 'Perfect for small stores getting started',
      features: [
        'Access to 5 games',
        'All in-house games included',
        'Basic analytics dashboard',
        'Up to 1,000 monthly plays',
        'Email support',
      ],
      color: '#00CCFF',
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to 15 games',
        'In-house + community games',
        'Advanced analytics & insights',
        'Up to 10,000 monthly plays',
        'Priority support',
        'Custom reward configurations',
        'A/B testing tools',
      ],
      color: '#0066FF',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited game access',
        'All community dev games free',
        'White-label options',
        'Unlimited plays',
        'Dedicated account manager',
        'Custom game development',
        'API access',
        'SLA guarantee',
      ],
      color: '#9D4EDD',
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9D4EDD] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-[#0066FF]">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Choose the plan that fits your store. All tiers include community dev games at no extra
            cost.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border rounded-3xl p-8 transition-all hover:scale-105 cursor-pointer ${
                tier.popular
                  ? 'border-[#0066FF] shadow-2xl shadow-[#0066FF]/40 md:-mt-4 md:mb-4'
                  : 'border-[#0066FF]/30'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${tier.color}30, ${tier.color}10)`,
                    boxShadow: `0 0 30px ${tier.color}30`,
                  }}
                >
                  <tier.icon className="w-8 h-8" style={{ color: tier.color }} />
                </div>
              </div>

              {/* Tier name */}
              <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400 text-center mb-6">{tier.description}</p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold" style={{ color: tier.color }}>
                    {tier.price}
                  </span>
                  {tier.period && <span className="text-gray-400">{tier.period}</span>}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${tier.color}30` }}
                    >
                      <Check className="w-3 h-3" style={{ color: tier.color }} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <Button
                className={`w-full font-semibold py-6 transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:shadow-xl hover:shadow-[#0066FF]/30'
                    : 'bg-[#0066FF]/20 border-2 hover:bg-[#0066FF]/30'
                }`}
                style={
                  !tier.popular
                    ? {
                        borderColor: tier.color,
                        color: tier.color,
                      }
                    : {}
                }
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF]/10 border border-[#0066FF]/30 rounded-xl">
            <Check className="w-5 h-5 text-[#00FF88]" />
            <span className="text-sm text-gray-300">
              All plans include access to community developer games at no additional cost
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
