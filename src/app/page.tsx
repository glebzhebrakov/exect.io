import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { TechnologyStack } from "@/components/TechnologyStack";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Industries />
        <TechnologyStack />
        <WhyUs />
        <Process />
        <CaseStudies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
