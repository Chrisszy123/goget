import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'GoGet Terms of Service — the rules for using our platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08090A] text-[#F0F0F0]">
      {/* Nav */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-clash text-xl font-bold">
            <span className="text-[#F0F0F0]">Go</span>
            <span className="text-[#00E5A0]">Get</span>
          </Link>
          <Link href="/" className="text-sm text-[#8A8A9A] hover:text-[#F0F0F0] transition-colors">
            ← Back home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-clash font-bold text-3xl mb-2">Terms of Service</h1>
        <p className="text-[#8A8A9A] text-sm mb-12">Last updated: January 1, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">1. Acceptance of Terms</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              By accessing or using GoGet&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms may be updated periodically; continued use constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">2. Eligibility</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              You must be at least 18 years of age and a resident of Nigeria to use GoGet. By using our services, you represent that you meet these eligibility requirements and that all information you provide is accurate and truthful.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">3. Services</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              GoGet provides cryptocurrency-to-naira conversion services and virtual dollar card services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. Rates are determined by live market conditions and may change at any time.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">4. Prohibited Activities</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              You agree not to use GoGet for any unlawful purpose, including money laundering, fraud, or financing of illegal activities. You also agree not to attempt to circumvent any security measures, or use the platform in any way that could damage or impair its operation.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">5. Limitation of Liability</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              GoGet shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees you have paid to us in the preceding three months.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">6. Governing Law</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">7. Contact</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@goget.app" className="text-[#00E5A0] hover:underline">
                legal@goget.app
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-6 text-center">
        <p className="text-xs text-[#8A8A9A]">© 2026 GoGet. Built in Nigeria.</p>
      </footer>
    </div>
  );
}
