'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  waitlistCount: number;
}

export default function Navbar({ waitlistCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToWaitlist = useCallback(() => {
    const el = document.getElementById('waitlist');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const formattedCount = waitlistCount > 0 ? waitlistCount.toLocaleString() : '—';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090A]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Wordmark */}
            <Link href="/" className="flex items-center" aria-label="GoGet home">
              <span className="font-clash text-2xl font-bold tracking-tight">
                <span className="text-[#F0F0F0]">Go</span>
                <span className="text-[#00E5A0] text-glow-green">Get</span>
              </span>
            </Link>

            {/* Center — waitlist count badge */}
            {waitlistCount > 0 && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" aria-hidden="true" />
                <span className="text-xs text-[#8A8A9A] font-medium">
                  {formattedCount} already waiting
                </span>
              </div>
            )}

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToWaitlist}
                className="hidden md:block btn-primary px-5 py-2.5 text-sm font-semibold"
                aria-label="Join waitlist"
              >
                Join Waitlist
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-[#F0F0F0] rounded-full origin-center block"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-[#F0F0F0] rounded-full block"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-[#F0F0F0] rounded-full origin-center block"
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-80 bg-[#0D0E10] border-l border-white/[0.06] md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-clash text-xl font-bold">
                    <span className="text-[#F0F0F0]">Go</span>
                    <span className="text-[#00E5A0]">Get</span>
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors text-[#8A8A9A]"
                    aria-label="Close menu"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Count badge */}
                {waitlistCount > 0 && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" aria-hidden="true" />
                    <span className="text-sm text-[#8A8A9A]">{formattedCount} already waiting</span>
                  </div>
                )}

                {/* Links */}
                <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile navigation">
                  {[
                    { label: 'How it works', href: '#how-it-works' },
                    { label: 'Features', href: '#features' },
                    { label: 'Privacy', href: '/privacy' },
                    { label: 'Terms', href: '/terms' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-3 text-[#F0F0F0] text-sm font-medium rounded-xl hover:bg-white/[0.04] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* CTA */}
                <button
                  onClick={scrollToWaitlist}
                  className="btn-primary w-full py-4 text-sm font-semibold mt-4"
                  aria-label="Join waitlist"
                >
                  Join the Waitlist
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
