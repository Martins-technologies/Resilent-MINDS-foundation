import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ImpactHero = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-30 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-[#FEF9F2]/80"></div>

      <Container>
        <div className="relative z-10 w-full md:w-3/5 lg:w-1/2 text-left">
          <Eyebrow>Impact</Eyebrow>
          <h1 className="mb-4 text-[#0f4c3a] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Stories of Strength. <span className='text-burgundy'>Communities of Hope.</span>
          </h1>
          <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            We believe in real-world transformation. Through education, outreach, compassion, and resilience-building initiatives, we help individuals build stronger minds and communities where hope can thrive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" to="/contact" className='rounded-xl'>Share Your Story</Button>
            
            <Button
              variant="outline"
              to="/programs"
              className="rounded-xl !border-2 !border-green-900 text-[#0f4c3a] bg-transparent hover:bg-green-900 hover:text-white transition-colors"
            >
              See How We Create Change
            </Button>          
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImpactHero;