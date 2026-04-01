import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08090A]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" aria-label="GoGet home">
              <span className="font-clash text-2xl font-bold tracking-tight">
                <span className="text-[#F0F0F0]">Go</span>
                <span className="text-[#00E5A0]">Get</span>
              </span>
            </Link>
            <p className="text-[#8A8A9A] text-sm text-center md:text-left max-w-[240px]">
              Your crypto. Your naira. Your dollars.
            </p>

            {/* App store badges */}
            <div className="flex gap-3">
              {/* App Store */}
              <div className="relative">
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] opacity-50 cursor-not-allowed select-none"
                  aria-label="App Store — Coming Soon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#F0F0F0]" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-[9px] text-[#8A8A9A] leading-none">Download on the</p>
                    <p className="text-xs font-semibold text-[#F0F0F0] leading-tight">App Store</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40">
                  <span className="text-[10px] font-semibold text-[#8A8A9A] bg-[#111214] px-2 py-0.5 rounded-full border border-white/10">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Play Store */}
              <div className="relative">
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] opacity-50 cursor-not-allowed select-none"
                  aria-label="Google Play — Coming Soon"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#F0F0F0]" aria-hidden="true">
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
                  </svg>
                  <div>
                    <p className="text-[9px] text-[#8A8A9A] leading-none">Get it on</p>
                    <p className="text-xs font-semibold text-[#F0F0F0] leading-tight">Google Play</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40">
                  <span className="text-[10px] font-semibold text-[#8A8A9A] bg-[#111214] px-2 py-0.5 rounded-full border border-white/10">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#placeholder"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8A8A9A] hover:text-[#F0F0F0] hover:border-white/20 hover:bg-white/[0.06] transition-all"
                aria-label="GoGet on X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#placeholder"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8A8A9A] hover:text-[#F0F0F0] hover:border-white/20 hover:bg-white/[0.06] transition-all"
                aria-label="GoGet on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-sm text-[#8A8A9A] hover:text-[#F0F0F0] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/terms"
                className="text-sm text-[#8A8A9A] hover:text-[#F0F0F0] transition-colors"
              >
                Terms
              </Link>
            </div>

            <p className="text-xs text-[#8A8A9A]">© 2026 GoGet. Built in Nigeria.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
