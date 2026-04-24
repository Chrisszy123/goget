import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GoGet Privacy Policy — how we collect, use, and protect your personal data.',
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
        <p className="text-[#8A8A9A] text-sm mb-4">Last updated: April 24, 2026</p>
        <p className="text-[#8A8A9A] leading-relaxed mb-12">
          GoGet (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal information.
          This Privacy Policy explains what data we collect, why we collect it, how we use and share it,
          and the rights you have over it. It applies to all users of the GoGet platform, including our
          website, mobile app, and WhatsApp bot service. By using GoGet, you agree to the practices
          described in this policy.
        </p>

        <div className="prose prose-invert max-w-none space-y-10">

          {/* 1 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">1. Who We Are</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              GoGet is a Nigerian financial technology platform that enables users to convert cryptocurrency
              to Nigerian naira, manage crypto wallets, and interact with financial services via WhatsApp.
              GoGet operates as a technology service provider and partners with licensed financial institutions
              for payment processing and identity verification.
            </p>
            <p className="text-[#8A8A9A] leading-relaxed mt-3">
              For questions about this policy, contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@goget.app" className="text-[#00E5A0] hover:underline">
                privacy@goget.app
              </a>
              .
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">2. Information We Collect</h2>

            <h3 className="font-clash font-medium text-base text-[#F0F0F0] mb-2">2.1 Information You Provide</h3>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><span className="text-[#C0C0D0]">Account registration:</span> full name, email address, phone number, and password.</li>
              <li><span className="text-[#C0C0D0]">Identity verification (KYC):</span> Bank Verification Number (BVN), date of birth, government-issued ID, and selfie/liveness check. This is required to comply with Nigerian financial regulations.</li>
              <li><span className="text-[#C0C0D0]">Bank account details:</span> bank name, account number, and account name — used to process naira payouts.</li>
              <li><span className="text-[#C0C0D0]">Transaction PIN:</span> stored in hashed form; we cannot read or recover it.</li>
              <li><span className="text-[#C0C0D0]">WhatsApp interactions:</span> messages you send to the GoGet WhatsApp bot, used to process your requests.</li>
              <li><span className="text-[#C0C0D0]">Support communications:</span> emails, messages, or feedback you send to us.</li>
              <li><span className="text-[#C0C0D0]">Waitlist registration:</span> email address submitted on our website.</li>
            </ul>

            <h3 className="font-clash font-medium text-base text-[#F0F0F0] mb-2">2.2 Information Collected Automatically</h3>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><span className="text-[#C0C0D0]">Device and usage data:</span> IP address, browser type, operating system, pages visited, time spent, and referring URL.</li>
              <li><span className="text-[#C0C0D0]">Transaction data:</span> cryptocurrency amounts, asset types, exchange rates, timestamps, transaction status, and Paystack transfer references.</li>
              <li><span className="text-[#C0C0D0]">Wallet activity:</span> blockchain wallet addresses generated for your account and incoming transaction records.</li>
              <li><span className="text-[#C0C0D0]">Session data:</span> authentication tokens and session state stored securely.</li>
              <li><span className="text-[#C0C0D0]">Log data:</span> server logs recording your interactions with our APIs and services.</li>
            </ul>

            <h3 className="font-clash font-medium text-base text-[#F0F0F0] mb-2">2.3 Information from Third Parties</h3>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside">
              <li><span className="text-[#C0C0D0]">Identity providers:</span> results of BVN verification and ID checks from our KYC partner (Smile Identity).</li>
              <li><span className="text-[#C0C0D0]">Blockchain data:</span> publicly available on-chain transaction records associated with your wallets.</li>
              <li><span className="text-[#C0C0D0]">Payment processors:</span> transfer status and bank account confirmation from Paystack.</li>
              <li><span className="text-[#C0C0D0]">Meta/WhatsApp:</span> your WhatsApp phone number and message content when you interact with our bot. See Section 6 for details.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">We use your personal data to:</p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside">
              <li>Create and manage your GoGet account.</li>
              <li>Verify your identity as required by Nigerian financial regulations (CBN AML/KYC guidelines and the NDPR).</li>
              <li>Process cryptocurrency-to-naira conversion transactions and naira payouts to your bank account.</li>
              <li>Generate and manage your cryptocurrency wallet addresses.</li>
              <li>Respond to your WhatsApp messages and execute commands through the GoGet bot.</li>
              <li>Send you transaction confirmations, receipts, and service notifications via WhatsApp, SMS, or email.</li>
              <li>Detect, investigate, and prevent fraud, money laundering, and other illegal activities.</li>
              <li>Comply with applicable laws, regulations, and legal processes.</li>
              <li>Improve and develop our services through usage analysis.</li>
              <li>Respond to your support requests and enquiries.</li>
              <li>Send marketing communications where you have provided consent (you may opt out at any time).</li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed mt-4">
              <span className="text-[#C0C0D0] font-medium">Legal basis:</span> We process your data on the basis of contract performance (to deliver the service you requested), legal obligation (KYC/AML compliance), legitimate interests (fraud prevention, service improvement), and consent (marketing).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">4. How We Share Your Information</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              We do not sell your personal data. We share it only in the following circumstances:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-[#C0C0D0] font-medium mb-1">Service Providers</p>
                <p className="text-[#8A8A9A] leading-relaxed">
                  We share data with trusted third-party providers that help us operate GoGet:
                </p>
                <ul className="text-[#8A8A9A] leading-relaxed space-y-1 list-disc list-inside mt-2">
                  <li><span className="text-[#C0C0D0]">Paystack</span> — bank account verification and naira payout processing.</li>
                  <li><span className="text-[#C0C0D0]">Smile Identity</span> — BVN verification and identity document checks.</li>
                  <li><span className="text-[#C0C0D0]">Alchemy</span> — blockchain data monitoring for wallet deposits.</li>
                  <li><span className="text-[#C0C0D0]">Meta (WhatsApp Business API)</span> — delivering messages through the WhatsApp platform.</li>
                  <li><span className="text-[#C0C0D0]">Twilio</span> — SMS and WhatsApp message delivery for certain partners.</li>
                  <li><span className="text-[#C0C0D0]">Supabase / PostgreSQL</span> — secure database hosting.</li>
                  <li><span className="text-[#C0C0D0]">Upstash Redis</span> — session and cache storage.</li>
                  <li><span className="text-[#C0C0D0]">Termii</span> — OTP SMS delivery for account verification.</li>
                </ul>
                <p className="text-[#8A8A9A] leading-relaxed mt-2">
                  All service providers are bound by data processing agreements and may only use your data for the specific purpose we engage them for.
                </p>
              </div>

              <div>
                <p className="text-[#C0C0D0] font-medium mb-1">Partner Businesses</p>
                <p className="text-[#8A8A9A] leading-relaxed">
                  If you access GoGet services through a partner&apos;s WhatsApp bot or platform, we share
                  your transaction data with that partner as necessary to provide the service. Partners are
                  contractually prohibited from using your data for any purpose beyond the service they offer you.
                </p>
              </div>

              <div>
                <p className="text-[#C0C0D0] font-medium mb-1">Legal and Regulatory Requirements</p>
                <p className="text-[#8A8A9A] leading-relaxed">
                  We may disclose your information to government authorities, regulators, or law enforcement
                  where required by law, court order, or to protect the rights, property, or safety of GoGet,
                  our users, or the public.
                </p>
              </div>

              <div>
                <p className="text-[#C0C0D0] font-medium mb-1">Business Transfers</p>
                <p className="text-[#8A8A9A] leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your data may be transferred to
                  the new entity. You will be notified of any such change and your rights will be maintained.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">5. Data Security</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside">
              <li>All data transmitted between your device and our servers is encrypted using TLS.</li>
              <li>Sensitive data (including wallet private keys and BSP credentials) is encrypted at rest using AES-256.</li>
              <li>Transaction PINs are hashed using bcrypt and are never stored or transmitted in plain text.</li>
              <li>WhatsApp Flow PIN confirmations are end-to-end encrypted using RSA-OAEP + AES-128-GCM before reaching our servers.</li>
              <li>Access to production systems is restricted to authorised personnel only.</li>
              <li>We conduct regular security reviews and maintain audit logs of all sensitive operations.</li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed mt-4">
              While we take all reasonable precautions, no system is completely secure. You are responsible
              for keeping your account credentials, PIN, and phone access safe. If you suspect unauthorised
              access to your account, contact us immediately at{' '}
              <a href="mailto:security@goget.app" className="text-[#00E5A0] hover:underline">
                security@goget.app
              </a>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">6. WhatsApp and Messaging</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              GoGet operates a WhatsApp bot service to help you manage transactions via WhatsApp. When you
              interact with our bot:
            </p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside">
              <li>Your WhatsApp phone number is used to identify your account and route your messages to the correct service.</li>
              <li>Message content is processed to understand your intent (e.g. &quot;cash out 100&quot;) and execute the requested action.</li>
              <li>We do not store the full text of your WhatsApp conversations beyond what is needed to complete your transaction or session.</li>
              <li>Transaction confirmation (PIN entry) via WhatsApp Flows uses end-to-end encryption provided by Meta. We only receive the decrypted PIN after verification on our server; it is never stored.</li>
              <li>We send you proactive notifications (transaction receipts, alerts) via WhatsApp. You may request to stop these by contacting support.</li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed mt-4">
              By using the GoGet WhatsApp bot, you acknowledge that messages are transmitted via Meta&apos;s
              WhatsApp Business Platform, which has its own{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E5A0] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">7. Cookies and Tracking</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><span className="text-[#C0C0D0]">Essential cookies:</span> maintain your logged-in session and security state. These cannot be disabled.</li>
              <li><span className="text-[#C0C0D0]">Analytics cookies:</span> understand how visitors use our site so we can improve it. Data is anonymised.</li>
              <li><span className="text-[#C0C0D0]">Preference cookies:</span> remember your settings and preferences.</li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed">
              You can control non-essential cookies through your browser settings. Disabling cookies may
              affect the functionality of some parts of our website.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">8. Data Retention</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              We retain your personal data for as long as necessary to fulfil the purposes in this policy
              and to comply with our legal obligations:
            </p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-2 list-disc list-inside">
              <li><span className="text-[#C0C0D0]">Account data:</span> retained for the lifetime of your account plus 7 years after closure (required by Nigerian financial regulations for AML compliance).</li>
              <li><span className="text-[#C0C0D0]">KYC/identity data:</span> retained for 7 years after your last transaction, as required by law.</li>
              <li><span className="text-[#C0C0D0]">Transaction records:</span> retained for 7 years for regulatory and audit purposes.</li>
              <li><span className="text-[#C0C0D0]">Session and cache data:</span> deleted automatically within 24 hours of your session ending.</li>
              <li><span className="text-[#C0C0D0]">Marketing preferences:</span> retained until you withdraw consent.</li>
              <li><span className="text-[#C0C0D0]">Support communications:</span> retained for 2 years.</li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed mt-4">
              When data is no longer required, we securely delete or anonymise it.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">9. Your Rights</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-3">
              Under the Nigeria Data Protection Regulation (NDPR) and applicable laws, you have the following rights:
            </p>
            <ul className="text-[#8A8A9A] leading-relaxed space-y-3 list-disc list-inside">
              <li>
                <span className="text-[#C0C0D0]">Right of access:</span> request a copy of the personal data we hold about you.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to rectification:</span> correct inaccurate or incomplete data.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to erasure:</span> request deletion of your data where we no longer have a legal basis to hold it. Note that we cannot delete data required to meet regulatory obligations.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to restriction:</span> ask us to limit how we use your data in certain circumstances.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to data portability:</span> receive your data in a structured, machine-readable format.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to object:</span> object to our use of your data for marketing at any time.
              </li>
              <li>
                <span className="text-[#C0C0D0]">Right to withdraw consent:</span> where we rely on consent, withdraw it at any time without affecting the lawfulness of prior processing.
              </li>
            </ul>
            <p className="text-[#8A8A9A] leading-relaxed mt-4">
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@goget.app" className="text-[#00E5A0] hover:underline">
                privacy@goget.app
              </a>{' '}
              with your full name, registered phone number, and a description of your request. We will
              respond within 30 days. We may need to verify your identity before acting on your request.
            </p>
            <p className="text-[#8A8A9A] leading-relaxed mt-3">
              If you are unsatisfied with our response, you may lodge a complaint with the Nigeria Data
              Protection Commission (NDPC) at{' '}
              <a
                href="https://ndpb.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E5A0] hover:underline"
              >
                ndpb.gov.ng
              </a>
              .
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              GoGet is not directed at children under the age of 18. We do not knowingly collect personal
              data from anyone under 18. If you believe a minor has registered with us, please contact us
              at{' '}
              <a href="mailto:privacy@goget.app" className="text-[#00E5A0] hover:underline">
                privacy@goget.app
              </a>{' '}
              and we will promptly delete the account and associated data.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">11. International Data Transfers</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              Some of our service providers (including Alchemy, Twilio, and Meta) operate outside Nigeria.
              Where data is transferred internationally, we ensure appropriate safeguards are in place —
              including standard contractual clauses and data processing agreements — to protect your data
              in accordance with the NDPR and applicable law.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">12. Changes to This Policy</h2>
            <p className="text-[#8A8A9A] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, or legal requirements. When we make material changes, we will notify you via
              WhatsApp, email, or a prominent notice on our website at least 14 days before the changes
              take effect. The &quot;Last updated&quot; date at the top of this page always reflects the
              current version. Your continued use of GoGet after changes take effect constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-clash font-semibold text-xl text-[#F0F0F0] mb-4">13. Contact Us</h2>
            <p className="text-[#8A8A9A] leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we
              handle your data, please reach out:
            </p>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 space-y-2">
              <p className="text-[#F0F0F0] font-medium">GoGet — Data Protection Office</p>
              <p className="text-[#8A8A9A]">
                Email:{' '}
                <a href="mailto:privacy@goget.app" className="text-[#00E5A0] hover:underline">
                  privacy@goget.app
                </a>
              </p>
              <p className="text-[#8A8A9A]">
                Security issues:{' '}
                <a href="mailto:security@goget.app" className="text-[#00E5A0] hover:underline">
                  security@goget.app
                </a>
              </p>
              <p className="text-[#8A8A9A]">Location: Lagos, Nigeria</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/[0.06] mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A8A9A]">© 2026 GoGet. Built in Nigeria.</p>
          <div className="flex items-center gap-6 text-xs text-[#8A8A9A]">
            <Link href="/terms" className="hover:text-[#F0F0F0] transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-[#00E5A0]">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
