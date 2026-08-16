import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import aboutBgImage from '../../assets/images/about-bg.webp';

const AboutHero = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20 relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${aboutBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className="relative z-10">
        <div className="max-w-2xl text-left">
          <h1 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <Eyebrow className="text-gold text-xs md:text-sm">Why We Exist</Eyebrow>
          <p className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md leading-relaxed">
            Life challenges can affect anyone. Stress, loss, trauma, isolation, and uncertainty can impact mental wellbeing. We believe everyone deserves access to support, encouragement, and tools that help them move forward.
          </p>
          <p className="mb-5 md:mb-6 text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md leading-relaxed">
            Resilient Minds Foundation was created from a belief that mental wellness is essential to human wellbeing. Too many individuals silently carry emotional burdens without access to meaningful support.
          </p>
          <Button variant="gold" to="/programs" className="text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3">
            Learn More About Our Journey →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;