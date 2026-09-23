import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Credibility } from '@/components/Credibility';
import { WhatIBuild } from '@/components/WhatIBuild';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { WhyMe } from '@/components/WhyMe';
import { Process } from '@/components/Process';
import { WhoIWorkWith } from '@/components/WhoIWorkWith';
import { AgencyPartnership } from '@/components/AgencyPartnership';
import { GlobalReach } from '@/components/GlobalReach';
import { EngagementModels } from '@/components/EngagementModels';
import { About } from '@/components/About';
import { FinalCta } from '@/components/FinalCta';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Credibility />
      <WhatIBuild />
      <Services />
      <Work />
      <Skills />
      <WhyMe />
      <Process />
      <WhoIWorkWith />
      <AgencyPartnership />
      <GlobalReach />
      <EngagementModels />
      <About />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}
