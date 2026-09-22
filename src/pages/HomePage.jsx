import CoreValues from '../components/CoreValues/CoreValues';
import GetInvolved from '../components/GetInvolved/GetInvolved';
import Hero from '../components/Hero/Hero';
import Impact from '../components/impact/Impact';
import CommunitySupportPreview from '../components/community-support/CommunitySupportPreview';
import Programs from '../components/programs/Programs';
import StoriesOfStrength from '../components/StoriesOfStrength/StoriesOfStrength';
import WhyWeExist from '../components/WhyWeExist/WhyWeExist';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyWeExist />
      <CoreValues />
      <Programs />
      <CommunitySupportPreview />
      <Impact />
      <StoriesOfStrength />
      <GetInvolved />
    </>
  );
};

export default HomePage;