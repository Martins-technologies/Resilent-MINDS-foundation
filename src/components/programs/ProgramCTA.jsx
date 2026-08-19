import Button from '../ui/Button';
import Container from '../ui/Container';

const ProgramsCTA = () => {
  return (
    <>
      {/* First Section - Forest */}
      <section className="section section--forest py-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
            
            {/* Text Side */}
            <div className="max-w-2xl">
              <h3 className="mt-0 text-white mb-3 font-bold text-2xl md:text-3xl">
                Together, we build stronger minds and stronger communities.
              </h3>
              <p className="text-[#d9e6df] text-sm md:text-base leading-relaxed mb-0">
                Every program we create is designed to bring hope, build skills, and strengthen the resilience that helps individuals and communities thrive.
              </p>
            </div>

            {/* Button Side */}
            <div className="flex-shrink-0">
              <Button variant="gold" to="/get-involved" className="whitespace-nowrap">
                Join Our Movement →
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* Second Section - Burgundy */}
     
    </>
  );
};

export default ProgramsCTA;