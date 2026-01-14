import React, { useState, useEffect } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'How It Works',
    'Game Library',
    'For Developers',
    'Dev Insights',
    'Merchant Dashboard',
    'Pricing',
    'Platforms'
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#0066FF]/20 shadow-lg shadow-[#0066FF]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066FF] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-[#0066FF] to-[#00CCFF] p-2 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              PLAY <span className="text-[#0066FF]">FORGE</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-gray-300 hover:text-[#0066FF] transition-colors relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-sm text-gray-300 hover:text-[#0066FF] hover:bg-[#0066FF]/10 transition-all hover:shadow-lg hover:shadow-[#0066FF]/20"
            >
              Merchant Login
            </Button>
            <Button
              variant="ghost"
              className="text-sm text-gray-300 hover:text-[#00CCFF] hover:bg-[#00CCFF]/10 transition-all hover:shadow-lg hover:shadow-[#00CCFF]/20"
            >
              Dev Login
            </Button>
            <Button className="bg-gradient-to-r from-[#0066FF] to-[#00CCFF] hover:shadow-xl hover:shadow-[#0066FF]/30 transition-all hover:scale-105 text-white font-semibold">
              Get Started on Shopify
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#0066FF] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-[#0066FF]/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-gray-300 hover:text-[#0066FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-[#0066FF]/20">
              <Button variant="ghost" className="w-full justify-start text-gray-300">
                Merchant Login
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300">
                Dev Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] text-white">
                Get Started on Shopify
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
