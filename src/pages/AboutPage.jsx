import CommittedSection from '../components/CommittedSection/CommittedSection';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import MissionVision from '../components/about/MissionVission';
import CoreValuesList from '../components/about/CoreValueList';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValuesList />
      <CommittedSection />
    </>
  );
};

export default AboutPage;