import ProgramsHero from '../components/programs/ProgramsHero';
import FocusAreas from '../components/programs/FocusAreas';
import ProgramsList from '../components/programs/ProgramsList';
import ProgramsCTA from '../components/programs/ProgramCTA';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import img from '../assets/images/program-section.webp';

const ProgramsPage = () => {
  return (
    <>
      <ProgramsHero />
      <section className="section pt-0">
        <Container>
          <Grid cols={2} className="items-center gap-8 md:gap-12">
            <div>
              <h2 className="mb-4 text-[#0f4c3a]">
                Every program we offer is rooted in compassion, education, connection, and empowerment.
              </h2>
              <p className="mb-4 text-gray-700">
                We focus on prevention, education, connection, and empowerment by creating programs that strengthen emotional health and resilience for individuals and communities.
              </p>
              <p className="font-bold text-[#5c1a2e] border-l-4 border-[#C79949] pl-4">
                Our goal is simple: to create pathways of hope and equip people with the tools they need to navigate life&rsquo;s challenges.
              </p>
            </div>
            <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src={img} 
                alt="Programs" 
                className="w-full h-full object-cover"
              />
            </div>
          </Grid>
        </Container>
      </section>
      <FocusAreas />
      <ProgramsList />
      <ProgramsCTA />
    </>
  );
};

export default ProgramsPage;