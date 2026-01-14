import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function Footer() {
  const footerSections = [
    {
      title: 'For Merchants',
      links: [
        'How It Works',
        'Pricing',
        'Dashboard Demo',
        'Case Studies',
        'Documentation',
        'Shopify App Store',
      ],
    },
    {
      title: 'For Players',
      links: [
        'Find Games',
        'Track Rewards',
        'Leaderboards',
        'How to Play',
        'FAQs',
      ],
    },
    {
      title: 'For Developers',
      links: [
        'Submit a Game',
        'Dev Dashboard',
        'API Documentation',
        'Developer Community',
        'Success Stories',
        'Guidelines',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Blog',
        'Careers',
        'Press Kit',
        'Contact',
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#0066FF]/20">
      {/* Final CTA Section */}
      <div className="relative py-24 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-[1000px] mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-[#0066FF]">Forge Fun?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-[700px] mx-auto">
              Join thousands of merchants and developers creating engaging shopping experiences
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:shadow-2xl hover:shadow-[#0066FF]/40 transition-all hover:scale-105 text-white font-semibold px-10 py-7 text-lg">
                Get Started on Shopify
              </Button>
              <Button
                variant="outline"
                className="border-[#00CCFF] text-[#00CCFF] hover:bg-[#00CCFF]/10 hover:shadow-xl hover:shadow-[#00CCFF]/20 transition-all hover:scale-105 px-10 py-7 text-lg"
              >
                Submit Your Game
              </Button>
            </div>

            {/* Login links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-[#0066FF] transition-colors underline">
                Merchant Login
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-[#00CCFF] transition-colors underline">
                Developer Login
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-[#00FF88] transition-colors underline">
                Player Dashboard
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="border-t border-[#0066FF]/20 py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0066FF] blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-br from-[#0066FF] to-[#00CCFF] p-2 rounded-lg">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  PLAY <span className="text-[#0066FF]">FORGE</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Gamification platform for eCommerce. Built by Play Forge Interactive.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm font-semibold">Subscribe to updates</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#1a1a2e] border-[#0066FF]/30 focus:border-[#0066FF]"
                  />
                  <Button className="bg-[#0066FF] hover:bg-[#0055DD]">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-[#0066FF] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#0066FF]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 Play Forge Interactive. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#0066FF]/20 border border-[#0066FF]/30 rounded-lg flex items-center justify-center hover:bg-[#0066FF]/30 hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5 text-[#0066FF]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0066FF]/20 border border-[#0066FF]/30 rounded-lg flex items-center justify-center hover:bg-[#0066FF]/30 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5 text-[#0066FF]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0066FF]/20 border border-[#0066FF]/30 rounded-lg flex items-center justify-center hover:bg-[#0066FF]/30 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5 text-[#0066FF]" />
              </a>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
