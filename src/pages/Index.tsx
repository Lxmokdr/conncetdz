
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatisticsSection from "@/components/StatisticsSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <AboutSection />
      <HowItWorksSection />
      <StatisticsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CallToAction />
    </div>
  );
};

export default Index;
