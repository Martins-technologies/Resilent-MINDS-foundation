import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import img from '../../assets/images/programs-bg.webp'

const ProgramsHero = () => {
  return (
    <section 
      className="py-16 md:py-20 bg-ivory overflow-hidden relative"
      style={{ 
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 
        Optional: Agar image ke upar text clear dikhe, toh isko uncomment karein.
        <div className="absolute inset-0 bg-white/60"></div> 
      */}

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-0">
          
          {/* LEFT COLUMN: Text aur Button (Ab ye image ke upar dikhega) */}
          <div className="w-full md:w-1/2 pr-8 md:pr-12 relative z-10">
            <Eyebrow>Our Programs</Eyebrow>
            <h1 className="mb-4 text-[#0f4c3a]">
              Programs that{' '}
              <span className="text-[#5c1a2e]">
                build resilience and empower change.
              </span>
            </h1>
            <p className="mb-6 text-gray-700">
              We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
            </p>
            <Button 
              variant="primary" 
              to="#programs-list"
              className="bg-[#5c1a2e] hover:bg-[#441424] text-white border-none"
            >
              Explore Our Programs →
            </Button>
          </div>

          {/* RIGHT COLUMN: Ab ye khaali hai kyunki background poore section par lag gaya */}
          <div className="w-full md:w-1/2 min-h-[400px] relative z-10">
            {/* Yahan kuch nahi, sirf layout maintain karne ke liye */}
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default ProgramsHero;