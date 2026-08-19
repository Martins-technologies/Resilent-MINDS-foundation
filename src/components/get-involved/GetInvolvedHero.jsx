import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const GetInvolvedHero = () => {
  return (
    <section 
      className="py-16 md:py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        // Background Image: Volunteers/Community Service (Content se related)
        backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      {/* Overlay - Text ko readable banane ke liye (Contrast) */}
      <div className="absolute inset-0 bg-white/80"></div>

      <Container>
        {/* Content - Left Aligned */}
        <div className="relative z-10 w-full md:w-3/5 lg:w-1/2 text-left">
          
          <Eyebrow>Get Involved</Eyebrow>
          
          <h1 className="mb-4 text-[#0f4c3a] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Be part of the change. Together, we build resilience.
          </h1>
          
          <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Your time, skills, and generosity help us empower individuals and communities to overcome challenges, grow stronger, and create brighter futures.
          </p>
          
          <Button variant="primary" to="#ways-to-help" className="shadow-md">
            Find Your Way to Get Involved →
          </Button>
          
        </div>
      </Container>
    </section>
  );
};

export default GetInvolvedHero;