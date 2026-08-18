import ResourcesHero from '../components/resources/ResourcesHero';
import ResourceTypes from '../components/resources/ResourceTypes';
import FeaturedResources from '../components/resources/FeaturedResources';
import ResourcesCTA from '../components/resources/ResourcesCTA';

const ResourcesPage = () => {
  return (
    <>
      <ResourcesHero />
      <ResourceTypes />
      <FeaturedResources />
      <ResourcesCTA />
    </>
  );
};

export default ResourcesPage;
