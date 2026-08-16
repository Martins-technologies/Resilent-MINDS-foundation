import Hero from '../components/home/Hero';
import WhyWeExist from '../components/home/WhyWeExist';
import CoreValues from '../components/home/CoreValues';
import ProgramsSection from '../components/home/ProgramSection';
import ImpactSection from '../components/home/ImpacSection';
import StoriesSection from '../components/home/StoriesSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <CoreValues />
      <ProgramsSection />
      <ImpactSection />
      <StoriesSection />
      <CTASection />
    </>
  );
};

export default HomePage;