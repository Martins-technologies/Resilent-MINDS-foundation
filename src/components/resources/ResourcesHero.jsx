import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ResourcesHero = () => {
  return (
    <section 
      className="py-20 md:py-28 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        // Apni pasand ki background image yahan dalein
        backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      {/* Overlay - Text ko readable banane ke liye */}
      <div className="absolute inset-0 bg-white/80"></div>

      <Container>
        {/* Content - Center aligned */}
        <div className="relative z-10 max-w-2/3  text-start">
          
          <div className="inline-block">
            <Eyebrow>Resources</Eyebrow>
          </div>
          
          <h1 className="mb-4 text-[#0f4c3a] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Knowledge. Tools. Support.
            <span className='text-burgundy'> Empowering stronger
              <br/>
               minds and communities.</span>
          </h1>
          
          <span className="mb-6 my-4 text-base md:text-lg leading-relaxed  max-w-2xl">
            Explore our library of resources designed to educate, empower, and support individuals, families, and communities on their journey toward mental wellness and resilience.
          </span>
          
          <Button variant="primary" to="#featured-resources" className='rounded-xl my-4'>
            Browse All Resources →
          </Button>
          
        </div>
      </Container>
    </section>
  );
};

export default ResourcesHero;