import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GoGet Privacy Policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
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
        <h1 className="font-clash font-bold text-3xl mb-2">Privacy Policy</h1>
        <p className="text-[#8A8A9A] text-sm mb-12">Last updated: January 1, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">1. Information We Collect</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              We collect information you provide directly to us, including your email address when you join our waitlist. When you create an account, we may collect your name, BVN (for identity verification), bank account details, and transaction history. We also collect information automatically, including log data and usage information.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">2. How We Use Your Information</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; and comply with legal obligations. We will never sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">3. Data Security</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">4. Data Retention</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">5. Your Rights</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@goget.app.
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-3">6. Contact</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@goget.app" className="text-[#00E5A0] hover:underline">
                privacy@goget.app
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
