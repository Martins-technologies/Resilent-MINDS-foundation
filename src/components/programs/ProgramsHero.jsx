import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ProgramsHero = () => {
  return (
    <section 
      className="py-16 md:py-20 overflow-hidden relative"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-0">
          
          {/* LEFT COLUMN: Text aur Button */}
          <div className="w-full md:w-1/2 pr-8 md:pr-12 relative z-10">
            <Eyebrow>Our Programs</Eyebrow>
            <h1 className="mb-4 text-white drop-shadow-lg">
              Programs that{' '}
              <span className="text-[#C9A84C]">
                build resilience and empower change.
              </span>
            </h1>
            <div className="mb-6 text-white/90 drop-shadow-md">
              We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
            </div>
            <Button 
              variant="primary" 
              to="#programs-list"
              className="bg-[#C9A84C] hover:bg-[#B8973A] text-white border-none"
            >
              Explore Our Programs →
            </Button>
          </div>

          {/* RIGHT COLUMN: Empty for layout */}
          <div className="w-full md:w-1/2 min-h-[400px] relative z-10">
            {/* Yahan kuch nahi, sirf layout maintain karne ke liye */}
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default ProgramsHero;