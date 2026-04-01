'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EmailForm from '@/components/ui/EmailForm';
import CounterAnimation from '@/components/ui/CounterAnimation';

interface WaitlistCTAProps {
  waitlistCount: number;
}

export default function WaitlistCTA({ waitlistCount }: WaitlistCTAProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="waitlist"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="waitlist-cta-heading"
    >
      {/* Background orb */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,229,160,0.1) 0%, transparent 65%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#00E5A0] tracking-wide">Launching Soon</span>
          </div>

          <h2
            id="waitlist-cta-heading"
            className="font-clash font-bold text-[#F0F0F0] mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Be the first to <span className="text-[#00E5A0]">GoGet.</span>
          </h2>

          <p className="text-[#8A8A9A] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            We&apos;re launching soon. Join the waitlist and get early access, better rates, and a free dollar card on signup.
          </p>

          {/* Counter */}
          {waitlistCount > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
              aria-label={`${waitlistCount.toLocaleString()} people already waiting`}
            >
              <div className="flex -space-x-1" aria-hidden="true">
                {['#00E5A0', '#7B61FF', '#FF6B35', '#F7931A'].map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-[#08090A]"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8A8A9A]">
                Joining{' '}
                <CounterAnimation
                  target={waitlistCount}
                  className="text-[#F0F0F0] font-semibold"
                />{' '}
                others
              </span>
            </motion.div>
          )}

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EmailForm variant="cta" className="max-w-md mx-auto" />
          </motion.div>

          <p className="text-xs text-[#8A8A9A] mt-4">
            No spam. Just launch updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
