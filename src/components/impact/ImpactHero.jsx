import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import bgImg from '../../assets/images/impact-bg.webp'

const ImpactHero = () => {
  return (
    <section 
      className="py-16 md:py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container>
        <div className="relative z-10 w-2/4">
          <Eyebrow>Impact</Eyebrow>
          <h1 className="mb-4 text-forest">Stories of Strength. Communities of Hope.</h1>
          <p className="mb-6 text-gray-700">
            We believe in real-world transformation. Through education, outreach, compassion, and resilience-building initiatives, we help individuals build stronger minds and communities where hope can thrive.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button variant="primary" to="/contact">
              Share Your Story
            </Button>
            <Button variant="outline" to="/programs">
              See How We Create Change
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactHero;