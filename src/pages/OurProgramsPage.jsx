import ProgramsHero from '../components/programs/ProgramsHero';
import { FaHandHoldingHeart } from 'react-icons/fa';
import FocusAreas from '../components/programs/FocusAreas';
import ProgramsList from '../components/programs/ProgramsList';
import StrongerMindsBanner from '../components/programs/StrongerMindsBanner';
import ProgramsCTA from '../components/programs/ProgramCTA';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';

const OurProgramsPage = () => {
  return (
    <>
      <ProgramsHero />
      <section className="section pt-0">
        <Container>
          <Grid cols={2} className="items-center gap-5 md:gap-8">
            <div>
              <h3 className="mb-2 text-[#0f4c3a]">
                Every program we offer is rooted in compassion, education, connection, and empowerment.
              </h3>
              <p className="mb-4 text-gray-700">
                We focus on prevention, education, connection, and empowerment by creating programs that strengthen emotional health and resilience for individuals and communities.
              </p>
              <div className="icon-desc flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#5c1a2e] flex items-center justify-center text-[#5c1a2e] hover:bg-[#5c1a2e] hover:text-white transition-colors duration-300">
                  <FaHandHoldingHeart className="text-lg" />
                </div>
                <p className="font-bold text-[#5c1a2e]">
                  Our goal is simple: to create pathways of hope and equip people with the tools they need to navigate life&rsquo;s challenges.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/programresilientmind.jpeg"
                alt="Our Programs"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Grid>
        </Container>
      </section>
      <FocusAreas />
      <ProgramsList />
      <StrongerMindsBanner />
      <ProgramsCTA />
    </>
  );
};

export default OurProgramsPage;
