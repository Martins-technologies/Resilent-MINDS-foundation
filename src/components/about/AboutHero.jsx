import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const AboutHero = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-30 relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Ivory overlay - light and warm */}
      <div className="absolute inset-0 bg-[#FFFFF0]/60"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A0E1B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <Container className="relative z-10">
        <div className="max-w-2xl text-left">




          <h1 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink drop-shadow-sm">
            About Us
          </h1>
          <Eyebrow className="text-gold text-xs md:text-2xl mb-2 text-left">Why We Exist</Eyebrow>

          <p className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Life challenges can affect anyone. Stress, loss, trauma, isolation, and uncertainty can impact mental wellbeing. We believe everyone deserves access to support, encouragement, and tools that help them move forward.
          </p>

          <p className="mb-5 md:mb-6 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Resilient Minds Foundation was created from a belief that mental wellness is essential to human wellbeing. Too many individuals silently carry emotional burdens without access to meaningful support.
          </p>

          <Button to="/programs" className="text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 bg-burgundy hover:bg-burgundy/80 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-white">
            Learn More About Our Journey →
          </Button>
        </div>
      </Container>


    </section>
  );
};

export default AboutHero;