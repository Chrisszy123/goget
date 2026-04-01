'use client';

import { motion } from 'framer-motion';
import EmailForm from '@/components/ui/EmailForm';
import PhoneMockup from '@/components/ui/PhoneMockup';

const HEADLINE_WORDS = ['Your', 'Crypto.', 'Your', 'Naira.', 'Your', 'Dollars.'];

const ASSET_BADGES = [
  { name: 'USDT', color: '#26A17B', bg: 'rgba(38,161,123,0.12)' },
  { name: 'USDC', color: '#2775CA', bg: 'rgba(39,117,202,0.12)' },
  { name: 'BTC', color: '#F7931A', bg: 'rgba(247,147,26,0.12)' },
  { name: 'ETH', color: '#627EEA', bg: 'rgba(98,126,234,0.12)' },
  { name: 'BNB', color: '#F3BA2F', bg: 'rgba(243,186,47,0.12)' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Green orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Purple orb */}
        <div
          className="absolute top-1/3 right-0"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left — text + form */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#00E5A0] tracking-wide">Early Access — Join the waitlist</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-clash font-bold mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block mr-[0.25em] ${
                    word.includes('Naira') || word.includes('Dollars')
                      ? 'text-[#00E5A0]'
                      : 'text-[#F0F0F0]'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-[#8A8A9A] text-lg leading-relaxed mb-8 max-w-[440px]"
            >
              Convert crypto to naira in minutes. Spend globally with your GoGet dollar card. Built for Nigerians.
            </motion.p>

            {/* Email form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-full max-w-[480px]"
            >
              <EmailForm variant="hero" />
              <p className="text-xs text-[#8A8A9A] mt-3 text-center lg:text-left">
                No spam. Just launch updates.
              </p>
            </motion.div>

            {/* Asset badges */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start"
              aria-label="Supported cryptocurrencies"
            >
              <span className="text-xs text-[#8A8A9A] flex items-center mr-1">Supports:</span>
              {ASSET_BADGES.map((asset) => (
                <div
                  key={asset.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: asset.bg,
                    border: `1px solid ${asset.color}30`,
                    color: asset.color,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: asset.color }}
                    aria-hidden="true"
                  />
                  {asset.name}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Glow orbs behind phone */}
            <div
              className="absolute"
              style={{
                width: '360px',
                height: '360px',
                background: 'radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%)',
                filter: 'blur(20px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div
              className="absolute"
              style={{
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, rgba(123,97,255,0.1) 0%, transparent 70%)',
                filter: 'blur(20px)',
                top: '30%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
