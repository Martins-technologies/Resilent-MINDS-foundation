import ProgramsHero from '../components/programs/ProgramsHero';
import FocusAreas from '../components/programs/FocusAreas';
import ProgramsList from '../components/programs/ProgramsList';
import ProgramsCTA from '../components/programs/ProgramCTA';
import Container from '../components/ui/Container'
const ProgramsPage = () => {
  return (
    <>
      <ProgramsHero />
      <section className="section pt-0">
        <Container>
          <h2 className="mb-4">
            Every program we offer is rooted in compassion, education, connection, and empowerment.
          </h2>
          <p className="mb-4">
            We focus on prevention, education, connection, and empowerment by creating programs that strengthen emotional health and resilience for individuals and communities.
          </p>
          <p className="font-bold text-burgundy border-l-3 border-gold pl-3.5">
            Our goal is simple: to create pathways of hope and equip people with the tools they need to navigate life&rsquo;s challenges.
          </p>
        </Container>
      </section>
      <FocusAreas />
      <ProgramsList />
      <ProgramsCTA />
    </>
  );
};

export default ProgramsPage;