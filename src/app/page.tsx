import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import WaitlistCTA from '@/components/sections/WaitlistCTA';

async function getWaitlistCount(): Promise<number> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/waitlist-count`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return 0;
    const data = await res.json() as { count: number };
    return data.count ?? 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const waitlistCount = await getWaitlistCount();

  return (
    <>
      <Navbar waitlistCount={waitlistCount} />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Features />
        <WaitlistCTA waitlistCount={waitlistCount} />
      </main>
      <Footer />
    </>
  );
}
