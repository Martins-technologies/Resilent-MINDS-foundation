import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const GetInvolvedHero = () => {
  return (
    <section 
      className="py-20 md:py-28 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        // Background Image: Volunteers/Community Service (Content se related)
        backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      {/* Overlay - Text ko readable banane ke liye (Contrast) */}
      <div className="absolute inset-0 bg-white/60"></div>

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
          
          <a
            href="#ways-to-help"
            className="inline-flex items-center justify-center gap-2 bg-[#6E2839] hover:bg-[#5a1f2e] text-white rounded-full px-6 py-3 font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            Find Your Way to Get Involved →
          </a>
          
        </div>
      </Container>
    </section>
  );
};

export default GetInvolvedHero;