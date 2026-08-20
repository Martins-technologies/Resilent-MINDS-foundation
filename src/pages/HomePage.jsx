import CoreValues from '../components/CoreValues/CoreValues';
import GetInvolved from '../components/GetInvolved/GetInvolved';
import Hero from '../components/Hero/Hero';
import Impact from '../components/Impact/Impact';
import Programs from '../components/Programs/Programs';
import StoriesOfStrength from '../components/StoriesOfStrength/StoriesOfStrength';
import SupportBanner from '../components/SupportBanner/SupportBanner';
import WhyWeExist from '../components/WhyWeExist/WhyWeExist';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <CoreValues />
      <Programs />
      <Impact />
      <StoriesOfStrength />
      <GetInvolved />
      <SupportBanner />
    </>
  );
};

export default HomePage;
