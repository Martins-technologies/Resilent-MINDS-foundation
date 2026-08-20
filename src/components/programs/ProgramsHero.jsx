import Button from '../ui/Button';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const ProgramsHero = () => {
  return (
    <section
      className="py-20 md:py-28 lg:py-30 overflow-hidden relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Ivory Overlay for light theme */}
      <div className="absolute inset-0 bg-[#FFFFF0]/85"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A0E1B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-0">

          {/* LEFT COLUMN: Text aur Button */}
          <div className="w-full md:w-1/2 pr-8 md:pr-12">
            <Eyebrow className="text-gold">Our Programs</Eyebrow>
            <h1 className="mb-2 text-ink drop-shadow-sm">
              Programs that{' '}<br />
              <span className="text-burgundy">
                build resilience and <br />
              </span>
              empower change.
            </h1>
            <div className="mb-6 text-gray-700 drop-shadow-sm leading-relaxed">
              We create educational, emotional, and community-based programs that help individuals strengthen their mental wellness, build life skills, and thrive.
            </div>
            <Button
              variant="primary"
              to="#programs-list"
              className="bg-burgundy hover:bg-burgundy/80 text-white border-none rounded-xl px-6 md:px-8 py-2.5 md:py-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Our Programs →
            </Button>
          </div>



        </div>
      </Container>


    </section>
  );
};

export default ProgramsHero;