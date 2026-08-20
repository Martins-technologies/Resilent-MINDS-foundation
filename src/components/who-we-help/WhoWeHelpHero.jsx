import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const WhoWeHelpHero = () => {
  return (
    <section 
      className="py-20 md:py-28 lg:py-30 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="absolute inset-0 bg-[#FEF9F2] opacity-70 z-0"></div>

      <Container>
        <div className="relative z-20 w-full md:w-3/5 lg:w-1/2 text-start md:text-left">
          
          <div className="inline-block">
            <Eyebrow>Who We Help</Eyebrow>
          </div>
          
          <h1 className="mb-4 text-[#0f4c3a] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Support for every journey.{' '}
            <span className="text-[#5c1a2e]">
              Hope for every future.
            </span>
          </h1>
          
          <div className="mb-0  text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Mental health challenges can affect anyone&mdash;at any age, in any season of life. We are here for individuals, families, and communities, walking alongside them with compassion, resources, and hope.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeHelpHero;