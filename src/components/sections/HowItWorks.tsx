'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Deposit Crypto',
    description:
      'Paste your GoGet wallet address into any exchange and send USDT, USDC, BTC, ETH, or BNB. Your balance updates the moment it confirms.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20M17 7l-5-5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Choose Your Destination',
    description:
      'Cash out to your Nigerian bank account at live rates, or fund your dollar card for global spending. You decide. Every time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 20H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 12h6M9 8h6M12 16v4M10 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Done in Minutes',
    description:
      'Naira arrives in your bank. Your card is ready to spend. No waiting. No calls. No stress. Just results.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 3.5l1 1.5M7.5 3.5l-1 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#00E5A0] uppercase tracking-widest mb-3">How it works</p>
          <h2
            id="how-it-works-heading"
            className="font-clash font-bold text-[#F0F0F0] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            Dead simple. By design.
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-md mx-auto">
            Three steps is all it takes to turn your crypto into spendable money.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,160,0.2), rgba(0,229,160,0.2), transparent)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: typeof STEPS[number];
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      {/* Step number + icon row */}
      <div className="flex flex-col items-center lg:items-start mb-6">
        {/* Icon circle */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative"
          style={{
            background: 'rgba(0,229,160,0.08)',
            border: '1px solid rgba(0,229,160,0.2)',
          }}
        >
          <div className="text-[#00E5A0]">{step.icon}</div>
          {/* Step number badge */}
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: '#08090A',
              border: '1.5px solid rgba(0,229,160,0.4)',
            }}
            aria-hidden="true"
          >
            <span className="font-clash text-[10px] font-bold text-[#00E5A0]">
              {index + 1}
            </span>
          </div>
        </div>

        {/* Large step number */}
        <span
          className="font-clash font-bold text-5xl leading-none"
          style={{
            WebkitTextStroke: '1px rgba(0,229,160,0.25)',
            color: 'transparent',
            letterSpacing: '-0.03em',
          }}
          aria-hidden="true"
        >
          {step.number}
        </span>
      </div>

      <h3 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">
        {step.title}
      </h3>
      <p className="text-[#8A8A9A] text-sm leading-relaxed">
        {step.description}
      </p>

      {/* Arrow connector — only between steps on desktop */}
      {index < 2 && (
        <div
          className="hidden lg:block absolute top-7 -right-6 text-[#00E5A0]/30"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
