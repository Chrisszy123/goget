'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instant Offramp',
    description:
      'Convert USDT, USDC, BTC, ETH or BNB to naira at live market rates. Arrives in your bank in under 5 minutes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 15h4M16 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Dollar Card',
    description:
      'A virtual Visa/Mastercard funded directly from your crypto. Pay for anything, anywhere — Anthropic, AWS, Canva, Netflix, Meta Ads.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Live Rates. No Surprises.',
    description:
      'We show you the exact rate before you confirm. The rate you see is the rate you get. Zero hidden fees. Zero nonsense.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Built for Nigeria',
    description:
      'BVN-verified. Local banks supported. Designed by Nigerians who live this problem every day. This is for us, by us.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-[#00E5A0] uppercase tracking-widest mb-3">Features</p>
          <h2
            id="features-heading"
            className="font-clash font-bold text-[#F0F0F0]"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            Everything you need.
            <br />
            <span className="text-[#8A8A9A]">Nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: typeof FEATURES[number];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-hover-glow group relative p-7 rounded-2xl cursor-default"
      style={{
        background: '#111214',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Subtle top highlight */}
      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#00E5A0]/15"
        style={{
          background: 'rgba(0,229,160,0.08)',
          border: '1px solid rgba(0,229,160,0.15)',
          color: '#00E5A0',
        }}
      >
        {feature.icon}
      </div>

      <h3 className="font-clash font-semibold text-[#F0F0F0] text-xl mb-3">
        {feature.title}
      </h3>
      <p className="text-[#8A8A9A] text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
