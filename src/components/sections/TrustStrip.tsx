'use client';

const TICKER_ITEMS = [
  '₦50,000,000+ in payouts processed',
  'Under 5 minute average payout',
  'USDT · USDC · BTC · ETH · BNB',
  'Built in Nigeria',
  'Real rates. No hidden fees.',
  '₦50,000,000+ in payouts processed',
  'Under 5 minute average payout',
  'USDT · USDC · BTC · ETH · BNB',
  'Built in Nigeria',
  'Real rates. No hidden fees.',
];

export default function TrustStrip() {
  return (
    <section
      className="relative py-4 border-y border-white/[0.06] overflow-hidden"
      aria-label="Trust indicators"
    >
      <div
        className="flex gap-12 animate-marquee whitespace-nowrap"
        aria-hidden="true"
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm text-[#8A8A9A] font-medium flex-shrink-0"
          >
            <span
              className="w-1 h-1 rounded-full bg-[#00E5A0]/40 flex-shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #08090A, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #08090A, transparent)' }}
        aria-hidden="true"
      />

      {/* Screen-reader version */}
      <p className="sr-only">
        Trust indicators: ₦50,000,000+ in payouts processed. Under 5 minute average payout. Supports USDT, USDC, BTC, ETH, BNB. Built in Nigeria. Real rates, no hidden fees.
      </p>
    </section>
  );
}
