import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import bgImage from '../../assets/images/who-we-hero.webp'; // Apna image path yahan dalein

const WhoWeHelpHero = () => {
  return (
    <section 
      className="py-16 md:py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional: Agar text parhne mein dikkat ho toh ye overlay uncomment karein */}
      {/* <div className="absolute inset-0 bg-white/60"></div> */}

      <Container>
        <div className="relative z-10 w-2/6">
          <Eyebrow>Who We Help</Eyebrow>
          
          {/* Multi-color Heading */}
          <h1 className="mb-4 text-[#0f4c3a]">
            Support for every journey.{' '}
            <span className="text-[#5c1a2e]">
              Hope for every future.
            </span>
          </h1>
          
          <p className="mb-0 text-gray-700">
            Mental health challenges can affect anyone&mdash;at any age, in any season of life. We are here for individuals, families, and communities, walking alongside them with compassion, resources, and hope.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeHelpHero;