import './App.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { DefinitionSection } from '../sections/DefinitionSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { AudienceSection } from '../sections/AudienceSection';
import { TrustSection } from '../sections/TrustSection';
import { AppPreviewSection } from '../sections/AppPreviewSection';
import { PilotSection } from '../sections/PilotSection';
import { FaqSection } from '../sections/FaqSection';

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <DefinitionSection />
        <HowItWorksSection />
        <AudienceSection />
        <TrustSection />
        <AppPreviewSection />
        <PilotSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
