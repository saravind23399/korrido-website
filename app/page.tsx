import AppShell from './components/AppShell';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Platform from './components/Platform';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <TrustBar />
      <Platform />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </AppShell>
  );
}
