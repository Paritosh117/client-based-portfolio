import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { Work } from '@/components/Work';
import { IndependentProjects } from '@/components/IndependentProjects';
import { UiPrototypes } from '@/components/UiPrototypes';
import { EngagementModels } from '@/components/EngagementModels';
import { Services } from '@/components/Services';
import { GlobalReach } from '@/components/GlobalReach';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Process } from '@/components/Process';
import { WhyMe } from '@/components/WhyMe';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Credibility />
      <Work />
      <IndependentProjects />
      <UiPrototypes />
      <EngagementModels />
      <Services />
      <GlobalReach />
      <About />
      <Skills />
      <Process />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
